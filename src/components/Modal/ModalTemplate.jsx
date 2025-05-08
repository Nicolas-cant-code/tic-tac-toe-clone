import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../context/ModalContext";

const ModalTemplate = () => {
  const { handleModal, modal, modalContent } = useContext(ModalContext);

  if (modal) {
    return ReactDOM.createPortal(
      <div>{modalContent}</div>,
      document.getElementById("modal-root")
    );
  }
  return null;
};

export default ModalTemplate;
