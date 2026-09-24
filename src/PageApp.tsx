import { useEffect, type ReactNode } from "react";
import { Footer, Header, type PageKey } from "./components/Chrome";

export default function PageApp({ active, children }: { active: PageKey; children: ReactNode }) {
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
