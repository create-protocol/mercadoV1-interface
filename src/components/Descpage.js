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

import "font-awesome/css/font-awesome.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import Footer from "./Footer.js";
import { useHistory } from "react-router";
import { sendTransaction } from "./sendTransaction";

import Player from "video-react/lib/components/Player";
import "../../node_modules/video-react/dist/video-react.css"; // import css

import descimage from "../assets/images/descpage.png";
import Landingowner from "../assets/images/landingowner.png";
import Eth from "../assets/images/Ethereum (ETH).png";
import reactshare from "./nftshare";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, TelegramIcon } from "react-share";
import Share from "./nftshare";
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
  margin-left: auto;
  height: 100vh;
  @media (max-width: 1000px) {
    width: 100%;
    height: 60%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: start;
  margin-right:100px;
  width: 100%;
//   height:100vh;
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

const Biddingcard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.11) 0%,
    rgba(0, 0, 0, 0.53125) 48.96%,
    rgba(186, 104, 200, 0.53) 100%
  );
  opacity: 0.75;
  box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  margin-left: 0;
  margin-top: 0.7rem;
`;
const Mainheading=styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: 600;
font-size: 2.8rem;
line-height: 140%;`

const Desctext=styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: normal;
font-size: 1.2rem;
line-height: 160%;
color: #A9A9A9;`

const Biddingtext=styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: 600;
font-size: 1.5rem;
line-height: 140%;
margin-top:1rem;`

const Leftheading=styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: normal;
font-size: 14px;
margin-top:3rem;
color: #A9A9A9;
line-height:0.5rem;
`

