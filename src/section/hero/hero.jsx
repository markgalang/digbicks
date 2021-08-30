import React from "react";
import "./hero.css";
import FatherOfAllDicks from "assets/images/fatherOfDicks.png";
import { PlayCircle } from "react-feather";

function Hero() {
  return (
    <div className="heroContainer">
      <img
        className="fatherDickImg"
        alt="Father of all Bicks"
        src={FatherOfAllDicks}
      />
      <div className="playBtnContainer">
        <PlayCircle className="playBtn" />
      </div>
    </div>
  );
}

export default Hero;
