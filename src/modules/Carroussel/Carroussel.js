import React, { useState, useEffect } from 'react';
import Data from '../../data/data.json';
import './Carroussel.scss';
import IMGVector from '../../images/IMGVector.png';
import IMGVector1 from '../../images/IMGVector1.png'

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
          alt="Appartement"
          className="carousel-image"
        />
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <img
        src={pageData.pictures[currentImageIndex]}
        alt="Appartement"
        className="carousel-image"
      />
      <img className="carousel-button prev" alt="prev" src={IMGVector1} onClick={handlePrevious}>
      </img>
      <img className="carousel-button next" alt="prev" src={IMGVector} onClick={handleNext}>
      </img>
      <div className='counterContainer'>
      <div>{currentImageIndex+1}/{pageData.pictures.length}</div>
    </div>
    </div>

  );
};

export default Carroussel;