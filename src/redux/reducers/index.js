import { combineReducers } from "redux";

import walletReducer from "./walletReducer";
import minterReducer from "./minterReducer";
import faqsReducer from "./faqsReducer";

const rootReducer = combineReducers({
  wallet: walletReducer,
  minter: minterReducer,
  faqs: faqsReducer,
});

export default rootReducer;
