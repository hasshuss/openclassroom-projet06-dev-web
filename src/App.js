import React from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import Acceuil from "./Acceuil/Acceuil";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" />} />
        <Route path="/Accueil" element={<Acceuil />} />
      </Routes>
    </HashRouter>
  );
};

export default App;