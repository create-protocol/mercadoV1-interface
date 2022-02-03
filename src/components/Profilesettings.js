import React, { useState, useReducer } from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

import contactus from "../assets/images/contactus.png";
import filterimage from "../assets/images/Filter.png";
import Landingcard from "./Profilecardbig";
import FillterCard from "./FillterCard";
import { Link } from "react-router-dom";
import "../assets/css/filterdropdown.css";
import Profileimg from "../assets/images/profileimg.png";
import Tick from "../assets/images/tickimg.png";
import Share from "../assets/images/share.png";
import Settings from "../assets/images/settings.png";
import Filterline from "../assets/images/filterbottomline.png";
import CollectedCard from "./CollectedCard";
import Settingsfiltercard from "./Settingsfiltercard";
import Imageedit from "../assets/images/imageedit.png";

const ImageContainer = styled.div`
  background: linear-gradient(
    180deg,
    #32b6f0 -16.13%,
    rgba(125, 155, 250, 0.17) 128.01%
  );
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  height: 15rem;
  width: 100%;
  margintop: 0;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 140%;
  color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  line-height: 120%;
  text-align: left;

  margin-top: 10rem;

  color: #f4f4f4;
`;

const InnerText = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 1.2rem;

  color: #ffffff;
`;

const Profilediv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  width:80%;
  border-radius:55%;
  height: 14rem;
  background-image:url(${Profileimg});
  background-position: center;
  
`;

const Formlabel = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.1rem;
  color: #ffffff;
`;

const Btndiv = styled.div`
  cursor: pointer;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  filter: drop-shadow(2px 4px 50px rgba(96, 219, 212, 0.12));
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  margin-right: 1rem;
  font-weight: 600;
  font-size: 20px;
  color: #f0f0f0;
`;
const initialstate = {
  Collected: true,
  Created: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Collected": {
      return {
        Collected: true,
        Created: false,
      };
    }
    case "Created": {
      return {
        Collected: false,
        Created: true,
      };
    }
    default: {
      return {
        Collected: true,
        Created: false,
      };
    }
  }
};

const Userprofile = () => {
  const [show, setShow] = useState(false);
  const [showp, setShowp] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
    royaltyinweth: "",
  });

  return (
    <>
      <div style={{ width: "100%", marginTop: "5rem", padding: "0 7.5rem" }}>
        <TopText>Profile settings</TopText>
        <img src={Filterline} alt="1" style={{ width: "90vw" }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "1vh",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-evenly",
              marginTop: "1rem",
              width: "100%",
              height: "100%",
              marginBottom: "10rem",
              color: "white",
              textAlign: "left",
            }}
          >
            <div style={{ width: "20%" }}>
              <Settingsfiltercard />
            </div>

            <div
              style={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "start",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <ImageContainer
                  onMouseEnter={() => {
                    setShow(true);
                  }}
                  onMouseLeave={() => {
                    setShow(false);
                  }}
                >
                  {show && <img src={Imageedit} alt="1" />}
                </ImageContainer>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: "1.5rem",
                  }}
                >
                  <view
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      width: "50%",
                      marginTop: "1.5rem",
                    }}
                  >
                    <form
                      className="formfill"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        marginLeft: "0",
                      }}
                    >
                      <Formlabel className="formlable">Username </Formlabel>
                      <input
                        className="formtxtfill docs"
                        type="text"
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            name: e.target.value,
                          })
                        }
                        style={{ width: "100%" }}
                      />
                      <Formlabel className="formlable2">Bio</Formlabel>
                      <textarea
                        className="formtxtfill2"
                        rows="1"
                        cols="10"
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            description: e.target.value,
                          })
                        }
                        style={{ width: "100%" }}
                      ></textarea>
                      <Formlabel className="formlable2">Links</Formlabel>
                      <textarea
                        className="formtxtfill docs"
                        rows="1"
                        cols="1"
                        //   placeholder="Your Twitter Handle"
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            description: e.target.value,
                          })
                        }
                        style={{ width: "100%", marginBottom: "0.2rem" }}
                      ></textarea>
                      <textarea
                        className="formtxtfill docs"
                        rows="1"
                        cols="1"
                        //   placeholder="Your Instagram Handle"
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            description: e.target.value,
                          })
                        }
                        style={{ width: "100%", marginTop: "0rem" }}
                      ></textarea>
                      <Formlabel className="formlable">Email address</Formlabel>
                      <input
                        className="formtxtfill docs"
                        type="text"
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            price: e.target.value,
                          })
                        }
                        style={{ width: "100%" }}
                        required
                      />
                      <Formlabel className="formlable2">
                        Wallet address
                      </Formlabel>
                      <input
                        className="formtxtfill docs"
                        type="text"
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            royaltyinweth: e.target.value,
                          })
                        }
                        style={{ width: "100%" }}
                      />
                      {/* <br /> */}
                    </form>
                  </view>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30%",
                      flexDirection:"column",
                        marginTop: "-15%",
                    }}
                  >
                    <Profilediv
                      onMouseEnter={() => {
                        setShowp(true);
                      }}
                      onMouseLeave={() => {
                        setShowp(false);
                      }}
                      
                    >
                      {/* <img
                        src={Profileimg}
                        alt="hi"
                        style={{ height: "28vh" }}
                      /> */}
                      {showp && <img src={Imageedit} alt="1" />}
                      
                    </Profilediv>
                    <InnerText style={{marginTop:"0.5rem"}}>Profile Picture</InnerText>
                  </div>
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <Btndiv>Save</Btndiv>
                  <Btndiv>Cancel</Btndiv>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
