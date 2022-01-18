import React from 'react'
import PageHeader from '../components/PageHeader'
import LandingCard from './LandingCard'
const ArtisPage = () => {
  return (
    <div style={{ height: '250vh' }}>
      <PageHeader subtitle="Home  >  Blogs  >  An open call to artists" />
      <div className="blogDetail__container">
        <section className="profile">
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
              <p style={{color:"white",fontSize:"20px",fontWeight:"600px"}}>CEATED (20)</p>
              <p style={{color:"white",fontSize:"20px",fontWeight:"600px"}}>COLLECTED (15)</p>
              <p style={{color:"white",fontSize:"20px",fontWeight:"600px"}}>FAVOURITES (35)</p>
              <p style={{color:"white",fontSize:"20px",fontWeight:"600px"}}>OFFERS (0)</p>
            </div>
          </div>
        </section>
        <section className="blogDetail">
         <LandingCard/>
        </section>
      </div>
    </div>
  )
}

export default ArtisPage
