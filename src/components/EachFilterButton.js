import React, { useState, useEffect } from "react";

import "aos/dist/aos.css";
const EachFilterButton = ({ name, url }) => {
  return <a href={`${url}`}>{name}</a>;
};

export default EachFilterButton;
