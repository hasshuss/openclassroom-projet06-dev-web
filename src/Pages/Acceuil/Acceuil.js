import React from 'react';
import Footer from'../../modules/Footer/Footer';
import Header from '../../modules/Header';
import Banner from '../../modules/Banner/Banner';
import Gallery from '../../modules/Gallery/Gallery';
import ScrollToTop from '../../modules/ScrollToTop';

function Acceuil() {
  const imageUrl = 'https://www.cheikh-hussein.com/data/IMG.jpg';
  return (
    <div>
    <ScrollToTop />
    <Header />
    <Banner image={imageUrl} title={"Chez vous, partout et ailleurs"} />
    <Gallery />
    <Footer />
    </div>
  );
}

export default Acceuil;