const Lefttext=styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height:0;
`
const Descpage = (props) => {
  //   const [allowance, setAllowance] = useState(false);
  //   const [obj, setobj] = useState({});
  //   const [loadingState, setLoadingState] = useState("not-loaded");
  //   const { itemid } = useParams();
  //   itemid = itemid.toNumber();
  //   var itemId = ethers.BigNumber.from(itemid);

  //   useEffect(() => {
  // load2(itemId);
  //   }, []);

  //   async function load2(itemId) {
  //     const provider = new ethers.providers.JsonRpcProvider(
  //       `https://polygon-mainnet.g.alchemy.com/v2/bv51--wKZGYGrXlqxnqJ_rRdz6cR5t-4`
  //     );

  //     const marketContract = new ethers.Contract(
  //       nftmarketaddress,
  //       Market.abi,
  //       provider
  //     );
  //     itemId = ethers.BigNumber.from(itemId);
  //     const data = await marketContract.fetchIndividualNFT(itemId);
  //     const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
  //     const tokenUri = await tokenContract.tokenURI(data.tokenId.toNumber());
  //     const meta = await axios.get(tokenUri);
  //     var item = {
  //       itemId: data.itemId,
  //       nftContract: data.nftContract,
  //       tokenId: data.tokenId,
  //       seller: data.seller,
  //       price: ethers.utils.formatEther(data.price), // price in wei
  //       image: meta.data.image || meta.data.imageCID,
  //       name: meta.data.name,
  //       desc: meta.data.description,
  //       file:meta.data.file,
  //     };

  //     console.log("item: ", item);
  //     setobj(item);
  //     setLoadingState("loaded");
  //   }
  //   const isEnoughAllowance = async () => {
  //     const owner = await window.wallet.getAddress();
  //     const amt = await window.ercInst.allowance(
  //       owner,
  //       window.marketInst.address
  //     );
  //     console.log(amt >= ethers.utils.parseEther(obj.price));
  //     setAllowance(amt >= ethers.utils.parseEther(obj.price));
  //   };

  //   const buyNFT = async () => {
  //     const web3Modal = new Web3Modal();
  //     const connection = await web3Modal.connect();
  //     const provider = new ethers.providers.Web3Provider(connection);
  //     const signer = provider.getSigner();
  //     window.wallet = signer;
  //     console.log(ethers.utils.parseEther(obj.price));
  //     if (!allowance) {
  //       await sendTransaction(
  //         window.ercInst,
  //         "approve",
  //         [window.marketInst.address, ethers.utils.parseEther(obj.price)],
  //         "You give allowance to MarketPlace of required WETH"
  //       );
  //       await isEnoughAllowance();
  //     } else {
  //       await sendTransaction(
  //         window.marketInst,
  //         "buyNFT",
  //         [itemId],
  //         "You have successfully Purchase This Token"
  //       );
  //     }
  //   };

  //   console.log(obj);
  return (
    <>
      <Splitscreen>
        <Left>
          <div
            style={{
              padding: "2rem",
              paddinTop: "0",
              marginTop: "0",
              height: "100%",
              width: "80%",
              borderRadius: "10px",
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              paddingBottom: "0",
              overflow: "hidden",
              flexDirection: "column",
              textAlign:"left"
            }}
          >
            {/* {obj.file=="mp4"?<Player src={obj.image}></Player>:  */}
            <Zoom>
              <img
                src={descimage}
                alt="nft"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  height: "25rem",
                  objectFit: "cover",
                }}
              />
            </Zoom>
            <div style={{ color: "white", }}>
                <Leftheading>Contract Address</Leftheading>
              
              <br />
              <Lefttext>0xahi66785bsjxbk9q728276hbshjcbjsnck9777cc1</Lefttext>
              
            </div>
            <div style={{ color: "white" }}>
              <Leftheading>Token Id</Leftheading>
              <br />
              <Lefttext>33456</Lefttext>
              
            </div>
          </div>
        </Left>
        <Right>
          <p
            style={{
              color: "white",
              fontSize: "26px",
              letterSpacing: "2px",
              width: "100%",
              marginTop: "1.3rem",
              textAlign: "left",
            }}
          >
            <Mainheading>Description</Mainheading>
            <Desctext>
              Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur id sem elit. Nulla suscipit massa vitae eleifend
              malesuada. Suspendisse at arcu rhoncus odio efficitur finibus ut
              eu tellus. Praesent iaculis massa eu lacus dictum, vitae tristique
              sem congue. Aliquam dui tellus, malesuada quis commodo nec,
              ullamcorper quis tortor.{" "}
            </Desctext>
            {/* {obj.name} */}
          </p>
          <div
            style={{
              marginTop: "1.4rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ objectFit: "contain", width: "2rem" }}
              src={Landingowner}
              alt="landingimg"
            />
            <div
              style={{
                width: "80%",
                textAlign: "left",
                marginLeft: "1rem",
                color: "white",
              }}
            >
              <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                *Insert Artwork title*
              </div>
              <div style={{ color: "#A9A9A9", fontSize: "0.7rem" }}>
                created by @brightmac
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginTop: "0.5rem",
                color: "white",
                textAlign: "left",
                height: "4rem",
              }}
            >
              <Biddingtext>Current Price</Biddingtext>
              <div
                style={{
                  background: "black",
                  width: "15rem",
                  height: "4rem",
                  borderRadius: "0.7rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1rem",
                  fontSize: ".7rem",
                  fontWeight: "500",
                  marginTop:"1rem"
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={Eth} alt="" />
                  <div style={{ marginLeft: "0.4rem" }}>0.99 ETH</div>
                </div>
                <div>Buy now</div>
              </div>
            </div>
            <div
              style={{
                marginTop: "0.5rem",
                color: "white",
                textAlign: "left",
                height: "4rem",
              }}
            >
              <Biddingtext>Bid ends in</Biddingtext>
              <div
                style={{
                  background: "black",
                  width: "15rem",
                  height: "4rem",
                  borderRadius: "0.7rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1rem",
                  fontSize: ".7rem",
                  fontWeight: "500",
                  marginTop:"1rem"
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={Eth} alt="" />
                  <div style={{ marginLeft: "0.4rem" }}>4d 16h 32m 10s</div>
                </div>
                <div>Place bid</div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              textAlign: "left",
              flexDirection: "column",
              color:"white",
              marginTop:"5rem"
            }}
          >
            <Biddingtext>Ongoing Bids</Biddingtext>
            <Biddingcard>
              <div
                style={{
                //   marginTop: "1.4rem",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "2rem",
                  height:"100%",
                }}
              >
                <img
                  style={{ objectFit: "contain", width: "5rem" }}
                  src={Landingowner}
                  alt="landingimg"
                />
                <div
                  style={{
                    width: "80%",
                    textAlign: "left",
                    marginLeft: "2rem",
                    color: "white",
                  }}
                >
                  <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    By woodshelf
                  </div>
                  <div style={{ color: "#A9A9A9", fontSize: "0.9rem",marginTop:"1rem" }}>
                    Bid of 20Eth
                  </div>
                </div>
              </div>
              <div>
              <div
                  style={{
                    width: "80%",
                    textAlign: "left",
                    marginRight: "2rem",
                    color: "white",
                    height:"100%"
                  }}
                >
                  <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                   365 ETH
                  </div>
                  <div style={{ color: "#A9A9A9", fontSize: "0.9rem",marginTop:"1rem" }}>
                    11:46AM
                  </div>
                </div>
              </div>
            </Biddingcard>
            
          </div>
        </Right>
      </Splitscreen>
      {/* <Footer /> */}
    </>
  );
};

export default Descpage;
