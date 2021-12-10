import React, { Component } from "react";
import Faq from "react-faq-component";


const data = {
  rows: [
    {
      title: "What is Muzix About?",
      content:
        "Muzix marketplace is the first product of the CREATE ecosystem that we’ll be launching. It is a hub of high quality art, talented artists and art collectors."
    },
    {
      title: "What are Muzix’s future plans?",
      content:
        "Muzix is currently focused on building a digital community of genuine artists and art lovers and NFT Marketplace will be launched in a few weeks! In coming months, the Create Ecosystem will take shape as the ecosystem grows and other solutions for creators get launched. For more information on this, check out our #whitepaper channel"
    },
    {
      title: "What is Muzix’s Mission & Vision?",
      content:
        "Muzix is a decentralised platform owned by artists.We believe in a world where artists own not just their creation/ art/ music but also the platform which facilitates the interaction with the artwork with the fans, listeners, viewers and brands.At the same time their creation gives them access to premium financial services, not only the privileged few."
    },
    {
      title: "What will the Features of NFT Marketplace be?",
      content:
        "As an artist, you will be able to <br> 1. mint your art as NFT 2. display it 3. share it 4. sell it and also 5. auction it. As a collector or fan, you can also make art collections, albums, and a lot more on our platform.The aim of the marketplace will be to prioritise creators and help them to get the deserved value for their art as well as help them collaborate with other art. The end goal is for an artist to earn through his or her artwork"
    },
    {
      title: "When is Muzix NFT Marketplace Launching?",
      content:
        "Muzix Marketplace will be launched in October, 2021. Which is super close!"
    },
    {
      title: "What can I post as NFTs on Muzix?",
      content:
        "Any digital artwork in the form of audio, visual or both can be uploaded here."
    },
    {
      title:
        "I want to create an account on Muzix. Are there any prerequisites for that?",
      content:
        "Any person wanting to showcase their art work and earn from it can put their content as NFT on the marketplace. Basically, you need to have a Metamask wallet and art to mint NFTs."
    },
    {
      title: "How do I create a Metamask wallet?",
      content:
        "For creating Metamask Wallet, here is a helpful video: https://www.youtube.com/watch?v=WAStJtjYI_c  If any issue arises, feel free to DM any Muzix Mod or Post on our support channel."
    },
    {
      title: "I want to support Muzix project! what do I do?",
      content:
        "Spreading the word about our mission on Discord and Twitter is already a lot. If you want to do more, feel free to reach out to us in DM or by email"
    }
  ]
};

const styles = {
 bgColor: 'black',
 titleTextColor: 'white',
 // titleTextSize: '48px',
 rowTitleColor: 'white',
 // rowTitleTextSize: 'medium',
 rowContentColor: 'grey',
 rowContentTextSize: '16px',
 // rowContentPaddingTop: '10px',
 rowContentPaddingBottom: '10px',
 rowContentPaddingLeft: '-10px',
 // rowContentPaddingRight: '150px',
 arrowColor: "red",
 transitionDuration: "1s",
 timingFunc: "ease",
 
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true
};

export default class App extends Component {
  render() {
    return (
      <div>
       
       <br/>
        <Faq data={data} styles={styles} config={config} />
      </div>
    );
  }
}
