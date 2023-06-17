import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "./Accueil";


function RoutesPath() {
    return(
        <HashRouter>
                <Routes>
                    <Route element={<Navigate replace to="/Accueil" />} path="/" />
                    <Route path="/Accueil" element={<Accueil />}/>
                </Routes>
        </HashRouter>
    );
}

export default RoutesPath;