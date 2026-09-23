import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import PageApp, { type OxygenPage } from "./PageApp";
import About from "./components/About";
import ModelPage from "./components/ModelPage";
import Careers from "./components/Careers";
import Research from "./components/Research";
import News from "./components/News";
import Developers from "./components/Developers";
import Contact from "./components/Contact";
import "./site.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing #root element");
}

const pageId = (document.body.dataset.page ?? "home") as OxygenPage;

const pageMap: Partial<Record<OxygenPage, React.ReactNode>> = {
  about: <About />,
  model: <ModelPage />,
  careers: <Careers />,
  research: <Research />,
  news: <News />,
  developers: <Developers />,
  contact: <Contact />,
};

createRoot(rootElement).render(
  <StrictMode>
    {pageId === "home" ? <App /> : <PageApp active={pageId}>{pageMap[pageId] ?? <App />}</PageApp>}
  </StrictMode>,
);
