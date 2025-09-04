import React from "react";
// import "./Modal.css";

function Modal({ isOpen, onClose, title, children, actions }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close button */}
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>

        {/* Title */}
        {title && <h2 className="modal-title">{title}</h2>}

        {/* Content */}
        <div className="modal-body">{children}</div>

        {/* Footer actions (e.g. buttons) */}
        {actions && <div className="modal-actions">{actions}</div>}
      </div>
    </div>
  );
}

export default Modal;
