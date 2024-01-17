import React, { useEffect } from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ photos, closeImage, nextPhoto, prevPhoto, currentIndex }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextPhoto();
      } else if (event.key === "ArrowLeft") {
        prevPhoto();
      }
    };
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains(styles.modalContainer)) {
        closeImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [currentIndex, nextPhoto, prevPhoto]);

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
