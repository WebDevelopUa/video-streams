import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => (
    ReactDOM.createPortal(
        <div className="ui dimmer modals visible active"
             onClick={props.onDismiss}>

            <div className="ui standard modal visible active"
                 onClick={e => e.stopPropagation()}>
                <div className="ui red header">
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>

        </div>,
        document.querySelector('#modal')
    )
)

export default Modal