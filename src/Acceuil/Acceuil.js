import React from 'react';
import Footer from'../modules/Footer';
import Header from '../modules/Header';
import Banner from '../modules/Banner/Banner';
import Gallery from '../modules/Gallery/Gallery'

function Acceuil() {
  return (
    <div>
    <Header />
    <Banner />
    <Gallery />
    <Footer />
    </div>
  );
}

export default Acceuil;