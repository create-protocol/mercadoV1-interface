import React from "react";
import logo from "../assets/images/image 6.svg";
import "font-awesome/css/font-awesome.min.css";
import linesmall from "../assets/images/line (4).png";
import linesmall2 from "../assets/images/line (3).png";

import {
  Containertop,
  Row,
  FooterLink,
  Heading,
  ContainerInner,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Containertop>
      <img
        src={linesmall}
        style={{
          width: "80%",
          height: "2px",
        }}
      />
      <br></br>
      <ContainerInner>
        <Row>
          <img
            src={logo}
            width="290px"
            height="80px"
            style={{ opacity: "0.99" }}
          ></img>
          <div style={{color:"wheat",display:"flex",alignItems:"center",justifyContent:"space-evenly",marginTop:"10.4rem"}}>
            
           <a href="https://www.linkedin.com/company/muzixtech/" style={{color:"white",margin:"5px"}}><div>LINKEDIN</div></a>
           <a style={{color:"white",margin:"5px"}}><div>REDDIT</div></a>
           <a style={{color:"white",margin:"5px"}}><div>FACEBOOK</div></a>
           <a href="https://twitter.com/MuzixNFT" style={{color:"white",margin:"5px"}}><div>TWITTER</div></a>
           <a href="https://instagram.com/muzix.nft?utm_medium=copy_link" style={{color:"white",margin:"5px"}}><div>INSTAGRAM</div></a>

  
            </div>
          {/* <Heading>Marketplace</Heading> */}

          {/* <FooterLink href="/">Home</FooterLink> */}
          {/* <FooterLink href="/creator/bharat-thakur">Creator</FooterLink> */}
          {/* <FooterLink href="#">Discover</FooterLink> */}
          {/* <FooterLink href="/creator">Creators</FooterLink> */}
        </Row>

        <Row>
          <Heading>Quick Links</Heading>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/">Community</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <div style={{marginTop:"3.3rem"}}>PRIVACY & POLICY</div>
        </Row>

        <Row>
          <Heading>Contact Us</Heading>
          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p>Phone : +91 8178382149</p>
            {/* <br></br> */}
            <a style={{color:"white"}} href="mailto:Info@createprotocol.org"><p>Email : Info@createprotocol.org</p></a>
            
            <div style={{marginTop:"7.2rem"}}>COOKIES POLICY</div>
      
          </div>
        </Row>

      
      </ContainerInner>
     
     
      <img
        src={linesmall2}
        style={{
          width: "80%",
          height: "1.3px",
        }}
      />
      {/* <h4 style={{ color: "white" }}>
        © 2021 mercado.studio. All rights reserved
      </h4> */}
    </Containertop>
  );
};

export default Footer;
