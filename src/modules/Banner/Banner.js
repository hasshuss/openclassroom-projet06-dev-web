import React from "react";
import './Banner.scss';
import IMG from '../../images/IMG.jpg';

const Banner = () => {
    return (
        <div id="banner">
      <img src={IMG} alt="Kasa" id="imgbanner" />
      <h1 id="TitreAcceuil">Chez vous, partout et ailleurs</h1>
      </div>
      
    );
  };
  
  export default Banner;