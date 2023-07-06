import React from 'react';
import '../App.scss';


  const Header = () => {
    return (
      <header>
        <span>Kasa</span>
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