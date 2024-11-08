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
import { Menu, Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import web3 from "web3";
import "antd/dist/antd.css";
import { getEllipsisTxt } from "../utils/formatters";
import useWallet from '../hooks/wallet/provider';

const SubMenu = Menu;
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
  position: fixed;
`;

const NavLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
`;

const NavBar = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isWalletModalOpen, setWalletModal] = useState(false);

  const openWalletModal = () => {
    console.log('click on open wallet');
    setWalletModal(true);
  }
  const hideWalletModal = () => {
    setWalletModal(false);
  }
  const name = props.location.pathname.replaceAll("-", " ").replace("/", "");
  const {
    account,
    isActive
  } = useWallet();
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleWalletPopup());
  };

  useEffect(() => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // console.log(Web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1"))
  //  var bal= web3.eth.getBalance(wallet.address)
  // .then(console.log);
  //   console.log("here are we"+bal);
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
          <MenuOutlined style={{ color: "white", fontSize: "2rem" }} />

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
          transition: ".8s",
          background: !scrolled ? "transparent" : "#1a1a1a",
          height: !scrolled ? "8rem" : "5rem",
        }}
      >
        <div
          className="header-container"
          style={{ marginTop: !scrolled ? "3rem" : 0, transition: ".3s" }}
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
              <NavLink to="/assets/create" style={{ color: "#FFF" }}>
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
                {isActive && account ? (
                  <div
                    className="border-gradient2"
                    style={{
                      display: "flex",

                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      width: "10rem",
                      height: "3rem",
                      borderRadius: "10px",
                      border: "none",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    <>
                    {/*
                      <Dropdown
                        overlay={
                          <Menu>
                            <Menu.Item key="0">
                              <NavLink to="/profile">
                                <div style={{ textDecoration: "none" }}>
                                  Profile (
                                  {wallet.address.substring(0, 5) +
                                    "..." +
                                    wallet.address.slice(-4)}
                                  )
                                </div>
                              </NavLink>
                            </Menu.Item>
                            <Menu.Item key="1">
                              <Link to="/profile">My Items</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                              <Link to="/collections">My Collections</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                              <Link to="/profile">Offers</Link>
                            </Menu.Item>
                          </Menu>
                        }
                        trigger={["click"]}
                      >
                        <a
                          style={{
                            color: "white",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            textDecoration: "none",
                          }}
                          onClick={(e) => e.preventDefault()}
                        >
                          {getEllipsisTxt(wallet.address, 5)}
                        </a>
                      </Dropdown>
                      */}
                        <div className="dropdown">
                          <button className="dropbtn"
                            onClick={(e) => e.preventDefault()}
                          >
                            {getEllipsisTxt(account, 5)}
                          </button>
                          <div className="dropdown-content">
                          <NavLink to="/profile" style={{ display: "flex", flexDirection: "column" }}>
                              Profile (
                              {account.substring(0, 5) +
                                "..." +
                                account.slice(-4)}
                              )
                              <img src={Navdropline} alt="bar" />
                          </NavLink>
                          <NavLink to="/profile" style={{ display: "flex", flexDirection: "column" }}>My Items
                            <img src={Navdropline} alt="bar" />
                          </NavLink>
                          <NavLink to="/collections" style={{ display: "flex", flexDirection: "column" }}>My Collections
                            <img src={Navdropline} alt="bar" />
                          </NavLink>
                          <NavLink to="/profile">Offers</NavLink>
                          </div>
                        </div>

                    </>
                  </div>
                ) : (
                  <div
                    style={{
                      borderRadius: "8px",
                      border: "none",
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
                        border: "none",
                        fontFamily: "Montserrat, sans-serif",
                        height: "47px",
                      }}
                      className="border-gradient"
                      onClick={openWalletModal}
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
      <ConnectWallet
        isWalletModalOpen={isWalletModalOpen}
        hideWalletModal={hideWalletModal}
        openWalletModal={openWalletModal}
      />
    </>
  );
};

export default NavBar;
