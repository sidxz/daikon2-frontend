import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);
root.render(<App />);
