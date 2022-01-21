import React from 'react'
import styled from 'styled-components'

import TopCollection from '../assets/images/topcollections.png'

const Textcomp=styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: normal;
font-size: 1.2rem;
line-height: 2.2rem;
color: #FFFFFF;

`
const Flexdis=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`

const Maindiv=styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0.53125) 48.96%, rgba(55, 55, 55, 0.8) 100%);
opacity: 0.75;
box-shadow: 0px -10px 25px rgba(0, 0, 0, 0.32);
display:flex;
align-items:center;
justify-content:space-between;
padding:0.5rem 0;
border-radius:1rem;
margin-top:.5rem;
`
const TopCollectionCard=()=>{
    return(
        <div style={{display:"flex"}}>
        <Flexdis style={{color:"#BA68C8",width:"3%",fontWeight:"bold"}}>1.</Flexdis>
        <Maindiv style={{width:"97%",height:"7rem",display:"flex"}}>
            
            <Flexdis style={{width:"20%",paddingLeft:"1rem"}}>
                <img src={TopCollection} alt="im"/>
                <Textcomp>Super liquids</Textcomp>
            </Flexdis>
            <Flexdis style={{width:"40%"}}>
                <Textcomp>2.882 BNB</Textcomp>
                <Textcomp style={{color:"#FF1111"}}>-31.7%</Textcomp>
                <Textcomp style={{color: "#41BA08"}}>+433.9%</Textcomp>
                <Textcomp>0.00788BNB</Textcomp>
            </Flexdis>
            <Flexdis style={{width:"15%",padding:"0 1rem"}}>
                <Textcomp>66</Textcomp>
                <Textcomp>96</Textcomp>
            </Flexdis>

        </Maindiv>
        </div>
    )
}

export default TopCollectionCard