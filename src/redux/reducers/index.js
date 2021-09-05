import { combineReducers } from "redux";

import walletReducer from "./walletReducer";
import minterReducer from "./minterReducer";

const rootReducer = combineReducers({
  wallet: walletReducer,
  minter: minterReducer,
});

export default rootReducer;
