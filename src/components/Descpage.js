import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from 'antd';
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";
import "../../node_modules/video-react/dist/video-react.css"; // import css
import Landingowner from "../assets/images/landingowner.png";
import Eth from "../assets/images/Ethereum (ETH).png";
import { Spin, Avatar } from 'antd';

const Splitscreen = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  
  @media (max-width: 1000px) {
    flex-direction: column;
    // overflow-y: hidden;
    height:50rem;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 130%;
  margin-left: auto;
  height: 120vh;
  @media (max-width: 1000px) {
    width: 100%;
    height: 60%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: start;
  margin-right:100px;
  width: 100%;
  border:1px solid black
  flex-wrap:wrap
  @media (max-width: 1000px) {
    width:100%;
    height:60%;
    overflow:hidden;
  }
`;


const Biddingcard = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0.53125) 48.96%, rgba(55, 55, 55, 0.8) 100%);
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
`;
const Mainheading = styled.div`
font-style: normal;
font-weight: 600;
font-size: 2.3rem;
line-height: 140%;`

const Borderbtn = styled(Button)`
  cursor: pointer;
  border-radius: 7px;
  padding: 0.5rem 1.4rem;
  margin-left: 0.5rem;
  padding-top: 0.45rem;
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
color: #A9A9A9;`

const Biddingtext = styled.div`
font-style: normal;
font-weight: 600;
font-size: 1.5rem;
line-height: 140%;
margin-top:1rem;`

const Leftheading = styled.div`
font-style: normal;
font-weight: normal;
font-size: 14px;
margin-top:3rem;
color: #A9A9A9;
line-height:0.5rem;
`

const Lefttext = styled.div`
font-style: normal;
font-size: 2px;
line-height:1;
`

const createURI = (uri) => uri.slice(0, 7) === "ipfs://" ? 'https://ipfs.infura.io/ipfs/' + uri.slice(7) : uri;

const Descpage = () => {

  const { collection, id } = useParams();
  const [loadingState, setLoadingState] = useState("not-loaded");
  //itemid = itemid.toNumber();
  // var token_address = ethers.BigNumber.from(item1);
  // var itemId = ethers.BigNumber.from(item2);
  // console.log(collection,id);

  const [metaData, setMetaData] = useState();

  const fetchMetaData = async () => {
    try {
      const res = await axios.get('https://deep-index.moralis.io/api/v2/nft/' + collection + '/' + id + '?chain=eth',
        { 'headers': { "X-API-Key": 'ElMD1BX3aHki68CAPToKw00tx6W6JdEDru1JAH0NMl2KXGPsEylGW1DetmpGpnip' } });
      // const  imageMetaData = await axios.get(createURI(res.data.token_uri));
      console.log(res.data);
      setMetaData({ ...res.data, ...JSON.parse(res.data.metadata) });
      setLoadingState("loaded");
    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    fetchMetaData();
  }, [])



  if (loadingState !== "loaded") {
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
    <>
      {metaData && <Splitscreen style={{ paddingTop: "10rem", height: "50rem" }}>
        <Left>
          <div
            style={{
              padding: "2rem",
              paddinTop: "0",
              marginTop: "0",
              height: "100%",
              width: "80%",
              borderRadius: "10px",
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              paddingBottom: "0",
              overflow: "hidden",
              flexDirection: "column",
              textAlign: "left"
            }}
          >
            {/* {obj.file=="mp4"?<Player src={obj.image}></Player>:  */}
            <Zoom>
              <img
                src={createURI(metaData.image)}
                alt="nft"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  height: "70vh",
                  objectFit: "cover",
                }}
              />
            </Zoom>
            <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Avatar
                size={{ xs: 24, sm: 32, md: 30, lg: 40, xl: 55, xxl: 100 }}
                src="https://joeschmoe.io/api/v1/random"
              />
              <Lefttext style={{ color: "#A9A9A9" }}>created by <br /> {metaData.owner_of}</Lefttext>
            </div>
            <div style={{ color: "white", }}>
              {/* <Leftheading>Contract Address</Leftheading> */}
              <br />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}>
                <Lefttext>{metaData.token_address}</Lefttext>
                {/* <Borderbtn>Copy address</Borderbtn> */}
              </div>
            </div>
            <div style={{ color: "white" }}>
              <Leftheading>Token Id</Leftheading>
              <br />
              <Lefttext>{metaData.token_id}</Lefttext>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                textAlign: "left",
                flexDirection: "column",
                color: "white",
                marginTop: "5rem"
              }}
            >
              <Biddingtext>Ongoing Bids</Biddingtext>

              <Biddingcard>
                <div
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
                      color: "#A9A9A9"
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
                      color: "#A9A9A9",
                    }}
                  >
                    <div style={{ fontSize: "1rem" }}>
                      365 ETH
                    </div>
                    <div style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
                      11:46AM
                    </div>
                  </div>
                </div>
              </Biddingcard>

            </div>
          </div>
        </Left>
        <Right>
          <p
            style={{
              color: "white",
              fontSize: "26px",
              letterSpacing: "2px",
              width: "100%",
              marginTop: "1.3rem",
              textAlign: "left",
            }}
          >
            {metaData && <Mainheading>{metaData.name}</Mainheading>}
            <br />
            <Mainheading className="text-muted">Description</Mainheading>
            {metaData && <Desctext>
              {metaData.description}
            </Desctext>}
            {/* {obj.name} */}
          </p>

          <div
            style={{
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
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
                  width: "15rem",
                  height: "4rem",
                  borderRadius: "0.7rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1rem",
                  fontSize: ".7rem",
                  fontWeight: "500",
                  marginTop: "1rem"
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={Eth} alt="" />
                  <div style={{ marginLeft: "0.4rem" }}>0.99 ETH</div>
                </div>
                <div style={{ background: "#229CEA", padding: ".7rem", borderRadius: "0.5rem", cursor: "pointer" }}>Buy now</div>
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
                  width: "15rem",
                  height: "4rem",
                  borderRadius: "0.7rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1rem",
                  fontSize: ".7rem",
                  fontWeight: "500",
                  marginTop: "1rem"
                }}
              >
                <div style={{ display: "flex" }}>
                  <img src={Eth} alt="" />
                  <div style={{ marginLeft: "0.4rem" }}>4d 16h 32m 10s</div>
                </div>
                <Borderbtn
                  onClick={() => {
                    console.log('click on the bid button');
                  }}
                >Place bid </Borderbtn>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              textAlign: "left",
              flexDirection: "column",
              color: "white",
              marginTop: "5rem"
            }}
          >
            <Biddingtext>Ongoing Bids</Biddingtext>

            <Biddingcard>
              <div
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
                    color: "#A9A9A9"
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
                    color: "#A9A9A9",
                  }}
                >
                  <div style={{ fontSize: "1rem" }}>
                    365 ETH
                  </div>
                  <div style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
                    11:46AM
                  </div>
                </div>
              </div>
            </Biddingcard>

          </div>
        </Right>
      </Splitscreen>}
      {/* <Footer /> */}
    </>
  );
};

export default Descpage;
