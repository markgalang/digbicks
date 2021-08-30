import React from "react";
import "./hero.css";
import FatherOfAllBicks from "assets/images/fatherOfBicks.png";
import DigBicks from "assets/images/logo.png";
import { PlayCircle } from "react-feather";
import { X } from "react-feather";

function Hero({ isOpen, setIsOpen }) {
  return (
    <div className="heroContainer">
      {isOpen && <X className="closeBtn" onClick={() => setIsOpen(false)} />}

      <div className="logoContainer">
        <img className="logo" src={DigBicks} alt="DigBicks" />
      </div>

      <img
        className="fatherDickImg"
        alt="Father of all Bicks"
        src={FatherOfAllBicks}
      />
      <div className="playBtnContainer">
        <PlayCircle className="playBtn" onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
}

export default Hero;
