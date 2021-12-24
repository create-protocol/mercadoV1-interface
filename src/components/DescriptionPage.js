import React from "react";
import { ethers } from "ethers";
import axios from "axios";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Market from "../abis/Marketplace.json";
import NFT from "../abis/NFT.json";
import { nftmarketaddress, nftaddress } from "../config";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

import { useHistory } from "react-router";
import { sendTransaction } from "./sendTransaction";
// import { id } from "ethers/lib/utils";
const Splitscreen = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    overflow-y: hidden;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 1000px) {
    width: 100%;
    height: 60%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100vh;
  border:1px solid black
  flex-wrap:wrap
  @media (max-width: 1000px) {
    width:100%;
    height:60%;
    overflow:hidden;
  }
`;

const Signupbtn = styled.div`
  display: block;
  width: 20%;
  background: rgb(7, 7, 135);
  color: white;
  border: none;
  padding: 1rem;
  font-size: medium;
  border-radius: 8px;
  &:hover {
    background: blue;
    transition: 200ms ease-in;
  }
`;

const DescriptionPage = (props) => {
 
  const [allowance, setAllowance] = useState(false);
  const [obj, setobj] = useState({});
  const [loadingState, setLoadingState] = useState("not-loaded");
  const { itemid } = useParams();
  //itemid = itemid.toNumber();
  var itemId = ethers.BigNumber.from(itemid);
  //var itemId = ethers.utils.parseUnits(itemid, 'ethers');
  // console.log(typeof itemid);

  useEffect(() => {
    load2(itemId);
  }, []);

  async function load2(itemId) {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://polygon-mainnet.g.alchemy.com/v2/bv51--wKZGYGrXlqxnqJ_rRdz6cR5t-4`
    );

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    itemId = ethers.BigNumber.from(itemId);
    const data = await marketContract.fetchIndividualNFT(itemId);
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const tokenUri = await tokenContract.tokenURI(data.tokenId.toNumber());
    const meta = await axios.get(tokenUri);
    var item = {
      itemId: data.itemId,
      nftContract: data.nftContract,
      tokenId: data.tokenId,
      seller: data.seller,
      price: ethers.utils.formatEther(data.price), // price in wei
      image: meta.data.imageCID,
      name: meta.data.name,
      desc: meta.data.description,
    };

    console.log("item: ", item);
    setobj(item);
    setLoadingState("loaded");
  }
  const isEnoughAllowance = async () => {
    const owner = await window.wallet.getAddress()
    const amt = await window.ercInst.allowance(owner, window.marketInst.address);
    console.log(amt >= ethers.utils.parseEther(obj.price));
    setAllowance(amt >= ethers.utils.parseEther(obj.price));
  }

  const buyNFT = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    window.wallet = signer;
    console.log(ethers.utils.parseEther(obj.price));
    if (!allowance) {
      await sendTransaction(
        window.ercInst,
        "approve",
        [window.marketInst.address,
        ethers.utils.parseEther(obj.price)],
        "You give allowance to MarketPlace of required WETH"
      );
      await isEnoughAllowance();

    } else {
      await sendTransaction(
        window.marketInst,
        "buyNFT",
        [itemId],
        "You have successfully Purchase This Token"
      )
    }




    // await ;
    // load2()

  }

  console.log(obj);
  return (
    <Splitscreen>
      {!obj.image ? <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Loader type="Puff" color="#00BFFF" height={100} width={100} /></div> :
        <>
          <Left>

            <div
              style={{
                padding: "2rem",
                height: "100%",
                width: "80%",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "0",
                overflow: "hidden",
              }}
            >
              <Zoom>
                <img
                  src={obj.image}
                  // src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
                  alt="nft"
                  style={{ width: "100%", borderRadius: "15px", height: "500px" }}
                />
              </Zoom>
            </div>
          </Left>
          <Right>

            <h2 style={{ color: "white" }}> Name: {obj.name}</h2>
            <div style={{overflow:"auto",maxHeight:"70vh",marginTop:"52px"}}>
               <h2 style={{ color: "white" }}> {obj.desc}</h2>

            </div>
           <br/>
            <h2
              style={{
                color: "white",
                textOverflow: "none",
                fontSize: "1rem",
                letterSpacing: "2px",
              }}
            >
              seller:{obj.seller}
            </h2>
            <h2 style={{ color: "white" }}>
              Price:{obj.price} WETH
            </h2>
            <Signupbtn
              style={{ background: "white", color: "black" }}
              onClick={buyNFT}
            >
              {allowance ? 'BUY' : 'Set Allownace'}
            </Signupbtn>
            <br/>
          </Right></>}
    </Splitscreen>
  );
};

export default DescriptionPage;