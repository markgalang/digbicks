import React, { useState, useEffect } from "react";
import "./Minter.css";
import NumericInput from "react-numeric-input";
import { useSelector, useDispatch } from "react-redux";
import {
  setMintCount,
  showModal,
  handleWalletConnect,
  showAlert,
} from "redux/actions";
import moment from "moment";
import { DIGBICK_MINT_COST, ERROR_MESSAGE } from "../../util/enums";
import Spinner from "react-bootstrap/Spinner";
import { MESSAGE_TYPE } from "util/enums";

export default function Minter() {
  const isSmallScreen = window.innerWidth < 600;

  const dispatch = useDispatch();
  const { wallet, minter } = useSelector((state) => state);
  const blockchain = useSelector((state) => state.blockchain);
  const [timer, setTimer] = useState(0);
  const [isMinting, setIsMinting] = useState(false);
  const [isLoadingLocally, setIsLoadingLocally] = useState(true);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const isWalletConnected = blockchain?.account;
  const isMintValueValid = totalSupply + minter.mintCount <= maxSupply;
  const isMintDateValid = timer <= 0;

  const isMintingAllowed =
    !blockchain?.loading && !isMinting && isMintValueValid;

  useEffect(() => {
    _getAvailableBicks();
    // eslint-disable-next-line
  }, [blockchain?.smartContract]);

  // const preSaleDate = new Date("Sun Oct 18 2021 00:00:00 GMT+0800"); //October 30, 2021, 8am ph time
  const preSaleDate = new Date("Sun Oct 31 2021 08:00:00 GMT+0800"); //October 30, 2021, 8am ph time

  const _getAvailableBicks = async () => {
    if (blockchain?.smartContract) {
      setIsLoadingLocally(true);
      await blockchain?.smartContract.methods
        .totalSupply()
        .call()
        .then((returnedTotalSupply) => {
          setTotalSupply(Number(returnedTotalSupply));
        });

      await blockchain?.smartContract.methods
        .maxSupply()
        .call()
        .then((returnedMaxSupply) => {
          setMaxSupply(Number(returnedMaxSupply));
        });

      setIsLoadingLocally(false);
    }
    setIsLoadingLocally(false);
  };

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
    if (!isMintDateValid) {
      dispatch(
        showAlert({
          type: MESSAGE_TYPE.PRIMARY,
          message: "CUMMING SOON.",
        })
      );
      return;
    }

    if (!isMintValueValid) {
      dispatch(
        showAlert({
          type: MESSAGE_TYPE.ERROR,
          message: "Not enough DigBicks NFT to mint.",
        })
      );
    }

    if (!isMintingAllowed) {
      dispatch(
        showAlert({
          type: MESSAGE_TYPE.ERROR,
          message: "Minting is not allowed.",
        })
      );
      return;
    }

    if (!isWalletConnected) {
      dispatch(handleWalletConnect());
      return;
    }

    setIsMinting(true);

    const mintTotalCost = DIGBICK_MINT_COST * minter.mintCount;

    blockchain.smartContract.methods
      .mint(blockchain.account, minter.mintCount)
      .send({
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(mintTotalCost?.toString(), "ether"),
      })
      .once("error", (err) => {
        setIsMinting(false);
        const errorMessage =
          err.code !== 4001 ? ERROR_MESSAGE.DEFAULT : err.message;

        dispatch(
          showAlert({
            type: MESSAGE_TYPE.ERROR,
            message: errorMessage,
          })
        );
      })
      .then((receipt) => {
        setIsMinting(false);
        _getAvailableBicks();
        dispatch(
          showModal({
            type: MESSAGE_TYPE.SUCCESS,
            message: "MINTED SUCCESSFULLY",
          })
        );
      });
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
        {isLoadingLocally ? (
          <Spinner animation="border" size="lg" />
        ) : (
          <>
            <p>{isMintDateValid ? "Minted:" : "Minting will start in:"}</p>
            <h2 className="countdowntext">
              {isMintDateValid ? `${totalSupply} / ${maxSupply}` : timer}
            </h2>
          </>
        )}
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
        <button
          className={`mintBtn ${!isMintingAllowed && "disabledMintingBtn"}`}
          onClick={_handleMintClick}
          disabled={!isMintingAllowed}
        >
          {isMinting ? (
            <Spinner animation="border" variant="light" size="sm" />
          ) : (
            "Mint Now"
          )}
        </button>
      </div>

      <p className="pricePreview">{`Final Price: ${(
        wallet.ethPrice * minter.mintCount
      ).toFixed(3)} ETH`}</p>
    </div>
  );
}
