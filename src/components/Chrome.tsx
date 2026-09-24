import { useEffect, useState } from "react";
import { siteConfig } from "../config";
import logoImage from "../../assets/images/logo.png";

export type PageKey =
  | "home"
  | "about"
  | "model"
  | "careers"
  | "research"
  | "progress"
  | "news"
  | "developers"
  | "contact";

// 导航项集中一处，桌面导航与移动抽屉共用，避免两份链接各写一遍
const NAV: { label: string; anchor: string; page?: PageKey }[] = [
  { label: "产品", anchor: "products" },
  { label: "模型", anchor: "model", page: "model" },
  { label: "研究", anchor: "research", page: "research" },
  { label: "进展", anchor: "progress", page: "progress" },
  { label: "开发者", anchor: "developers", page: "developers" },
  { label: "动态", anchor: "news", page: "news" },
  { label: "关于", anchor: "about", page: "about" },
  { label: "加入我们", anchor: "careers", page: "careers" },
];

function navHref(item: (typeof NAV)[number], active: PageKey) {
  if (!item.page) return active === "home" ? `#${item.anchor}` : `../#${item.anchor}`;
  if (active === "home") return `./${item.anchor}/`;
  if (active === item.page) return "#top";
  return `../${item.anchor}/`;
}

function Announce() {
  return (
    <div className="announce">
      <a href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">
        Prima Beta 调研进行中，问卷约需 5 分钟 →
      </a>
    </div>
  );
}

export function Header({ active = "home" }: { active?: PageKey }) {
  const [open, setOpen] = useState(false);

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
        <a className="brand" href="#top" aria-label="Oxygen AI 首页">
          <img className="brand-mark" src={logoImage} alt="" width={30} height={30} />
          <span>{siteConfig.brand}</span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          {NAV.map((item) => (
            <a key={item.label} href={navHref(item, active)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button primary compact header-cta" href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">
          进入 Prima
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "关闭菜单" : "打开菜单"}
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
          <nav aria-label="移动导航">
            {NAV.map((item) => (
              <a key={item.label} className="nav-link" href={navHref(item, active)} onClick={() => setOpen(false)}>
                {item.label}
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
            进入 Prima
          </a>
        </div>
      </div>
    </>
  );
}

export function Footer({ active = "home" }: { active?: PageKey }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <img className="footer-logo" src={logoImage} alt="" width={28} height={28} />
            {siteConfig.brand}
          </p>
          <p className="footer-slogan">星火灵现，构于基元。</p>
          <p>Prima 与 OxygenDCM N1 的母品牌。</p>
        </div>
        <nav aria-label="网站导航">
          <a href={active === "home" ? "#products" : "../#products"}>产品</a>
          <a href={active === "home" ? "./model/" : "../model/"}>模型</a>
          <a href={active === "home" ? "./research/" : "../research/"}>研究</a>
          <a href={active === "home" ? "./progress/" : "../progress/"}>进展</a>
          <a href={active === "home" ? "./developers/" : "../developers/"}>开发者</a>
          <a href={active === "home" ? "./news/" : "../news/"}>动态</a>
          <a href={active === "home" ? "./about/" : "../about/"}>关于</a>
          <a href={active === "home" ? "./careers/" : "../careers/"}>加入我们</a>
        </nav>
        <nav aria-label="Prima 导航">
          <a href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">Prima 官网</a>
          <a href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">Beta 申请</a>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 Oxygen AI</p>
        <p>产品仍处早期打磨阶段，模型能力以最终发布说明为准。</p>
      </div>
    </footer>
  );
}
