
import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import git from '../../assets/githubIcon.png';
import "./modal.css";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <CSSTransition in={props.show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
            <div className="modal" onClick={props.onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2 className="modal-title">{props.title}</h2>
                    
                            <a href={props.badgeLink}>
                                <span className = "badge" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={git} style={{ width: "80%", height: "70%", opacity: "1" }} /></span>
                            </a>
                   
                    </div>
                    <div className="modal-body">{props.children}</div>
                    <div className="modal-footer">
                        <button onClick={props.onClose} className="button" style={{backgroundColor:"rgb(224 224 224)"}}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
};

export default Modal;