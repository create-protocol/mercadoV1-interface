import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import contactus from "../assets/images/contactus.png";
import linewho from "../assets/images/sep line who.png";

const article = styled.div`
  width: 70%;
  border: 1px solid black;
  background-color: black;
  padding: 15px;
  margin: 15%;
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 22px;
`;
const ImageContainer = styled.div`
  background: url(${contactus});
  height: 17rem;
  width: 100%;
  margintop: 0;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 140%;
  color: #f4f4f4;

  text-align: left;
  padding-left: 12rem;
  padding-top: 9rem;
`;

const Privacy = () => {
  return (
    <>
      <div>
        <ImageContainer>Privacy Policy</ImageContainer>
        <img style={{ marginTop: "1rem" }} src={linewho} alt="line" />
        <div class="c">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
          </div>
       
          
          <div className="singlepara" style={{ width: "100%" }}>
            <p>
              At Mercado.studio, we are committed to keeping your information
              safe and secure. Please read the following policy so that you
              understand your rights in relation to this information, and our
              practiced regarding your personal data, including how your
              information will be collected, stored, used and processed on our
              platform.
            </p>
            <br></br>
            <p>
              At Mercado.studio, we are committed to keeping your information
              safe and secure. Please read the following policy so that you
              understand your rights in relation to this information, and our
              practiced regarding your personal data, including how your
              information will be collected, stored, used and processed on our
              platform.
            </p>
          </div>
        </div>
      
    </>
  );
};

export default Privacy;
