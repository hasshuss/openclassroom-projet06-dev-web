import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../modules/Footer/Footer';
import Header from '../modules/Header';
import Carroussel from '../modules/Carroussel/Carroussel';
import InfosLogement from '../modules/InfosLogement/InfosLogement';

const FicheLogement = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Carroussel logementId={id} />
      <InfosLogement logementId={id} />
      <Footer />
    </div>
  );
};

export default FicheLogement;