import { OPEN_MODAL, CLOSE_MODAL, OPEN_ALERT, CLOSE_ALERT } from "../types";

const defaultState = {
  isModalOpen: false,
  isAlertOpen: false,
  type: "",
  message: "",
};

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true, ...action.payload };

    case CLOSE_MODAL:
      return { ...defaultState, isModalOpen: false };

    case OPEN_ALERT:
      return { ...state, isAlertOpen: true, ...action.payload };

    case CLOSE_ALERT:
      return { ...defaultState, isAlertOpen: false };

    default:
      return state;
  }
};

export default modalReducer;
