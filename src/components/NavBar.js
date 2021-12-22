import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
// import Web3 from 'web3';
import { isBrowser } from "react-device-detect";
import "../assets/css/Navbar.css";
import Web3Modal from "web3modal";
import Drawerroutes from "./DrawerRoutes";
import Home from "../assets/images/home.png";
import Footer from "./Footer";
import styled from "styled-components";
// import { Alert } from 'styled-alert-component';
import { CopyToClipboard } from "react-copy-to-clipboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

import "../assets/css/dropdown.css";
const ShadowBtn = styled.div`
background-color: rgb(112, 215, 49);
color: rgb(26, 24, 24);
font-size: 20px;
font-weight: 700;
width: 300%;
height:80px;
border: 10px solid rgb(48, 52, 57);
border-radius: 20px;
padding:-6px 20px 16px 20px;
cursor: pointer;
margin-top: 0.5rem;
max-width: 900px;
transition: all 0.3s ease-in-out 0s;
box-shadow: rgb(53 54 56 / 50%) 0px 16px 30px;
margin-top:20px;
margin-right: 20px;
margin-left: 20px;
}
  &:hover{
    -webkit-box-shadow: 0 0 8px #fff;
        box-shadow: 0 0 8px #fff;
        transition:.5s;
        border-radius:20px
  }
`;

const NavBar = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [curAddress, serCurAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const name = props.location.pathname.replaceAll("-", " ").replace("/", "");

  useEffect(async function connectWallet() {
    console.log("jhandu");

    setTimeout(function () {
      if (window.ethereum && isConnected) {
        serCurAddress(window.ethereum.selectedAddress);
      } else {
        <h1>
          Please Install metamask extension from{" "}
          <a href="https://metamask.io/">Here</a>{" "}
        </h1>;
      }
    }, 100);
  });
  async function connectWallet() {
    console.log("here");
    if (window.ethereum) {
      const web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
      });
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      setIsConnected(true);
    } else {
      alert("Please Install metamask extension from metamask.io");
    }
  }

  async function disconnect() {
    setIsConnected(false);
    serCurAddress(null);
  }

  useLayoutEffect(() => {
    if (window.ethereum && isConnected) {
      window.ethereum.on("accountsChanged", function (accounts) {
        serCurAddress(window.ethereum.selectedAddress);
      });
    } else {
      <h1>
        Please Install metamask extension from metamask.io
        <a href="https://metamask.io/">Here</a>{" "}
      </h1>;
    }
  }, []);

  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }
  return (
    <div style={{}}>
      <div
        className="header-container"
        style={
          name
            ? name === ""
              ? {
                  background: "transparent",
                  position: "absolute",
                  zIndex: 2,
                  width: "100%",
                  // background:
                  //   "transparent linear-gradient(180deg, #04040400 0%, #000000B3 100%) 0% 0% no-repeat padding-box",
                  // opacity: "0.5",
                  color: "#FFFFFF",
                  fontSize: isBrowser ? "3rem" : "1.5rem",
                  keyboard: true,
                }
              : {}
            : {}
        }
      >
        <div
          className="header-ham"
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginLeft: "auto",
          }}
        >
          <Link to="/">
            <img
              style={{
                width: "2.5rem",
                height: "2.5rem",
                objectFit: "contain",
                marginTop: "-1rem",
                marginLeft: "40px",
              }}
              src={Home}
              alt="homepage"
            />
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              {
                curAddress == null && (
                //   <div className="row">
                //     {/* <h1  ref={textAreaRef} id="tokenaddress" style={{color:"white",textAlign:"center",fontSize:"30px",marginRight:"50px"}}>{window.ethereum.selectedAddress.substring(0, 5) + "..." + window.ethereum.selectedAddress.slice(-4)}  </h1> */}
                //     {/* <button onClick={copyToClipboard}><img src={copy} style={{width:"20px",height:"20px"}}></img></button>  */}
                //     <CopyToClipboard
                //       text={window.ethereum.selectedAddress}
                //       style={{
                //         color: "black",
                //         textAlign: "center",
                //         fontSize: "30px",
                //         marginRight: "50px",
                //         height: "55px",
                //         borderRadius: "12px",
                //       }}
                //     >
                      
                //       <button>
                //         {window.ethereum.selectedAddress.substring(0, 5) +
                //           "..." +
                //           window.ethereum.selectedAddress.slice(-4)}
                //       </button>
                //     </CopyToClipboard>
                //   </div>
                // ) : (
                  <ShadowBtn
                    style={{
                      fonstSize: "1rem",
                      width: "180px",
                      borderRadius: "10px",
                      margin: "0",
                    }}
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </ShadowBtn>
                )

                /* <h1 id="connectw" style={{color:"white",fontSize:"20px",marginRight:"50px"}}>{window.ethereum.selectedAddress.substring(0, 5) + "..." + window.ethereum.selectedAddress.slice(-4)}</h1> */
              }
            </div>

            {isConnected && (
              <Dropdown className="d-inline mx-2" autoClose="outside">
              <Dropdown.Toggle id="dropdown-autoclose-outside" style={{backgroundColor:"rgb(112, 215, 49)"}}>
              {window.ethereum.selectedAddress.substring(0, 5) +
                          "..." +
                          window.ethereum.selectedAddress.slice(-4)}
              </Dropdown.Toggle>
          
              <Dropdown.Menu>
                <Dropdown.Item onClick={disconnect}>Disconnect</Dropdown.Item>
                <Dropdown.Item href="#">My profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              // <ShadowBtn
              //   style={{
              //     fonstSize: "1rem",
              //     width: "10rem",
              //     borderRadius: "10px",
              //     margin: "0",
              //   }}
              //   onClick={disconnect}
              // >
              //   Disconnect
              // </ShadowBtn>
            )}
          </div>
        </div>
      </div>
      <Drawer
        placement="left"
        visible={showDrawer}
        onClose={() => setShowDrawer(false)}
        width={"80%"}
        // size={"large"}
        className="drawer"
        drawerStyle={{ backgroundColor: "#1a1a1a" }}
        title={<div className="drawer-title">MENU</div>}
        headerStyle={{ backgroundColor: "#1a1a1a", padding: 0, border: "none" }}
      >
        <Drawerroutes
          {...props}
          closeDrawer={() => setShowDrawer(false)}
        ></Drawerroutes>
      </Drawer>
    </div>
  );
};

export default NavBar;
