import React from "react";
import "./Pricerange.css";
const Pricerange = ({ label }) => {
  return (
    <div className="pricerange">
      <div className="counter">
        <label for="quantity">Lowest</label><br />
        <div style={{ display: "flex", height: "2rem" }}>
          <input type="text" value={0} />
          <div style={{ width: "10px", marginTop: "-10px" }}>
            <div className="upbtn" style={{ marginBottom: "-15px" }}></div>
            <div className="downbtn"></div>
          </div>
        </div>
      </div>
      <div className="counter">
        <label for="quantity">Highest</label><br />
        <div style={{ display: "flex", height: "2rem" }}>
          <input value={1000} />
          <div style={{ width: "10px", marginTop: "-10px" }}>
            <div className="upbtn" style={{ marginBottom: "-15px" }}></div>
            <div className="downbtn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricerange;
