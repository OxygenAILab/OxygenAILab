import { useEffect, useState } from "react";
import { siteConfig } from "../config";
import logoImage from "../../assets/images/logo.png";
import { useI18n } from "../i18n";

export type PageKey =
  | "home"
  | "about"
  | "model"
  | "careers"
  | "research"
  | "progress"
  | "news"
  | "developers"
  | "contact"
  | "privacy"
  | "terms";

// 导航项集中一处，桌面导航与移动抽屉共用，避免两份链接各写一遍
const NAV: Array<{ key: "nav.products" | "nav.model" | "nav.research" | "nav.progress" | "nav.developers" | "nav.news" | "nav.about" | "nav.careers"; anchor: string; page?: PageKey }> = [
  { key: "nav.products", anchor: "products" },
  { key: "nav.model", anchor: "model", page: "model" },
  { key: "nav.research", anchor: "research", page: "research" },
  { key: "nav.progress", anchor: "progress", page: "progress" },
  { key: "nav.developers", anchor: "developers", page: "developers" },
  { key: "nav.news", anchor: "news", page: "news" },
  { key: "nav.about", anchor: "about", page: "about" },
  { key: "nav.careers", anchor: "careers", page: "careers" },
];

function navHref(item: { anchor: string; page?: PageKey }, active: PageKey) {
  if (!item.page) return active === "home" ? `#${item.anchor}` : `../#${item.anchor}`;
  if (active === "home") return `./${item.anchor}/`;
  if (active === item.page) return "#top";
  return `../${item.anchor}/`;
}

function Announce() {
  const { t } = useI18n();

  return (
    <div className="announce">
      <a href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">
        {t("announce.beta")}
      </a>
    </div>
  );
}

export function Header({ active = "home" }: { active?: PageKey }) {
  const [open, setOpen] = useState(false);
  const { locale, t } = useI18n();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Announce />
      <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={locale === "zh" ? "Oxygen AI 首页" : "Oxygen AI home"}>
          <img className="brand-mark" src={logoImage} alt="" width={30} height={30} />
          <span>{siteConfig.brand}</span>
        </a>
        <nav className="site-nav" aria-label={locale === "zh" ? "主导航" : "Main navigation"}>
          {NAV.map((item) => (
            <a
              key={item.key}
              href={navHref(item, active)}
              aria-current={item.page === active ? "page" : undefined}
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
        <a className="button primary compact header-cta" href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">
          {t("cta.enterPrima")}
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? (locale === "zh" ? "关闭菜单" : "Close menu") : (locale === "zh" ? "打开菜单" : "Open menu")}
          aria-expanded={open}
          aria-controls="site-drawer"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      </header>
      <div id="site-drawer" className={open ? "nav-drawer open" : "nav-drawer"}>
        <div className="container">
          <nav aria-label={locale === "zh" ? "移动导航" : "Mobile navigation"}>
            {NAV.map((item) => (
              <a key={item.key} className="nav-link" href={navHref(item, active)} onClick={() => setOpen(false)}>
                {t(item.key)}
              </a>
            ))}
          </nav>
          <a
            className="button primary"
            href={siteConfig.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            {t("cta.enterPrima")}
          </a>
        </div>
      </div>
    </>
  );
}

export function Footer({ active = "home" }: { active?: PageKey }) {
  const { locale, t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <img className="footer-logo" src={logoImage} alt="" width={28} height={28} />
            {siteConfig.brand}
          </p>
          <p className="footer-slogan">{t("oxygen.slogan")}</p>
          <p>{t("footer.researchBase")}</p>
        </div>
        <nav aria-label={locale === "zh" ? "网站导航" : "Site navigation"}>
          <a href={active === "home" ? "#products" : "../#products"}>{t("nav.products")}</a>
          <a href={active === "home" ? "./model/" : "../model/"}>{t("nav.model")}</a>
          <a href={active === "home" ? "./research/" : "../research/"}>{t("nav.research")}</a>
          <a href={active === "home" ? "./progress/" : "../progress/"}>{t("nav.progress")}</a>
          <a href={active === "home" ? "./developers/" : "../developers/"}>{t("nav.developers")}</a>
          <a href={active === "home" ? "./news/" : "../news/"}>{t("nav.news")}</a>
          <a href={active === "home" ? "./about/" : "../about/"}>{t("nav.about")}</a>
          <a href={active === "home" ? "./careers/" : "../careers/"}>{t("nav.careers")}</a>
          <a href={active === "home" ? "./privacy/" : "../privacy/"}>{locale === "zh" ? "隐私" : "Privacy"}</a>
          <a href={active === "home" ? "./terms/" : "../terms/"}>{locale === "zh" ? "条款" : "Terms"}</a>
        </nav>
        <nav aria-label={locale === "zh" ? "Prima 导航" : "Prima navigation"}>
          <a href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">{locale === "zh" ? "Prima 官网" : "Prima website"}</a>
          <a href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">{locale === "zh" ? "Beta 申请" : "Beta application"}</a>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 Oxygen AI</p>
        <p>{t("footer.rights")}</p>
        <button
          type="button"
          className="back-to-top"
          onClick={() => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
          }}
          aria-label={locale === "zh" ? "返回顶部" : "Back to top"}
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
