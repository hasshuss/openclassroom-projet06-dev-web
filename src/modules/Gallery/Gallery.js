import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import './Gallery.scss';
import Background from '../../images/Background.png'

const Gallery = () => {
  return (
    <article id="gallery">  
      {data.map((element) => (
        <figure className='galleryElement' key={element.id}>
          <Link to={`/fiche-logement/${element.id}`}>
          <img src={element.cover} alt="Kasa" className="galleryimg" />
          <figcaption className="TitreImage">{element.title}</figcaption>
          </Link>
        </figure>
      ))}
    </article>
  );
};

export default Gallery;