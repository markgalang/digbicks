import { combineReducers } from "redux";

import walletReducer from "./walletReducer";
import minterReducer from "./minterReducer";
import faqsReducer from "./faqsReducer";
import blockchainReducer from "./blockchainReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  wallet: walletReducer,
  minter: minterReducer,
  faqs: faqsReducer,
  blockchain: blockchainReducer,
  modal: modalReducer,
});

export default rootReducer;
