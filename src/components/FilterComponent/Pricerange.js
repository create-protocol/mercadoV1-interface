import React from "react";
import "./Pricerange.css";

const Pricerange = ({ label }) => {
  return (
    <div className="pricerange">
      <label for="quantity">Lowest</label>
      <input type="number" id="quantity" name="quantity" min="1" max="100" />
      <label for="quantity">Highest</label>
      <input type="number" id="quantity" name="quantity" min="1" max="5" />
    </div>
  );
};

export default Pricerange;
