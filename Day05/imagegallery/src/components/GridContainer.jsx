import React, { useState } from "react";
import styles from "../styles/GridContainer.module.css";
import photos from "../photos.json";
import Modal from "./Modal";

const GridContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const openImage = (photo) => {
    setModalOpen(!modalOpen);
    setCurrentIndex(photo.id - 1);
  };

  const closeImage = () => {
    setModalOpen(false);
  };

  const nextPhoto = () => {
    if (currentIndex === photos.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (currentIndex === 0) {
      setCurrentIndex(photos.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      {modalOpen && (
        <Modal
          photos={photos}
          closeImage={closeImage}
          nextPhoto={nextPhoto}
          prevPhoto={prevPhoto}
          currentIndex={currentIndex}
        />
      )}
      <div className={styles.gridContainer}>
        {photos.map((photo) => (
          <div className={styles.gridItem} key={photo.id}>
            <img
              src={photo.src}
              alt={photo.description}
              onClick={() => openImage(photo)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GridContainer;
