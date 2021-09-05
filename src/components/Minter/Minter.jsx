import React from "react";
import "./Minter.css";
import NumericInput from "react-numeric-input";

export default function Minter() {
  const isSmallScreen = window.innerWidth < 600;
  return (
    <div className="minterContainer ">
      <h1 class="mintTitle">Bick Land</h1>
      <p className="mintDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit
        nunc in vulputate sodales. Vestibulum in eros ac neque vestibulum auctor
        vitae vel nisi. Aenean ac turpis felis. Curabitur purus ipsum, placerat
        ac turpis non, cursus pulvinar nisi. Aliquam et dolor malesuada,
        sagittis diam a, imperdiet dui.
      </p>

      <div className="minterInputContainer">
        <div className="minterInputFieldContainer">
          <div className="minterInputText">
            How many <strong>Bicks</strong> do you want?
          </div>
          <NumericInput
            min={1}
            value={1}
            mobile={isSmallScreen}
            className="minterCounter"
          />
        </div>
        <button className="mintBtn">Mint Now </button>
      </div>

      <p className="pricePreview">Final Price: 0.04 ETH</p>
    </div>
  );
}
