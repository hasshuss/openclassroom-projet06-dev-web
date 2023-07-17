import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../modules/Footer/Footer';
import Header from '../../modules/Header';
import Carroussel from '../../modules/Carroussel/Carroussel';
import InfosLogement from '../../modules/InfosLogement/InfosLogement';
import data from '../../data/data.json'
import PageErreur from '../PageErreur/PageErreur.js';
import ScrollToTop from '../../modules/ScrollToTop';

const FicheLogement = () => {
  const { id } = useParams();
  const pageData = data.find((item) => item.id === id);

  if (!pageData){ return <PageErreur/> }

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Carroussel logementId={id} />
      <InfosLogement logementId={id} />
      <Footer />
    </div>
  );
};

export default FicheLogement;