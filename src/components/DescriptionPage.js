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
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

import { useHistory } from "react-router";
// import { id } from "ethers/lib/utils";
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
  height: 100vh;

  @media (max-width: 1000px) {
    width: 100%;
    height: 60%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100vh;
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

const DescriptionPage = (props) => {
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  const [obj, setobj] = useState({});
  const [loadingState, setLoadingState] = useState("not-loaded");
  const { itemid } = useParams();
  console.log(itemid);
  var itemId = parseInt(itemid);
  useEffect(() => {
    load2(itemId);
  }, []);   
  
  async function load2(itemId) {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://polygon-mumbai.g.alchemy.com/v2/T-sMRF2J8t9nSNy7dBwBFNijlNhhk1ij`
    );

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    
    
    itemId = ethers.BigNumber.from(itemId);
    const data = await marketContract.fetchIndividualNFT(itemId);
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const tokenUri = await tokenContract.tokenURI(data.tokenId.toNumber());
        const meta = await axios.get(tokenUri);
    var item = {
      itemId: data.itemId,
      nftContract: data.nftContract,
      tokenId: data.tokenId,
      seller: data.seller,
      price: data.price.toNumber(), // price in wei
      image: meta.data.imageCID,
      name: meta.data.name,
      desc: meta.data.description,
    };

    console.log("item: ", item);
    setobj(item)

    // const items = await Promise.all(
    //   data.map(async (i) => {
    //     const tokenUri = await tokenContract.tokenURI(i.tokenId);

    //     console.log(meta);
    //     let price = ethers.utils.formatUnits(i.price.toString(), "ether");
    //     let item = {
    //       price,  
    //       tokenId: i.tokenId.toNumber(),
    //       seller: i.seller,
    //       image: meta.data.image,
    //       desc: meta.data.description,
    //     };
    //     console.log(item);
    //     return item;
        
    //   })
    // ); 
    setLoadingState("loaded");
  }
  async function buy2(nft) {
    // console.log("here");
    // console.log(nft.pr);
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
    const price = ethers.utils.formatEther(nft.price.toString());
    // console.log(price);
    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.itemId,
      {
        value: nft,
      }
    );
    await transaction.wait();
    load2();
  }

  console.log(obj);
  return (
    <Splitscreen>
      {!obj.image?<div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}><Loader type="Puff" color="#00BFFF" height={100} width={100} /></div>:
      <>
      <Left>
        
        <div
          style={{
            padding: "2rem",
            height: "100%",
            width: "80%",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "0",
            overflow: "hidden",
          }}
        >
          <Zoom>
            <img
              src={obj.image}
              // src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
              alt="nft"
              style={{ width: "100%", borderRadius: "15px", height: "500px" }}
            />
          </Zoom>
        </div>
      </Left>
      <Right>

        <h2 style={{ color: "white" }}> Name: {obj.name}</h2>
        <h2 style={{ color: "white" }}> {obj.desc}</h2>
        <h2
          style={{
            color: "white",
            textOverflow: "none",
            fontSize: "1rem",
            letterSpacing: "2px",
          }}
        >
          seller:{obj.seller}
        </h2>
        <h2 style={{ color: "white" }}>
          Price:{obj.price} Wei
        </h2>
        <Signupbtn
          style={{ background: "white", color: "black" }}
          onClick={() => buy2(nfts)}
        >
          BUY
        </Signupbtn>
      </Right></>}
    </Splitscreen>
  );
};

export default DescriptionPage;
