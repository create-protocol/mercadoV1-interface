import React from 'react'
import PageHeader from '../components/PageHeader'
import LandingCard from './LandingCard'

import ArtistPageLine from '../assets/images/Artistpageline.png'
import styled from 'styled-components'

const Filternfts=styled.div`
font-family: Century Gothic;
font-style: normal;
font-weight: 600;
font-size: 1.2rem;
line-height: 140%;
text-decoration-line: underline;
margin-right:1.2rem;
color: #FFFFFF;
`

const ArtisPage = () => {
  return (
    <div style={{ height: '250vh' }}>
      <PageHeader subtitle="Home  >  Blogs  >  An open call to artists" />
      <div className="blogDetail__container" style={{columnGap:"-2rem"}}>
        <section className="profile" style={{width:"90%"}}>
          <div className="profile__wrapper">
            <div className="profile__images">
              <div id="profile_banner">
                <img src="/profile_banner.png" alt="profile banner" />
              </div>
              <div id="profile_pic">
                <img src="/profile.png" alt="profile image" />
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__name">
                <h4>Bright Mba</h4>
                <img
                  style={{ marginLeft: '0.25rem' }}
                  src="/verified.svg"
                  alt="verified"
                />
              </div>
              <h5 className="profile__username">@brightmac</h5>
              <p className="profile__bio">
                I am an artist of the real world with creative ideas of the
                ancients arts in benin, Nigeria
              </p>
            </div>
          </div>
          <div className="profile__share" >
            
            <br></br>
            <div style={{display:"inline"}}>
              <p style={{color:"white",fontSize:"20px",fontWeight:"600px"}}>CREATED (20)</p>
              <p style={{color:"white",fontSize:"20px",fontWeight:"600px"}}>COLLECTED (15)</p>
              <p style={{color:"white",fontSize:"20px",fontWeight:"600px"}}>FAVOURITES (35)</p>
              <p style={{color:"white",fontSize:"20px",fontWeight:"600px"}}>OFFERS (0)</p>
            </div>
          </div>
        </section>
        <section className="blogDetail" >
         <div style={{display:"flex"}}>
           <Filternfts>All</Filternfts>
           <Filternfts>Art</Filternfts>
           <Filternfts>Music</Filternfts>
         </div>
         <img src={ArtistPageLine} style={{width:"50rem"}}/>
         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",width:"55rem"}}>
         <LandingCard/>
         <LandingCard/>
         <LandingCard/>
         <LandingCard/>
         <LandingCard/>
         <LandingCard/>
         </div>
        
        </section>
      </div>
    </div>
  )
}

export default ArtisPage
