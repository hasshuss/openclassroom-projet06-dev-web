import React, { useEffect } from 'react';
import Data from '../data/data.json';

const Carroussel = ({ logementId }) => {
  const pageData = Data.find((item) => item.id === logementId);

  useEffect(() => {
    if (pageData) {
      pageData.pictures.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    }
  }, [pageData]);

  return (
    <div id="carousel">
      {pageData && pageData.pictures.map((imageUrl) => (
        <img key={imageUrl} src={imageUrl} alt="Carousel Image" />
      ))}
    </div>
  );
};

export default Carroussel;