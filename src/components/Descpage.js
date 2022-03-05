import React from "react";
import { ethers } from "ethers";
import axios from "axios";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Market from "../ethereum/Marketplace.json";
import NFT from "../ethereum/NFT.json";
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
  width: 130%;
  margin-left: auto;
  height: 120vh;
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
background: linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0.53125) 48.96%, rgba(55, 55, 55, 0.8) 100%);
opacity: 0.75;
box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  margin-left: 0;
  margin-top: 0.7rem;
`;
const Mainheading = styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: 600;
font-size: 2.3rem;
line-height: 140%;`

const Desctext = styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: normal;
font-size: 1rem;
line-height: 160%;
color: #A9A9A9;`

const Biddingtext = styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: 600;
font-size: 1.5rem;
line-height: 140%;
margin-top:1rem;`

const Leftheading = styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: normal;
font-size: 14px;
margin-top:3rem;
color: #A9A9A9;
line-height:0.5rem;
`

const Lefttext = styled.div`
font-family: Century Gothic;
font-style: normal;
font-size: 18px;
line-height:0;
`
const Descpage = () => {

  const { item1,item2 } = useParams();
  //itemid = itemid.toNumber();
  var token_address = ethers.BigNumber.from(item1);
  var itemId = ethers.BigNumber.from(item2);
  console.log(token_address,itemId);
  

  const [data, setData] = useState();

  const fetchData = async () => {
    console.log("hello fromd sesc")
    const collectionTop = [
      '0x59468516a8259058bad1ca5f8f4bff190d30e066',
      '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      '0xed5af388653567af2f388e6224dc7c4b3241c544',
      '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'
    ]
    const collectionTopArr = [...collectionTop, ...collectionTop, ...collectionTop, ...collectionTop, ...collectionTop] // To collect data of 5 NFTs

    const responseAllNFT = await Promise.all(
      collectionTopArr.map(async (ele, index) => {
        const id = parseInt(index / 4) + 1;
        const res = await axios.get('https://deep-index.moralis.io/api/v2/nft/' + ele + '/' + id + '?chain=eth',
          { 'headers': { "X-API-Key": 'ElMD1BX3aHki68CAPToKw00tx6W6JdEDru1JAH0NMl2KXGPsEylGW1DetmpGpnip' } });
        return res.data;
      })
    );
    setData(responseAllNFT);
    console.log("response from desc2");
    console.log(responseAllNFT);
  }

  useEffect(() => {
    fetchData();

  })
  return (
    <>
      <Splitscreen style={{ marginTop: "7rem" }}>
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
              textAlign: "left"
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
                  height: "70vh",
                  objectFit: "cover",
                }}
              />
            </Zoom>
            <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={Landingowner} style={{ marginRight: "1rem" }} />
              <Lefttext style={{ color: "#A9A9A9" }}>created by @brightmac</Lefttext>
            </div>
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
              malesuada.
            </Desctext>
            {/* {obj.name} */}
          </p>



          <div
            style={{
              width: "90%",
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
                  marginTop: "1rem"
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={Eth} alt="" />
                  <div style={{ marginLeft: "0.4rem" }}>0.99 ETH</div>
                </div>
                <div style={{ background: "#229CEA", padding: ".7rem", borderRadius: "0.5rem", cursor: "pointer" }}>Buy now</div>
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
                  marginTop: "1rem"
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
              color: "white",
              marginTop: "5rem"
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
                  height: "100%",
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
                    color: "#A9A9A9"
                  }}
                >
                  <div style={{ fontSize: "1rem", fontWeight: "normal" }}>
                    By woodshelf
                  </div>
                  <div style={{ fontSize: "1rem", marginTop: "1rem" }}>
                    Bid at 20Eth
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
                    height: "100%",
                    color: "#A9A9A9",
                  }}
                >
                  <div style={{ fontSize: "1rem" }}>
                    365 ETH
                  </div>
                  <div style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
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
