import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import Bot from "../mints/bottom/bot";
import { nftaddress, nftmarketaddress, polygonweth } from "../config";
import "../assets/css/home.css";
import NFT from "../abis/NFT.json";
import Market from "../abis/Marketplace.json";
import styled from "styled-components";
import Home from '../assets/images/home.png'
import useHistory from 'react'

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

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
    royaltyinweth: "",
  });
  // const router = useRouter()
  // const history=useHistory()
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      // const url = `${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  async function createMarket() {
    // console.log("here");
    const { name, description, price, royaltyinweth } = formInput;
    if (!name || !description || !price || !fileUrl || !royaltyinweth) return;
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      imageCID: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      console.log("tokenURI", url);
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url,royaltyinweth);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function createSale(url, royaltyAmount) {
    // const web3Modal = new Web3Modal({network:`https://eth-ropsten.alchemyapi.io/v2/77Wy8P0Ua9eWbtADqxk67t_anh5pHPAv%60`})
    // const web3Modal = new Web3Modal({network:`https://polygon-mumbai.g.alchemy.com/v2/klOlNm_rQCabx94IjAdS_ZBHzNCkRXFX`})
    const web3Modal = new Web3Modal({
      network: `https://polygon-mumbai.g.alchemy.com/v2/T-sMRF2J8t9nSNy7dBwBFNijlNhhk1ij`,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
    console.log(typeof royaltyAmount);
    const royaltyAmt=ethers.utils.parseEther(royaltyAmount);
    let transaction = await contract.createToken(
      url,
      polygonweth,
      royaltyAmt
    );
    console.log(transaction)
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

    transaction = await contract.list(nftaddress, tokenId, price);
    await transaction.wait();
    // redirect to the homepage
    // router.push('/')
  }

  return (
    <div>
      <view
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          className="formfill"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              padding: "2rem",
              borderRadius: ".5rem",
            }}
          >
            <label for="fname">Item Name</label>
            <br />
            <input
              className="formtxtfill docs"
              type="text"
              onChange={(e) =>
                updateFormInput({ ...formInput, name: e.target.value })
              }
              style={{ width: "100%" }}
            />
          </div>
          <br />

          {/* <div
            style={{
              backgroundColor: "grey",
              padding: "2rem",
              borderRadius: ".5rem",
            }}
          >
            <label for="fname">Part of Collections</label>
            <br />
            <input
              className="formtxtfill docs"
              type="text"
              onChange={(e) =>
                updateFormInput({ ...formInput, collections: e.target.value })
              }
              style={{ width: "100%" }}
            />
          </div> */}
          {/* <br /> */}
          <div
            style={{
              backgroundColor: "grey",
              padding: "2rem",
              borderRadius: ".5rem",
            }}
          >
            <label for="lname">DESCRIPTION</label>
            <br />
            <input
              className="formtxtfill docs"
              type="text"
              onChange={(e) =>
                updateFormInput({ ...formInput, description: e.target.value })
              }
              style={{ width: "100%" }}
            />
          </div>
          <br />
          <div
            style={{
              backgroundColor: "grey",
              padding: "2rem",
              borderRadius: ".5rem",
            }}
          >
            <label for="lname">price in WETH</label>
            <br />
            <input
              className="formtxtfill docs"
              type="text"
              onChange={(e) =>
                updateFormInput({ ...formInput, price: e.target.value })
              }
              style={{ width: "100%" }}
            />
          </div>
          <br />

          <div
            style={{
              backgroundColor: "grey",
              padding: "2rem",
              borderRadius: ".5rem",
            }}
          >
            <label for="fname">How much royality do you want (in WETH) </label>
            <br />
            <input
              className="formtxtfill docs"
              type="text"
              onChange={(e) =>
                updateFormInput({ ...formInput, royaltyinweth: e.target.value })
              }
              style={{ width: "100%" }}
            />
          </div>
          <br />
          <div
            style={{
              backgroundColor: "grey",
              padding: "2rem",
              borderRadius: ".5rem",
            }}
          >
            <input
              className="formtxtfill docs"
              type="file"
              name="Asset"
              onChange={onChange}
              style={{ width: "100%" }}
            />
          </div>

          <br />
        </form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          {fileUrl ? (
            <img
              className="docs"
              style={{
                opcaity: "0.7",
                height: "30rem",
                width: "30rem",
                backgroundSize: "cover",
              }}
              alt="Preview  "
              width="350"
              src={fileUrl}
            />
          ) : (
            <h2
              style={{
                color: "white",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              }}
            >
              Preview Here
            </h2>
          )}
        </div>
      </view>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <ShadowBtn style={{ marginBottom: "20px" }} onClick={createMarket}>
          <div className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
            Create Digital Asset
          </div>
        </ShadowBtn>

        {/* </div> */}
      </div>
    </div>
  );
}

export default Mintnft;
