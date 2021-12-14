import React from "react";
// import logo from "../assets/images/Muzixlogo.svg";
import 'font-awesome/css/font-awesome.min.css'

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

        {/* Heading-logo of muzix */}
      {/* <div style={{ width: "100%", paddingBottom: "1rem" }}>
        <img src={logo} alt="logo-present" />
      </div> */}

      {/* horizontal-line */}
      <hr
        style={{
          width: "80%",
          height: "1px",
          backgroundColor: "#ccc",
          border: "none",
        }}
      />
      <ContainerInner>
        <Row>
          <Heading>Marketplace</Heading>

          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/creator/bharat-thakur">Creator</FooterLink>
          {/* <FooterLink href="#">Discover</FooterLink> */}
          {/* <FooterLink href="/creator">Creators</FooterLink> */}
        </Row>
        <Row>
          <Heading>About Us</Heading>

          {/* <FooterLink href="/teampage">Team</FooterLink> */}
          {/* <FooterLink href="#">Vision</FooterLink>
          <FooterLink href="#">Testimonials</FooterLink> */}
        </Row>
        <Row>
          <Heading>Useful Links</Heading>
          <FooterLink href="/faq">FAQ</FooterLink>
      
        </Row>

        <Row>
          <Heading>Contact Us</Heading>
          <div className="row" style={{display:"flex",flexDirection:"column"}}>
            <a
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
            </a>

          </div>
        </Row>
      </ContainerInner>
      <hr
        style={{
          width: "80%",
          height: "1px",
          backgroundColor: "#ccc",
          border: "none",
        }}
      />
      <h4 style={{ color: "white" }}>© 2021 mercado.studio. All rights reserved</h4>
    </Containertop>
  );
};

export default Footer;
