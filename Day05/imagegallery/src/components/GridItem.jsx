import React, { useEffect, useState } from "react";

const GridItem = () => {
  const [photos, setPhotos] = useState([]);
  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const width = 400;
  const height = 267;
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=9`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const resizedPhotos = data.map((photo) => ({
          ...photo,
          urls: {
            ...photo.urls,
            small: `${photo.urls.raw}&w=${width}&h=${height}&fit=crop`,
          },
        }));
        setPhotos(resizedPhotos);
      })
      .catch((err) => console.log("Error getting images:", err));
  }, []);

  return (
    <>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.small}
          alt={photo.alt_description}
        />
      ))}
    </>
  );
};

export default GridItem;
