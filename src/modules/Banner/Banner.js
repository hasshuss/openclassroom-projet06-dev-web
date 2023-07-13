import React from "react";
import './Banner.scss';
import Background from '../../images/Background.png'

const Banner = ({title, image}) => {
    return (
        <div id="banner">
      <img src={Background} alt='background' className="background"/>
      <img src={image} alt="Kasa" id="imgbanner" />
      <h1 id="TitreAcceuil">{title}</h1>
      </div>
      
    );
  };
  
  export default Banner;