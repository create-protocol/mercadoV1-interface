import React, { useState, useEffect } from 'react'
import arrow_down from '../assets/images/arrow_down.svg'
import EachFilterButton from '../components/EachFilterButton'
import Aos from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';


const EachFilterCard = ({ title, buttons }) => {
    useEffect(() => {
        Aos.init();
    })
    const [open, setOpen] = useState(false)
    let buttons_comp = buttons.map((button, index) => {
        return <EachFilterButton key={index} name={button.name} url={button.url} />
    });
    return (
        
        <div className="faq" style={{minWidth:"90%",margin:"0",paddingTop:"0",paddingBottom:"0"}}>
            <div onClick={() => setOpen(!open)} className="faq__title">
                <h2 className="faq__title--text" style={{fontSize:"1.2rem"}}>{title}</h2>
                <div className={`${open ? 'arrow_up' : 'arrow_down'}`}>
                    <img src={arrow_down} alt="arrow down" />
                </div>
            </div>
            <span className="faq-divider-active" style={{height:".1rem"}}/>
            {open ? <p className="faq__text" style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}}>{buttons_comp}</p> : null}
        </div>
        
    )
}

export default EachFilterCard
