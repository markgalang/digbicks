import React from "react";
import "./Minting.css";
import Minter from "components/Minter/Minter";
import MintedPlaceholder from "assets/images/mintedPlaceholder.svg";

export default function Minting() {
  return (
    <div className="mintContainer">
      <div className="mintOverlay" />
      <div className="container contentContainer">
        <Minter />
        <div className="mintedContainer">
          <img
            src={MintedPlaceholder}
            className="mintedPreview"
            alt="minted bicks"
          />
        </div>
      </div>
    </div>
  );
}
