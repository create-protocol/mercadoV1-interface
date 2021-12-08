import React, { useState, useEffect, useLayoutEffect,useRef  } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

//import { UnorderedListOutlined } from "@ant-design/icons";
import { isBrowser } from "react-device-detect";
import "../assets/css/Navbar.css";
import ham from "../assets/images/menu.png";
import Drawerroutes from "./DrawerRoutes";
import Home from '../assets/images/home.png'
import copy from '../assets/images/icons8-copy-24.png'
import styled from "styled-components";
import {CopyToClipboard} from 'react-copy-to-clipboard';
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

const NavBar =  (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [curAddress, serCurAddress] = useState(null);
  const name = props.location.pathname.replaceAll("-", " ").replace("/", "");
  
  useEffect( async function connectWallet() {
    // const web3Modal = new Web3Modal({
    //   network: "mainnet",
    //   cacheProvider: true,
    // })
    // const connection = await web3Modal.connect()
    // const provider = new ethers.providers.Web3Provider(connection)
    // const signer = provider.getSigner()

    // console.log(signer);
    
    setTimeout(
      function(){
        serCurAddress(window.ethereum.selectedAddress)

      }, 100
    )
  
  });
  async function connectWallet(){
    console.log(
      "here"
    )
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
  }

  useLayoutEffect(() => {
    window.ethereum.on('accountsChanged', function(accounts) {
      serCurAddress(window.ethereum.selectedAddress)
    })
  }, []);



  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };



  // function myFunction() {
  //   /* Get the text field */
  //   var copyText = document.getElementById("myInput");
  
  //   /* Select the text field */
  //   copyText.select();
  //   copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
  //   /* Copy the text inside the text field */
  //   navigator.clipboard.writeText(copyText.value);
    
  //   /* Alert the copied text */
  //   alert("Copied the text: " + copyText.value);
  // }


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
          {/* <div>m</div> */}
          
          <button 
          style={{backgroundColor: "rgba(21, 61, 111, 0.44)",
            border: "1px solid rgba(21, 61, 111, 0.44)",
            color: "rgb(80, 144, 234)",
            padding: "0 1rem",
            alignItems:"center",
            borderRadius: "6px",
            cursor: "pointer",
          fontSize:"1.2rem",
          lineHeight:"2rem",
        }}
          >Connect Wallet</button>
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
