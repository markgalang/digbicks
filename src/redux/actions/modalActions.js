import { OPEN_MODAL, CLOSE_MODAL, OPEN_ALERT, CLOSE_ALERT } from "../types";

export const showModal = (payload) => {
  return {
    type: OPEN_MODAL,
    payload: payload,
  };
};

export const hideModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const showAlert = (payload) => {
  return {
    type: OPEN_ALERT,
    payload: payload,
  };
};

export const hideAlert = () => {
  return {
    type: CLOSE_ALERT,
  };
};
