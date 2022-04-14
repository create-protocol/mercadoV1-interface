import React, { useState, useReducer, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import LandingCard from "./Newcard";
import { useSelector, useDispatch } from 'react-redux';
import ArtistPageLine from "../assets/images/Artistpageline.png";
import styled from "styled-components";
import { toggleWalletPopup } from "../store";
import { getWalletNfts } from '../store/profile/action';
import Landingcard from "./Profilecardbig";
import { Link } from "react-router-dom";
import { Spin } from 'antd';
const Filternfts = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 140%;
  margin-right: 1.2rem;
  color: #ffffff;
  cursor: pointer;
  padding-bottom: 0.2rem;
`;

const initialstate = {
  Collected: true,
  Created: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Collected": {
      return {
        Collected: true,
        Created: false,
      };
    }
    case "Created": {
      return {
        Collected: false,
        Created: true,
      };
    }
    default: {
      return {
        Collected: true,
        Created: false,
      };
    }
  }
};
const ArtisPage = () => {
  const [art, setArt] = useState(false);
  const [all, setall] = useState(true);
  const [music, setMusic] = useState(false);
  const dispatch = useDispatch();
  const [filterOpen, setFilterOpen] = useState(false);
  const [state, dispatchTemp] = useReducer(reducer, initialstate);
  const [ownerresponse, setOwnerresponse] = useState([]);
  const walletData = useSelector(state => state.wallet.wallet);
  const nftDataLoading = useSelector(state => state.profile.nftDataLoading);
  const NFTData = useSelector(state => state.profile.nftData)

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const [data, setData] = useState([]);


  useEffect(() => {
    console.log("here", walletData);
    if (walletData && walletData.address) {
      console.log('wallet address', walletData);
      dispatch(getWalletNfts({
        ownerAddr: "0xBbEacCEEaC84Fc6226523aa9f8440f2fbE4e6125"
      }));
    }
    else {
      dispatch(toggleWalletPopup());
    }
  }, [walletData, dispatch]);
  // console.log(ownerresponse.media[0].gateway);
  console.log("bhakk", NFTData);
  const createURI = (uri) => uri ? uri.slice(0, 7) === "ipfs://" ? 'https://ipfs.infura.io/ipfs/' + uri.slice(7) : uri : null;
  
  if (nftDataLoading) {
    return (
      <div
        style={{ minHeight: "100vh", alignContent: "center", marginBottom: "100px", justifyContent: 'center' }}
      >
        <div style={{ minHeight: '100vh', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Spin size="large" />
        </div>
      </div>
    );
  }
  return (
    <div style={{ height: "250vh", width: "100%" ,paddingTop:"10rem"}}>
      <PageHeader subtitle="Home  >  Blogs  >  An open call to artists" />
      <div className="blogDetail__container" style={{ display:"flex",alignItems:"start",justifyContent:"space-between" }}>
        <section className="profile" style={{ width: "25%" }}>
          <div className="profile__wrapper">
            <div className="profile__images">
              <div id="profile_banner">
                <img src="/profile_banner.png" alt="profile banner" />
              </div>
              <div id="profile_pic">
                <img src={"//joeschmoe.io/api/v1/random"} alt="profile image" />
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__name">
                <h4>Bright Mba </h4>
                <img
                  style={{ marginLeft: "0.25rem" }}
                  src="/verified.svg"
                  alt="verified"
                />
              </div>
              <p style={{color:"#ffffff",fontSize:"1.2rem"}}>{walletData && walletData.address}</p>
              <h5 className="profile__username">@brightmac</h5>
              <p className="profile__bio">
                I am an artist of the real world with creative ideas of the
                ancients arts in benin, Nigeria
              </p>
            </div>
          </div>
          <div className="profile__share" style={{textAlign:"left"}}>
            <br></br>
            <div style={{ display: "inline" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600px",
                }}
              >
                CREATED ({NFTData.totalCount})
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600px",
                }}
              >
                COLLECTED ({NFTData.totalCount})
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600px",
                }}
              >
                FAVOURITES (0)
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600px",
                }}
              >
                OFFERS (0)
              </p>
            </div>
          </div>
        </section>
        <section className="blogDetail" style={{width:"70%",display:"flex",alignItems:"start",flexDirection:"column"}}>
          <div style={{ display: "flex",alignItems:"start" }}>
            <Filternfts
              onClick={() => {
                setArt(false);
                setMusic(false);
                setall(true);
              }}
            >
              {all === true ? (
                <div style={{ textDecoration: "underline", cursor: "pointer" }}>
                  All
                </div>
              ) : (
                `All`
              )}
            </Filternfts>
            <Filternfts
              onClick={() => {
                setall(false);
                setMusic(false);
                setArt(true);
              }}
            >
              {art === true ? (
                <div style={{ textDecoration: "underline" }}>Art</div>
              ) : (
                `Art`
              )}
            </Filternfts>
            <Filternfts
              onClick={() => {
                setArt(false);
                setall(false);
                setMusic(true);
              }}
            >
              {music === true ? (
                <div style={{ textDecoration: "underline" }}>Music</div>
              ) : (
                `Music`
              )}
            </Filternfts>
          </div>

          <img src={ArtistPageLine} style={{ width:"100%" }} />
          {all&&<div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "flex-start",
              flexWrap: "wrap",
             
            }}
          >

<div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", width: "100%", alignItems: "start", justifyContent: "flex-start", flexWrap: "wrap" }}>
              {NFTData && NFTData.ownedNfts && NFTData.ownedNfts.map(ele =>
                <Link to={`/asset/${ele.contract["address"]}/${ele.id["tokenId"]}`} style={{textDecoration:"none",color:"white"}}>
                  <Landingcard
                    image={createURI(ele.metadata.image)}
                    title={ele.title}
                    desc={ele.description}
                    symbol={ele.symbol + ' #' + ele.token_id} /></Link>
              )}
            </div>
          </div>



          </div>}
          {art&&<div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              width: "55rem",
            }}
          >

<div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "start",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                    marginLeft: "1.5rem",
                  }}
                >
                  {NFTData && NFTData.ownedNfts && NFTData.ownedNfts.map(ele =>
                    <Landingcard
                      image={createURI(ele.metadata.image)}
                      title={ele.title}
                      desc={ele.description} />
                  )}

                </div>

          </div>}
          {music&&<div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              width: "55rem",
            }}
          >

<div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "start",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                    marginLeft: "1.5rem",
                  }}
                >
                  {NFTData && NFTData.ownedNfts && NFTData.ownedNfts.map(ele =>
                    <Landingcard
                      image={createURI(ele.metadata.image)}
                      title={ele.title}
                      desc={ele.description} />
                  )}

                </div>
          </div>}
        </section>
      </div>
    </div>
  );
};

export default ArtisPage;
