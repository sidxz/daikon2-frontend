import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import Landing from "./components/Landing";
import Compounds from "./components/Compounds";

export default () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/compounds" element={<Compounds />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
};
