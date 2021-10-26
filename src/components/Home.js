import React from "react";
import hero from "../assets/images/hero.png";
import "../assets/css/home.css";
import Cardcontainer from "../containers/CardContainer";
import Nftslist from "./NFTsList";
import Creatorslist from "./CreatorsList";
import sqr from "../assets/images/space1.png";
import cir from "../assets/images/cir.jpg";
import four from "../assets/images/four.png";
//import battle1 from "../assets/images/1.jpg";
import battle4 from "../assets/images/battle4.jpg";
import battle2 from "../assets/images/battle2.jpg";
import battle3 from "../assets/images/battle3.jpg";
import Dropmenucontainer from "./DropmenuContainer";
const Home = (props) => {
  return (
    <div>
      <div className="hero-container my-4">
        <div className="hero my-4">
          <img src={hero} style={{ width: "100%" }} alt="blockchain"></img>
        </div>
        <div className="hero-sub-heading">
          BRINGING THE POWER BACK INTO THE HANDS OF CREATORS
        </div>
        <div className="action-container my-4">
          <div className="action-btn">SIGN UP</div>
          <div
            onClick={() => props.history.push("/mint-nft")}
            className="action-btn"
          >
            MINT NFT
          </div>
        </div>
      </div>
      <div>
        <Cardcontainer title={"NFTS"} suffix={"EXPLORE"}>
          <Nftslist sqr={sqr} cir={cir}></Nftslist>
        </Cardcontainer>
      </div>
      <div>
        <Cardcontainer title={"CREATORS"} suffix={"DISCOVER"}>
          <Creatorslist></Creatorslist>
        </Cardcontainer>
      </div>
      <div>
        <Cardcontainer title={"COLLECTIONS"} suffix={"EXPLORE"}>
          <Nftslist sqr={four} cir={cir}></Nftslist>
        </Cardcontainer>
      </div>
      <div>
        <br />
      </div>
      <div className="my-4">
        <Dropmenucontainer></Dropmenucontainer>
      </div>

      <div>
        <br />
      </div>
      <div className=" my-4 ml-4 ">
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
      </div>
    </div>
  );
};

export default Home;
