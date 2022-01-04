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
            width="260px"
            height="80px"
            style={{ opacity: "0.99" }}
          ></img>
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
        </Row>

        <Row>
          <Heading>Contact Us</Heading>
          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p>Phone : +91 8178382149</p>
            {/* <br></br> */}
            <p>Email : Info@createprotocol.org</p>
            {/* <a
              href="mailto:info@muzix.tech"
              class="text-white me-6"
              style={{ margin: "8px", fontSize: "30px",color:"white" }}
            >
              <i class="fa fa-envelope"></i>
            </a>

            <a
              href="https://twitter.com/MuzixNFT"
              class="text-white me-4"
              style={{ margin: "8px", fontSize: "30px" ,color:"white"}}
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/muzixtech/"
              class="text-white me-4"
              style={{ margin: "8px", fontSize: "30px",color:"white" }}
            >
              <i class="fa fa-linkedin"></i>
            </a>

            <a
              href="https://instagram.com/muzix.nft?utm_medium=copy_link"
              class="text-white me-4"
              style={{ margin: "8px", fontSize: "30px",color:"white" }}
            >
              <i class="fa fa-instagram"></i>
            </a> */}
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
