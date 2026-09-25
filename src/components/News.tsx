import { siteConfig } from "../config";

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
];

export default function News() {
  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="news-hero-title">
        <p className="eyebrow">新闻与动态</p>
        <h1 id="news-hero-title">我们在做什么。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          这里更新得不多，有实质进展才写一条。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="news-list-title">
        <h2 id="news-list-title" className="visually-hidden">动态列表</h2>
        <div className="news-list">
          {items.map((item) => (
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
