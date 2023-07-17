import React from 'react';
import Footer from'../../modules/Footer/Footer';
import Header from '../../modules/Header';
import { NavLink } from 'react-router-dom';
import './PageErreur.scss'
import ScrollToTop from '../../modules/ScrollToTop';

function PageErreur() {
  return (
    
<div className='fullcontainer'>
<ScrollToTop />
  <Header />
  <div className='errorContainer'>
    <h1 className='e404'>404</h1>
    <div className='contentError'>Oups! La Page que vous demandez n'existe pas</div>
    <NavLink to="/" exact="true">
      <div className="LinkError"> Retournez sur la page d'acceuil</div>
    </NavLink>
  </div>
  <Footer />
</div>
  );
}

export default PageErreur;