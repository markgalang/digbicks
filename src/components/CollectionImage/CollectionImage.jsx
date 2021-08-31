import React from "react";
import "./CollectionImage.css";
import { Image } from "antd";
import placeholderImage from "assets/images/placeholderImage.png";

export default function Collectionimage(props) {
  return (
    <>
      <div className="thumbnailFrame">
        <Image
          className="collectionImage"
          width={250}
          height={250}
          src={placeholderImage}
          preview={false}
        />
      </div>
    </>
  );
}
