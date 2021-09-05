import React from "react";
import "./Minter.css";
import NumericInput from "react-numeric-input";
import { useSelector, useDispatch } from "react-redux";
import { setMintCount } from "redux/actions";

export default function Minter() {
  const isSmallScreen = window.innerWidth < 600;

  const dispatch = useDispatch();
  const { wallet, minter } = useSelector((state) => state);

  const _handleChange = (newValue) => {
    dispatch(setMintCount(newValue));
  };

  const _handleMintClick = () => {
    alert("handle minting here");
  };

  return (
    <div className="minterContainer ">
      <h1 className="mintTitle">Bick Land</h1>
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
            value={minter.mintCount}
            mobile={isSmallScreen}
            className="minterCounter"
            onChange={_handleChange}
          />
        </div>
        <button className="mintBtn" onClick={_handleMintClick}>
          Mint Now{" "}
        </button>
      </div>

      <p className="pricePreview">{`Final Price: ${(
        wallet.ethPrice * minter.mintCount
      ).toFixed(4)} ETH`}</p>
    </div>
  );
}
