import { React, useState } from "react";
import Model from "./Model";
import "./modal.css";

function Openmodel() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <h1> Hey, click on the button to open the modal. </h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open{" "}
      </button>{" "}
      {modalOpen && <Model setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Openmodel;
