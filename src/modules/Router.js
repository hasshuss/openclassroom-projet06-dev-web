import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Acceuil from "../Acceuil/Acceuil";
import FicheLogement from "../FicheLogement/FicheLogement";
import PageErreur from "../PageErreur/PageErreur";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<PageErreur />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;