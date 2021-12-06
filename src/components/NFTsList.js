import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
// import sqr from "../assets/images/space1.png";
// import Nftcontainer from "./NFTContainer";
// import amaz from "../assets/images/amazebox.jpg";
// import pretty5 from "../assets/images/pretty image (5).jpg";
// import battle4 from "../assets/images/battle4.jpg";
// import pretty1 from "../assets/images/pretty_image.jpg";
// import Web3Modal from "web3modal";
import "../assets/css/nft.css";
import Market from "../abis/Marketplace.json";
import NFT from "../abis/NFT.json";
import { Link } from "react-router-dom";
// import spinloader from './spinloader';
// import Spinner from 'react-bootstrap/Spinner'
import { useHistory } from "react-router";

import { nftmarketaddress, nftaddress } from "../config";
import Loader from "react-loader-spinner";

const Nftslist = (props) => {
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  const history = useHistory();
  async function loadNFTs() {
    // const web3Modal = new Web3Modal({
    //   network: "mainnet",
    //   cacheProvider: true,
    // })
    // const connection = await web3Modal.connect(  )
    // const provider = new ethers.providers.Web3Provider(connection)
    // const signer = provider.getSigner()
    // const provider = new ethers.providers.JsonRpcProvider(`https://eth-ropsten.alchemyapi.io/v2/77Wy8P0Ua9eWbtADqxk67t_anh5pHPAv%60`)
    // const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/klOlNm_rQCabx94IjAdS_ZBHzNCkRXFX`)
    const provider = new ethers.providers.JsonRpcProvider(
      `https://eth-ropsten.alchemyapi.io/v2/77Wy8P0Ua9eWbtADqxk67t_anh5pHPAv`
    );

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);

    const data = await marketContract.fetchMarketItems();
    console.log(data);
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          sold: i.sold,
          image: meta.data.image,
          desc:meta.data.description
        };
        return item;
      })
    );
    console.log("Token listed for sale.");
    // console.log(items);
    /* create a filtered array of items that have been sold */
    const soldItems = items.filter((i) => i.sold);
    setSold(soldItems);
    setNfts(items);
    setLoadingState("loaded");
  }

  // if(my component) else if else 
  
  if(loadingState!="loaded"){

    return  <div style={{height:"200px",alignContent:"center",marginTop:"60px"}}>

<Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
      
      </div> ;
  }

  else if (loadingState === "loaded" && !nfts.length)
    return <h1 className="py-10 px-20 text-3xl">No assets created</h1>;
  return (
    <div>
      <div className="p-4">
        {/* <h2 className="text-2xl py-2">Items Created</h2> */}
        {/* {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} className="rounded" alt="" style={{width: 500, height: 70}} />
                <div className="p-4 bg-black">
                  <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                </div>
              </div>
            ))
          } */}
        <div className=" my-4 ml-4 ">
          <div className="m-card-content" style={{justifyContent:"center"}}>
            {nfts.map((nft, i) => (
              // <div
              //   onClick={(e) => {
              //     descpage(nft);
              //   }}
              // >
              <Link
                to={{
                  pathname: "/descpage",
                  state: {
                    image: nft.image,
                    name: nft.owner,
                    price: nft.price,
                    sellername: nft.seller,
                    desc:nft.desc
                  },
                }}
              >
                <div key={i} className="row nft-card-container m-2">
                  <div className="nft-img-container">
                    <img className="nft-img" src={nft.image} alt="logo"></img>



                  
                    <p
                      style={{
                        fontWeight: "bold",
                        margin: "10px",
                        color: "white",
                        textAlign:"start",
                        display:"flex",
                        justifyContent:"space-between"
                      }}
                      
                    >
                       <div>{nft.price} Eth</div>

                       <div><span 
                      //  style={{padding:"20px",marginRight:"9rem",textAlign:"end",justifyContent:"end",textAlign:"end"}}
                       >{nft.seller.substring(0,6) + "........."+nft.seller.slice(-3)}</span></div>


                    </p>
                    {/* <p style={{fontWeight:"bold",margin:"10px",color:"white"}} className="text-2xl font-bold text-white">Price - {nft.seller} Eth</p> */}
                  </div>
                </div>
              </Link>
              // </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4">
        {Boolean(sold.length) && (
          <div>
            <h2 className="text-2xl py-2">Items sold</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {sold.map((nft, i) => (
                <div
                  key={i}
                  className="border shadow rounded-xl overflow-hidden"
                >
                  <img style={{width:"20rem",height:"20rem",objectFit:"contain"}} src={nft.image} className="rounded" alt="" />
                  <div className="p-4 bg-black">
                    <p className="text-2xl font-bold text-red">
                      Price - {nft.price} Eth
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // const { sqr, cir } = props;
  // const list = [
  //   {
  //     title: "GREEN MANDALA",
  //     logo: sqr,
  //     rating: "3.33Ξ",
  //     author: "LZY.LAD",
  //     authorImg: cir,
  //   },
  //   {
  //     title: "JOSH WEIDE",
  //     logo: amaz,
  //     rating: "1.27Ξ",
  //     author: "SMRPN",
  //     authorImg: pretty5,
  //   },
  //   {
  //     title: "ROBERT CARRY",
  //     logo: battle4,
  //     rating: "0.25Ξ",
  //     author: "GITE",
  //     authorImg: pretty1,
  //   },
  // ];
  // return list.map((nft, i) => (
  //   <div key={i} className=" m-4">
  //     <Nftcontainer {...nft}></Nftcontainer>
  //   </div>
  // ));
};

export default Nftslist;

// import React from "react";
// import { ethers } from 'ethers'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import sqr from "../assets/images/space1.png";
// import Nftcontainer from "./NFTContainer";
// import amaz from "../assets/images/amazebox.jpg";
// import pretty5 from "../assets/images/pretty image (5).jpg";
// import battle4 from "../assets/images/battle4.jpg";
// import pretty1 from "../assets/images/pretty_image.jpg";
// import Web3Modal from "web3modal";
// import "../assets/css/nft.css";
// import Market from '../abis/Marketplace.json';
// import NFT from '../abis/NFT.json';

// import {  nftmarketaddress, nftaddress} from '../config'

// const Nftslist = (props) => {

//   const [nfts, setNfts] = useState([])
//   const [sold, setSold] = useState([])
//   const [loadingState, setLoadingState] = useState('not-loaded')
//   useEffect(() => {
//     loadNFTs()
//   }, [])
//   async function loadNFTs() {
//     // const web3Modal = new Web3Modal({
//     //   network: "mainnet",
//     //   cacheProvider: true,
//     // })
//     // const connection = await web3Modal.connect(  )
//     // const provider = new ethers.providers.Web3Provider(connection)
//     // const signer = provider.getSigner()
//     const provider = new ethers.providers.JsonRpcProvider(`https://eth-ropsten.alchemyapi.io/v2/77Wy8P0Ua9eWbtADqxk67t_anh5pHPAv%60`)

//     const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
//     const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)

//     const data = await marketContract.fetchMarketItems()

//     const items = await Promise.all(data.map(async i => {
//       const tokenUri = await tokenContract.tokenURI(i.tokenId)
//       const meta = await axios.get(tokenUri)
//       let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
//       let item = {
//         price,
//         tokenId: i.tokenId.toNumber(),
//         seller: i.seller,
//         owner: i.owner,
//         sold: i.sold,
//         image: meta.data.image,
//       }
//       return item

//     }
//     ))
//     console.log("Token listed for sale.");
//     /* create a filtered array of items that have been sold */
//     const soldItems = items.filter(i => i.sold)
//     setSold(soldItems)
//     setNfts(items)
//     setLoadingState('loaded')
//   }

//   if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets created</h1>)
//   return (
//     <div>
//       <div className="p-4">
//         <h2 className="text-2xl py-2">Items Created</h2>
//           {/* {
//             nfts.map((nft, i) => (
//               <div key={i} className="border shadow rounded-xl overflow-hidden">
//                 <img src={nft.image} className="rounded" alt="" style={{width: 500, height: 70}} />
//                 <div className="p-4 bg-black">
//                   <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
//                 </div>
//               </div>
//             ))
//           } */}
//           <div className=" my-4 ml-4 ">
//           <div className="m-card-content ">
//           {
//             nfts.map((nft, i) => (
//                   <div key={i} className=" nft-card-container m-2">
//                     <div className="nft-img-container">
//                       <img className="nft-img" src={nft.image} alt="logo"></img>
//                       <p style={{fontWeight:"bold",margin:"10px",color:"white"}} className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
//                       <p style={{fontWeight:"bold",margin:"10px",color:"white"}} className="text-2xl font-bold text-white">Price - {nft.seller} Eth</p>
//                     </div>
//                   </div>
//               ))
//           }
//           </div>
//         </div>
//       </div>
//       <div className="px-4">
//         {
//           Boolean(sold.length) && (
//             <div>
//               <h2 className="text-2xl py-2">Items sold</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
//                 {
//                   sold.map((nft, i) => (
//                     <div key={i} className="border shadow rounded-xl overflow-hidden">
//                       <img src={nft.image} className="rounded" alt="" />
//                       <div className="p-4 bg-black">
//                         <p className="text-2xl font-bold text-red">Price - {nft.price} Eth</p>
//                       </div>
//                     </div>
//                   ))
//                 }
//               </div>
//             </div>
//           )
//         }
//       </div>
//     </div>
//   )

//   // const { sqr, cir } = props;
//   // const list = [
//   //   {
//   //     title: "GREEN MANDALA",
//   //     logo: sqr,
//   //     rating: "3.33Ξ",
//   //     author: "LZY.LAD",
//   //     authorImg: cir,
//   //   },
//   //   {
//   //     title: "JOSH WEIDE",
//   //     logo: amaz,
//   //     rating: "1.27Ξ",
//   //     author: "SMRPN",
//   //     authorImg: pretty5,
//   //   },
//   //   {
//   //     title: "ROBERT CARRY",
//   //     logo: battle4,
//   //     rating: "0.25Ξ",
//   //     author: "GITE",
//   //     authorImg: pretty1,
//   //   },
//   // ];
//   // return list.map((nft, i) => (
//   //   <div key={i} className=" m-4">
//   //     <Nftcontainer {...nft}></Nftcontainer>
//   //   </div>
//   // ));
// };

// export default Nftslist;
