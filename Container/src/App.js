import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import ChemSphereApp from "./components/ChemSphereApp";
import TitleBar from "./components/TitleBar";

export default () => {
  return (
    <BrowserRouter>
      <PrimeReactProvider>
        <TitleBar />
        <hr />
        <ChemSphereApp />
      </PrimeReactProvider>
    </BrowserRouter>
  );
};
