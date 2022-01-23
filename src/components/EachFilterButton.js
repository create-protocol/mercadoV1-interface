import React, { useState, useEffect } from 'react'
import arrow_down from '../assets/images/arrow_down.svg'
import 'aos/dist/aos.css';
const EachFilterButton = ({ name, url }) => {


    return (
        <a href={`${url}`}>{name}</a>
    )
}

export default EachFilterButton
