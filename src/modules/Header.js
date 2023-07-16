import React from 'react';
import '../App.scss';
import LOGO from '../images/LOGO.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to='/'>
      <img src={LOGO} alt="logo" className='logo'/>
      </NavLink>
      <nav>
        <ul>
          <li className='navlink'>
            <NavLink activeclassname="active" to="/" exact="true">
              Acceuil
            </NavLink>
          </li>
          <li className='navlink'>
            <NavLink activeclassname="active" to="/About" exact="true">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;