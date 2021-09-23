import React from "react";
import "./CollectionImage.css";
import placeholderImage from "assets/images/placeholderImage.png";

export default function Collectionimage(props) {
  return (
    <>
      <a
        href={props?.link}
        target="_blank"
        rel="noopener noreferrer"
        className="thumbnailFrame"
      >
        <div className="frameContainer">
          <img
            className="collectionImage"
            src={props?.image || placeholderImage}
            alt={props?.imageDescription}
            placeholder={placeholderImage}
          />
        </div>
      </a>
    </>
  );
}
