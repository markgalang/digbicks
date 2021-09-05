import {
  SET_ETH_PRICE,
  SET_WALLET_CONNECTIVITY,
  SET_WALLET_LOADER,
} from "../types";

const defaultState = {
  isWalletConnected: false,
  ethPrice: 0.0400000010002030003, //set default price here
  isLoading: false,
};

const walletReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ETH_PRICE:
      return { ...state, ethPrice: action.payload };

    case SET_WALLET_CONNECTIVITY:
      return { ...state, isWalletConnected: action.payload };

    case SET_WALLET_LOADER:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default walletReducer;
