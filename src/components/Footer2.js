import React from "react";
import visa from "../assets/images/Visa.svg";
import bitcoin from "../assets/images/Bitcoin.svg";
import mastercard from "../assets/images/Mastercard.svg";
import 'font-awesome/css/font-awesome.min.css'

import {
  Containertop,
  Row,
  Column,
  FooterLink,
  Heading,
  ContainerInner,
} from "./FooterStyles2";

const Footer2 = () => {
  return (
    <Containertop >

        {/* Heading-logo of muzix */}
      {/* <div style={{ width: "100%", paddingBottom: "1rem" }}>
        <img src={logo} alt="logo-present" />
      </div> */}

      {/* horizontal-line */}
     
      <ContainerInner>
        <Row>
          <Heading style={{color:"#FFFFFF"}}>Quick Links</Heading>

          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/teampage">Products</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Features</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </Row>
       
        <Row >
          <Heading style={{color:"#FFFFFF"}}>Resources</Heading>
          <FooterLink href="/faq">Download Whitepapper</FooterLink>
          <FooterLink href="#">Smart Token</FooterLink>
          <FooterLink href="#">Blockchain Explorer</FooterLink>
          <FooterLink href="#">Crypto API</FooterLink>
          <FooterLink href="#">Interest</FooterLink>


        </Row>
        {/* <Row>
          <Heading>Company</Heading>
          <FooterLink href="/faq">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms and Conditions</FooterLink>
          <FooterLink href="#">Community Guidelines</FooterLink>
          <FooterLink href="#">Help</FooterLink>
        </Row> */}
        <Row>
          <Heading style={{fontSize:"32px" ,color:"#FFFFFF"}}>We accept following <br/>payment systems</Heading>
          <div className="row" style={{display:"flex",flexDirection:"row",marginLeft:"10px"}}>
                <img src={visa} style={{width:"100px",height:"70px",margin:"20px"}}></img>
                <img src={bitcoin} style={{width:"100px",height:"70px",margin:"20px"}}></img>
                <img src={mastercard} style={{width:"100px",height:"70px",margin:"20px"}}></img>
                
          </div>
        </Row>
      </ContainerInner>
    
        <div>
        

        <div className="row" style={{display:"flex",flexDirection:"row",}}>


            <a
              href="#"
              class="text-white me-6"
              style={{ margin: "8px", fontSize: "30px",color:"white",padding:"20px" }}
            >
              <i class="fa fa-facebook"></i>
            </a>

            <a
              href="https://twitter.com/MuzixNFT"
              class="text-white me-4"
              style={{ margin: "8px", fontSize: "30px" ,color:"white",padding:"20px"}}
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/muzixtech/"
              class="text-white me-4"
              style={{ margin: "8px", fontSize: "30px",color:"white",padding:"20px" }}
            >
              <i class="fa fa-linkedin"></i>
            </a>

            <a
              href="https://instagram.com/muzix.nft?utm_medium=copy_link"
              class="text-white me-4"
              style={{ margin: "8px", fontSize: "30px",color:"white" ,padding:"20px"}}
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              href="https://instagram.com/muzix.nft?utm_medium=copy_link"
              class="text-white me-4"
              style={{ margin: "8px", fontSize: "30px",color:"white" ,padding:"20px"}}
            >
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
        <h4 style={{ color: "#FFFFFF",textAlign:"left",}}>©2021 CR8 PROTOCOL. All rights reserved</h4>

      
    </Containertop>
  );
};

export default Footer2;
