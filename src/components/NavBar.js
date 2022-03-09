import React, { useState, useEffect } from "react";
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

const NavLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
`;

const NavBar = (props) => {

  const [showDrawer, setShowDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const name = props.location.pathname.replaceAll("-", " ").replace("/", "");

  const dispatch = useDispatch()
  const handleToggle = () => {dispatch(toggleWalletPopup())};
  const wallet =  useSelector(state => state.wallet.wallet)

  useEffect(() => {
    const handleScroll = _ => {
      if (window.pageYOffset > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return _ => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <>
      <Navdiv>
        <nav
          role="navigation"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <NavLink to="/" activeClassName="active">
                <div style={{ textDecoration: "none" }}>Home</div>
              </NavLink>
              <NavLink to="/assets/create">
                <div style={{ textDecoration: "none" }}>Create</div>
              </NavLink>
              <NavLink to="/about">
                <div style={{ textDecoration: "none" }}>About</div>
              </NavLink>
              <NavLink to="/faq">
                <div style={{ textDecoration: "none" }}>FAQs</div>
              </NavLink>
              <NavLink to="/contactus">
                <div style={{ textDecoration: "none" }}>Contact us</div>
              </NavLink>
            </ul>
          </div>

          <div>
            <NavLink to="/">
              <img src={Home} alt="logo" style={{ height: "3rem" }} />
            </NavLink>
          </div>
        </nav>
      </Navdiv>
      <Navdivdesktop
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "1000",
          transition:".8s",
          background: !scrolled ? 'transparent' : '#1a1a1a',
          height: '5rem'
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
            <NavLink to="/">
              <div style={{ width: "10px", marginLeft: "5.5rem" }}>
                <img
                  style={{
                    width: "18rem",
                    marginTop: "0.5rem",
                    marginLeft: "20px",
                  }}
                  src={Home}
                  alt="homepage"
                />
              </div>
            </NavLink>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "50%",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "1rem",
                // color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              {/* <NavLink
                to="/"
                activeStyle={{ color: "red" }}
                style={{ color: "white" }}
              >
                Home

              </NavLink> */}
              <NavLink to="/about">
                <div className="dropdown">
                  <button className="dropbtn">Explore</button>
                  <div className="dropdown-content">
                    <NavLink
                      to="/allnft"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      All NFTs <img src={Navdropline} alt="bar" />
                    </NavLink>
                    <NavLink to="/collections">Collections</NavLink>
                  </div>
                </div>
              </NavLink>
              <NavLink  to="/assets/create" style={{ color: "#FFF" }}>
                <div style={{ textDecoration: "none" }}>Create</div>
              </NavLink>

              <NavLink to="/about">
                <div className="dropdown">
                  <button className="dropbtn">About</button>
                  <div className="dropdown-content">
                    <NavLink
                      to="#"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      Who are we? <img src={Navdropline} alt="bar" />
                    </NavLink>
                    <NavLink to="/faq">FAQs</NavLink>
                  </div>
                </div>
              </NavLink>

              <NavLink to="/contactus" style={{ color: "#FFF" }}>
                <div style={{ textDecoration: "none" }}>Contact us</div>
              </NavLink>

              <div style={{ marginRight: "6.5rem" }}>


                {wallet && wallet.address ? (
                  <div style={{ display: "flex" }}>
                    <div className="on-dark">
                      <button
                        className="border-gradient border-gradient-purple"
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
                      borderRadius: "8px",
                      border:"none"
                    }}
                  >
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.9rem",
                        width: "10rem",
                        borderRadius: "10px",
                        border:"none",
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      className="border-gradient"
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
