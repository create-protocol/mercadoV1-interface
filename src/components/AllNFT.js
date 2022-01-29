import React, { useState } from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";

import contactus from "../assets/images/contactus.png";
import filterimage from "../assets/images/Filter.png";
import Landingcard from "./LandingCard";
import FillterCard from "./FillterCard";
import { Link } from "react-router-dom";
import "../assets/css/filterdropdown.css";

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

const TopText = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 150%;
`;

const InnerText = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 150%;

  color: #ffffff;
`;

const Radio = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 26px;
`;

const FormLabel = styled.div`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 26px;
  margin-top: 2rem;
`;

const InputForm = styled.input`
  background: none;
  margin-top: 1rem;
  color: white;
  border: none;
  border-bottom: 1px solid #565656;
`;

const Whitebtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  width: 204px;
  height: 62px;
  background: #b4b4b4;
  border-radius: 15px;
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 160%;
  color: #606060;
`;

const AllNFT = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <>
      <div style={{ width: "100%" }}>
        <ImageContainer>Discover</ImageContainer>
        <div class="flex-container">
          {/* <img src={filterimage} width="118px" height="52px"></img> */}
          {filterOpen ? (
            <button
              class="btn filterbutton2"
              onClick={() => {
                setFilterOpen(!filterOpen);
              }}
            >
              <i class="fa fa-filter "></i>Filter
            </button>
          ) : (
            <button
              class="filterbutton"
              onClick={() => {
                setFilterOpen(!filterOpen);
              }}
            >
              Filter
            </button>
          )}

          <div class="dropdownfilter">
            <button class="dropbtnfilter">
              Price ascending <div className="downbtn"></div>
            </button>
            <div class="dropdown-contentfilter">
              <Link
                to="/main"
                style={{ display: "flex", flexDirection: "column" }}
              >
                All NFTs
              </Link>

              <Link to="/collections">Collections</Link>
              {/* <a href="#">Link 3</a> */}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "3rem",
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
              marginLeft: "4rem",
              marginRight: "4rem",
            }}
          >
            {filterOpen && (
              <div style={{ width: "25%" }}>
                <FillterCard />
              </div>
            )}

            <div
              style={{
                width: filterOpen == true ? "70%" : "100%",
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
                <Landingcard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNFT;
