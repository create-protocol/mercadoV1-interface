import React from "react";
// import './Desc.css'
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

const Splitscreen = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 1000px) {
    width: 100%;
    height: 60%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100vh;
  border:1px solid black
  flex-wrap:wrap

  @media (max-width: 1000px) {
    width:100%;
    height:60%;
  }
`;

const Signupbtn = styled.div`
  display: block;
  width: 20%;
  background: rgb(7, 7, 135);
  color: white;
  border: none;
  padding: 1rem;
  font-size: medium;
  border-radius: 8px;
  &:hover {
    background: blue;
    transition: 200ms ease-in;
  }
`;

const DescriptionPage = (props) => {
  console.log(props.location);
  return (
    <Splitscreen>
      <Left>
        <div
          style={{
            padding: "2rem",
            height: "90%",
            width: "80%",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "0",
          }}
        >
          <Zoom>
            <img
              src={props.location.state.image}
              // src="https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ= "
              alt="nft"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </Zoom>
        </div>
        {/* <h2 style={{color:"white"}}>{props.location.state.owner}</h2> */}
        {/* <h2 style={{color:"white"}}>{props.description}</h2> */}
      </Left>
      <Right>
        <h2 style={{ color: "white" }}>
          Price:{props.location.state.price} Eth
        </h2>
        <h2 style={{ color: "white" }}>{props.location.state.desc}</h2>
        <h2 style={{ color: "white", fontSize: "1rem", letterSpacing: "2px" }}>
          owner:{props.location.state.name}
        </h2>
        <h2
          style={{
            color: "white",
            textOverflow: "none",
            fontSize: "1rem",
            letterSpacing: "2px",
          }}
        >
          seller:{props.location.state.sellername}
        </h2>

        <Signupbtn style={{ background: "white", color: "black" }}>
          BUY
        </Signupbtn>
      </Right>
    </Splitscreen>
  );
};

export default DescriptionPage;
