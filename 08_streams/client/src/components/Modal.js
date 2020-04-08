import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">MY MODAL ARE YOU ENTERTAINED!!?</div>
        </div>,
        // references index.html div "modal"
        document.querySelector("#modal")
    );
};

export default Modal;
