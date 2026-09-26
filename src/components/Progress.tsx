import { siteConfig } from "../config";
import { modelMatrix, modelRoutes } from "../data/models";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";

type Direction = { title: Localized; copy: Localized };
type RecordItem = { date: string; title: Localized; status: Localized; note: Localized };

const directions: Direction[] = [
  {
    title: { zh: "复杂度感知", en: "Complexity sensing" },
    copy: {
      zh: "判断任务是轻量查询，还是需要多轮验证、上下文回看与计划修正的长任务。",
      en: "Decide whether a task is a light query or a long task requiring verification, context review, and plan correction.",
    },
  },
  {
    title: { zh: "分层记忆", en: "Layered memory" },
    copy: {
      zh: "把项目状态、关键决策和失败教训分层组织，让重要信息在合适时机可用。",
      en: "Organize project state, key decisions, and lessons in layers so important information is available at the right time.",
    },
  },
  {
    title: { zh: "执行一致性", en: "Execution consistency" },
    copy: {
      zh: "在多轮长任务里保持目标、约束和已确认事实一致，减少重复解释与返工。",
      en: "Keep goals, constraints, and confirmed facts aligned across long tasks to reduce repeated explanations and rework.",
    },
  },
];

const records: RecordItem[] = [
  {
    date: "2026.09",
    title: { zh: "长任务 Agent 的自适应推理与分层记忆", en: "Adaptive reasoning and layered memory in long-task agents" },
    status: { zh: "论文准备中", en: "Paper in preparation" },
    note: {
      zh: "外部论文发布后，这里会补充公开链接和简短说明。",
      en: "A public link and brief summary will be added once the external paper is published.",
    },
  },
  {
    date: "2026.09",
    title: { zh: "Prima 长任务共创调研", en: "Prima long-task co-creation research" },
    status: { zh: "进行中", en: "In progress" },
    note: {
      zh: "围绕真实工作流收集任务断点、记忆需求和执行一致性反馈。",
      en: "Collecting feedback on task breaks, memory needs, and execution consistency from real workflows.",
    },
  },
];

export default function Progress() {
  const { locale } = useI18n();

  return (
    <main id="main" className="about-page progress-page">
      <section className="container about-hero" aria-labelledby="progress-hero-title">
        <p className="eyebrow">{locale === "zh" ? "模型进展与研究" : "Model progress and research"}</p>
        <h1 id="progress-hero-title">{locale === "zh" ? "每个模型只报告当前阶段。" : "Every model reports its current stage."}</h1>
        <p className="lead" style={{ maxWidth: "60ch" }}>
          {locale === "zh"
            ? "这里汇总研究中的模型方向、规划中的模型线，以及正在推进的研究记录。没有公开论文的条目不会展开技术细节。"
            : "This page summarizes research directions, planned model lines, and active research records. Entries without public papers do not expose technical details."}
        </p>
        <nav className="progress-index" aria-label={locale === "zh" ? "页面分区" : "Page sections"}>
          <a href="#model-progress">{locale === "zh" ? "模型进展" : "Model progress"}</a>
          <a href="#research-directions">{locale === "zh" ? "研究方向" : "Research directions"}</a>
          <a href="#research-records">{locale === "zh" ? "研究记录" : "Research records"}</a>
        </nav>
      </section>

      <section id="model-progress" className="container about-section" aria-labelledby="model-progress-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "模型进展" : "Model progress"}</p>
          <h2 id="model-progress-title">{locale === "zh" ? "三条基础路线，五个模型。" : "Three base routes, five models."}</h2>
        </div>
        <div className="progress-route-grid">
          {modelRoutes.map((route) => {
            const models = modelMatrix.filter((item) => item.route === route.id);

            return (
              <article className="progress-route-card" key={route.id}>
                <div className="progress-route-head">
                  <h3>{route.label[locale]}</h3>
                  <p className="progress-route-basis">{route.basis[locale]}</p>
                  <p>{route.summary[locale]}</p>
                </div>
                <ul className="progress-model-list">
                  {models.map((item) => (
                    <li key={item.name}>
                      <div>
                        <p className="progress-model-name">{item.name}</p>
                        <p className="progress-model-focus">{item.focus[locale]}</p>
                      </div>
                      <span className={`tag ${item.tone}`}>{item.status[locale]}</span>
                    </li>
                  ))}
                </ul>
                <div className="progress-research">
                  <p>
                    <span>{locale === "zh" ? "研究目标" : "Research objective"}</span>
                    {route.objective[locale]}
                  </p>
                  <p>
                    <span>{locale === "zh" ? "公开边界" : "Public boundary"}</span>
                    {route.boundary[locale]}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="research-directions" className="container about-section" aria-labelledby="research-directions-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "研究方向" : "Research directions"}</p>
          <h2 id="research-directions-title">{locale === "zh" ? "研究围绕长任务连续性展开。" : "Research centers on long-task continuity."}</h2>
        </div>
        <div className="card-grid">
          {directions.map((item) => (
            <article className="card" key={item.title.en}>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="research-records" className="container about-section" aria-labelledby="research-records-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "研究记录" : "Research records"}</p>
          <h2 id="research-records-title">{locale === "zh" ? "可公开的进展会放在这里。" : "Publishable progress appears here."}</h2>
        </div>
        <ul className="progress-record-list">
          {records.map((item) => (
            <li key={item.title.en}>
              <div className="progress-record-main">
                <p className="progress-record-date">{item.date}</p>
                <div>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.note[locale]}</p>
                </div>
              </div>
              <span className="tag gray">{item.status[locale]}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container about-section" aria-labelledby="progress-cta-title">
        <div className="contact-panel">
          <div>
            <h2 id="progress-cta-title">{locale === "zh" ? "把真实场景交给我们验证。" : "Give us a real scenario to validate."}</h2>
            <p>
              {locale === "zh"
                ? "Prima 调研收集长任务中的断点和期望，验证结果会决定哪些方向进入模型规划。"
                : "Prima research collects breaks and expectations in long tasks; validation results decide which directions enter model planning."}
            </p>
          </div>
          <a className="button primary" href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">
            {locale === "zh" ? "参与 Prima 调研" : "Join Prima research"}
          </a>
        </div>
      </section>
    </main>
  );
}
