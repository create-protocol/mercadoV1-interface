import React,{useEffect,useState} from "react";

import styled from "styled-components";
import Landingcardimg from "../assets/images/landingimg.png";
import Landingcardimg1 from "../assets/images/landingimg1.png"
import Landingimg from "../assets/images/Rectangle 728.png";
import Landingowner from "../assets/images/landingowner.png";
import Eth from "../assets/images/Ethereum (ETH).png";
import Heart from "../assets/images/cil_heart.png";
import axios from "axios";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
const Landingdiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.11) 0%,
    rgba(0, 0, 0, 0.53125) 48.96%,
    rgba(55, 55, 55, 0.8) 100%
  );

  opacity: 0.75;
  box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  height: 58vh;
  width: 19vw;
  padding: 0.8rem;
  object-fit: cover;
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-top: 2rem;
  margin-left:.5rem;
  margin-right:.5rem;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Imagecont = styled.div`
  object-fit: contain;
  width: 100%;
  border-radius: 0.5rem;
  background: url(${Landingcardimg1});
  background-size: cover;
  height:35vh;
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

const LandingCard = (props) => {
  // const [image, setImage] = useState('');

  // const fetchImage = async () => {
  //   const token_metadata = await axios.get(props.image);
  //   const image = token_metadata.data.image;
  //   setImage(image);

  // }

  // useEffect(()=>{
  //   // fetchImage();
  //   console.log(props.image)
  // })
  const p = props.image && props.image.image && props.image.image.slice(0,7) === "ipfs://" ? 'https://ipfs.infura.io/ipfs/' + props.image.image.slice(7) : props.image?.image;
  console.log(p);
  return (
    <Landingdiv>
      {/* <img src={image} alt="image" /> */}
      <Imagecont style={{
        background: `url(${p})`,
        backgroundSize: "cover"
        }}>
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
      <div style={{ marginTop: "3vh", display: "flex", alignItems: "center",height:"8vh" }}>
        <img
          style={{ objectFit: "contain", width: "2.2rem" }}
          src={Landingowner}
          alt="landingimg"
        />
        <div style={{ width: "80%", textAlign: "left", marginLeft: "1rem" }}>
          <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{props.name }</div>
          <div className="text-truncate" style={{ color: "#A9A9A9", fontSize: "0.7rem" }}>
            created by {props.owner }
          </div>
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "0.5rem" }}>
        <div
          style={{
            background: "black",
            width: "100%",
            height: "8vh",
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
            <div style={{ marginLeft: "0.4rem" }}>{props.symbol }</div>
          </div>
          <div>Bid 12 ETH</div>
        </div>
      </div> 
    </Landingdiv>
  );
};

export default LandingCard;
