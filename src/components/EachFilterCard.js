import React, { useState, useEffect } from 'react'
import arrow_down from '../assets/images/arrow_down.svg'
import EachFilterButton from '../components/EachFilterButton'
import Aos from 'aos';
import 'aos/dist/aos.css';
const EachFilterCard = ({ title, buttons }) => {
    useEffect(() => {
        Aos.init();
    })
    const [open, setOpen] = useState(false)
    let buttons_comp = buttons.map((button, index) => {
        return <EachFilterButton key={index} name={button.name} url={button.url} />
    });
    return (
        <div className="faq" data-aos="flip-left">
            <div onClick={() => setOpen(!open)} className="faq__title">
                <h2 className="faq__title--text">{title}</h2>
                <div className={`${open ? 'arrow_up' : 'arrow_down'}`}>
                    <img src={arrow_down} alt="arrow down" />
                </div>
            </div>
            <span className={open ? 'faq-divider-active' : 'faq-divider-inactive'} />
            {open ? <p className="faq__text">{buttons_comp}</p> : null}
        </div>
    )
}

export default EachFilterCard
