import React from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ photo, closeImage }) => {
  return (
    <div className={styles.modalContainer}>
      <img src={photo.src} alt={photo.description} id={photo.id} />
      <button onClick={closeImage}>Close</button>
    </div>
  );
};

export default Modal;
