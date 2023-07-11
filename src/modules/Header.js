import React from 'react';
import '../App.scss';
import LOGO from '../images/LOGO.png'
import {NavLink} from 'react-router-dom'


  const Header = () => {
    return (
      <header>
        <img src={LOGO} alt="logo" />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Acceuil</NavLink>
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