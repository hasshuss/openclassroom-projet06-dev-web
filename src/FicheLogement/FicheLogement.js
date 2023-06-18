import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
import Carroussel from '../modules/Carroussel';

const FicheLogement = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Carroussel logementId={id} />
      <Footer />
    </div>
  );
};

export default FicheLogement;