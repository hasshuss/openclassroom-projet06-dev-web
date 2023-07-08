import React from 'react';
import '../App.scss';
import LOGO from '../images/LOGO.png'


  const Header = () => {
    return (
      <header>
        <img src={LOGO} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="/Accueil">Accueil</a>
            </li>
            <li>
              <a href="/About">A propos</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;