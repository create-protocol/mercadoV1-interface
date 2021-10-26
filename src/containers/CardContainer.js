import React from "react";

const Cardcontainer = (props) => {
  return (
    <div>
      <div className="m-card-container">
        <div className="m-card-title-container">
          <div className="m-card-title-sub-container">
            <div className="m-card-suffix">{props.suffix}</div>
            <div className="m-card-title">{props.title}</div>
            {props?.prefix ? (
              <>
                <div className="m-card-suffix mx-2"> IN </div>
                <div className="m-card-title mx-2">{props?.prefix}</div>
              </>
            ) : null}
          </div>
          {props?.extra ? (
            <div className="m-card-title-extra">
              {props?.extra || "view more results &gt;"}
            </div>
          ) : null}
        </div>
        <div className="m-card-content">{props?.children}</div>
      </div>
    </div>
  );
};

export default Cardcontainer;
