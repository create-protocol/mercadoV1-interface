import styled from "styled-components";
import Settingsline from '../assets/images/settingsline.png'

const Smalltext=styled.div`
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 16px;


letter-spacing: -0.02em;

color: #FFFFFF;

`
const Largetext=styled.div`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
letter-spacing: -0.02em;
margin-top:0.5rem;
color: #FFFFFF;
`

const Settingsfiltercard=()=>{


    return(
        <div style={{width:"100%",padding:"1rem 1rem",background:"#131313",borderRadius:"1rem",height:"15rem"}}>
            <Smalltext>SETTINGS</Smalltext>
            <img src={Settingsline} alt="1" style={{width:"100%"}}/>
            <Largetext>Profile</Largetext>
            <img src={Settingsline} alt="1" style={{width:"100%"}}/>
            <Largetext>Notifications</Largetext>
            <img src={Settingsline} alt="1" style={{width:"100%"}}/>
            <Largetext>Offers</Largetext>
            <img src={Settingsline} alt="1" style={{width:"100%"}}/>
            <Largetext>Account Support</Largetext>
            
        </div>
    )
}

export default Settingsfiltercard   