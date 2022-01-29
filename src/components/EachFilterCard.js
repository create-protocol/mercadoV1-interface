import React, { useState, useEffect } from "react";
import arrow_down from "../assets/images/arrow_down2.png";
import EachFilterButton from "../components/EachFilterButton";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import ToggleSwitch from "./FilterComponent/ToggleSwitch";
import Pricerange from "./FilterComponent/Pricerange";
const EachFilterCard = () => {
  useEffect(() => {
    Aos.init();
  });
  const [buy, setBuy] = useState(false);
  const [open, setOpen] = useState(false);

  // let buttons_comp = buttons.map((button, index) => {
  //     return <EachFilterButton key={index} name={button.name} url={button.url} />
  // });
  return (
    <>
      <div
        className="faq"
        style={{
          minWidth: "90%",
          margin: "0",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        <div onClick={() => setBuy(!buy)} className="faq__title">
          <h2 className="faq__title--text" style={{ fontSize: "1.2rem" }}>
            Item Status
          </h2>
          <div className={`${buy ? "arrow_up" : "arrow_down"}`}>
            <img src={arrow_down} alt="arrow down" />
          </div>
        </div>

        <span className="faq-divider-active" style={{ height: ".1rem" }} />
        {buy ? <ToggleSwitch /> : null}
      </div>

      <div
        className="faq"
        style={{
          minWidth: "90%",
          margin: "0",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        <div onClick={() => setOpen(!open)} className="faq__title">
          <h2 className="faq__title--text" style={{ fontSize: "1.2rem" }}>
           Price Range
          </h2>
          <div className={`${open ? "arrow_up" : "arrow_down"}`}>
            <img src={arrow_down} alt="arrow down" />
          </div>
        </div>

        <span className="faq-divider-active" style={{ height: ".1rem" }} />
        {open ? <Pricerange /> : null}
      </div>
    </>
  );
};

export default EachFilterCard;
