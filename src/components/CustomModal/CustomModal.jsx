import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "redux/actions";
import { MESSAGE_TYPE } from "util/enums";
import "./CustomModal.css";

function CustomModal() {
  const { isModalOpen, type, message } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const isCentered = type === MESSAGE_TYPE.SUCCESS;

  const _handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      show={isModalOpen}
      onHide={_handleClose}
      backdrop="static"
      keyboard={false}
      centered={isCentered}
      className="customModal"
    >
      {" "}
      <div variant="secondary" onClick={_handleClose}>
        Close
      </div>
      <Modal.Body>{message}</Modal.Body>
    </Modal>
  );
}

export default CustomModal;
