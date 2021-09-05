import { SET_MINTED_COUNT, SET_MINTER_LOADER } from "../types";

const defaultState = {
  mintCount: 1,
  isLoading: false,
};

const minterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MINTED_COUNT:
      return { ...state, mintCount: action.payload };

    case SET_MINTER_LOADER:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default minterReducer;
