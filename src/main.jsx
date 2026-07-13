import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/utilities.css";
import "./styles/animations.css";

import App from "./App.jsx";

import ThemeProvider from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>

        <BrowserRouter>

            <App />

        </BrowserRouter>

    </ThemeProvider>
  </StrictMode>
);