import React from "react";
import { useState } from 'react';
import { ethers } from 'ethers';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import Web3Modal from 'web3modal';
import { useHistory } from "react-router-dom";
//import Bot from "../../bottom/bot";
import "../../src/mints/nfts/page2.css";
import "../../src/mints/nfts/margi.css";
import {  nftaddress, nftmarketaddress} from '../config';

import NFT from '../abis/NFT.json';
import Market from '../abis/Marketplace.json';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

// import fire from "../assets/images/fire.png";

function Mintnft() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  // const router = useRouter()

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  async function createMarket() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      console.log("File url", url)
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
    
  }

  async function createSale(url) {
    const web3Modal = new Web3Modal({ network: `https://polygon-mumbai.g.alchemy.com/v2/klOlNm_rQCabx94IjAdS_ZBHzNCkRXFX` })
    const connection = await web3Modal.connect()
    console.log('Wallet is connected')
    const provider = new ethers.providers.Web3Provider(connection)
    
    const signer = provider.getSigner()

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()

    console.log("NFT minted");

    const price = ethers.utils.parseUnits(formInput.price, 'ether')

    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    // let listingPrice = await contract.getListingPrice()
    // listingPrice = listingPrice.toString()

    console.log("Token listet");

    transaction = await contract.createMarketItem(nftaddress, tokenId, price)
    await transaction.wait()
    // redirect to the homepage
    // router.push('/')
  }
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }
   function price(){
    createMarket();
    routeChange();
    console.log("MINT is commited.");
   }


  return (
    // <div className="flex justify-center">
    //   <div className="w-1/2 flex flex-col pb-12">
    //     <input placeholder="Asset Name" className="mt-8 border rounded p-4" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} />
    //     <textarea placeholder="Asset Description" className="mt-2 border rounded p-4" onChange={e => updateFormInput({ ...formInput, description: e.target.value })} />
    //     <input placeholder="Asset Price in Eth" className="mt-2 border rounded p-4" onChange={e => updateFormInput({ ...formInput, price: e.target.value })} />
    //     <input type="file" name="Asset" className="my-4" onChange={onChange} />
    //     {
    //       fileUrl && (
    //         <img className="rounded mt-4" alt="" width="350" src={fileUrl} />
    //       )
    //     }
    //     <button onClick={createMarket} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">Create Digital Asset</button>
    //   </div>
    // </div>
    <div>
    
    <h2>CHOOSE A NFT Category</h2>
      <form className="uploadoc" action="/action_page.php" style={{ display: "inline-block" }}>
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
          <text><br/>
            ACCEPTABLE FORMATS: <br /> JPG. PNG. GIF. MP4.
            <br /> OBJ. AVI. TXT. PDF. TIFF
          </text>
        </view>
        <view className="clickhere uplod">
          <text>
            <br />
            DECENTRALISED <br /> SAFE
            <br /> OR <br /> Secure
          </text>
          {/* <input type="file" placeholder="" name="Asset" className="" onChange={onChange} style={{ cursor: "pointer", width: 130}} /> */}
      {/* {
        fileUrl && (
          <img className="rounded mt-4" alt="" width="200" src={fileUrl} />
        )
      } */}
        </view>
        <view className="clickhere">
          <text>
            <br />
            VIEW OUR GUIDELINES <br /> FOR CREATING NFTS
          </text>
        </view>
      </view>
      <view></view>
      

    {/* <div className="flex justify-center">
    <div className="w-1/2 flex flex-col pb-12">
      <input placeholder="Asset Name" className="mt-8 border rounded p-4" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} />
      <textarea placeholder="Asset Description" className="mt-2 border rounded p-4" onChange={e => updateFormInput({ ...formInput, description: e.target.value })} />
      <input placeholder="Asset Price in Eth" className="mt-2 border rounded p-4" onChange={e => updateFormInput({ ...formInput, price: e.target.value })} /> 
     <input type="file" name="Asset" className="my-4" onChange={onChange} />
      {fileUrl && (<img className="rounded mt-4" alt="" width="350" src={fileUrl} />)} 
      <button onClick={createMarket} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">Create Digital Asset</button>
    </div>
  </div> */}

  {/* <div className="flex justify-center">
    <div className="w-1/2 flex flex-col pb-12">
      <input placeholder="Asset Name" className="mt-8 border rounded p-4" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} />
      <textarea placeholder="Asset Description" className="mt-2 border rounded p-4" onChange={e => updateFormInput({ ...formInput, description: e.target.value })} />
      <input placeholder="Asset Price in Eth" className="mt-2 border rounded p-4" onChange={e => updateFormInput({ ...formInput, price: e.target.value })} /> 
     <input type="file" name="Asset" className="my-4" onChange={onChange} />
      {fileUrl && (<img className="rounded mt-4" alt="" width="350" src={fileUrl} />)} 
      <button onClick={createMarket} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">Create Digital Asset</button>
    </div>
  </div> */}
  {/* <view>
        <form action="/action_page.php" className="formfill" style={{ color: "white" }}>
          <label for="fname">NAME YOUR NFT</label><br />
          <input className="formtxtfill docs" type="text" onChange={e => updateFormInput({ ...formInput, name: e.target.value })}/>
          <br/><label for="lname">ASSET DISCRIPTION</label><br />
          <input className="formtxtfill docs" type="text" onChange={e => updateFormInput({ ...formInput, description: e.target.value })}/><br />
          {/* <label for="lname">CHOOSE A CATEGORY FOR YOUR NFT</label><br />
          <input className="formtxtfill docs" type="text" id="lname" name="lname"/><br /> */}
  {/*        <label for="lname">PRICE OF NFT</label><br />
          <input className="formtxtfill docs" type="text" onChange={e => updateFormInput({ ...formInput, description: e.target.value })}/><br />
        </form>
      </view>
  <button onClick={createMarket} className="action-btn" type="button" > MINT NFT</button> */}
    <div className="flex justify-center">
    <div className="formfill">
    <label for="fname">NAME YOUR NFT</label><br />
      <input placeholder="Asset Name" className="formtxtfill docs" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} />
      <br/><label for="lname">ASSET DISCRIPTION</label><br />
      <textarea placeholder="Asset Description" className="formtxtfill docs" onChange={e => updateFormInput({ ...formInput, description: e.target.value })} />
      <br/><label for="lname">PRICE OF ASSET</label><br />
      <input placeholder="Asset Price in Eth" className="formtxtfill docs" onChange={e => updateFormInput({ ...formInput, price: e.target.value })} /> 
      <br/><label for="lname">UPLOAD IMAGE HERE</label><br />
     <input type="file" name="Asset" className="formtxtfill docs" onChange={onChange} />
      {fileUrl && (<img className="rounded mt-4" alt="" width="350" src={fileUrl} />)} 
      <button onClick={price} style={{marginBottom: 100, marginLeft: 500}} className="action-btn">Create Digital Asset</button>
    </div>
  </div>
  </div>

  )
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
