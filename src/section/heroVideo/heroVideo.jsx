import React, { useState } from "react";
import CummingSoon from "assets/videos/cumming-soon.mp4";
import "./heroVideo.css";
// import DigBicks from "assets/images/logo.png";
import { Volume2, VolumeX, PlayCircle } from "react-feather";

function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="heroVideoContainer">
      <video autoPlay muted={isMuted} loop className="videoContainer">
        <source src={CummingSoon} type="video/mp4" />
      </video>

      {/* <div className="logoContainer">
        <img className="logo" src={DigBicks} alt="DigBicks" />
      </div> */}

      <PlayCircle className="playIcon" onClick={() => setIsMuted(false)} />

      {isMuted ? (
        <VolumeX className="volumeIcon" onClick={() => setIsMuted(false)} />
      ) : (
        <Volume2 className="volumeIcon" onClick={() => setIsMuted(true)} />
      )}
    </div>
  );
}

export default HeroVideo;
