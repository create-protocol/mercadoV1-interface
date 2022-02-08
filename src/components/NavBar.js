import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import "../assets/css/Navbar.css";
import "../assets/css/dropdownnav.css";
import Drawerroutes from "./DrawerRoutes";
import Home from "../assets/images/image 8.svg";
import styled from "styled-components";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import Navdropline from "../assets/images/navdropline.png";
import ConnectWallet from "./ConnectWallet";
import { useDispatch, useSelector } from "react-redux";
import { toggleWalletPopup } from "../store";

export const GradientButton = styled.div`
  color: white;
  border-radius: 5px;
  width: 10rem;
  text-align: center;
  background: linear-gradient(
    126.21deg,
    #431e54 0%,
    #9930ef 14.24%,
    #a53db6 49.56%,
    #cb3f59 93.2%
  );

  padding: 0.5rem;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  margin: 1rem;
  cursor: pointer;
`;
const Navdivdesktop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  zindex: 1000;
  background: black;

  @media (max-width: 1180px) {
    display: none;
  }
`;

const Navdiv = styled.div`
  @media (min-width: 1180px) {
    display: none;
  }

  width: 100%;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 100px;
  background: transparent;
`;


const NavBar = (props) => { 

  const [showDrawer, setShowDrawer] = useState(false);
  const name = props.location.pathname.replaceAll("-", " ").replace("/", "");

  const dispatch = useDispatch()
  const handleToggle = () => {dispatch(toggleWalletPopup())};
  const wallet =  useSelector(state => state.wallet.wallet)

  return (
    <>
      <Navdiv>
        <nav
          role="navigation"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "'Rubik', sans-serif",
          }}
        >
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <Link to="/" activeClassName="active">
                <div style={{ textDecoration: "none" }}>Home</div>
              </Link>
              <Link to="/asset/create">
                <div style={{ textDecoration: "none" }}>Create</div>
              </Link>
              <Link to="/about">
                <div style={{ textDecoration: "none" }}>About</div>
              </Link>
              <Link to="/faq">
                <div style={{ textDecoration: "none" }}>FAQs</div>
              </Link>
              <Link to="/contactus">
                <div style={{ textDecoration: "none" }}>Contact us</div>
              </Link>
            </ul>
          </div>

          <div>
            <Link to="/">
              <img src={Home} alt="logo" style={{ height: "3rem" }} />
            </Link>
          </div>
        </nav>
      </Navdiv>
      <Navdivdesktop
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
              <div style={{ width: "10px", marginLeft: "5.5rem" }}>
                <img
                  style={{
                    width: "15rem",
                    marginTop: "0.5rem",
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
                fontSize: "1rem",
                // color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              <Link
                to="/"
                activeStyle={{ color: "red" }}
                style={{ color: "white" }}
              >
                Home
              </Link>
              <Link to="/about">
                <div class="dropdown">
                  <button class="dropbtn">Explore</button>
                  <div class="dropdown-content">
                    <Link
                      to="/main"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      All NFTs <img src={Navdropline} alt="bar" />
                    </Link>
                    <Link to="/collections">Collections</Link>
                  </div>
                </div>
              </Link>
              <Link  to="/asset/create" style={{ color: "#FFF" }}>
                <div style={{ textDecoration: "none" }}>Create</div>
              </Link>

              <Link to="/about">
                <div class="dropdown">
                  <button class="dropbtn">About</button>
                  <div class="dropdown-content">
                    <Link
                      to="#"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Who are we? <img src={Navdropline} alt="bar" />
                    </Link>
                    <Link to="/faq">FAQs</Link>
                  </div>
                </div>
              </Link>

              <Link to="/contactus" style={{ color: "#FFF" }}>
                <div style={{ textDecoration: "none" }}>Contact us</div>
              </Link>

              <div style={{ marginRight: "6.5rem" }}>
               

                {wallet && wallet.address ? (
                  <div style={{ display: "flex" }}>
                    <div class="on-dark">
                      <button
                        class="border-gradient border-gradient-purple"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.2rem",
                          width: "12rem",
                          borderRadius: "30px",
                        }}
                      >
                        {wallet.address.substring(0, 5) +
                          "..." +
                         wallet.address.slice(-4)}
                      </button>
                    </div>
                  </div>
                ): (
                  <div
                    style={{
                      marginTop: "10px",
                      borderRadius: "10px",
                      outline: "none",
                    }}
                  >
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        width: "12rem",
                        borderRadius: "30px",
                      }}
                      class="border-gradient border-gradient-purple"
                      onClick={handleToggle}
                    >
                      Connect Wallet
                    </button>
                  </div>
                )}
              </div>
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
          headerStyle={{
            backgroundColor: "#1a1a1a",
            padding: 0,
            border: "none",
          }}
        >
          <Drawerroutes
            {...props}
            closeDrawer={() => setShowDrawer(false)}
          ></Drawerroutes>
        </Drawer>
      </Navdivdesktop>
      <ConnectWallet />
    </>
  );
};

export default NavBar;
