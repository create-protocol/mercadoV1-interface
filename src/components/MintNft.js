import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import Bot from "../mints/bottom/bot";
import { nftaddress, nftmarketaddress } from "../config";
import "../assets/css/home.css";
import NFT from "../abis/NFT.json";
import Market from "../abis/Marketplace.json";
import styled from "styled-components";
import Home from '../assets/images/home.png'

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

// import fire from "../assets/images/fire.png";
const ShadowBtn = styled.div`
  background-color: green;
  color: white;
  padding: 0.3rem 1.2rem;
  alignitems: center;
  
  cursor: pointer;
  border: 8px solid black;
  
  fontsize: 2.5rem;
  lineheight: 2rem;
  textalign: center;
  

  &:hover {
    -webkit-box-shadow: 0 0 8px #fff;
    box-shadow: 0 0 8px #fff;
    transition: 0.5s;
  }
`;
function Mintnft() {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
    creator:"Lzy Lad"
  });
  // const router = useRouter()

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  async function createMarket() {
    const { name, description, price,creator } = formInput;
    if (!name || !description || !price || !fileUrl ||creator) return;
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
      creator
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      console.log("File url", url);
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function createSale(url) {
    // const web3Modal = new Web3Modal({network:`https://eth-ropsten.alchemyapi.io/v2/77Wy8P0Ua9eWbtADqxk67t_anh5pHPAv%60`})
    // const web3Modal = new Web3Modal({network:`https://polygon-mumbai.g.alchemy.com/v2/klOlNm_rQCabx94IjAdS_ZBHzNCkRXFX`})
    const web3Modal = new Web3Modal({
      network: `https://eth-ropsten.alchemyapi.io/v2/77Wy8P0Ua9eWbtADqxk67t_anh5pHPAv`,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
    let transaction = await contract.createToken(url);
    let tx = await transaction.wait();
    let event = tx.events[0];
    let value = event.args[2];
    let tokenId = value.toNumber();

    console.log("NFT minted");

    const price = ethers.utils.parseUnits(formInput.price, "ether");

    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
    // let listingPrice = await contract.getListingPrice()
    // listingPrice = listingPrice.toString()

    console.log("Token listet");

    transaction = await contract.createMarketItem(nftaddress, tokenId, price);
    await transaction.wait();
    // redirect to the homepage
    // router.push('/')
  }

  return (
    <div>
      {/* <h2>CHOOSE A NFT Category</h2>
      <form
        className="uploadoc"
        action="/action_page.php"
        style={{ display: "inline-block" }}
      >
        <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> IMAGE</label>
        <input type="radio" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> Audio</label>
        <input type="radio" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> Video</label>
        <input type="radio" id="vehicle4" name="vehicle2" value="Car" />
        <label for="vehicle4"> 3D</label>
        <input type="radio" id="vehicle5" name="vehicle2" value="Car" />
        <label for="vehicle5"> PHYSICAL GOODS</label>
      </form>
      <br />
      <view style={{ marginTop: 20 }}>
        <view className="clickhere">
          <text style={{ color: "white" }}>
            <br />
            ACCEPTABLE FORMATS: <br /> JPG. PNG. GIF. MP4.
            <br /> OBJ. AVI. TXT. PDF. TIFF
          </text>
        </view>
        <view className="clickhere uplod">
          <text style={{ color: "white" }}>
            <br />
            CLICK HERE TO <br /> UPLOAD A FILE
            <br /> OR <br /> DROP A FILE HERE
          </text>
        </view>
        <view className="clickhere">
          <text style={{ color: "white" }}>
            <br />
            VIEW OUR GUIDELINES <br /> FOR CREATING NFTS
          </text>
        </view>
      </view> */}

      <view style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <form
          // action="/action_page.php"
          className="formfill"
          style={{
            display: "flex",
            flexDirection: "column",
            width:"50%",
            // alignItems: "center",
          }}
        >
          <div style={{backgroundColor:"grey",padding:"2rem",borderRadius:".5rem"}}>
          <label for="fname">ASSET NAME</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            // id="fname"
            // name="fname"
            style={{width:"100%"}}
            // value="LET'S START WITH GIVING A UNIQUE NAME TO YOUR WORK OF ART"
          />
          </div>
          <br />
          <div style={{backgroundColor:"grey",padding:"2rem",borderRadius:".5rem"}}>
          <label for="lname">ASSET DESCRIPTION</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            // id="lname"
            // name="lname"
            
            style={{width:"100%"}}
          />
          </div>
          <br />
          <div style={{backgroundColor:"grey",padding:"2rem",borderRadius:".5rem"}}>
          <label for="lname">ASSET PRICE IN ETHERIUM</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            // id="lname"
            // name="lname"
            
            style={{width:"100%"}}
          />
          </div>
          <br />
          <div style={{backgroundColor:"grey",padding:"2rem",borderRadius:".5rem"}}>
          <input
            className="formtxtfill docs"
            type="file"
            name="Asset"
            onChange={onChange}
            style={{width:"100%"}}
          />
          </div>
          
          
          <br />
        </form>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"50%"}}>
          {/* <img style={{height:"20rem",width:"20rem"}}src={Home} alt="image hrer"/> */}
        {fileUrl
         ?(
            <img
              className="docs"
              style={{ opcaity: "0.7", height:"30rem",width:"30rem",backgroundSize:"cover"}}
              alt="Preview  "
              width="350"
              src={fileUrl}
            />)
          :(<h2 style={{color:"white",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>Preview Here</h2>)}
          </div>
      </view>

      {/* <Bot /> */}
      {/* <button
        className="cnetrbutton"
        type="button"
        
      > */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* <div className="action-container my-4"style={{width:"max-content"}} > */}
        <ShadowBtn>
          <div style={{fontSize:"1.5rem"}} 
          // className="action-btn"
          >CREATE DIGITAL ASSET</div>
        </ShadowBtn>

        {/* </div> */}
      </div>
    </div>
    // <div className="flex justify-center">
    //   <div className="w-1/2 flex flex-col pb-12">
    //     <input
    //       placeholder="Asset Name"
    //       className="mt-8 border rounded p-4"
    //       onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
    //     />
    //     <textarea
    //       placeholder="Asset Description"
    //       className="mt-2 border rounded p-4"
    //       onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
    //     />
    //     <input
    //       placeholder="Asset Price in Eth"
    //       className="mt-2 border rounded p-4"
    //       onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
    //     />
    //     <input
    //       type="file"
    //       name="Asset"
    //       className="my-4"
    //       onChange={onChange}
    //     />
    //     {
    //       fileUrl && (
    //         <img className="rounded mt-4" alt="" width="350" src={fileUrl} />
    //       )
    //     }
    //     <button onClick={createMarket} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
    //       Create Digital Asset
    //     </button>
    //   </div>
    // </div>
  );
}

// const Mintnft = (props) => {
//   return (
//     <div className="nft-success-container">
//       <div className="fire-img-container">
//         <img className="fire-img" src={fire} alt="fir"></img>
//       </div>
//       <div className="nft-description">
//         AWESOME! YOUR NFT HAS BEEN MINTED SUCCESSFULLY!
//       </div>
//       <div className="nft-action-btn">SHOW THE WORLD!</div>
//       <div
//         className="nft-action-btn"
//         onClick={() => props.history.push("/PREVIEW-NFT")}
//       >
//         TAKE ME TO MY NFT!
//       </div>
//     </div>
//   );
// };

export default Mintnft;

// import React from "react";
// import { useState } from 'react';
// import { ethers } from 'ethers';
// import { create as ipfsHttpClient } from 'ipfs-http-client';
// import Web3Modal from 'web3modal';
// import '../mints/upload.css'

// import {
//   nftaddress, nftmarketaddress
// } from '../config';

// import NFT from '../abis/NFT.json';
// import Market from '../abis/Marketplace.json';

// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

// // import fire from "../assets/images/fire.png";

// function Mintnft() {
//   const [fileUrl, setFileUrl] = useState(null)
//   const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
//   // const router = useRouter()

//   async function onChange(e) {
//     const file = e.target.files[0]
//     try {
//       const added = await client.add(
//         file,
//         {
//           progress: (prog) => console.log(`received: ${prog}`)
//         }
//       )
//       const url = `https://ipfs.infura.io/ipfs/${added.path}`
//       setFileUrl(url)
//     } catch (error) {
//       console.log('Error uploading file: ', error)
//     }
//   }
//   async function createMarket() {
//     const { name, description, price } = formInput
//     if (!name || !description || !price || !fileUrl) return
//     /* first, upload to IPFS */
//     const data = JSON.stringify({
//       name, description, image: fileUrl
//     })
//     try {
//       const added = await client.add(data)
//       const url = `https://ipfs.infura.io/ipfs/${added.path}`
//       console.log("File url", url)
//       /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
//       createSale(url)
//     } catch (error) {
//       console.log('Error uploading file: ', error)
//     }
//   }

//   async function createSale(url) {
//     const web3Modal = new Web3Modal({network:`https://eth-ropsten.alchemyapi.io/v2/77Wy8P0Ua9eWbtADqxk67t_anh5pHPAv%60`})
//     const connection = await web3Modal.connect()
//     const provider = new ethers.providers.Web3Provider(connection)
//     const signer = provider.getSigner()

//     /* next, create the item */
//     let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
//     let transaction = await contract.createToken(url)
//     let tx = await transaction.wait()
//     let event = tx.events[0]
//     let value = event.args[2]
//     let tokenId = value.toNumber()

//     console.log("NFT minted");

//     const price = ethers.utils.parseUnits(formInput.price, 'ether')

//     /* then list the item for sale on the marketplace */
//     contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
//     // let listingPrice = await contract.getListingPrice()
//     // listingPrice = listingPrice.toString()

//     console.log("Token listet");

//     transaction = await contract.createMarketItem(nftaddress, tokenId, price)
//     await transaction.wait()
//     // redirect to the homepage
//     // router.push('/')
//   }

//   return (
//     <div className="flex justify-center">
//       <div className="w-1/2 flex flex-col pb-12">
//         <input
//           placeholder="Asset Name"
//           className="mt-8 border rounded p-4"
//           onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
//         />
//         <textarea
//           placeholder="Asset Description"
//           className="mt-2 border rounded p-4"
//           onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
//         />
//         <input
//           placeholder="Asset Price in Eth"
//           className="mt-2 border rounded p-4"
//           onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
//         />
//         <input
//           type="file"
//           name="Asset"
//           className="my-4"
//           onChange={onChange}
//         />
//         {
//           fileUrl && (
//             <img className="rounded mt-4" alt="" width="350" src={fileUrl} />
//           )
//         }
//         <button onClick={createMarket} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
//           Create Digital Asset
//         </button>
//       </div>
//     </div>
//   )
// }

// // const Mintnft = (props) => {
// //   return (
// //     <div className="nft-success-container">
// //       <div className="fire-img-container">
// //         <img className="fire-img" src={fire} alt="fir"></img>
// //       </div>
// //       <div className="nft-description">
// //         AWESOME! YOUR NFT HAS BEEN MINTED SUCCESSFULLY!
// //       </div>
// //       <div className="nft-action-btn">SHOW THE WORLD!</div>
// //       <div
// //         className="nft-action-btn"
// //         onClick={() => props.history.push("/PREVIEW-NFT")}
// //       >
// //         TAKE ME TO MY NFT!
// //       </div>
// //     </div>
// //   );
// // };

// export default Mintnft;
