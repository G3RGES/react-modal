/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ modalToggle }) => {
  return (
    <div className="ModalBg">
      <div className="ModalContainer">
        <FontAwesomeIcon icon={faXmark} onClick={modalToggle} />
        <div className="ModalSuccess">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <h2>Payment successful</h2>
        <p>Your order is on the way :)</p>
      </div>
    </div>
  );
};

export default Modal;
