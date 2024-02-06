import React from "react";
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from "./App";

// Mount function to start the app
const mount = (el) => {
  // Use createRoot to manage the root
  const root = createRoot(el);
  root.render(<App />);
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_chem-sphere-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
export { mount };
