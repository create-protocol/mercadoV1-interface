import React from "react";
import "font-awesome/css/font-awesome.min.css";


import mobile from "../assets/images/comingsoon.jpg";
const Mobilepage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        fontFamily: "Bahnschrift",
      }}
    >
      <h2 style={{ color: "white", marginTop: "1.5rem", textAlign: "center" }}>
        Mercado.studio 
      </h2>
      <h3 style={{ color: "white", marginTop: "0rem", textAlign: "center" }}>
         will be available soon on your mobile devices!
      </h3>
      <div style={{ widyh: "80%", objectFit: "contain" }}>
        <img
          style={{ objectFit: "contain", height: "16rem", marginTop: "1.5rem" }}
          src={mobile}
          alt="coming"
        />
      </div>
      <h4 style={{ color: "white", marginTop: "2rem", textAlign: "center" }}>
        Open on desktop for a better view
      </h4>
      <h3 style={{ color: "white", marginTop: ".05rem", textAlign: "center" }}>
        or find out more about <a href="https://createprotocol.org/">CREATE PROTOCOL</a>
      </h3>
      <h2 style={{ color: "white", marginTop: "1.2rem", textAlign: "center" }}>
        Contact Us
      </h2>

      
      <div style={{ display: "flex",justifyContent:"space-evenly",width:"100%",alignItems:"center" }}>
        <a
          href="mailto:info@muzix.tech"
          class="text-white me-6"
          style={{ margin: "8px", fontSize: "30px", color: "white" }}
        >
          <i class="fa fa-envelope"></i>
        </a>

        <a
          href="https://twitter.com/MuzixNFT"
          class="text-white me-4"
          style={{ margin: "8px", fontSize: "30px", color: "white" }}
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/muzixtech/"
          class="text-white me-4"
          style={{ margin: "8px", fontSize: "30px", color: "white" }}
        >
          <i class="fa fa-linkedin"></i>
        </a>

        <a
          href="https://instagram.com/muzix.nft?utm_medium=copy_link"
          class="text-white me-4"
          style={{ margin: "8px", fontSize: "30px", color: "white" }}
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Mobilepage;
