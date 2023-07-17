import React from 'react';
import Footer from'../../modules/Footer/Footer';
import Header from '../../modules/Header';
import Banner from '../../modules/Banner/Banner';
import Gallery from '../../modules/Gallery/Gallery';
import IMG from '../../images/IMG.jpg';
import ScrollToTop from '../../modules/ScrollToTop';

function Acceuil() {
  return (
    <div>
    <ScrollToTop />
    <Header />
    <Banner image={IMG} title={"Chez vous, partout et ailleurs"} />
    <Gallery />
    <Footer />
    </div>
  );
}

export default Acceuil;