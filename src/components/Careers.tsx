import { siteConfig } from "../config";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";

type Channel = { title: Localized; email: string; tone: string; tag: Localized; copy: Localized };
type Value = { title: Localized; copy: Localized };

const channels: Channel[] = [
  {
    title: { zh: "申请实验室面试", en: "Apply for a lab interview" },
    email: siteConfig.labEmail,
    tone: "gray",
    tag: { zh: "研究与技术", en: "Research and engineering" },
    copy: {
      zh: "面向模型架构、Agent 系统与工程方向。请附上简历或 GitHub，并简述你最近做过的最有挑战的一个项目；如果读过我们的页面，也欢迎谈谈你的看法。",
      en: "For model architecture, agent systems, and engineering. Attach a resume or GitHub and briefly describe your most challenging recent project; comments on our pages are welcome.",
    },
  },
  {
    title: { zh: "加入源川氧合", en: "Join Yuanchuan Oxygen" },
    email: siteConfig.hrEmail,
    tone: "mint",
    tag: { zh: "团队运营与商务", en: "Operations and business" },
    copy: {
      zh: "面向运营、市场与合作方向。请附上简历与自我介绍，说明你希望参与的方向；我们会结合当前团队需求安排沟通。",
      en: "For operations, marketing, and partnerships. Attach a resume and introduce the direction you want to work in; we arrange conversations based on current needs.",
    },
  },
];

const values: Value[] = [
  {
    title: { zh: "少承诺，多验证", en: "Promise less, validate more" },
    copy: {
      zh: "规划中的能力不会写成已可用。页面上看到的边界，就是团队内部真正在守的那条。",
      en: "Planned capabilities are not described as available. The boundaries you see are the ones we actually keep.",
    },
  },
  {
    title: { zh: "问题先于答案", en: "Questions before answers" },
    copy: {
      zh: "面试里我们更想听你正在卡住的问题，而不是背下来的答案。",
      en: "In interviews we prefer the questions you are stuck on over memorized answers.",
    },
  },
  {
    title: { zh: "连续性", en: "Continuity" },
    copy: {
      zh: "长任务的连续性是产品命题，也是我们的工作方式：决策写下来，假设有人追，复盘不省略。",
      en: "Continuity is both a product thesis and a working method: write decisions down, assign assumptions, and never skip reviews.",
    },
  },
];

export default function Careers() {
  const { locale } = useI18n();

  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="careers-hero-title">
        <p className="eyebrow">{locale === "zh" ? "招贤纳士" : "Careers"}</p>
        <h1 id="careers-hero-title">{locale === "zh" ? "和我们一起做点需要耐心的事。" : "Do patient work with us."}</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          {locale === "zh"
            ? "Oxygen AI 是一个小团队。我们觉得长任务里的连续性是个值得做十年以上的问题，想找愿意一起验证的人。"
            : "Oxygen AI is a small team. We think continuity in long tasks is worth more than a decade, and we want people willing to validate it with us."}
        </p>
      </section>

      <section className="container about-section" aria-labelledby="channels-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "两个入口" : "Two entry points"}</p>
          <h2 id="channels-title">{locale === "zh" ? "两个入口，按方向选。" : "Two entry points, selected by direction."}</h2>
        </div>
        <div className="card-grid">
          {channels.map((item) => (
            <article className="card" key={item.email}>
              <p className={`tag ${item.tone}`}>{item.tag[locale]}</p>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
              <a className="text-link" href={`mailto:${item.email}`}>
                {item.email}&nbsp;&rarr;
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="values-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "我们的工作方式" : "How we work"}</p>
          <h2 id="values-title">{locale === "zh" ? "先说说我们怎么做事。" : "First, how we work."}</h2>
        </div>
        <div className="three-grid">
          {values.map((item) => (
            <article className="feature-tile" key={item.title.en}>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="careers-cta-title">
        <div className="contact-panel">
          <div>
            <h2 id="careers-cta-title">{locale === "zh" ? "不确定自己适合哪个入口？" : "Unsure which entry fits?"}</h2>
            <p>
              {locale === "zh"
                ? `直接写信到 ${siteConfig.labEmail}，简单介绍你自己。如果这边有更合适的方向，我们会帮你转接。`
                : `Email ${siteConfig.labEmail} with a short introduction. If another direction fits better, we will route you there.`}
            </p>
          </div>
          <a className="button primary" href={`mailto:${siteConfig.contactEmail}`}>
            {locale === "zh" ? "给我们写信" : "Email us"}
          </a>
        </div>
      </section>
    </main>
  );
}
