import React from "react";
import photos from "../photos.json";
import styles from '../styles/GridContainer.module.css'

const GridItemLocal = () => {
  return (
    <div className={styles.gridItem}>
      {photos.map((photo) => (
        <img id={photo.id} src={photo.src} alt={photo.description} />
      ))}
    </div>
  );
};

export default GridItemLocal;
