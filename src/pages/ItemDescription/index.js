import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Row, Col } from "antd";
import { CopyFilled } from "@ant-design/icons";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import {
  fetchItemMetaData,
  getNftById,
  createBid,
} from "../../store/item/action";
import { nftmarketaddress, nftaddress } from "../../config";
import Market from "../../ethereum/Marketplace.json";
import NFT from "../../ethereum/NFT.json";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import Landingowner from "../../assets/images/landingowner.png";
import Eth from "../../assets/images/Ethereum (ETH).png";
import { Spin, Avatar } from "antd";
import { fetchOngoingBids } from "../../store/item";
import { sendTransaction } from "../../components/sendTransaction";
import Counter from "../../components/Counter";
import PlaceBidDrawer from "./PlaceBidDrawer";
import PlaceBidModal from "./PlaceBidModal";

const Biddingcard = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.11) 0%,
    rgba(0, 0, 0, 0.53125) 48.96%,
    rgba(55, 55, 55, 0.8) 100%
  );
  opacity: 0.75;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 90%;
  margin-left: 0;
  margin-top: 0.7rem;
  gap: "10px";
`;
const Biddingcard1 = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.11) 0%,
    rgba(0, 0, 0, 0.53125) 48.96%,
    rgba(55, 55, 55, 0.8) 100%
  );
  opacity: 0.75;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  margin-left: 0;
  margin-top: 0.7rem;
  margin-bottom: 0.5rem;
`;
const Mainheading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 2.3rem;
  line-height: 140%;
