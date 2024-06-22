/* eslint-disable no-unused-vars */
import React from "react";

import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = () => {
  return (
    <div className="ModalBg">
      <div className="ModalContainer">
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};

export default Modal;
