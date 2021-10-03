import React from "react";
import RoadmapImage from "assets/images/roadmap.svg";
import "./Roadmap.css";

function Roadmap() {
  return (
    <div className="roadmapContainer">
      <div className="container contentContainer">
        <div className="roadmapTitle">Roadmap</div>
        <img
          src={RoadmapImage}
          alt="Roadmap of Dig Bicks"
          className="roadmapImage"
        />
      </div>
    </div>
  );
}

export default Roadmap;
