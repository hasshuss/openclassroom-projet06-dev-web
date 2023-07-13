import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Acceuil from "../Pages/Acceuil/Acceuil";
import FicheLogement from "../Pages/FicheLogement/FicheLogement";
import PageErreur from "../Pages/PageErreur/PageErreur";
import About from "../Pages/About/About"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<PageErreur />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

