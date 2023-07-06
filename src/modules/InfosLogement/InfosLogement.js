import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json';
import './InfosLogement.scss';

const InfosLogement = () => {
  const { id } = useParams();
  const pageData = Data.find((item) => item.id === id);

  return (
    <article className="InfosContainer">
      <h1 id="TitreAppart">{pageData.title}</h1>
      <p className="location">{pageData.location}</p>
      <ul>
        {pageData.tags.map((tag) => (
          <li className="tag" key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
};

export default InfosLogement;