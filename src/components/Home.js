import React from "react";
import hero from "../assets/images/mercado.png";
import "../assets/css/home.css";
// import Cardcontainer from "../containers/CardContainer";
import Nftslist from "./NFTsList";
// import Creatorslist from "./CreatorsList";
import sqr from "../assets/images/space1.png";
import cir from "../assets/images/cir.jpg";
// import four from "../assets/images/four.png";
//import battle1 from "../assets/images/1.jpg";
// import battle4 from "../assets/images/battle4.jpg";
// import battle2 from "../assets/images/battle2.jpg";
// import battle3 from "../assets/images/battle3.jpg";
// import Dropmenucontainer from "./DropmenuContainer";
// import page5 from './MintNft'
import Footer from "./Footer";
import styled from "styled-components";

const ShadowBtn = styled.div`
  background-color: green;
  color: white;
  padding: 0.3rem 1.2rem;
  alignitems: center;
  borderradius: 6px;
  cursor: pointer;
  border: 8px solid black;
  border-radius:10px;
  fontsize: 2.5rem;
  lineheight: 2rem;
  textalign: center;

  &:hover{
    -webkit-box-shadow: 0 0 8px #fff;
        box-shadow: 0 0 8px #fff;
        transition:.5s;
  }
`;
const Home = (props) => {
  return (
    <div>
      <div className="hero-container my-2">
        <div className="hero my-4">
          <img src={hero} style={{ width: "100%" }} alt="blockchain"></img>
        </div>
        {/* <div className="hero-sub-heading">
          BRINGING THE POWER BACK INTO THE HANDS OF CREATORS
        </div> */}
        <div className="action-container my-4">
          <ShadowBtn
            style={{fonstSize:"3rem"}}
            onClick={() => props.history.push("/page5")}
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
      <Footer />
    </div>
  );
};

export default Home;
