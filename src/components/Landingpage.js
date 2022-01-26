import React from "react";
import styled from "styled-components";
import Landingimg from "../assets/images/landingpage.png";
import Landingcardimg from "../assets/images/landingimg.png";
import Landingowner from "../assets/images/landingowner.png";
import Eth from "../assets/images/Ethereum (ETH).png";
import Heart from "../assets/images/cil_heart.png";
import LandingCard from "./LandingCard";
import Sellerimg from "../assets/images/sellerimg.png";
import Seller from "./Seller";
import TrendingCarousel from "./TrendingCarousel";
import Fundingimg from "../assets/images/FUNDING.png";
import contactus from "../assets/images/contactus.png";
import Createsell from "../assets/images/createsell.png";
import Card1 from "../assets/images/card.png";
import Card2 from "../assets/images/card1.png";
import Card3 from "../assets/images/card2.png";
import Trending1 from "../assets/images/trending1.png";
import { Link } from "react-router-dom";
import Trendingcardsmall from "./Trendingcardsmall";

import Sepline from "../assets/images/Vector 87.png";
import TopCollectionCard from "./TopCollectionCard";

const ImageContainer = styled.div`
  background: url(${Fundingimg});
  object-fit: contain;
  background-position: center;
  background-size: cover;
  backgroundrepeat: no-repeat;
  height: 40rem;
  width: 100%;
  margintop: 0;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;

  color: #f4f4f4;

  text-align: left;
  padding-left: 8rem;
  padding-top: 11rem;
`;
const Transparentbtn = styled.div`
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  filter: drop-shadow(2px 4px 50px rgba(96, 219, 212, 0.12));
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 2.9rem;
  cursor: pointer;
`;

const HeadingText = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 140%;
`;

const Createsmallh = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 160%;
  text-align: left;
  color: #d14f8c;
`;

const Createmaint = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  line-height: 140%;
  color: #f4f4f4;
  margin-top: 1.2rem;
`;

const Trendingimagetext=styled.div`
height:100%;
width:100%;

display:flex;
padding:2rem;
padding-top:1.5rem;

`

const Cardtext=styled.div`
background: rgba(0, 0, 0, 0.6);
border-radius: 5px;
font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: .7rem;
line-height: 1.5rem;
color: #FFFFFF;
width:max-content;
padding:1rem;
height:2rem;
display:flex;
align-items:center;


