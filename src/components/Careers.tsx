import { siteConfig } from "../config";

const channels = [
  {
    title: "申请实验室面试",
    email: siteConfig.labEmail,
    tone: "gray",
    tag: "研究与技术",
    copy: "面向模型架构、Agent 系统与工程方向。请附上简历或 GitHub，并简述你最近做过的最有挑战的一个项目；如果读过我们的页面，也欢迎谈谈你的看法。",
  },
  {
    title: "加入源川氧合",
    email: siteConfig.hrEmail,
    tone: "mint",
    tag: "团队运营与商务",
    copy: "面向运营、市场与合作方向。请附上简历与自我介绍，说明你希望参与的方向；我们会结合当前团队需求安排沟通。",
  },
];

const values = [
  {
    title: "少承诺，多验证",
    copy: "规划中的能力不会写成已可用。页面上看到的边界，就是团队内部真正在守的那条。",
  },
  {
    title: "问题先于答案",
    copy: "面试里我们更想听你正在卡住的问题，而不是背下来的答案。",
  },
  {
    title: "连续性",
    copy: "长任务的连续性是产品命题，也是我们的工作方式：决策写下来，假设有人追，复盘不省略。",
  },
];

export default function Careers() {
  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="careers-hero-title">
        <p className="eyebrow">招贤纳士</p>
        <h1 id="careers-hero-title">和我们一起做点需要耐心的事。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          Oxygen AI 是一个小团队。我们觉得长任务里的连续性是个值得做十年以上的问题，想找愿意一起验证的人。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="channels-title">
        <div className="section-head">
          <p className="eyebrow">两个入口</p>
          <h2 id="channels-title">两个入口，按方向选。</h2>
        </div>
        <div className="card-grid">
          {channels.map((item) => (
            <article className="card" key={item.email}>
              <p className={`tag ${item.tone}`}>{item.tag}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a className="text-link" href={`mailto:${item.email}`}>
                {item.email}&nbsp;&rarr;
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="values-title">
        <div className="section-head">
          <p className="eyebrow">我们的工作方式</p>
          <h2 id="values-title">先说说我们怎么做事。</h2>
        </div>
        <div className="three-grid">
          {values.map((item) => (
            <article className="feature-tile" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="careers-cta-title">
        <div className="contact-panel">
          <div>
            <h2 id="careers-cta-title">不确定自己适合哪个入口？</h2>
            <p>直接写信到 {siteConfig.labEmail}，简单介绍你自己。如果这边有更合适的方向，我们会帮你转接。</p>
          </div>
          <a className="button primary" href={`mailto:${siteConfig.contactEmail}`}>
            给我们写信
          </a>
        </div>
      </section>
    </main>
  );
}
