import React, { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { useSelector, useDispatch } from "react-redux";
import contactus from "../assets/images/contactus.png";
import filterimage from "../assets/images/Filter.png";
import Landingcard from "./Profilecardbig";
import FillterCard from "./FillterCard";
import { Link, useHistory } from "react-router-dom";
import { Card, Image, Spin, Tooltip } from "antd";
import { FileSearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "../assets/css/filterdropdown.css";
import Profileimg from "../assets/images/profileimg.png";
import Tick from "../assets/images/tickimg.png";
import Share from "../assets/images/share.png";
import Settings from "../assets/images/settings.png";
import Filterline from "../assets/images/filterbottomline.png";
import CollectedCard from "./CollectedCard";
import { toggleWalletPopup } from "../store";
import { getWalletNfts } from "../store/profile/action";
import axios from "axios";
import { getEllipsisTxt } from "../utils/formatters";
import { height } from "@mui/system";
import exLink from "../assets/images/exLink.svg";
import heartIcon from "../assets/images/heart.svg";
const { Meta } = Card;

const ImageContainer = styled.div`
  background: #313131;
  height: 15rem;
  width: 100%;
  margintop: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 140%;
  color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 29px;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const InnerText = styled.div`
  font-style: normal;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin-bottom: 4px;
  color: #ffffff;
`;

const Radio = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 26px;
`;

const FormLabel = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 26px;
  margin-top: 2rem;
`;

const InputForm = styled.input`
  background: none;
  margin-top: 1rem;
  color: white;
  border: none;
  border-bottom: 1px solid #565656;
`;

const Whitebtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  width: 204px;
  height: 62px;
  background: #b4b4b4;
  border-radius: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 160%;
  color: #606060;
`;

const Profilediv = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  flex-direction: column;
  margin-bottom: -17rem;
`;

const Filtercurved = styled.div`
  background: #414141;
  border: 1.5px solid #414141;
  box-sizing: border-box;
  border-radius: 23.5px 23.5px 2px 2px;
  width: 15%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-right: 0.1rem;
  cursor: pointer;
`;

const Filtercurveddiv = styled.div`
  border-bottom: 1px solid
    linear-gradient(
      90deg,
      rgba(128, 147, 255, 0.25) 9.45%,
      #7d9bfa 26.47%,
      #60dbd4 72.88%,
      rgba(92, 228, 207, 0.25) 89.94%
    );
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

const Userprofile = () => {
  const dispatch = useDispatch();
  const [filterOpen, setFilterOpen] = useState(false);
  const [state, dispatchTemp] = useReducer(reducer, initialstate);
  const [ownerresponse, setOwnerresponse] = useState([]);
  const walletData = useSelector((state) => state.wallet.wallet);
  const nftDataLoading = useSelector((state) => state.profile.nftDataLoading);
  const NFTData = useSelector((state) => state.profile.nftData);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const [data, setData] = useState([]);
  const history = useHistory();
  console.log(NFTData, "this is nft data");
  // const nftCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  useEffect(() => {
    if (walletData && walletData.address) {
      dispatch(
        getWalletNfts({
          ownerAddr: walletData.address,
        })
      );
    } else {
      dispatch(toggleWalletPopup());
    }
  }, [walletData, dispatch]);

  const createURI = (uri) =>
    uri
      ? uri.slice(0, 7) === "ipfs://"
        ? "https://ipfs.infura.io/ipfs/" + uri.slice(7)
        : uri
      : null;

  if (nftDataLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          alignContent: "center",
          marginBottom: "100px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      </div>
    );
  }
  return (
    <>
      <div style={{ width: "100%", paddingTop: "10rem" }}>
        <ImageContainer>
          <Profilediv>
            <img
              src="https://lh3.googleusercontent.com/1VgJxCD6oXwqqcXq3hkg4DZsK2v7oU6RW4VNl-AnA7zBrU5hWCJHR78piYWVIXhbH89JLzUHZUZKaTjAIMe_TVCLrRvDMuAOcMdyMwg=s0"
              alt="hi"
              style={{
                width: "10rem",
                height: "10rem",
                objectFit: "cover",
                borderRadius: "9999px",
                borderWidth: "2px",
                backgroundColor: "black",
              }}
            />
            <TopText>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  Bright Mba
                </p>
                <p>
                  <img
                    src={Tick}
                    alt="verified"
                    style={{ marginLeft: ".5vw" }}
                  />
                </p>
              </div>

              <InnerText
                onClick={() => navigator.clipboard.writeText(walletData.address)}
                style={{
                  cursor: "pointer",
                }}
              >
                {walletData && getEllipsisTxt(walletData.address, 5)}
              </InnerText>
              <InnerText>Joined January 2022</InnerText>
            </TopText>
          </Profilediv>
        </ImageContainer>
        <Filtercurveddiv
          style={{
            marginTop: "16rem",
            padding: "0 4rem",
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", width: "80%" }}>
            <Filtercurved
              onClick={() => {
                dispatchTemp({ type: "Collected" });
              }}
            >
              <p style={{ color: "white" }}>Collected {NFTData.totalCount}</p>
            </Filtercurved>
            <Filtercurved
              onClick={() => {
                dispatchTemp({ type: "Created" });
              }}
            >
              <p style={{ color: "white" }}>Created {0}</p>
            </Filtercurved>
            <Filtercurved>
              <p style={{ color: "white" }}>Favourited {0}</p>
            </Filtercurved>
            <Filtercurved>
              <p style={{ color: "white" }}>Hidden {0}</p>
            </Filtercurved>
            <Filtercurved>
              <p style={{ color: "white" }}>Activity {0}</p>
            </Filtercurved>
            <Filtercurved>
              <p style={{ color: "white" }}>Offers {0}</p>
            </Filtercurved>
          </div>
          <div
            style={{
              display: "flex",
              width: "7%",
              justifyContent: "space-between",
            }}
          >
            <img src={Share} alt="" />
            <img src={Settings} alt="" />
          </div>
        </Filtercurveddiv>
        <img src={Filterline} style={{ width: "90vw" }} alt="" />
        <div
          className="flex-container"
          style={{
            justifyContent: "space-between",
            width: "90%",
            marginTop: "3rem",
          }}
        >
          {/* <img src={filterimage} width="118px" height="52px"></img> */}
          <div>
            {filterOpen ? (
              <button
                className="btn filterbutton2"
                onClick={() => {
                  setFilterOpen(!filterOpen);
                }}
              >
                <i className="fa fa-filter "></i>Filter
              </button>
            ) : (
              <button
                style={{
                  display: "flex",
                  border: "1.5px solid #616161",
                  borderRadius: "8px",
                }}
                className="filterbutton"
                onClick={() => {
                  setFilterOpen(!filterOpen);
                }}
              >
                Filter
              </button>
            )}
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                gap: "1.5rem",
              }}
            >
              <div className="dropdownfilter">
                <button className="dropbtnfilter">
                  Price ascending <div className="downbtn"></div>
                </button>
                <div className="dropdown-contentfilter">
                  <Link
                    to="/main"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    All NFTs
                  </Link>

                  <Link to="/collections">Collections</Link>
                  {/* <a href="#">Link 3</a> */}
                </div>
              </div>
              <div className="dropdownfilter">
                <button className="dropbtnfilter">
                  Single Item<div className="downbtn"></div>
                </button>
                <div className="dropdown-contentfilter">
                  <Link
                    to="/main"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    All NFTs
                  </Link>

                  <Link to="/collections">Collections</Link>
                  {/* <a href="#">Link 3</a> */}
                </div>
              </div>
              <div className="dropdownfilter">
                <button className="dropbtnfilter">
                  Recently saved<div className="downbtn"></div>
                </button>
                <div className="dropdown-contentfilter">
                  <Link
                    to="/main"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    All NFTs
                  </Link>

                  <Link to="/collections">Collections</Link>
                  {/* <a href="#">Link 3</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* filter */}
        {state.Collected && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: "4vh",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                marginTop: "1rem",
                width: "100%",
                height: "100%",
                marginBottom: "10rem",
                color: "white",
                textAlign: "left",
                marginLeft: "4rem",
                marginRight: "4rem",
              }}
            >
              {filterOpen && (
                <div style={{ width: "20%", marginTop: "2.7rem" }}>
                  <FillterCard />
                </div>
              )}

              {/* nft cards section */}
              <div
                style={{
                  overflowX: "hidden",
                  overflowY: "auto",
                  height: "800px",
                  marginTop: "40px",
                  marginLeft: filterOpen ? "30px" : "",
                  marginRight: "50px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gap: "1.25rem",
                    gridTemplateColumns: `repeat(${
                      filterOpen ? 4 : 5
                    }, minmax(0, 1fr))`,
                  }}
                >
                  {NFTData &&
                    NFTData.ownedNfts &&
                    NFTData?.ownedNfts.map((ele, index) => (
                      <Card
                        onClick={() =>
                          history.push(
                            `/asset/${ele.contract["address"]}/${ele.id["tokenId"]}`
                          )
                        }
                        hoverable
                        className="mainCard"
                        cover={
                          <Image
                            preview={false}
                            // src="https://dos.mercado.studio/static/media/Group%201490.ec6bb3bb.png"
                            src={createURI(ele?.metadata.image)}
                            fallback="data:image/png;base64,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"
                            alt=""
                            style={{ height: "240px" }}
                          />
                        }
                        key={index}
                      >
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "start",
                              }}
                            >
                              <p className="creatorName">{ele?.title}</p>
                              <p className="creationTitle">
                                {ele?.description.slice(0, 30)}...
                              </p>
                            </div>
                            <a href="/" target="_blank">
                              <img
                                src={exLink}
                                alt=""
                                style={{
                                  height: "30px",
                                  width: "30px",
                                }}
                              />
                            </a>
                          </div>

                          {/* divider line */}
                          {/* <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span
                              className="card-divider-active"
                              style={{ height: ".1rem" }}
                            />
                          </div> */}

                          {/* List btn and Like btn */}
                          {/* <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <button
                              onClick={() =>
                                history.push(
                                  `/asset/${ele.contract["address"]}/${ele.id["tokenId"]}`
                                )
                              }
                              className="cardBtn"
                            >
                              List
                            </button>
                            <img
                              src={heartIcon}
                              alt=""
                              style={{
                                cursor: "pointer",
                                height: "20px",
                                width: "20px",
                              }}
                            />
                          </div> */}
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Userprofile;
