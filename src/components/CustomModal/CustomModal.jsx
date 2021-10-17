import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "redux/actions";
import { OPENSEA_ACCOUNT_PAGE } from "util/enums";
import "./CustomModal.css";
import { X } from "react-feather";

function CustomModal() {
  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const _handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      show={isModalOpen}
      onHide={_handleClose}
      backdrop="static"
      keyboard={false}
      centered
      className="customModal"
    >
      {" "}
      <Modal.Body className="customModalBody">
        <X className="modalCloseBtn" onClick={_handleClose} />

        <h2 className="modalTitle">You got the D!</h2>
        <br />
        <p className="modalDescription">
          Your minted DigBicks NFT will be available on your{" "}
          <a
            className="modalLink"
            target="_blank"
            rel="noopener noreferrer"
            href={OPENSEA_ACCOUNT_PAGE}
          >
            OpenSea account
          </a>{" "}
          in a few minutes
        </p>

        <button className="modalButton" onClick={_handleClose}>
          Close
        </button>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
