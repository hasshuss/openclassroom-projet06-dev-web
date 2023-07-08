import React from 'react';
import LOGO2 from '../../images/LOGO2.png';
import './Footer.scss'


const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <img class="logo" src={LOGO2} alt="logo"></img>
        <span>Ⓒ 2020 Kasa. All right reserved</span>
      </footer>
    </div>
  );
};

export default Footer;