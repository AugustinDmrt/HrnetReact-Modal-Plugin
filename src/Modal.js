import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.content} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    background: "white",
    padding: "20px",
    borderRadius: "4px",
    position: "relative",
    width: "90%",
    maxWidth: "500px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};

export default Modal;
