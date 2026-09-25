import { siteConfig } from "../config";
import { useState } from "react";

const items = [
  {
    date: "2026-09",
    tag: "产品",
    tone: "mint",
    title: "Prima Beta 调研持续进行中",
    copy: "我们正在邀请真实用户参与 Prima 前期调研，用约 5 分钟描述你的使用习惯、痛点和服务期待。入选用户有机会提前体验产品。",
    link: { label: "参与调研", href: siteConfig.betaUrl, external: true },
  },
  {
    date: "2026-09",
    tag: "研究",
    tone: "gray",
    title: "模型矩阵公开：三条路线",
    copy: "序列生成、隐状态动力学、校准决策三条路线，以及它们与 Prima 产品验证的衔接方式，都写在了模型页上。目前分别处于研究中或规划中。",
    link: { label: "查看模型矩阵", href: "/model/", external: false },
  },
  {
    date: "2026-08",
    tag: "品牌",
    tone: "gray",
    title: "Oxygen 官网上线",
    copy: "新官网与 Prima 官网同期上线。前者讲母品牌与模型规划，后者讲产品，Beta 申请通道也已经开放。",
    link: { label: "访问 Prima 官网", href: siteConfig.productUrl, external: true },
  },
  {
    date: "2026-09",
    tag: "产品",
    tone: "gray",
    title: "SparkPlan 与 PrimaPlan 定价公开",
    copy: "从免费验证到团队长任务，额度、限速、并行限制与媒体倍率已经整理成完整对照表。正式开通前，方案仍可能微调。",
    link: { label: "查看定价", href: "https://prima.oxygenai.top/pricing/", external: true },
  },
  {
    date: "2026-09",
    tag: "开发者",
    tone: "gray",
    title: "早期接入流程与联系提纲公开",
    copy: "我们整理了产品共创、研究协作与边界探索三条轨道，并给出联系提纲，减少第一次沟通的信息成本。",
    link: { label: "查看开发者计划", href: "/developers/", external: false },
  },
  {
    date: "2026-09",
    tag: "品牌",
    tone: "gray",
    title: "双站视觉与口号完成校准",
    copy: "Oxygen 承担研究底座，Prima 承担产品体验；两个站点共用星火母题，但保持各自的叙事尺度。",
    link: { label: "进入 Prima", href: siteConfig.productUrl, external: true },
  },
];

export default function News() {
  const [activeTag, setActiveTag] = useState("全部");
  const tags = ["全部", ...new Set(items.map((item) => item.tag))];
  const visibleItems = activeTag === "全部" ? items : items.filter((item) => item.tag === activeTag);

  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="news-hero-title">
        <p className="eyebrow">新闻与动态</p>
        <h1 id="news-hero-title">有实质进展，才写一条。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          这里更新得不多，有实质进展才写一条。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="news-list-title">
        <h2 id="news-list-title" className="visually-hidden">动态列表</h2>
        <div className="filter-rail" role="group" aria-label="按类型筛选动态">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={activeTag === tag ? "filter-chip active" : "filter-chip"}
              aria-pressed={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="news-list">
          {visibleItems.map((item) => (
            <article className="news-item" key={item.title}>
              <div className="news-meta">
                <span className="news-date">{item.date}</span>
                <span className={`tag ${item.tone}`}>{item.tag}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              {item.link.external ? (
                <a className="text-link" href={item.link.href} target="_blank" rel="noopener noreferrer">{item.link.label}&nbsp;&rarr;</a>
              ) : (
                <a className="text-link" href={item.link.href}>{item.link.label}&nbsp;&rarr;</a>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
