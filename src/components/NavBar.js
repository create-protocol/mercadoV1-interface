import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

//import { UnorderedListOutlined } from "@ant-design/icons";
import { isBrowser } from "react-device-detect";
import "../assets/css/Navbar.css";
// import ham from "../assets/images/menu.png";
import Web3Modal from "web3modal";
import Drawerroutes from "./DrawerRoutes";
import Home from '../assets/images/home.png'
const NavBar =  (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const name = props.location.pathname.replaceAll("-", " ").replace("/", "");
  
  useEffect( async function connectWallet() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    console.log(signer);
  
  });

  // const web3Modal = new Web3Modal({
  //   network: "mainnet",
  //   cacheProvider: true,
  // })
  // const connection = await web3Modal.connect()
  // const provider = new ethers.providers.Web3Provider(connection)
  // const signer = provider.getSigner()

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
        <div className="header-ham" style={{width:"100vw",display:"flex",justifyContent:"space-between",alignItems:"end",marginLeft:"auto"}} >
          <Link to='/'>
          <img style={{width:"2.5rem",height:"2.5rem",objectFit:"contain",marginTop:"-1rem",marginLeft:"40px"}} src={Home} alt="homepage"/>
          </Link>
          <h1 id="connectw" style={{color:"white",fontSize:"20px",marginRight:"50px"}}>{window.ethereum.selectedAddress.substring(0, 5) + "..." + window.ethereum.selectedAddress.slice(-4)}</h1>
          {/* <button className="connect-wallet2">Connect Wallet</button> */}
        </div>
        <div
          className="h21 header-title"
          style={
            name
              ? name === ""
                ? {
                    color: "#fff",
                    fontSize: isBrowser ? "3rem" : "1.5rem",
                    font:"Inter"
                  }
                : { fontSize: isBrowser ? "3rem" : "1.5rem",font:"Inter" }
              : { fontSize: isBrowser ? "1.6rem" : "1.9rem",font:"Inter" }

          }
        >
          {name
            ? name === ""
              ? "PROFILE"
              : name.includes("page")
              ? ""
              : name
            : ""}
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
