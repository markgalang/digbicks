import {
  SET_WALLET_LOADER,
  SET_ETH_PRICE,
  SET_WALLET_CONNECTIVITY,
} from "redux/types";

export const setWalletConnectivity = (bool) => {
  return {
    type: SET_WALLET_CONNECTIVITY,
    payload: bool,
  };
};

export const setWalletLoader = (bool) => {
  return {
    type: SET_WALLET_LOADER,
    payload: bool,
  };
};

export const setEthPrice = (price) => {
  return {
    type: SET_ETH_PRICE,
    payload: price,
  };
};
