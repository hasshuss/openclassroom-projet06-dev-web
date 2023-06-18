import React from "react";
import '../App.sass';
import IMG from '../images/IMG.jpg';

const Banner = () => {
    return (
        <div id="banner">
      <img src={IMG} alt="Kasa" id="imgbanner" />
      <h1>Chez vous, partout et ailleurs</h1>
      </div>
      
    );
  };
  
  export default Banner;