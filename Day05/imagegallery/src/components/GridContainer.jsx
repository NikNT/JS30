// GridContainer.js
import React from 'react'
import styles from '../styles/GridContainer.module.css'
import photos from "../photos.json";

const GridContainer = () => {
  return (
    <div className={styles.gridContainer}>
      {photos.map((photo) => (
        <div className={styles.gridItem} key={photo.id}>
          <img src={photo.src} alt={photo.description} />
        </div>
      ))}
    </div>
  );
}

export default GridContainer;
