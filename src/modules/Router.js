import React from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import Acceuil from "../Acceuil/Acceuil";
import FicheLogement from "../FicheLogement/FicheLogement";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" />} />
        <Route path="/Accueil" element={<Acceuil />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;