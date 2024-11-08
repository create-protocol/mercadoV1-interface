import React from "react";

import styled from "styled-components";
import Landingcardimg from "../assets/images/landingimg.png";
import Landingcardimg1 from "../assets/images/landingimg1.png"
import Landingimg from "../assets/images/Rectangle 728.png";
import Landingowner from "../assets/images/landingowner.png";
import Eth from "../assets/images/Ethereum (ETH).png";
import Heart from "../assets/images/cil_heart.png";


const Landingdiv = styled.div`
  // background: linear-gradient(
  //   180deg,
  //   rgba(0, 0, 0, 0.11) 0%,
  //   rgba(0, 0, 0, 0.53125) 48.96%,
  //   rgba(186, 104, 200, 0.53) 100%
  // );
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.11) 0%,
    rgba(0, 0, 0, 0.53125) 48.96%,
    rgba(55, 55, 55, 0.8) 100%
  );

  opacity: 0.75;
  box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  height: 23rem;
  width: 18rem;
  padding: 0.8rem;
  object-fit: cover;
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-top: 2rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Imagecont = styled.div`
  object-fit: contain;
  width: 100%;
  border-radius: 0.5rem;
  background: url(${Landingcardimg1});
  height: 14rem;
  // -webkit-box-shadow: 0 8px 6px 10px black;
  //  -moz-box-shadow: 0 8px 6px 10px black;
  // box-shadow: 5px 8px 6px 10px black inset;
  &:hover {
  }
`;

const Btn = styled.div`
  color: black;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor:pointer;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  &:hover {
    box-shadow: 0px 0px 20px #9e55cb;
  }
`;

const LandingCard = () => {
  return (
    <Landingdiv>
      <Imagecont>
        <div
          style={{
            marginTop: "60%",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            padding: "1rem 1rem",
          }}
        >
          <Btn>Place bid</Btn>
          <Btn>
            <img src={Heart} alt="like" />
            <div>365</div>
          </Btn>
        </div>
      </Imagecont>
      <div style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}>
        <img
          style={{ objectFit: "contain", width: "2.2rem" }}
          src={Landingowner}
          alt="landingimg"
        />
        <div style={{ width: "80%", textAlign: "left", marginLeft: "1rem" }}>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>Si city</div>
          <div style={{ color: "#A9A9A9", fontSize: "0.7rem" }}>
            created by @brightmac
          </div>
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "0.5rem" }}>
        <div
          style={{
            background: "black",
            width: "100%",
            height: "3rem",
            borderRadius: "0.7rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1rem",
            fontSize: ".7rem",
            fontWeight: "500",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={Eth} alt="" />
            <div style={{ marginLeft: "0.4rem" }}>0.99 ETH</div>
          </div>
          <div>Bid 12 ETH</div>
        </div>
      </div>
    </Landingdiv>
  );
};

export default LandingCard;
