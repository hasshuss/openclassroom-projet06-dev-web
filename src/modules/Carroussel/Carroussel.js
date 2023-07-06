import React, { useState, useEffect } from 'react';
import Data from '../../data/data.json';
import './Carroussel.scss';

const Carroussel = ({ logementId }) => {
  const pageData = Data.find((item) => item.id === logementId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (pageData) {
      pageData.pictures.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    }
  }, [pageData]);

  const handleNext = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex < pageData.pictures.length) {
      setCurrentImageIndex(nextIndex);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const handlePrevious = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex >= 0) {
      setCurrentImageIndex(prevIndex);
    } else {
      setCurrentImageIndex(pageData.pictures.length - 1);
    }
  };

  if (pageData.pictures.length === 1) {
    return (
      <div className="carousel-container">
        <img
          src={pageData.pictures[0]}
          alt="Carousel Image "
          className="carousel-image"
        />
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <img
        src={pageData.pictures[currentImageIndex]}
        alt="Carousel Image"
        className="carousel-image"
      />
      <button className="carousel-button prev" onClick={handlePrevious}>
        {'<'}
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        {'>'}
      </button>
    </div>
  );
};

export default Carroussel;