import { useEffect, type ReactNode } from "react";
import { useI18n } from "./i18n";
import { Footer, Header, type PageKey } from "./components/Chrome";
import PageMotion from "./components/Motion";
import RegionBanner from "./components/RegionBanner";

export default function PageApp({ active, children }: { active: PageKey; children: ReactNode }) {
  const { locale } = useI18n();

  return (
    <>
      <a className="skip-link" href="#main">{locale === "zh" ? "跳到主要内容" : "Skip to content"}</a>
      <RegionBanner />
      <PageMotion />
      <Header active={active} />
      {children}
      <Footer active={active} />
    </>
  );
}
