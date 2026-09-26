import { siteConfig } from "../config";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";

type Item = { title: Localized; copy: Localized };

const beliefs: Item[] = [
  {
    title: { zh: "产品先验证", en: "Validate in product first" },
    copy: {
      zh: "Prima 先在一线跑。跑出来的稳定结论，才带进模型架构研究。",
      en: "Prima runs in the field first; stable conclusions are then carried into model architecture research.",
    },
  },
  {
    title: { zh: "模型不炫技", en: "Models without spectacle" },
    copy: {
      zh: "OxygenDCM N1 看的是复杂度感知、分层记忆和执行一致性。参数规模大不大，跟好不好用是两件事。",
      en: "OxygenDCM N1 is judged by complexity sensing, layered memory, and execution consistency. Parameter scale and usefulness are separate things.",
    },
  },
  {
    title: { zh: "边界必须清楚", en: "Boundaries must be clear" },
    copy: {
      zh: "探索中的架构、未上线功能，以及用户数据的使用范围，都会在页面上标清楚。",
      en: "Exploratory architecture, unshipped features, and user-data scope are all clearly labeled on the pages.",
    },
  },
];

export default function About() {
  const { locale } = useI18n();
  const facts: Array<{ label: Localized; value: string }> = [
    { label: { zh: "产品方向", en: "Product direction" }, value: "Prima" },
    { label: { zh: "模型规划", en: "Model plan" }, value: "OxygenDCM N1" },
    { label: { zh: "模型规格", en: "Model spec" }, value: "35B MoE" },
    { label: { zh: "架构重点", en: "Architecture focus" }, value: locale === "zh" ? siteConfig.model.architecture : "Dynamic cognition" },
    { label: { zh: "阶段", en: "Stage" }, value: locale === "zh" ? "早期研究 / 共创" : "Early research / co-creation" },
  ];

  return (
    <main id="main" className="about-page">
      <section className="container page-hero" aria-labelledby="about-page-title">
        <p className="eyebrow">{locale === "zh" ? "关于 Oxygen AI" : "About Oxygen AI"}</p>
        <h1 id="about-page-title">{locale === "zh" ? "一支小团队，两条线。" : "A small team, two lines of work."}</h1>
        <p className="section-copy">
          {locale === "zh"
            ? "Oxygen AI 是一个小而专注的产品与研究团队。当前工作围绕 Prima、用户共创，以及 OxygenDCM N1 的动态认知架构规划展开。"
            : "Oxygen AI is a small, focused product and research team. Current work centers on Prima, user co-creation, and OxygenDCM N1's dynamic cognitive architecture plan."}
        </p>
        <div className="hero-actions">
          <a className="button primary" href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">{locale === "zh" ? "进入 Prima" : "Enter Prima"}</a>
          <a className="button ghost" href={`mailto:${siteConfig.contactEmail}`}>{locale === "zh" ? "联系我们" : "Contact us"}</a>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="belief-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "工作原则" : "Working principles"}</p>
          <h2 id="belief-title">{locale === "zh" ? "每个结论都要能复查。" : "Every conclusion must be reviewable."}</h2>
        </div>
        <div className="card-grid">
          {beliefs.map((item) => (
            <article className="feature-tile" key={item.title.en}>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="facts-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "当前事实" : "Current facts"}</p>
          <h2 id="facts-title">{locale === "zh" ? "我们正在做什么" : "What we are doing"}</h2>
        </div>
        <dl className="fact-grid">
          {facts.map((fact) => (
            <div key={fact.label.en}>
              <dt>{fact.label[locale]}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container about-section" aria-labelledby="about-contact-title">
        <div className="contact-panel">
          <div>
            <h2 id="about-contact-title">{locale === "zh" ? "愿意参与早期共创？" : "Interested in early co-creation?"}</h2>
            <p>
              {locale === "zh"
                ? "Prima 正在收集真实长任务场景和 Beta 反馈，你的输入会帮助我们判断哪些能力优先进入产品。"
                : "Prima is collecting real long-task scenarios and Beta feedback; your input helps us decide which capabilities enter the product first."}
            </p>
          </div>
          <a className="button primary" href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">{locale === "zh" ? "参与 Prima 调研" : "Join Prima research"}</a>
        </div>
      </section>
    </main>
  );
}
