import { siteConfig } from "../config";
import logoImage from "../../assets/images/logo.png";

function Announce() {
  return (
    <div className="announce">
      <a href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">
        Prima Agent 正在开放 Beta 调研 →
      </a>
    </div>
  );
}

export function Header({ active = "home" }: { active?: "home" | "about" | "model" | "careers" | "research" | "news" | "developers" | "contact" }) {
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
          <a href={active === "home" ? "#products" : "../#products"}>产品</a>
          <a href={active === "home" ? "./model/" : active === "model" ? "#top" : "../model/"}>模型</a>
          <a href={active === "home" ? "./research/" : active === "research" ? "#top" : "../research/"}>研究</a>
          <a href={active === "home" ? "./developers/" : active === "developers" ? "#top" : "../developers/"}>开发者</a>
          <a href={active === "home" ? "./news/" : active === "news" ? "#top" : "../news/"}>动态</a>
          <a href={active === "home" ? "./about/" : active === "about" ? "#top" : "../about/"}>关于</a>
          <a href={active === "home" ? "./careers/" : active === "careers" ? "#top" : "../careers/"}>加入我们</a>
        </nav>
        <a className="button primary compact" href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">
          进入 Prima
        </a>
      </div>
      </header>
    </>
  );
}

export function Footer({ active = "home" }: { active?: "home" | "about" | "model" | "careers" | "research" | "news" | "developers" | "contact" }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <img className="footer-logo" src={logoImage} alt="" width={28} height={28} />
            {siteConfig.brand}
          </p>
          <p>Prima 与 OxygenDCM N1 的母品牌。</p>
        </div>
        <nav aria-label="网站导航">
          <a href={active === "home" ? "#products" : "../#products"}>产品</a>
          <a href={active === "home" ? "./model/" : "../model/"}>模型</a>
          <a href={active === "home" ? "./research/" : "../research/"}>研究</a>
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
