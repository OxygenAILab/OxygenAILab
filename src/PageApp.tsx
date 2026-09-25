import { useEffect, type ReactNode } from "react";
import { Footer, Header, type PageKey } from "./components/Chrome";
import PageMotion from "./components/Motion";
import RegionBanner from "./components/RegionBanner";

export default function PageApp({ active, children }: { active: PageKey; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <RegionBanner />
      <PageMotion />
      <Header active={active} />
      {children}
      <Footer active={active} />
    </>
  );
}
