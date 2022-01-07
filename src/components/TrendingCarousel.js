import React,{useState} from 'react'
import styled from 'styled-components'
import LandingCard from './LandingCard'
import Landingimage from '../assets/images/landingimg.png'

import Carousel from 'react-bootstrap/Carousel';

const data = [
    {
     image:Landingimage, 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image:Landingimage, 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:Landingimage, 
      caption:"Caption",
      description:"Description Here"
     } 
  ]

const TrendingCarousel=()=>{
    const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          {/* <h3>{slide.caption}</h3> */}
          {/* <p>{slide.description}</p> */}
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}

export default TrendingCarousel