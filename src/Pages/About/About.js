import React from 'react';
import Footer from'../../modules/Footer/Footer';
import Header from '../../modules/Header';
import Collapse from '../../modules/Collapse/Collapse';
import Banner from '../../modules/Banner/Banner';
import './About.scss'
import ScrollToTop from '../../modules/ScrollToTop';

function About() {
  const imageUrl = 'https://www.cheikh-hussein.com/data/IMG2.jpg';
  return (
    <div>
    <ScrollToTop/>
    <Header />
    <Banner image={imageUrl}  />
    <div className='container'>
<div className='col'>      <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
          isOpen={false}
        /></div>
<div className='col'>           <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."
          isOpen={false}
        /></div>
<div className='col'>            <Collapse
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."
          isOpen={false}
        /></div>
<div className='col'>           <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes."
          isOpen={false}
        /></div>
        </div>
    <Footer />
    </div>
  );
}

export default About;