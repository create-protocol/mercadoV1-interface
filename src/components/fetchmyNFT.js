import React from "react";

import "../assets/css/home.css";
import Nftslist from "./NFTsList";
import sqr from "../assets/images/space1.png";
import cir from "../assets/images/cir.jpg";
import styled from "styled-components";


const ShadowBtn = styled.div`
background-color: rgb(112, 215, 49);
color: rgb(26, 24, 24);
font-size: 20px;
font-weight: 700;
width: 200%;
border: 10px solid rgb(48, 52, 57);
border-radius: 20px;
padding:6px 10px 6px 10px;
cursor: pointer;
margin-top: 0.625rem;
max-width: 900px;
transition: all 0.3s ease-in-out 0s;
box-shadow: rgb(53 54 56 / 50%) 0px 16px 30px;
margin-top:40px;
margin-right: 20px;
margin-left: 20px;
}
  &:hover{
    -webkit-box-shadow: 0 0 8px #fff;
        box-shadow: 0 0 8px #fff;
        transition:.5s;
        border-radius:20px
  }
`;
const FetchMyNFT = (props) => {
  return (
    <div>

      

      <div className="hero-container my-2">
        <div className="hero my-4">

        <div style={{width:"100%",height:"100%",objectFit:"contain"}}>
        
        </div>
        
          <h1 style={{ color: "#cccccc" }}>My Bids</h1>
        </div>
       
       
      </div>
      <div>
        <br />
        <br />
       
        <Nftslist sqr={sqr} cir={cir}></Nftslist>
      </div>

     
      <div>
        <br />
      </div>
      

      <div>
        <br />
      </div>
      
      <div style={{ height: "250px" }}></div>
     
    </div>
  );
};

export default FetchMyNFT;
