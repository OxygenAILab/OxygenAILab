import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AboutApp from "./AboutApp";
import ModelApp from "./ModelApp";
import CareersApp from "./CareersApp";
import "./site.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing #root element");
}

createRoot(rootElement).render(
  <StrictMode>
    {document.body.dataset.page === "about" ? <AboutApp /> : document.body.dataset.page === "model" ? <ModelApp /> : document.body.dataset.page === "careers" ? <CareersApp /> : <App />}
  </StrictMode>,
);
