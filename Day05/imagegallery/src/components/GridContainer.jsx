import React, { useState } from "react";
import styles from "../styles/GridContainer.module.css";
import photos from "../photos.json";
import Modal from "./Modal";

const GridContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const openImage = (photo) => {
    setModalOpen(!modalOpen);
    // setSelectedPhoto(photo);
  };

  const closeImage = () => {
    setModalOpen(false);
    // setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => prev + (1 % photos.length));
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => prev + (1 % photos.length));
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
