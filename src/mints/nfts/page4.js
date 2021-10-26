import React from "react";
import Bot from "../bottom/bot";
import "./page2.css"
import "./margi.css"
import Addcolab from "../headers/addcolab";

function page4(props) {
  return (
    <div>
      <Addcolab />
      <br />
      <view className="row creator">
        <view className="centro">
          <form>
            Name of the creator
            <br />
            <textarea
              className="txt_box"
              rows="1"
              value="start with @"
              cols="20"
            ></textarea>
          </form>
          <form style={{ marginLeft: 20 }}>
            Role
            <br />
            <textarea
              className="txt_box"
              rows="1"
              value="specify a role"
              cols="20"
            ></textarea>
          </form>
          <form>
            ROYALTY SPLIT %<br />
            <textarea
              className="txt_box"
              rows="1"
              value="enter a %"
              cols="20"
            ></textarea>
          </form>
        </view>
      </view>
      <br />
      <p className="autorize"> + Add more collaborators</p>
      <Bot />
      <view className="buttonwork">
        <button
          className="butto"
          type="button"
          onClick={() => props.history.push("/page5")}
        >
          NEXT PAGE{" "}
        </button>
      </view>
    </div>
  );
}

export default page4;
