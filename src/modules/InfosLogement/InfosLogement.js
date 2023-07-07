import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json';
import './InfosLogement.scss';
import Stars from '../Stars/Stars.js'

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
      <div className='NameContainer'><span className='name'>{pageData.host.name}</span><img className="picture" src={pageData.host.picture} alt="img" /></div>
    <Stars logementId={id}/>
    </article>
  );
};

export default InfosLogement;