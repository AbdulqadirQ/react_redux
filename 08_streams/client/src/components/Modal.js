import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            {/* stopPropagation ensures any clicks within the modal doesn't propagate above, so clicking inside doesn't close modal */}
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        // references index.html div "modal"
        document.querySelector("#modal")
    );
};

export default Modal;
