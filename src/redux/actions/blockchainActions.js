// constants
import Web3 from "web3";
import {
  DIGBICKS_CONTRACT_ADDRESS,
  DIGBICKS_CONTRACT_ABI,
  ETH_NETWORK_ID,
  ERROR_MESSAGE,
  MESSAGE_TYPE,
} from "../../util/enums";
import { showAlert } from "./modalActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const handleWalletConnect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    if (window.ethereum) {
      let web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await window.ethereum.request({
          method: "net_version",
        });

        if (networkId.toString() === ETH_NETWORK_ID) {
          const SmartContractObj = new web3.eth.Contract(
            DIGBICKS_CONTRACT_ABI,
            DIGBICKS_CONTRACT_ADDRESS
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          window.ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed("Please change network to ETH network."));
          dispatch(
            showAlert({
              type: MESSAGE_TYPE.ERROR,
              message: "Please change network to ETH network.",
            })
          );
        }
      } catch (err) {
        dispatch(connectFailed(ERROR_MESSAGE.DEFAULT));
        dispatch(
          showAlert({
            type: MESSAGE_TYPE.ERROR,
            message: ERROR_MESSAGE.DEFAULT,
          })
        );
      }
    } else {
      dispatch(connectFailed("Please Install Metamask to connect."));
      dispatch(
        showAlert({
          type: MESSAGE_TYPE.WARNING,
          message: "Please Install Metamask to connect.",
        })
      );
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
  };
};
