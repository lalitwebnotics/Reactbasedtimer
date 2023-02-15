import React from "react";
import { CustomSteps } from "../CustomSteps";
import "./index.css";

export const Modal = ({ onClose, show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="content">
        <CustomSteps />
        <div className="footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
