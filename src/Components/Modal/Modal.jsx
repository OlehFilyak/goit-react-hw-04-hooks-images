import React from "react";

function Modal({ modalUrl, onCloseModal }) {
  return (
    <>
      <div className="Overlay" onClick={onCloseModal}>
        <div className="Modal">
          <img src={modalUrl} alt="" />
        </div>
      </div>
    </>
  );
}

export default Modal;
