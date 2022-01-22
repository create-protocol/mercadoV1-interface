import React from "react";
import "font-awesome/css/font-awesome.min.css";
import SkeletonInput from "antd/lib/skeleton/Input";

const Searchbar = () => {
  return (
    <>
      <div class="search">
        <input
          type="text"
          name="search"
          class="round"
          placeholder="&#xf002; Search"
        />
      </div>
    </>
  );
};
export default Searchbar;
