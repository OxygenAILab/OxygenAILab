import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Lora 拉丁字面自托管（标题里的西文，如 OxygenDCM N1）；中文标题走系统衬线回退。
// --font-display 早就声明了 Lora，但此前从未加载，等于没生效。
import "@fontsource/lora/400.css";
import "@fontsource/lora/500.css";
import "@fontsource/lora/600.css";
import App from "./App";
import PageApp from "./PageApp";
import type { PageKey } from "./components/Chrome";
import { I18nProvider } from "./i18n";
import About from "./components/About";
import ModelPage from "./components/ModelPage";
import Careers from "./components/Careers";
import Research from "./components/Research";
import Progress from "./components/Progress";
import News from "./components/News";
import Developers from "./components/Developers";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import "./site.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing #root element");
}

const pageId = (document.body.dataset.page ?? "home") as PageKey;

const pageMap: Partial<Record<PageKey, React.ReactNode>> = {
  about: <About />,
  model: <ModelPage />,
  careers: <Careers />,
  research: <Research />,
  progress: <Progress />,
  news: <News />,
  developers: <Developers />,
  contact: <Contact />,
  privacy: <Privacy />,
  terms: <Terms />,
};

createRoot(rootElement).render(
  <StrictMode>
    <I18nProvider>
      {pageId === "home" ? <App /> : <PageApp active={pageId}>{pageMap[pageId] ?? <App />}</PageApp>}
    </I18nProvider>
  </StrictMode>,
);
