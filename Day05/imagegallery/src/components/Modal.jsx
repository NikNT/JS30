import React, { useState } from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ photos, closeImage, nextPhoto, prevPhoto, currentIndex }) => {
  const photo = photos[currentIndex];

  return (
    <div className={styles.modalContainer}>
      <img src={photo.src} alt={photo.description} id={photo.id} />
      <button onClick={closeImage}>Close</button>
      <button onClick={nextPhoto}>Next</button>
      <button onClick={prevPhoto}>Previous</button>
    </div>
  );
};

export default Modal;
