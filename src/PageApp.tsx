import { useEffect, type ReactNode } from "react";
import { Footer, Header } from "./components/Chrome";

export type OxygenPage =
  | "home"
  | "about"
  | "model"
  | "careers"
  | "research"
  | "news"
  | "developers"
  | "contact";

export default function PageApp({ active, children }: { active: OxygenPage; children: ReactNode }) {
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <Header active={active} />
      {children}
      <Footer active={active} />
    </>
  );
}
