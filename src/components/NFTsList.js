import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal"
import "../assets/css/nft.css";
import Market from "../abis/Marketplace.json";
import NFT from "../abis/NFT.json";
import { Link } from "react-router-dom";
// import spinloader from './spinloader';
// import Spinner from 'react-bootstrap/Spinner'
import { useHistory } from "react-router";
import styled from "styled-components";
import { nftmarketaddress, nftaddress } from "../config";
import Loader from "react-loader-spinner";
const ShadowBtn = styled.div`
background-color: rgb(112, 215, 49);
color: rgb(26, 24, 24);
font-size: 20px;
font-weight: 700;
width:40%;
border: 10px solid rgb(48, 52, 57);
border-radius: 20px;
padding:6px 10px 6px 10px;
cursor: pointer;
margin-top: 0.625rem;
max-width: 900px;
transition: all 0.3s ease-in-out 0s;
box-shadow: rgb(53 54 56 / 50%) 0px 16px 30px;
margin-top:40px;
margin-right: 20px;
margin-left: 20px;

  &:hover{
    -webkit-box-shadow: 0 0 8px #fff;
        box-shadow: 0 0 8px #fff;
        transition:.5s;
        border-radius:20px
  }
`;


const Nftslist = (props) => {
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  const history = useHistory();
  async function loadNFTs() {

    const provider = new ethers.providers.JsonRpcProvider(
      `https://eth-kovan.alchemyapi.io/v2/-rsx-HZE8Py7I7mOMIRCHckg3ab-xKnU`
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
          desc: meta.data.description,
          collection: meta.data.collection
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
    console.log(items)
  }


  async function buyNft(nft) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    console.log(nft)
    const price = ethers.utils.parseUnits(nft.price, 'ether')
    console.log(nftaddress)
    console.log(nft.itemId)
    const transaction = await contract.createMarketSale(nftaddress, nft.tokenId
      , { value: price }
    )
    await transaction.wait()
    loadNFTs()
  }

  // if(my component) else if else 

  if (loadingState != "loaded") {

    return <div style={{ height: "200px", alignContent: "center", marginTop: "60px" }}>

      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      // timeout={3000} //3 secs
      />

    </div>;
  }

  else if (loadingState === "loaded" && !nfts.length)
    return <h1 className="py-10 px-20 text-3xl" style={{ color: "white" }}>No assets created</h1>;
  return (
    <div>
      <div className="p-4" style={{color:"green"}}>
        <div className=" my-4 ml-4 " style={{color:"green"}}>
          <div className="m-card-content" style={{ justifyContent: "center",color:"green" }}>
            {nfts.map((nft, i) => (

              <div key={i} className="row nft-card-container m-2" style={{ display: "flex", flexDirection: "column", }}>
                <Link
                  to={{
                    pathname: "/descpage",
                    state: {
                      image: nft.image,
                      name: nft.owner,
                      price: nft.price,
                      sellername: nft.seller,
                      desc: nft.desc,
                      collection: nft.collection
                    },
                  }}
                >
                  <div className="nft-img-container" style={{color:"green"}}>

                    <img className="nft-img" src={nft.image} alt="logo"></img>
                    <p
                      style={{
                        fontWeight: "bold",
                        margin: "10px",
                        color: "white",
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "space-between"
                      }}

                    >
                      <div>{nft.price} Eth</div>
                      <div>{nft.collection}</div>

                      <div><span
                      //  style={{padding:"20px",marginRight:"9rem",textAlign:"end",justifyContent:"end",textAlign:"end"}}
                      >{nft.seller.substring(0, 6) + "........." + nft.seller.slice(-3)}</span></div>

                      
                    </p>
                    <ShadowBtn  style={{alignItems:"center",justifyContent:"center",margin:"auto",}} onClick={() => buyNft(nft)}>Buy</ShadowBtn>
 
                  </div>
                </Link>

              </div>

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
                  <img style={{ width: "20rem", height: "20rem", objectFit: "contain" }} src={nft.image} className="rounded" alt="" />
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

  // 
};

export default Nftslist

