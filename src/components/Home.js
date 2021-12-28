import React from "react";
import "../assets/css/home.css";
import Nftslist from "./NFTsList";
import sqr from "../assets/images/space1.png";
import cir from "../assets/images/cir.jpg";
import Footer from "./Footer";
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
  &:hover{
    -webkit-box-shadow: 0 0 8px #fff;
        box-shadow: 0 0 8px #fff;
        transition:.5s;
        border-radius:20px
  }
`;
const Home = (props) => {
  return (
    <div>

      

      <div className="hero-container my-2">
        <div className="hero my-4">

        <div style={{width:"100%",height:"100%",objectFit:"contain"}}>
        
        </div>
        
          <h1 style={{ color: "#cccccc" }}>mercado.studio</h1>
        </div>
        
       
        <div className="action-container my-4">
          <ShadowBtn
            style={{ fonstSize: "3rem", width: "150px" }}
            onClick={() => props.history.push("/asset/create")}
          >
            CREATE
          </ShadowBtn>
        </div>
      </div>
      <div>
        <br />
        <br />
        {/* <button><h1 style={{color:"grey",textAlign:"center",marginTop:"30px",width:"20px",height:"60px"}}>EXPLORE </h1></button>
      <button><span style={{color:"white",marginLeft:"10px",fontSize:"5px"}}>MY ASSETS</span> </button>
       */}
        <Nftslist sqr={sqr} cir={cir}></Nftslist>
      </div>

      {/* <div>
        <Cardcontainer style={{display:"flex",flexWrap:"wrap"}}title={"COLLECTIONS"} suffix={"EXPLORE"}>
          <Nftslist sqr={four} cir={cir}></Nftslist>
        </Cardcontainer>
      </div> */}
      <div>
        <br />
      </div>
      {/* <div className="my-4">
        <Dropmenucontainer></Dropmenucontainer>
      </div> */}

      <div>
        <br />
      </div>
      {/* <div className=" my-4 ml-4 ">
        <div className="m-card-content ">
          <div className=" nft-card-container m-2">
            <div className="nft-img-container">
              <img className="nft-img" src={sqr} alt="logo"></img>
            </div>
          </div>
          <div className=" nft-card-container m-2">
            <div className="nft-img-container">
              <img className="nft-img" src={battle2} alt="logo"></img>
            </div>
          </div>
          <div className=" nft-card-container m-2">
            <div className="nft-img-container">
              <img className="nft-img" src={battle3} alt="logo"></img>
            </div>
          </div>
          <div className=" nft-card-container m-2">
            <div className="nft-img-container">
              <img className="nft-img" src={battle4} alt="logo"></img>
            </div>
          </div>
        </div>
      </div> */}

      <div style={{ height: "250px" }}></div>

      {/* <FetchMyNFT/> */}
      <Footer />
    </div>
  );
};

export default Home;
