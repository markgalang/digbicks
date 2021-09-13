import React from "react";
import RoadmapImage from "assets/images/roadmap.svg";
import RoadmapImageMobile from "assets/images/roadmap-mobile.svg";
import "./Roadmap.css";

function Roadmap() {
  return (
    <div className="roadmapContainer">
      <div className="container">
        <img
          src={RoadmapImage}
          alt="Roadmap of Dig Bicks"
          className="roadmapImage"
        />

        <img
          src={RoadmapImageMobile}
          alt="Roadmap of Dig Bicks"
          className="roadmapImageMobile"
        />
      </div>
    </div>
  );
}

export default Roadmap;
