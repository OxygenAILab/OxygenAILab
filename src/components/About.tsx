import { siteConfig } from "../config";

const beliefs = [
  {
    title: "产品先验证",
    copy: "先用 Prima 在真实工作流中验证哪些认知能力有价值，再把稳定结论带入模型架构研究。",
  },
  {
    title: "模型不炫技",
    copy: "OxygenDCM N1 的重点是复杂度感知、分层记忆和执行一致性，不是把参数规模当作体验承诺。",
  },
  {
    title: "边界必须清楚",
    copy: "探索中的架构、未上线功能和用户数据边界都会明确标注，不做不可验证的宣传。",
  },
];

const facts = [
  { label: "产品方向", value: "Prima" },
  { label: "模型规划", value: "OxygenDCM N1" },
  { label: "模型规格", value: "35B MoE" },
  { label: "架构重点", value: siteConfig.model.architecture },
  { label: "阶段", value: "早期研究 / 共创" },
];

export default function About() {
  return (
    <main id="main" className="about-page">
      <section className="container page-hero" aria-labelledby="about-page-title">
        <p className="eyebrow">关于 Oxygen AI</p>
        <h1 id="about-page-title">我们研究长任务里的连续性。</h1>
        <p className="section-copy">
          Oxygen AI 是一个小而专注的产品与研究团队。当前工作围绕 Prima、用户共创，以及 OxygenDCM N1 的动态认知架构规划展开。
        </p>
        <div className="hero-actions">
          <a className="button primary" href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">进入 Prima</a>
          <a className="button ghost" href={`mailto:${siteConfig.contactEmail}`}>联系我们</a>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="belief-title">
        <div className="section-head">
          <p className="eyebrow">工作原则</p>
          <h2 id="belief-title">少承诺，多验证。</h2>
        </div>
        <div className="three-grid">
          {beliefs.map((item) => (
            <article className="feature-tile" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="facts-title">
        <div className="section-head">
          <p className="eyebrow">当前事实</p>
          <h2 id="facts-title">我们正在做什么</h2>
        </div>
        <dl className="fact-grid">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container about-section" aria-labelledby="about-contact-title">
        <div className="contact-panel">
          <div>
            <h2 id="about-contact-title">愿意参与早期共创？</h2>
            <p>Prima 正在收集真实长任务场景和 Beta 反馈，你的输入会帮助我们判断哪些能力优先进入产品。</p>
          </div>
          <a className="button primary" href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">参与 Prima 调研</a>
        </div>
      </section>
    </main>
  );
}
