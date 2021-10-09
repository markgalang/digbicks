import React from "react";
import "./Minting.css";
import Minter from "components/Minter/Minter";
import MintedPlaceholder from "assets/images/mintedPlaceholder.svg";
import CollectionImagesContainer from "components/CollectionImages/CollectionImages";

export default function Minting() {
  return (
    <div className="mintContainer">
      <div className="mintOverlay" />
      <div className="customContainer contentContainer">
        <Minter />
        <div className="mintedContainer">
          <CollectionImagesContainer />
        </div>
      </div>
    </div>
  );
}
