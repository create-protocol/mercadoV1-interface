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
import CollectedCard from './CollectedCard'

const ImageContainer = styled.div`
  background: #313131;
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
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Profilediv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: -17rem;
`;

const Filtercurved = styled.div`
  background: #414141;
  border: 1.5px solid #414141;
  box-sizing: border-box;
  border-radius: 23.5px 23.5px 2px 2px;
  width: 15%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-right: 0.1rem;
  cursor: pointer;
`;

const Filtercurveddiv = styled.div`
  border-bottom: 1px solid
    linear-gradient(
      90deg,
      rgba(128, 147, 255, 0.25) 9.45%,
      #7d9bfa 26.47%,
      #60dbd4 72.88%,
      rgba(92, 228, 207, 0.25) 89.94%
    );
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
  const [filterOpen, setFilterOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <div style={{ width: "100%", marginTop: "5rem" }}>
        <ImageContainer>
          <Profilediv>
            <img src={Profileimg} alt="hi" style={{ height: "28vh" }} />
            <TopText>
              Bright MBA
              <img src={Tick} style={{ marginLeft: ".5vw" }} />
            </TopText>
            <InnerText>0dsf8....84h</InnerText>
            <InnerText>Joined January 2022</InnerText>
          </Profilediv>
        </ImageContainer>
        <Filtercurveddiv
          style={{
            marginTop: "10rem",
            padding: "0 4rem",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", width: "80%" }}>
            <Filtercurved onClick={()=>{dispatch({type:'Collected'})}}>
              Collected<div>0</div>
            </Filtercurved>
            <Filtercurved onClick={()=>{dispatch({type:'Created'})}}>
              Created<div>0</div>
            </Filtercurved>
            <Filtercurved>
              Favourited<div>0</div>
            </Filtercurved>
            <Filtercurved>
              Hidden<div>0</div>
            </Filtercurved>
            <Filtercurved>
              Activity<div>0</div>
            </Filtercurved>
            <Filtercurved>
              Offers<div>0</div>
            </Filtercurved>
          </div>
          <div
            style={{
              display: "flex",
              width: "7%",
              justifyContent: "space-between",
            }}
          >
            <img src={Share} />
            <img src={Settings} />
          </div>
        </Filtercurveddiv>
        <img src={Filterline} style={{ width: "90vw" }} />
        <div
          class="flex-container"
          style={{
            justifyContent: "space-between",
            width: "90%",
            marginTop: "3rem",
          }}
        >
          {/* <img src={filterimage} width="118px" height="52px"></img> */}
          <div style={{ display: "flex" }}>
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
          <div>
            <div class="dropdownfilter">
              <button class="dropbtnfilter">
                Single Item<div className="downbtn"></div>
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
            <div class="dropdownfilter">
              <button class="dropbtnfilter">
                Recently saved<div className="downbtn"></div>
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
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "4vh",
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
              <div style={{ width: "20%", marginTop: "2.7rem" }}>
                <FillterCard />
              </div>
            )}
            {state.Collected&&
            <div
              style={{
                width: filterOpen == true ? "80%" : "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: filterOpen == true ? "4rem" : "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "start",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  marginLeft: "1.5rem",
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
              </div>
            </div>
}
            {state.Created&&
            <div
              style={{
                width: filterOpen == true ? "80%" : "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: filterOpen == true ? "2rem" : "4rem",
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
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>
                <CollectedCard/>  
                
              </div>
            </div>
}
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;