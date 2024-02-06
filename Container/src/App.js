import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import ChemSphereApp from "./components/ChemSphereApp";

export default () => {
  return (
    <PrimeReactProvider>
      <h1>Container</h1>
      <hr />
      <ChemSphereApp />
    </PrimeReactProvider>
  );
};
