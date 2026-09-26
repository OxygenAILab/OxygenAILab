import { useI18n } from "../i18n";
import type { Localized } from "../data/content";
import { ContinuityVisual } from "./SplitArtwork";

type Item = { title: Localized; copy: Localized };

const directions: Item[] = [
  {
    title: { zh: "复杂度感知", en: "Complexity sensing" },
    copy: {
      zh: "在进入任务前判断这是一次轻量查询，还是需要多轮验证、上下文回看与计划修正的长任务。感知结果是后续所有资源分配的依据。",
      en: "Before entering a task, determine whether it is a light query or a long task requiring verification, context review, and plan correction. That result drives resource allocation.",
    },
  },
  {
    title: { zh: "分层记忆", en: "Layered memory" },
    copy: {
      zh: "把偏好、项目状态、关键决策和失败教训分层组织。记忆的价值不在存储量，而在「该记住什么」与「该在什么时候想起什么」的判断。",
      en: "Organize preferences, project state, decisions, and lessons in layers. Memory's value is not storage volume but knowing what to remember and when to recall it.",
    },
  },
  {
    title: { zh: "执行一致性", en: "Execution consistency" },
    copy: {
      zh: "在长任务里保持目标、约束和已确认事实的一致，减少因上下文窗口扩大而出现的连带返工。这是我们从用户调研里听到的最高频痛点。",
      en: "Keep goals, constraints, and confirmed facts aligned in long tasks to reduce collateral rework. It is the most frequent pain point in our user research.",
    },
  },
];

const principles: Item[] = [
  {
    title: { zh: "证据先于假设", en: "Evidence before hypotheses" },
    copy: {
      zh: "架构假设必须由用户证据触发。证据不足时，这一轮就停在这里。",
      en: "Architecture hypotheses must be triggered by user evidence. Without sufficient evidence, the cycle stops there.",
    },
  },
  {
    title: { zh: "可复现优先", en: "Reproducibility first" },
    copy: {
      zh: "结论要能落成可复现的设计文档和评测协议，不能停在一次演示上。",
      en: "Conclusions must become reproducible design documents and evaluation protocols, not one-off demos.",
    },
  },
  {
    title: { zh: "阶段写清楚", en: "Label stages clearly" },
    copy: {
      zh: "研究中就是研究中，规划中就是规划中，页面上不混着说。",
      en: "In research stays in research and planned stays planned; the pages do not mix them.",
    },
  },
];

export default function Research() {
  const { locale } = useI18n();

  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="research-hero-title">
        <p className="eyebrow">{locale === "zh" ? "研究" : "Research"}</p>
        <h1 id="research-hero-title">{locale === "zh" ? "我们研究长任务里的连续性。" : "We research continuity in long tasks."}</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          {locale === "zh"
            ? "Oxygen AI 的研究只有一条主线：让系统在长任务里保持连续、可靠，不知道的时候会说不知道。"
            : "Oxygen AI research has one main line: keep systems continuous and reliable in long tasks, and say when they do not know."}
        </p>
      </section>

      <section className="container about-section" aria-labelledby="directions-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "研究方向" : "Research directions"}</p>
          <h2 id="directions-title">{locale === "zh" ? "这三件事得一起做。" : "These three have to advance together."}</h2>
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

      <section className="container about-section" aria-labelledby="split-title">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">{locale === "zh" ? "方法" : "Method"}</p>
            <h2 id="split-title">{locale === "zh" ? "从用户掉线的地方开始。" : "Start where users drop off."}</h2>
            <p>
              {locale === "zh"
                ? "每一轮架构迭代之前，先回答两个问题：真实用户在哪里失去上下文，哪些验证过的策略值得进模型层。答不上来就先不动架构。"
                : "Before each architecture iteration, answer two questions: where do real users lose context, and which validated strategies belong at the model layer? If either is unanswered, architecture does not move."}
            </p>
          </div>
          <figure className="split-visual">
            <ContinuityVisual />
          </figure>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="principles-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "研究原则" : "Research principles"}</p>
          <h2 id="principles-title">{locale === "zh" ? "我们给自己定的规矩。" : "Our own rules."}</h2>
        </div>
        <div className="three-grid">
          {principles.map((item) => (
            <article className="feature-tile" key={item.title.en}>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="research-progress-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "当前进展" : "Current progress"}</p>
          <h2 id="research-progress-title">{locale === "zh" ? "模型状态和研究记录单独归档。" : "Model states and research records are archived separately."}</h2>
          <p className="section-copy">
            {locale === "zh"
              ? "研究方向说明为什么做；进展页说明每条模型线现在走到哪里，以及哪些记录可以公开。"
              : "Directions explain why; the progress page states where each model line stands and which records can be public."}
          </p>
          <p>
            <a className="text-link" href="../progress/">
              {locale === "zh" ? "查看模型进展与研究" : "See model progress and research"}&nbsp;&rarr;
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
