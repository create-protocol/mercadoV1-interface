import React, { useState,useEffect } from 'react'
import arrow_down from '../assets/images/arrow_down.svg'
import Aos from 'aos';
import 'aos/dist/aos.css';
const EachFaq = ({ title, content }) => {
  useEffect(()=>{
    Aos.init();
  })
  const [open, setOpen] = useState(false) 

  return (
    <div className="faq" >
      <div onClick={() => setOpen(!open)} className="faq__title">
        <h2 className="faq__title--text">{title}</h2>
        <div className={`${open ? 'arrow_up' : 'arrow_down'}`}>
          <img src={arrow_down} alt="arrow down" />
        </div>
      </div>
      <span className={open ? 'faq-divider-active' : 'faq-divider-inactive'} />
      {open ? <p className="faq__text">{content}</p> : null}
    </div>
  )
}

export default EachFaq
