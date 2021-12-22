import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import "../assets/css/nft.css";
import Market from "../abis/Marketplace.json";
import NFT from "../abis/NFT.json";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styled from "styled-components";
import { nftmarketaddress, nftaddress } from "../config";
import Loader from "react-loader-spinner";
import { sendTransaction } from './sendTransaction';
import { useParams } from "react-router-dom";
import { id } from "ethers/lib/utils";
const ShadowBtn = styled.div`
  background-color: rgb(112, 215, 49);
  color: rgb(26, 24, 24);
  font-size: 20px;
  font-weight: 700;
  width: 40%;
  border: 10px solid rgb(48, 52, 57);
  border-radius: 20px;
  padding: 6px 10px 6px 10px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 900px;
  transition: all 0.3s ease-in-out 0s;
  box-shadow: rgb(53 54 56 / 50%) 0px 16px 30px;
  margin-top: 40px;
  margin-right: 20px;
  margin-left: 20px;
  &:hover {
    -webkit-box-shadow: 0 0 8px #fff;
    box-shadow: 0 0 8px #fff;
    transition: 0.5s;
    border-radius: 20px;
  }
`;

const Nftslist = (props) => {
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  // const { id } = useParams();
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  const history = useHistory();
  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://polygon-mumbai.g.alchemy.com/v2/T-sMRF2J8t9nSNy7dBwBFNijlNhhk1ij`
    );

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);

    const data = await marketContract.fetchAllNFTs();
    console.log(data);
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          itemId:i.itemId.toNumber(),
          image: meta.data.imageCID,
          desc: meta.data.description,
          collection: meta.data.collection,
          nftContract:i.nftContract
        };
        console.log(item);
        return item;
      })
    );
    console.log("Token listed for sale.");
    const soldItems = items.filter((i) => i.sold);
    setSold(soldItems);
    setNfts(items);
    setLoadingState("loaded");
    console.log(items);
  }

  async function buyNft(nft) {
    try{
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      window.wallet = signer;
      window.provider = provider;
      const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
      console.log(nft);
      const price = ethers.utils.parseUnits(nft.price, "ether");
      console.log(nftaddress);
      console.log(nft.itemId);
      await sendTransaction(
        contract,
        "buyNFT",
        [nft.itemId],
        "You have Purchse Token Successfully"
      );
      loadNFTs();

    }catch(e){
      console.log(e);
    }
    
  }

  if (loadingState != "loaded") {
    return (
      <div
        style={{ height: "200px", alignContent: "center", marginTop: "60px" }}
      >
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  } else if (loadingState === "loaded" && !nfts.length)
    return (
      <h1 className="py-10 px-20 text-3xl" style={{ color: "white" }}>
        No assets created
      </h1>
    );
  return (
    <div>
      <div className="p-4">
        <div className=" my-4 ml-4 ">
          <div className="m-card-content" style={{ justifyContent: "center" }}>
            {nfts.map((nft, i) => (
              <div
                key={i}
                className="row nft-card-container m-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "grey",
                  paddingBottom: "10px",
                }}
              >
                <Link to={`/asset/${nft.itemId}`}>
                  <div className="nft-img-container">
                    <img className="nft-img" src={nft.image} alt="logo"></img>
                    <p
                      style={{
                        fontWeight: "bold",
                        margin: "10px",
                        color: "white",
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>{nft.price} Eth</div>
                      <div>{nft.collection}</div>

                      <div>
                        <span>
                          {nft.seller.substring(0, 6) +
                            "........." +
                            nft.seller.slice(-3)}
                        </span>
                      </div>
                    </p>
                  </div>
                </Link>

                <ShadowBtn
                  style={{ marginTop: "0" }}
                  onClick={() => buyNft(nft)}
                >
                  Buy
                </ShadowBtn>
              </div>

              // </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4">
        {Boolean(sold.length) && (
          <div>
            <h2 className="text-2xl py-2">Items sold</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {sold.map((nft, i) => (
                <div
                  key={i}
                  className="border shadow rounded-xl overflow-hidden"
                >
                  <img
                    style={{
                      width: "20rem",
                      height: "20rem",
                      objectFit: "contain",
                    }}
                    src={nft.image}
                    className="rounded"
                    alt=""
                  />
                  <div className="p-4 bg-black">
                    <p className="text-2xl font-bold text-red">
                      Price - {nft.price} Eth
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nftslist;
