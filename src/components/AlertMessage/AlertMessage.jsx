import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import { hideAlert } from "redux/actions";
import "./AlertMessage.css";
import { MESSAGE_TYPE } from "../../util/enums";
import { X } from "react-feather";

function AlertMessage() {
  const { isAlertOpen, type, message } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const _handleClose = () => {
    dispatch(hideAlert());
  };

  const _renderAlertMessage = () => {
    if (type === MESSAGE_TYPE.WARNING) {
      return (
        <p>
          You have to use or install Metamask extension in your browser to use
          this app, you can install it from:{" "}
          <Alert.Link href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
            Google Chrome Extension
          </Alert.Link>
        </p>
      );
    } else {
      return <p>{message}</p>;
    }
  };

  return (
    <Alert
      show={isAlertOpen}
      variant={type}
      onClose={_handleClose}
      className="customAlert"
    >
      <X onClick={_handleClose} className="alertCloseButton" />
      {_renderAlertMessage()}
    </Alert>
  );
}

export default AlertMessage;
