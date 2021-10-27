import React from "react";
//import Bot from "../bottom/bot";
import "./page2.css";
import "./margi.css";

import { useState } from 'react';
import { ethers } from 'ethers';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import Web3Modal from 'web3modal';

import {
  nftaddress, nftmarketaddress
} from '../../config';

import NFT from '../../abis/NFT.json';
import Market from '../../abis/Marketplace.json';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

function age2(props) {
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
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
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

  return (
    <div>
      {/* <h2>CHOOSE A NFT Category</h2>
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
      </form> */}
      <br />
      <view style={{ marginTop: 20 }}><view className="clickhere"><text><br/>
            ACCEPTABLE FORMATS: <br /> JPG. PNG. GIF. MP4.
            <br /> OBJ. AVI. TXT. PDF. TIFF
          </text>
        </view>
        <view className="clickhere uplod">
          <text>
            <br />
            CLICK HERE TO <br /> UPLOAD A FILE
            <br /> OR <br /> DROP A FILE HERE
          </text>
        </view>
        <view className="clickhere">
          <text>
            <br />
            VIEW OUR GUIDELINES <br /> FOR CREATING NFTS
          </text>
        </view>
      </view>
      <view>
        <form
          action="/action_page.php"
          className="formfill"
          style={{ color: "white" }}
        >
          <label for="fname">NAME YOUR NFT</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            id="fname"
            name="fname"
            value="LET'S START WITH GIVING A UNIQUE NAME TO YOUR WORK OF ART"
          />
          <br />
          <label for="lname">ADD RELEVANT TAGS</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            id="lname"
            name="lname"
            value="ADD # TAGS TO MAKE YOUR NFT MORE DISCOVERABLE"
          />
          <br />
          <label for="lname">CHOOSE A CATEGORY FOR YOUR NFT</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            id="lname"
            name="lname"
            value="LET'S START WITH GIVING A UNIQUE NAME TO YOUR WORK OF ART"
          />
          <br />
          <label for="lname">WRITE A DETAILED DESCRIPTION OF THE NFT</label>
          <br />
          <input
            className="formtxtfill docs"
            type="text"
            id="lname"
            name="lname"
            value="WRITE YOUR STORY BEHIND THE NFT. WHY IT IS THE WAY IT CREATED"
          />
          <br />
        </form>
      </view>
      {/* <Bot /> */}
      {/* <button
        className="cnetrbutton"
        type="button"
        onClick={() => props.history.push("/page3")}
      >
        NEXT PAGE
      </button> */}
    </div>
  );
}

export default page2;
