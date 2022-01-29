import React from "react";
import "./Pricerange.css";
const Pricerange = ({ label }) => {
  return (
    <div className="pricerange">
      <div className="counter">
        <label for="quantity">Lowest</label><br />
        <input type="number" id="quantity" name="quantity" min="1" max="100" />
        <div className="downbtn"></div>
      </div>
      <div className="counter">
        <label for="quantity">Highest</label><br />
        <input type="number" id="quantity" name="quantity" min="1" max="100" />
      </div>
    </div>
  );
};

export default Pricerange;
