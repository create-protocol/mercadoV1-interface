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
// const Seller=styled.div`
// height:7rem;
// width:15rem;
// background:#121212;
// border-radius:1rem;
// margin-left:1rem;
// display:flex;
// align-items:center;
// // justify-content:center;
// padding:1rem;
// `
const Landingpage = () => {
  return (
    <div
      style={{
        fontFamily: "Century Gothic",
        fontStyle: "normal",
        color: "white",
        width: "100%",
        marginTop:"6rem"
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
          }}
        >
          <HeadingText>Trending Creations</HeadingText>
          {/* <Transparentbtn>Explore more artists</Transparentbtn> */}
        </div>
        <div
          style={{ width: "100%", paddingLeft: "5rem", paddingRight: "5rem" }}
        >
          <TrendingCarousel />
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
          <Transparentbtn>Explore more artists</Transparentbtn>
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
      </div>
    </div>
  );
};
export default Landingpage;
