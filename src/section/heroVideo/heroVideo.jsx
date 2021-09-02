import React, { useState } from "react";
import FamilyGuy from "assets/videos/family-guy.mp4";
import "./heroVideo.css";
import FatherOfAllBicks from "assets/images/fatherOfBicks.png";
import DigBicks from "assets/images/logo.png";
import { Volume2, VolumeX } from "react-feather";

function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="heroVideoContainer">
      <video autoPlay muted={isMuted} loop className="videoContainer">
        <source src={FamilyGuy} type="video/mp4" />
      </video>

      {/* <div className="logoContainer">
        <img className="logo" src={DigBicks} alt="DigBicks" />
      </div> */}
      {isMuted ? (
        <VolumeX className="volumeIcon" onClick={() => setIsMuted(false)} />
      ) : (
        <Volume2 className="volumeIcon" onClick={() => setIsMuted(true)} />
      )}
    </div>
  );
}

export default HeroVideo;
