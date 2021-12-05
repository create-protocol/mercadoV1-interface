import React, { useState } from "react";
import { Drawer } from "antd";
//import { UnorderedListOutlined } from "@ant-design/icons";
import { isBrowser } from "react-device-detect";
import "../assets/css/Navbar.css";
// import ham from "../assets/images/menu.png";
import Drawerroutes from "./DrawerRoutes";
const NavBar = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const name = props.location.pathname.replaceAll("-", " ").replace("/", "");
  return (
    <div style={{}}>
      <div
        className="header-container"
        style={
          name
            ? name === "VIEW PROFILE"
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
        <div className="header-ham" style={{width:"100vw",display:"flex",justifyContent:"space-between",alignItems:"center"}} >
          <div>Powered by Muizx</div>
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
              ? name === "VIEW PROFILE"
                ? {
                    color: "#fff",
                    fontSize: isBrowser ? "3rem" : "1.5rem",
                  }
                : { fontSize: isBrowser ? "3rem" : "1.5rem" }
              : { fontSize: isBrowser ? "1.6rem" : "1.9rem" }

          }
        >
          {name
            ? name === "VIEW PROFILE"
              ? "PROFILE"
              : name.includes("page")
              ? ""
              : name
            : "MERCADO.STUDIO"}
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
