import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import './Gallery.scss';

const Gallery = () => {
  return (
    <article id="gallery">
      {data.map((element, index) => (
        <figure className='galleryElement' key={element.id}>
          <Link to={`/fiche-logement/${element.id}`}>
            <img src={element.cover} alt="Kasa" className="galleryimg" />
          </Link>
          <figcaption className="TitreImage">{element.title}</figcaption>
        </figure>
      ))}
    </article>
  );
};

export default Gallery;