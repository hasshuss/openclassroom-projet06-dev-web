import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "./Accueil";
import PageErreur from "../PageErreur/PageErreur";


function RoutesPath() {
    return(
        <HashRouter>
                <Routes>
                    <Route element={<Navigate replace to="/Accueil" />} path="/" />
                    <Route path="/Accueil" element={<Accueil />}/>
                    <Route element={<PageErreur />} />
                </Routes>
        </HashRouter>
    );
}

export default RoutesPath;