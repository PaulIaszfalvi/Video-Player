import React from "react";
import Video from "./videoplayer";
import Scroll from "./scroller";
import Side from "./sidebar";
import "./main.css";

import ScrollBar from "./scrollBar";

function main() {
  return (
    <div className="layout">
      <div className="video">
        <center>
          <Video />
        </center>
      </div>
      <div className="scroll">
        <center>
          <ScrollBar />
        </center>
      </div>
      <Side />
    </div>
  );
}

export default main;
