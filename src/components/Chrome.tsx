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

type NavTextKey =
  | "nav.products"
  | "nav.research"
  | "nav.developers"
  | "nav.about"
  | "nav.prima"
  | "nav.researchDirections"
  | "nav.progress"
  | "nav.aboutUs"
  | "nav.careers"
  | "nav.news";

type NavItem = {
  /** 站内路由；与 href 二选一 */
  page?: PageKey;
  /** 站外地址；与 page 二选一 */
  href?: string;
  /** i18n 文案键 */
  key?: NavTextKey;
  /** 直接展示的文案，用于专有名词（模型名取自 config，不写进词典） */
  literal?: string;
};

type NavEntry = { id: string; key: NavTextKey; page?: PageKey; children?: NavItem[] };

// 顶栏只留四个分组。页内段落跳转交给首页左侧的 SectionRail，
// 顶栏只回答「网站有哪些板块」，两者职责分开。
// 导航项集中一处，桌面下拉与移动抽屉共用，避免两份链接各写一遍。
const NAV: NavEntry[] = [
  {
    id: "products",
    key: "nav.products",
    children: [
      { href: siteConfig.productUrl, key: "nav.prima" },
      { page: "model", literal: siteConfig.model.name },
    ],
  },
  {
    id: "research",
    key: "nav.research",
    children: [
      { page: "research", key: "nav.researchDirections" },
      { page: "progress", key: "nav.progress" },
    ],
  },
  { id: "developers", key: "nav.developers", page: "developers" },
  {
    id: "about",
    key: "nav.about",
    children: [
      { page: "about", key: "nav.aboutUs" },
      { page: "careers", key: "nav.careers" },
      { page: "news", key: "nav.news" },
    ],
  },
];

function navHref(page: PageKey | undefined, active: PageKey) {
  if (!page) return active === "home" ? "#top" : "../";
  if (active === "home") return `./${page}/`;
  if (active === page) return "#top";
  return `../${page}/`;
}

function labelOf(item: NavItem, t: (key: NavTextKey) => string) {
  return item.literal ?? (item.key ? t(item.key) : "");
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
  const [openGroup, setOpenGroup] = useState<string | null>(null);
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

  useEffect(() => {
    if (!openGroup) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenGroup(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openGroup]);

  const closeAll = () => {
    setOpen(false);
    setOpenGroup(null);
  };

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
          {NAV.map((entry) => {
            if (!entry.children) {
              return (
                <a
                  key={entry.id}
                  href={navHref(entry.page, active)}
                  aria-current={entry.page === active ? "page" : undefined}
                >
                  {t(entry.key)}
                </a>
              );
            }
            const inGroup = entry.children.some((child) => child.page === active);
            const opened = openGroup === entry.id;
            return (
              <div
                key={entry.id}
                className={inGroup ? "nav-group is-current" : "nav-group"}
                onMouseEnter={() => setOpenGroup(entry.id)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  type="button"
                  aria-expanded={opened}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup(opened ? null : entry.id)}
                >
                  {t(entry.key)}
                  <span className="nav-caret" aria-hidden="true" />
                </button>
                <div className="nav-panel">
                  <div className="nav-card">
                    {entry.children.map((child, index) =>
                      child.href ? (
                        <a
                          key={`${entry.id}-${index}`}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpenGroup(null)}
                        >
                          {labelOf(child, t)}
                        </a>
                      ) : (
                        <a
                          key={`${entry.id}-${index}`}
                          href={navHref(child.page, active)}
                          aria-current={child.page === active ? "page" : undefined}
                          onClick={() => setOpenGroup(null)}
                        >
                          {labelOf(child, t)}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
            {NAV.map((entry) =>
              entry.children ? (
                <div className="nav-drawer-group" key={entry.id}>
                  <p className="nav-drawer-heading">{t(entry.key)}</p>
                  {entry.children.map((child, index) =>
                    child.href ? (
                      <a
                        key={`${entry.id}-${index}`}
                        className="nav-link nav-link-child"
                        href={child.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeAll}
                      >
                        {labelOf(child, t)}
                      </a>
                    ) : (
                      <a
                        key={`${entry.id}-${index}`}
                        className="nav-link nav-link-child"
                        href={navHref(child.page, active)}
                        aria-current={child.page === active ? "page" : undefined}
                        onClick={closeAll}
                      >
                        {labelOf(child, t)}
                      </a>
                    ),
                  )}
                </div>
              ) : (
                <a
                  key={entry.id}
                  className="nav-link"
                  href={navHref(entry.page, active)}
                  aria-current={entry.page === active ? "page" : undefined}
                  onClick={closeAll}
                >
                  {t(entry.key)}
                </a>
              ),
            )}
          </nav>
          <a
            className="button primary"
            href={siteConfig.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeAll}
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
