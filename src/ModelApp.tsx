import { useEffect } from "react";
import { Footer, Header } from "./components/Chrome";
import ModelPage from "./components/ModelPage";

export default function ModelApp() {
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <Header active="model" />
      <ModelPage />
      <Footer active="model" />
    </>
  );
}
