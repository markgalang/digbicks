import React from "react";
import ModalVideo from "react-modal-video";
import "./VideoPlayback.css";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

function VideoPlayback({ isOpen, setIsOpen }) {
  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="2a8PrktN8Z4"
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default VideoPlayback;