`;

const Borderbtn = styled(Button)`
  width: 155px;
  height: 47px;
  cursor: pointer;
  border-radius: 7px;
  padding: 0 10px 0 2px;
  margin-left: 0.5rem;
  font-weight: 600;
  font-size: 12px;
  color: white;
  border: solid 2px transparent;
  background-image: linear-gradient(black, black),
    linear-gradient(
      279.52deg,
      rgba(27, 249, 249, 0.05) -39.47%,
      rgba(23, 247, 206, 0.840625) -5.82%,
      rgba(34, 122, 255, 0.958132) 99.45%,
      rgba(76, 146, 251, 0.5) 136.47%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px black inset;
`;

const Desctext = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 160%;
  color: #a9a9a9;
`;

const Biddingtext = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 140%;
  margin-top: 1rem;
`;

const Leftheading = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin-top: 3rem;
  color: #a9a9a9;
  line-height: 0.5rem;
`;

const Lefttext = styled.div`
  font-style: normal;
  font-size: 18px;
  line-height: 1;
`;

const createURI = (uri) =>
  uri.slice(0, 7) === "ipfs://"
    ? "https://ipfs.infura.io/ipfs/" + uri.slice(7)
    : uri;

const ItemDescription = () => {
  const dispatch = useDispatch();
  const metaData = useSelector((state) => state.item.itemData);
  const loadingState = useSelector((state) => state.item.itemDataLoading);
  const [open, setOpen] = useState(false);
  const [bidDrawer, setBidDrawer] = useState(false);
  const [Properties, setProperties] = useState([]);
  const { collection, id } = useParams();
  const walletData = useSelector((state) => state.wallet.wallet);
  const history = useHistory();
  console.log("metaData", metaData);
  const onGoingBid = [0, 1, 2, 3];
  const isOwnner = true;

  //itemid = itemid.toNumber();
  // var token_address = ethers.BigNumber.from(item1);
  // var itemId = ethers.BigNumber.from(item2);
  // console.log(collection,id);

  useEffect(() => {
    dispatch(
      getNftById({
        ownerAddr: collection,
        tokenId: id,
      })
    );
  }, [dispatch, collection, id]);

  // useEffect(() => {
  //   // dispatch(fetchOngoingBids({
  //   // tokenId: collection
  //   // }));
  // }, []);

  async function buyNft(nft) {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      window.wallet = signer;
      window.provider = provider;
      const contract = new ethers.Contract(
        nftmarketaddress,
        Market.abi,
        signer
      );
      // console.log(nft);
      // const price = ethers.utils.parseUnits(nft.price, "ether");
      // console.log(nftaddress);
      // console.log(nft.itemId);
      await sendTransaction(
        contract,
        "buyNFT",
        [collection],
        "You have Purchse Token Successfully"
      );
    } catch (e) {
      console.log(e);
    }
  }

  if (loadingState) {
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
      {metaData && (
        <Row style={{ paddingTop: "10rem" }} justify="center">
          <Col span={10}>
            <div
              style={{
                padding: "2rem",
                paddinTop: "0",
                marginTop: "0",
                height: "100%",
                borderRadius: "10px",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                paddingBottom: "0",
                overflow: "hidden",
                flexDirection: "column",
                textAlign: "left",
                marginBottom: "30px",
              }}
            >
              {/* {obj.file=="mp4"?<Player src={obj.image}></Player>:  */}
              {metaData && (
                <Zoom wrapStyle={{ width: "100%" }}>
                  <img
                    src="https://master.d5doaty1zxnym.amplifyapp.com/static/media/Group%201491.8420d890.png"
                    // src={createURI(metaData.metadata.image)}
                    alt="nft"
                    style={{
                      width: "100%",
                      borderRadius: "15px",
                      height: "70vh",
                      // objectFit: "cover",
                    }}
                  />
                </Zoom>
              )}

              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <Avatar
                  size={{ xs: 24, sm: 32, md: 30, lg: 40, xl: 55, xxl: 100 }}
                  src="https://master.d5doaty1zxnym.amplifyapp.com/static/media/Group%201491.8420d890.png"
                /> */}
                <img
                  src="https://lh3.googleusercontent.com/1VgJxCD6oXwqqcXq3hkg4DZsK2v7oU6RW4VNl-AnA7zBrU5hWCJHR78piYWVIXhbH89JLzUHZUZKaTjAIMe_TVCLrRvDMuAOcMdyMwg=s0"
                  alt="hi"
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "cover",
                    borderRadius: "9999px",
                    borderWidth: "2px",
                    backgroundColor: "black",
                  }}
                />
                <Link to={`/profile/${metaData?.owner_of}`}>
                  <Lefttext style={{ color: "#A9A9A9", marginLeft: "8px" }}>
                    created by @brigthmac
                    {/* {metaData?.owner_of} */}
                  </Lefttext>
                </Link>
              </div>
              <div style={{ color: "white" }}>
                <Leftheading>Contract Address</Leftheading>
                <br />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Lefttext>{metaData?.contract.address}</Lefttext>

                  <Borderbtn>
                    {" "}
                    <CopyFilled /> Copy
                  </Borderbtn>
                </div>
              </div>
              <div style={{ color: "white" }}>
                <Leftheading>Token Id</Leftheading>
                <br />
                <Lefttext>
                  {/* 344567 */}
                  {metaData.id["tokenId"]}
                </Lefttext>
              </div>
            </div>
          </Col>
          <Col span={11}>
            <p
              style={{
                color: "white",
                fontSize: "40px",
                letterSpacing: "2px",
                width: "100%",
                marginTop: "2.5rem",
                textAlign: "left",
                fontWeight: 600,
              }}
            >
              {/* {metaData && <Mainheading>{metaData.title}</Mainheading>} */}
              {/* <br /> */}
              {/* <Mainheading className="text-muted">Description</Mainheading> */}
              {/* {metaData && <Desctext>{metaData.description}</Desctext>} */}
              {/* {obj.name} */}
              Title
            </p>
            <p
              style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "150%",
                textAlign: "start",
                color: "#A9A9A9",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
              venenatis metus, bibendum congue magna. Sed urna turpis, pharetra
              id nunc eget, gravida accumsan sem. Morbi nec rutrum nulla.
              Pellentesque purus nibh, sodales a magna vitae, cursus suscipit
              lacus.
            </p>

            {/* block if it is owner's */}

            <div
              style={{
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {isOwnner && (
                <div
                  style={{
                    width: "126px",
                    height: "50px",
                    left: "1125px",
                    top: "543px",
                    fontSize: "20px",
                    background:
                      "linear-gradient(279.52deg, rgba(27, 249, 249, 0.05) -39.47%, rgba(23, 247, 206, 0.840625) -5.82%, rgba(34, 122, 255, 0.958132) 99.45%, rgba(76, 146, 251, 0.5) 136.47%)",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={() =>
                    history.push(
                      `/asset/${metaData.contract["address"]}/${metaData.id["tokenId"]}/editlisting`
                    )
                  }
                >
                  List Item
                </div>
              )}
              {!isOwnner && (
                <>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      color: "white",
                      textAlign: "left",
                      height: "4rem",
                    }}
                  >
                    <Biddingtext>Current Price</Biddingtext>
                    <div
                      style={{
                        background: "black",
                        width: "18rem",
                        height: "4rem",
                        borderRadius: "0.7rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem 1rem",
                        fontSize: ".7rem",
                        fontWeight: "500",
                        marginTop: "1rem",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <img src={Eth} alt="" />
                        <div
                          style={{
                            marginLeft: "0.4rem",
                            fontFamily: "Heebo",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "21px",
                          }}
                        >
                          0.99 ETH
                        </div>
                      </div>
                      <div
                        style={{
                          width: "126px",
                          height: "50px",
                          left: "1125px",
                          top: "543px",
                          fontSize: "20px",
                          background:
                            "linear-gradient(279.52deg, rgba(27, 249, 249, 0.05) -39.47%, rgba(23, 247, 206, 0.840625) -5.82%, rgba(34, 122, 255, 0.958132) 99.45%, rgba(76, 146, 251, 0.5) 136.47%)",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => buyNft()}
                      >
                        Buy now
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "0.5rem",
                      color: "white",
                      textAlign: "left",
                      height: "4rem",
                    }}
                  >
                    <Biddingtext>Bid ends in</Biddingtext>
                    <div
                      style={{
                        background: "black",
                        width: "303px",
                        height: "70px",
                        borderRadius: "0.7rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem 1rem",
                        fontSize: ".7rem",
                        fontWeight: "500",
                        marginTop: "1rem",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        {/* <img src={Eth} alt="" style={{ marginRight: "8px" }} /> */}
                        <Counter />
                      </div>
                      <Borderbtn
                        style={{ paddingLeft: "10px", width: "134px" }}
                        onClick={() => {
                          dispatch(createBid());
                          setOpen(true);
                          // setBidDrawer(true)
                        }}
                      >
                        Place bid
                      </Borderbtn>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* block if it is owner's */}

            {/* Onggoing bid section */}
            <div
              style={{
                width: "100%",
                display: "flex",
                textAlign: "left",
                flexDirection: "column",
                color: "white",
                marginTop: isOwnner ? "2rem" : "5rem",
              }}
            >
              <Biddingtext>Ongoing Bids</Biddingtext>

              {onGoingBid.map((ele, index) => (
                <Biddingcard>
                  <div
                    key={index}
                    style={{
                      //   marginTop: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "2rem",
                      height: "100%",
                    }}
                  >
                    <img
                      style={{ objectFit: "contain", width: "5rem" }}
                      src={Landingowner}
                      alt="landingimg"
                    />
                    <div
                      style={{
                        width: "80%",
                        textAlign: "left",
                        marginLeft: "2rem",
                        color: "#FFFFFF",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "160%",
                      }}
                    >
                      <div style={{ fontSize: "1rem", fontWeight: "normal" }}>
                        By woodshelf
                      </div>
                      <div style={{ fontSize: "1rem", marginTop: "1rem" }}>
                        Bid at 20Eth
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        width: "80%",
                        textAlign: "left",
                        marginRight: "2rem",
                        height: "100%",
                        // fontFamily: "Century Gothic",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "160%",
                        color: "#FFFFFF",
                      }}
                    >
                      <div style={{ fontSize: "1rem" }}>365 ETH</div>
                      <div style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
                        11:46AM
                      </div>
                    </div>
                  </div>
                </Biddingcard>
              ))}
            </div>

            {/* Properties */}
            {/* <div
              style={{
                width: "100%",
                display: "flex",
                textAlign: "left",
                flexDirection: "column",
                color: "white",
                marginTop: "5rem",
              }}
            >
              <Biddingtext>Properties</Biddingtext>

              {metaData?.metadata?.attributes?.map((property, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: "80px",
                    }}
                  >
                    <Biddingcard1>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "80%",
                            textAlign: "left",
                            marginLeft: "2rem",
                            color: "#A9A9A9",
                          }}
                        >
                          <div
                            style={{ fontSize: "1rem", fontWeight: "normal" }}
                          >
                            {property.trait_type}
                          </div>
                          <div
                            style={{
                              fontSize: "1rem",
                              marginTop: "1rem",
                              color: "white",
                            }}
                          >
                            {property.value}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "2rem",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "80%",
                            textAlign: "left",
                            marginLeft: "2rem",
                            color: "",
                          }}
                        >
                          <div
                            style={{ fontSize: "1rem", fontWeight: "normal" }}
                          >
                            26.8
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            width: "80%",
                            textAlign: "left",
                            marginRight: "2rem",
                            height: "100%",
                            color: "#A9A9A9",
                          }}
                        >
                          <div style={{ fontSize: "1rem" }}>1990(19.9%)</div>
                        </div>
                      </div>
                    </Biddingcard1>
                  </div>
                );
              })}
            </div> */}
          </Col>
        </Row>
      )}
      {/* <PlaceBidDrawer
        visible={bidDrawer}
        showDrawer={() => setBidDrawer(true)}
        onClose={() => setBidDrawer(false)}
        nftData={metaData}
      /> */}

      <PlaceBidModal visible={open} onClose={setOpen} nftData={metaData} />
    </>
  );
};

// const ItemDescription = () => <h1>Thisjisjlkajlskj</h1>

export default ItemDescription;
