import { useEffect } from "react";
import { Footer, Header } from "./components/Chrome";
import Careers from "./components/Careers";

export default function CareersApp() {
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <Header active="careers" />
      <Careers />
      <Footer active="careers" />
    </>
  );
}
