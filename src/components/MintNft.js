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
import fs from 'fs';
import axios from "axios";
// using pinata
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


// export const pinFileToIPFS = (pinataApiKey, pinataSecretApiKey) => {
//   const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

//   //we gather a local file for this example, but any valid readStream source will work here.
//   let data = new FormData();
//   data.append('file', fs.createReadStream('./yourfile.png'));

//   return axios.post(url,
//       data,
//       {
//           maxContentLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
//           headers: {
//               'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
//               'pinata_api_key': pinataApiKey,
//               'pinata_secret_api_key': pinataSecretApiKey
//           }
//       }
//   ).then(function (response) {
//       //handle response here
//   }).catch(function (error) {
//       //handle error here
//   });
// };


function Mintnft() {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
    royaltyinweth: "",
  });
  async function onChange(e) {
    const file = e.target.files[0];
    var filePath = file.value;
    console.log(filePath);
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
      description,
      image: fileUrl,
    });
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
              accept="audio/*,video/*,image/*"
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
            <Player>
              <source src={fileUrl} />
            </Player>
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
