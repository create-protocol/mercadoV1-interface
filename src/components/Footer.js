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

<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css"/>
<style type="text/css">
	{/* #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; } */}
	{/* /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block. */}
	   {/* We recommend moving this block and the preceding CSS link to the HEAD of your HTML file.  */}
</style>
<div id="mc_embed_signup">
<form action="https://createprotocol.us20.list-manage.com/subscribe/post?u=d6b2d0267ff4af5f6f784edc2&amp;id=f3a79bcd16" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME"/>
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME"/>
</div>
<div class="mc-field-group size1of2">
	
		
		
		
	</div>
</div>	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>   
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d6b2d0267ff4af5f6f784edc2_f3a79bcd16" tabindex="-1" value=""/></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
               
            </div>
        </div>
        </form>

    </div>



      <div>
        
      </div>
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
          {/* <FooterLink href="/creator/bharat-thakur">Creator</FooterLink> */}
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
