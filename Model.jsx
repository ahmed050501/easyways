import React from "react";
import "./modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X{" "}
          </button>{" "}
        </div>{" "}
        <div className="title">
          <h1> Your Bookking is confirmed </h1>{" "}
        </div>{" "}
        <div className="body">
          <p> Driver will call you in few minutes </p>{" "}
        </div>{" "}
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel{" "}
          </button>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Modal;
