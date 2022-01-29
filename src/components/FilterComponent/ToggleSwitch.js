import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <>
      <div className="toggle">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default ToggleSwitch;
