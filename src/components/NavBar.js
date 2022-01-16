import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { isBrowser } from "react-device-detect";
import "../assets/css/Navbar.css";
import Web3Modal from "web3modal";
import Drawerroutes from "./DrawerRoutes";
import Home from "../assets/images/image 8.svg";
import styled from "styled-components";
import BlogPage from "./BlogPage";
// import WalletConnectProvider from "@walletconnect/web3-provider";

const ShadowBtn = styled.div`
  cursor: pointer;
  border: 1px solid #3498db;
  background-color: transparent;
  height: 50px;
  width: 200px;
  color: #3498db;
  font-size: 1.5em;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
`;

const NavBar = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [curAddress, serCurAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const name = props.location.pathname.replaceAll("-", " ").replace("/", "");

  setInterval(function () {
    if (window.ethereum.selectedAddress != null) {
      // console.log("connected");
      // console.log(window.ethereum.selectedAddress);
    } else {
      // console.log("not connected");
      setIsConnected(false);
      serCurAddress(null);
    }
  }, 500);
  useEffect(async function connectWallet() {
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


  async function connectWallet2() {
    console.log("walletconnect here");
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
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1000",
        background: "black",
      }}
    >
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
            <div style={{ width: "10px",marginLeft:"5.5rem" }}>
              <img
                style={{
                  width: "300px",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
                src={Home}
                alt="homepage"
              />
            </div>
          </Link>
         

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "60%",
              fontFamily: "Century Gothic",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#FFFFFF",
              textDecoration:"none", 
            }}
          >
            <Link to='/' style={{color: "#FFF"}}><div style={{textDecoration:"none"}}>Home</div></Link>
            <Link to='/asset/create' style={{color: "#FFF"}}><div style={{textDecoration:"none"}}>Create</div></Link>
            <Link to='/about' style={{color: "#FFF"}}><div style={{textDecoration:"none"}}>About</div></Link>
            <Link to='/faq' style={{color: "#FFF"}}><div style={{textDecoration:"none"}}>FAQs</div></Link>
            <Link to='/contactus' style={{color: "#FFF"}}><div style={{textDecoration:"none"}}>Contact us</div></Link>
            <Link to='/blog' style={{color: "#FFF"}}><div style={{textDecoration:"none"}}>Blog</div></Link>
            <div>
              {curAddress == null && (
                <div
                  style={{
                    marginTop: "10px",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                >
                  <button
                  style={{display:"flex",alignItems:"center",justifyContent:"center"}}
                    class="border-gradient border-gradient-purple"
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </button>
                </div>
              )}
            </div>

            {isConnected && (
              <div style={{ display: "flex" }}>
                {/* <div class="on-dark">
                  <button class="border-gradient border-gradient-purple" onClick={disconnect}>
                    Disconnect
                  </button>
                </div> */}
                
                  <div class="on-dark">
                    <button class="border-gradient border-gradient-purple">
                      {window.ethereum.selectedAddress.substring(0, 5) +
                        "..." +
                        window.ethereum.selectedAddress.slice(-4)}
                    </button>
                  </div>
                
              </div>
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
