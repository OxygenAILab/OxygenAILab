import { useEffect, useState, type MouseEvent } from "react";
import { useI18n } from "../i18n";

type RailTextKey = "rail.overview" | "rail.products" | "rail.model" | "rail.approach" | "rail.about";

// 与 Sections.tsx 里各区块的 id 一一对应，改区块 id 时同步改这里
const railItems: Array<{ id: string; key: RailTextKey }> = [
  { id: "hero", key: "rail.overview" },
  { id: "products", key: "rail.products" },
  { id: "model", key: "rail.model" },
  { id: "approach", key: "rail.approach" },
  { id: "about", key: "rail.about" },
];

export default function SectionRail() {
  const { locale, t } = useI18n();
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const sections = railItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // 视口上方 22%~32% 的一条横带：进入该带的段落即视为「当前段落」
      { rootMargin: "-22% 0px -68% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    setActiveId(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="section-rail" aria-label={locale === "zh" ? "页面段落导航" : "Section navigation"}>
      <ul className="section-rail-list">
        {railItems.map((item) => (
          <li key={item.id}>
            <a
              className={activeId === item.id ? "section-rail-link is-active" : "section-rail-link"}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "true" : undefined}
              onClick={(event) => handleClick(event, item.id)}
            >
              {t(item.key)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}