import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
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
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const { locale, t } = useI18n();

  useEffect(() => {
    if (!open) return;
    drawerRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
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

  // 抽屉是全屏浮层：Tab 在抽屉内循环，不落到被遮住的主内容上
  const onDrawerKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const focusables = drawerRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    if (!focusables?.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const current = document.activeElement;
    if (event.shiftKey) {
      if (current === first || current === drawerRef.current) {
        event.preventDefault();
        last.focus();
      }
    } else if (current === last) {
      event.preventDefault();
      first.focus();
    }
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
                className={`nav-group${inGroup ? " is-current" : ""}${opened ? " is-open" : ""}`}
                onMouseEnter={() => setOpenGroup(entry.id)}
                onMouseLeave={() => setOpenGroup(null)}
                // 显隐只由 state 驱动，焦点进出也同步 state，
                // 避免「聚焦就展开但 aria-expanded 还是 false」和 Escape 关不掉
                onFocus={() => setOpenGroup(entry.id)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenGroup(null);
                }}
              >
                <button
                  type="button"
                  aria-expanded={opened}
                  aria-controls={`nav-panel-${entry.id}`}
                  onClick={() => setOpenGroup(opened ? null : entry.id)}
                >
                  {t(entry.key)}
                  <span className="nav-caret" aria-hidden="true" />
                </button>
                <div className="nav-panel" id={`nav-panel-${entry.id}`}>
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
          ref={toggleRef}
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
      <div
        id="site-drawer"
        className={open ? "nav-drawer open" : "nav-drawer"}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={locale === "zh" ? "站点导航" : "Site navigation"}
        tabIndex={-1}
        onKeyDown={onDrawerKeyDown}
      >
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
  const fromPage = (path: string) => `${active === "home" ? "./" : "../"}${path}`;
  const anchor = (id: string) => (active === "home" ? `#${id}` : `../#${id}`);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <p className="footer-brand">
            <img className="footer-logo" src={logoImage} alt="" width={28} height={28} />
            {siteConfig.brand}
          </p>
          <p className="footer-slogan">{t("oxygen.slogan")}</p>
          <p>{t("footer.researchBase")}</p>
        </div>

        {/* 十个链接原来堆成一整条，按分组拆成三列 */}
        <div className="footer-col">
          <p className="footer-heading">{t("footer.groupProduct")}</p>
          <nav aria-label={t("footer.groupProduct")}>
            <a href={anchor("products")}>{t("nav.products")}</a>
            <a href={fromPage("model/")}>{t("nav.model")}</a>
            <a href={fromPage("research/")}>{t("nav.research")}</a>
            <a href={fromPage("progress/")}>{t("nav.progress")}</a>
            <a href={fromPage("developers/")}>{t("nav.developers")}</a>
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-heading">{t("footer.groupCompany")}</p>
          <nav aria-label={t("footer.groupCompany")}>
            <a href={fromPage("about/")}>{t("nav.aboutUs")}</a>
            <a href={fromPage("careers/")}>{t("nav.careers")}</a>
            <a href={fromPage("news/")}>{t("nav.news")}</a>
            <a href={fromPage("privacy/")}>{locale === "zh" ? "隐私" : "Privacy"}</a>
            <a href={fromPage("terms/")}>{locale === "zh" ? "条款" : "Terms"}</a>
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-heading">{t("footer.groupContact")}</p>
          <nav aria-label={t("footer.groupContact")}>
            <a href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">{locale === "zh" ? "Prima 官网" : "Prima website"}</a>
            <a href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">{locale === "zh" ? "Beta 申请" : "Beta application"}</a>
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </nav>
        </div>
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
