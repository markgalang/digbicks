import React, { useState, useEffect } from "react";
import "./Minter.css";
import NumericInput from "react-numeric-input";
import { useSelector, useDispatch } from "react-redux";
import { setMintCount } from "redux/actions";
import moment from "moment";

export default function Minter() {
  const isSmallScreen = window.innerWidth < 600;

  const dispatch = useDispatch();
  const { wallet, minter } = useSelector((state) => state);
  const [timer, setTimer] = useState("");
  const preSaleDate = new Date("10-31-2021 08:00:00"); //October 30, 2021, 8am ph time

  const _handleChange = (newValue) => {
    let newCount = 1;
    const isInteger = parseInt(newValue);
    if (!isInteger) return;
    if (newValue > 5) {
      newCount = 5;
    } else if (newValue >= 1 && newValue <= 5) {
      newCount = newValue;
    }

    dispatch(setMintCount(newCount));
  };

  const _handleMintClick = () => {
    alert("Cumming Soon.");
  };

  const displayTimer = () => {
    const currentDateTime = new Date();
    const countdownTimer = moment(preSaleDate).diff(moment(currentDateTime));
    if (countdownTimer <= 0) {
      clearInterval(1);
      return setTimer(0);
    }
    const duration = moment.duration(countdownTimer);

    const string =
      Math.floor(duration.days()) +
      "d: " +
      Math.floor(duration.hours()) +
      "h: " +
      Math.floor(duration.minutes()) +
      "m: " +
      Math.floor(duration.seconds()) +
      "s";
    return setTimer(string);
  };

  useEffect(() => {
    const timerId = setInterval(() => displayTimer(), 1000);
    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="minterContainer ">
      <h1 className="mintTitle">Bick Land</h1>
      <p className="mintDescription">
        <strong>DIGBICKS</strong> is a collection of <strong>6969</strong>{" "}
        unique NFTs in the Ethereum blockchain. Each DigBick has its distinct
        personality defined by carefully curated attributes such as headgears,
        mouth accessories, weapons, and more. They are all fun and quirky, but
        you’d be more surprised by the rare ones!
      </p>

      <div className="countdownContainer">
        <p>Minting will start in:</p>
        <h2 className="countdowntext">{timer}</h2>
      </div>

      <div className="minterInputContainer">
        <div className="minterInputFieldContainer">
          <div className="minterInputText">
            How many <strong>Bicks</strong> do you want?
          </div>
          <NumericInput
            min={1}
            max={5}
            value={minter.mintCount}
            mobile={isSmallScreen}
            className="minterCounter"
            onChange={_handleChange}
            inputMode="integer"
          />
        </div>
        <button className="mintBtn" onClick={_handleMintClick}>
          Mint Now{" "}
        </button>
      </div>

      <p className="pricePreview">{`Final Price: ${(
        wallet.ethPrice * minter.mintCount
      ).toFixed(5)} ETH`}</p>
    </div>
  );
}
