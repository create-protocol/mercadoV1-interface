import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress, polygonweth } from "../config";
import "../assets/css/home.css";
import NFT from "../abis/NFT.json";
import Market from "../abis/Marketplace.json";
import styled from "styled-components";
import { Player } from "video-react";
import "../../node_modules/video-react/dist/video-react.css"; // import css
import PageHeader from "../components/PageHeader";

import Footer from "./Footer";
import axios from "axios";
const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

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
  const [filetype, setFileType] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
    royaltyinweth: "",
  });

  async function onChange(e) {
    console.log(e.target.files[0]);
    const filetype = e.target.files[0].type;
    const filetypefinal = filetype.substring(filetype.lastIndexOf(".") + 1);
    setFileType(filetype.substring(filetype.lastIndexOf("/") + 1));
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
    const { name, description, price, royaltyinweth } = formInput;
    if (!name || !description || !price || !fileUrl || !royaltyinweth) return;
    const data = JSON.stringify({
      name,
      file: filetype,
      description,
      image: fileUrl,
    });
    console.log(filetype);
    console.log(fileUrl);
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      console.log("tokenURI", url);
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url, royaltyinweth);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function createSale(url, royaltyAmount) {
    const web3Modal = new Web3Modal({
      network: `https://polygon-mainnet.g.alchemy.com/v2/bv51--wKZGYGrXlqxnqJ_rRdz6cR5t-4`,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
    console.log(typeof royaltyAmount);
    const royaltyAmt = ethers.utils.parseEther(royaltyAmount);
    let transaction = await contract.createToken(url, polygonweth, royaltyAmt);
    console.log(transaction);
    let tx = await transaction.wait();
    let event = tx.events[0];

    let value = event.args[2];
    let tokenId = value.toNumber();

    console.log("NFT minted");

    const price = ethers.utils.parseUnits(formInput.price, "ether");

    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    console.log("Token listet");

    transaction = await contract.list(nftaddress, tokenId, price);
    // contract.unlistItem("0x25");
    await transaction.wait();
  }
  // const [checked, setChecked] = useState(false);

  // const handleChange = () => {
  //   setChecked(!checked);
  // };
  return (
    <div>
      <PageHeader title="Create" />
      <h3 className="getstarted">GET STARTED -</h3>
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
          <input
            className="formtxtfill docs"
            accept="audio/*,video/*,image/*"
            type="file"
            name="Asset"
            onChange={onChange}
            style={{ width: "100%" }}
          />

          <input
            className="formtxtfill docs"
            type="text"
            placeholder="_NFT name"
            onChange={(e) =>
              updateFormInput({ ...formInput, name: e.target.value })
            }
            style={{ width: "100%" }}
          />

          <input
            className="formtxtfill docs"
            type="text"
            placeholder="_Description"
            onChange={(e) =>
              updateFormInput({ ...formInput, description: e.target.value })
            }
            style={{ width: "100%" }}
          />

          <input
            className="formtxtfill docs"
            type="text"
            placeholder="_Price in WETH"
            onChange={(e) =>
              updateFormInput({ ...formInput, price: e.target.value })
            }
            style={{ width: "100%" }}
          />

          <input
            className="formtxtfill docs"
            type="text"
            placeholder="_Creator royalty (in WETH)"
            onChange={(e) =>
              updateFormInput({ ...formInput, royaltyinweth: e.target.value })
            }
            style={{ width: "100%" }}
          />
          {/* <br /> */}
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
            filetype == "mp4" ? (
              <div
                style={{
                  objectFit: "contain",
                  width: "576px",
                  height: "400px",
                }}
              >
                <Player src={fileUrl}></Player>
              </div>
            ) : (
              <img
                style={{
                  objectFit: "contain",
                  width: "576px",
                  height: "500px",
                }}
                src={fileUrl}
                alt="pre"
              />
            )
          ) : (
            <div
              style={{
                width: "576px",
                height: "500px",
                border: "2px solid",
                borderColor: "#5999ad #5aa6b2",
              }}
            >
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  justifyContent: "center",

                  objectFit: "contain",
                }}
              >
                Preview Here
              </h2>
            </div>
          )}
        </div>
      </view>
      <button className="digitalbutton" onClick={createMarket}>
        <div style={{ color: "white" }}>Create Digital Asset</div>
      </button>
    </div>
  );
}

export default Mintnft;
