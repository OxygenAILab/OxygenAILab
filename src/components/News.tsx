import { siteConfig } from "../config";
import { useState } from "react";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";

type NewsItem = {
  date: string;
  tag: Localized;
  tone: string;
  title: Localized;
  copy: Localized;
  link: { label: Localized; href: string; external: boolean };
};

const items: NewsItem[] = [
  {
    date: "2026-09",
    tag: { zh: "产品", en: "Product" },
    tone: "mint",
    title: { zh: "Prima Beta 调研持续进行中", en: "Prima Beta research continues" },
    copy: {
      zh: "我们正在邀请真实用户参与 Prima 前期调研，用约 5 分钟描述你的使用习惯、痛点和服务期待。入选用户有机会提前体验产品。",
      en: "We are inviting real users into Prima's early research to spend about five minutes describing usage habits, pain points, and service expectations. Selected users may access the product early.",
    },
    link: { label: { zh: "参与调研", en: "Join research" }, href: siteConfig.betaUrl, external: true },
  },
  {
    date: "2026-09",
    tag: { zh: "研究", en: "Research" },
    tone: "gray",
    title: { zh: "模型矩阵公开：三条路线", en: "Model matrix published: three routes" },
    copy: {
      zh: "序列生成、隐状态动力学、校准决策三条路线，以及它们与 Prima 产品验证的衔接方式，都写在了模型页上。目前分别处于研究中或规划中。",
      en: "The model page describes sequence generation, hidden-state dynamics, calibrated decisioning, and how they connect to Prima validation. They remain in research or planned stages.",
    },
    link: { label: { zh: "查看模型矩阵", en: "See model matrix" }, href: "/model/", external: false },
  },
  {
    date: "2026-08",
    tag: { zh: "品牌", en: "Brand" },
    tone: "gray",
    title: { zh: "Oxygen 官网上线", en: "Oxygen website launched" },
    copy: {
      zh: "新官网与 Prima 官网同期上线。前者讲母品牌与模型规划，后者讲产品，Beta 申请通道也已经开放。",
      en: "The new Oxygen site launched alongside Prima's site. Oxygen covers the parent brand and model plan; Prima covers the product, with Beta applications open.",
    },
    link: { label: { zh: "访问 Prima 官网", en: "Open Prima" }, href: siteConfig.productUrl, external: true },
  },
  {
    date: "2026-09",
    tag: { zh: "产品", en: "Product" },
    tone: "gray",
    title: { zh: "SparkPlan 与 PrimaPlan 定价公开", en: "SparkPlan and PrimaPlan pricing published" },
    copy: {
      zh: "从免费验证到团队长任务，额度、限速、并行限制与媒体倍率已经整理成完整对照表。正式开通前，方案仍可能微调。",
      en: "Allocation, rate limits, parallel limits, and media multipliers are now in a full comparison table from free validation to team long tasks. Details may still be adjusted before launch.",
    },
    link: { label: { zh: "查看定价", en: "See pricing" }, href: "https://prima.oxygenai.top/pricing/", external: true },
  },
  {
    date: "2026-09",
    tag: { zh: "开发者", en: "Developers" },
    tone: "gray",
    title: { zh: "早期接入流程与联系提纲公开", en: "Early access process and contact template published" },
    copy: {
      zh: "我们整理了产品共创、研究协作与边界探索三条轨道，并给出联系提纲，减少第一次沟通的信息成本。",
      en: "We published product co-creation, research collaboration, and boundary exploration tracks plus a contact template to reduce first-contact overhead.",
    },
    link: { label: { zh: "查看开发者计划", en: "See developer program" }, href: "/developers/", external: false },
  },
  {
    date: "2026-09",
    tag: { zh: "品牌", en: "Brand" },
    tone: "gray",
    title: { zh: "双站视觉与口号完成校准", en: "Two-site visuals and slogans calibrated" },
    copy: {
      zh: "Oxygen 承担研究底座，Prima 承担产品体验；两个站点共用星火母题，但保持各自的叙事尺度。",
      en: "Oxygen carries the research foundation and Prima carries product experience. The sites share the spark motif while keeping distinct narrative scales.",
    },
    link: { label: { zh: "进入 Prima", en: "Enter Prima" }, href: siteConfig.productUrl, external: true },
  },
];

export default function News() {
  const { locale } = useI18n();
  const [activeTag, setActiveTag] = useState<Localized | "all">("all");
  const tags: Localized[] = Array.from(new Map(items.map((item) => [item.tag.en, item.tag])).values());
  const visibleItems = activeTag === "all" ? items : items.filter((item) => item.tag.en === activeTag.en);

  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="news-hero-title">
        <p className="eyebrow">{locale === "zh" ? "新闻与动态" : "News and updates"}</p>
        <h1 id="news-hero-title">{locale === "zh" ? "有实质进展，才写一条。" : "We write an entry only for substantive progress."}</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          {locale === "zh" ? "这里更新得不多，有实质进展才写一条。" : "This list is intentionally short; entries require substantive progress."}
        </p>
      </section>

      <section className="container about-section" aria-labelledby="news-list-title">
        <h2 id="news-list-title" className="visually-hidden">{locale === "zh" ? "动态列表" : "Updates list"}</h2>
        <div className="filter-rail" role="group" aria-label={locale === "zh" ? "按类型筛选动态" : "Filter updates by type"}>
          <button
            type="button"
            className={activeTag === "all" ? "filter-chip active" : "filter-chip"}
            aria-pressed={activeTag === "all"}
            onClick={() => setActiveTag("all")}
          >
            {locale === "zh" ? "全部" : "All"}
          </button>
          {tags.map((tag) => (
            <button
              key={tag.en}
              type="button"
              className={activeTag !== "all" && activeTag.en === tag.en ? "filter-chip active" : "filter-chip"}
              aria-pressed={activeTag !== "all" && activeTag.en === tag.en}
              onClick={() => setActiveTag(tag)}
            >
              {tag[locale]}
            </button>
          ))}
        </div>
        <div className="news-list">
          {visibleItems.map((item) => (
            <article className="news-item" key={item.title.en}>
              <div className="news-meta">
                <span className="news-date">{item.date}</span>
                <span className={`tag ${item.tone}`}>{item.tag[locale]}</span>
              </div>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
              {item.link.external ? (
                <a className="text-link" href={item.link.href} target="_blank" rel="noopener noreferrer">{item.link.label[locale]}&nbsp;&rarr;</a>
              ) : (
                <a className="text-link" href={item.link.href}>{item.link.label[locale]}&nbsp;&rarr;</a>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
