import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <>
      <div style={{ display: "flex", position: "relative", marginBottom: "2rem" }}>
        <div className="buy-now">Buy Now</div>
        <div class="toggle-switch">
          <input type="checkbox" id="chkTest" name="chkTest" />
          <label for="chkTest">
            <span class="toggle-track"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;