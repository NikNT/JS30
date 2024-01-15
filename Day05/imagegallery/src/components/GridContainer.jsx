import React, { useState } from "react";
import styles from "../styles/GridContainer.module.css";
import photos from "../photos.json";
import Modal from "./Modal";

const GridContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const openImage = (photo) => {
    setModalOpen(!modalOpen);
    setSelectedPhoto(photo);
  };

  const closeImage = () => {
    setModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      {modalOpen && <Modal photo={selectedPhoto} closeImage={closeImage} />}
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
