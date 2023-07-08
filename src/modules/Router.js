import React from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import Acceuil from "../Acceuil/Acceuil";
import FicheLogement from "../FicheLogement/FicheLogement";
import PageErreur from "../PageErreur/PageErreur";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Accueil" element={<Acceuil />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/erreur" element={<PageErreur />} />
        <Route path="*" element={<Navigate to="/erreur" />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;