import React from "react";
import styled from "styled-components";
import Sellerimg from '../assets/images/sellerimg.png'

const TopSeller=styled.div`
height:7rem;
width:14rem;
background:#121212;
border-radius:1rem;
margin-left:1rem;
display:flex;
align-items:center;
// justify-content:center;
padding:1rem;
`
const Seller=()=>{
 return(
<TopSeller>
            <div>
              <img style={{width:"4rem",height:"4rem"}} src={Sellerimg} alt="sel"/>
            </div>
            <div style={{display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column",marginLeft:"1.5rem",width:"70%"}}>
              <div style={{fontFamily:"Century Gothic",color:"white",fontWeight:"bold",fontSize:".9rem"}}>Abdul Ahmed</div>
              <div style={{fontFamily:"Century Gothic",color:"white",fontSize:".7rem",color:"#C1C1C1"}}>@abduul</div>
              <div style={{fontFamily:"Century Gothic",color:"white",fontSize:".8rem",fontWeight:"500",color:"#FF007A",fontWeight:"bold"}}>100.20ETH</div>
            </div>
          </TopSeller>
 )
}


export default Seller;