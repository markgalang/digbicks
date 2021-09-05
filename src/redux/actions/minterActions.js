import { SET_MINTED_COUNT, SET_MINTER_LOADER } from "redux/types";

export const setMintCount = (count) => {
  return {
    type: SET_MINTED_COUNT,
    payload: count,
  };
};

export const setMinterLoader = (bool) => {
  return {
    type: SET_MINTER_LOADER,
    payload: bool,
  };
};