`
const Landingpage = () => {
  return (
    <div
      style={{
        fontFamily: "Century Gothic",
        fontStyle: "normal",
        color: "white",
        width: "100%",
        marginTop: "6rem",
      }}
    >
      <div
        style={{
          width: "100%",
          // backgroundImage: `url(require("../assets/images/FUNDING PAGE.png"))`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ImageContainer>
          <div style={{ color: " #D14F8C", fontSize: ".9rem" }}>
            Buying & selling NFTs made easy through mercado.studio
          </div>
          <div style={{ fontSize: "3.7rem", lineHeight: "4.5rem" }}>
            Discover,
            <br /> collect and sell <br />
            NFTs{" "}
          </div>
          <div style={{ fontSize: "1.2rem" }}>
            Explore the NFT marketplace dedicated to creators
          </div>
          <div style={{ display: "flex", marginTop: "2rem" }}>
            <Transparentbtn>Explore NFTs</Transparentbtn>
            <Transparentbtn style={{ marginLeft: "2rem" }}>
              Create NFT
            </Transparentbtn>
          </div>
        </ImageContainer>
      </div>

      {/* Trending Carousel */}

      <div
        style={{
          width: "100%",
          paddingTop: "9rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "8rem",
            paddingRight: "8rem",
            flexWrap: "wrap",
          }}
        >
          <HeadingText>Trending Creations</HeadingText>
          {/* <Transparentbtn>Explore more artists</Transparentbtn> */}
        </div>
        <div
          style={{
            width: "100%",
            paddingLeft: "7rem",
            paddingRight: "7rem",
            marginTop: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "30%" }}>
            <div
              style={{
                width: "23rem",
                height: "25rem",
                backgroundImage: `url(${Trending1})`,
                objectFit: "fill",
                borderRadius: "1rem",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Trendingimagetext>
                <Cardtext>Psychedelic art</Cardtext>
              </Trendingimagetext>
            </div>
          </div>
          <div
            style={{
              width: "67%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "24rem",
              flexWrap: "wrap",
              marginTop: "-1rem",
            }}
          >
            <Trendingcardsmall />
            <Trendingcardsmall />
            <Trendingcardsmall />
            <Trendingcardsmall />
            <Trendingcardsmall />
            <Trendingcardsmall />
            <Trendingcardsmall />
            <Trendingcardsmall />
          </div>

          {/* <TrendingCarousel /> */}
        </div>
      </div>

      {/* Top Collections */}
      <div
        style={{
          width: "100%",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingTop: "9rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <HeadingText>Top Collections</HeadingText>
          <Transparentbtn>Explore all collections</Transparentbtn>
        </div>
        <div style={{ width: "100%" }}>
          <TopCollectionCard />
          <TopCollectionCard />
          <TopCollectionCard />
          <TopCollectionCard />
          <TopCollectionCard />
          <TopCollectionCard />
        </div>
      </div>

      {/* Featured Assets */}

      <div
        style={{
          width: "100%",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingTop: "9rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <HeadingText>Featured Assets</HeadingText>
          <Transparentbtn>Explore more</Transparentbtn>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
        </div>
      </div>

      {/* Top Seller */}

      <div
        style={{
          width: "100%",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingTop: "9rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <HeadingText>Top Sellers</HeadingText>
          {/* <Transparentbtn>Explore more artists</Transparentbtn>  */}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "2rem",
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
          <div
            style={{ display: "flex", marginTop: "1rem", alignItems: "start" }}
          >
            <div
              style={{ fontWeight: "bold", color: "#BA68C8", fontSize: "1rem" }}
            >
              1.
            </div>
            <Seller />
          </div>
        </div>
        {/* <img  src={Sepline} style={{width:"60rem",marginTop:"4rem"}}/> */}
      </div>

      {/* Create and sell nfts */}

      {/* <div
        style={{
          width: "100%",
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingTop: "9rem",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column",
          marginBottom:"5rem"
        }}
      >
        <img style={{width:"35rem"}} src={Createsell} alt="heading"/>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop:"7rem"
          }}
        >
          <div style={{ width: "47%", display: "flex",flexWrap:"wrap" }}>
            <img src={Card1} style={{height:"6rem",width:"6rem"}} alt="C1"/>
            <div style={{marginLeft:"3rem",width:"70%"}}>
              <Createsmallh>Set up your Wallet</Createsmallh>
              <Createmaint>Connect wallet by clicking the wallet icon in the top right corner. Learn about the wallets we support.</Createmaint>
            </div>
          </div>
          <div style={{ width: "47%", display: "flex",flexWrap:"wrap" }}>
            <img src={Card2} style={{height:"6rem",width:"6rem"}} alt="C1"/>
            <div style={{marginLeft:"3rem",width:"70%"}}>
              <Createsmallh>Create Your Collection</Createsmallh>
              <Createmaint>Click Create and Add social links, a description, profile & banner images, and set a secondary sales fee.</Createmaint>
            </div>
          </div>
          <div style={{ width: "47%", display: "flex",marginTop:"5rem",flexWrap:"wrap" }}>
            <img src={Card3} style={{height:"6rem",width:"6rem"}} alt="C1"/>
            <div style={{marginLeft:"3rem",width:"70%"}}>
              <Createsmallh>Add Your NFTs</Createsmallh>
              <Createmaint>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs</Createmaint>
            </div>
          </div>
          <div style={{ width: "47%", display: "flex",marginTop:"5rem",flexWrap:"wrap" }}>
            <img src={Card1} style={{height:"6rem",width:"6rem"}} alt="C1"/>
            <div style={{marginLeft:"3rem",width:"70%"}}>
              <Createsmallh>List Them For Sale</Createsmallh>
              <Createmaint>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs</Createmaint>
            </div>
          </div>
        </div>
        <Link to='/asset/create' style={{textDecoration:"none",color:"white"}}><Transparentbtn style={{marginTop:"3rem"}}>Create NFT</Transparentbtn></Link>
      </div> */}
    </div>
  );
};
export default Landingpage;
