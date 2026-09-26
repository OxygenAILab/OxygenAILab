import { siteConfig } from "../config";
import { modelMatrix } from "../data/models";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";
import { InternalVisual } from "./SplitArtwork";

type Pillar = { title: Localized; copy: Localized };

const tbmPillars: Pillar[] = [
  {
    title: { zh: "并行探索", en: "Parallel exploration" },
    copy: {
      zh: "同一个请求同时展开几条互不干扰的路径，不沿着单一线索一路推到底。",
      en: "One request expands into independent paths instead of following a single clue.",
    },
  },
  {
    title: { zh: "对抗校验", en: "Adversarial verification" },
    copy: {
      zh: "让一部分分支专门去证伪结论。分歧会保留下来，不取平均。",
      en: "Some branches try to falsify conclusions. Disagreement is preserved rather than averaged away.",
    },
  },
  {
    title: { zh: "预算内收敛", en: "Converge within budget" },
    copy: {
      zh: "探索有预算上限。到点就给一个能交付的结论。",
      en: "Exploration has a budget cap and must yield a deliverable conclusion.",
    },
  },
];

const cdmTraits: Pillar[] = [
  {
    title: { zh: "即时判断", en: "Immediate judgment" },
    copy: {
      zh: "面向需要即时判断的场景，直接给结论，不逐字生成。",
      en: "For scenarios that need immediate judgment, it gives conclusions directly without token-by-token generation.",
    },
  },
  {
    title: { zh: "诚实概率", en: "Honest probability" },
    copy: {
      zh: "同时给出客观概率与主观笃定度。两者明显不一致时会标记出来，不把自信当成正确。",
      en: "It reports objective probability and subjective certainty, marking clear mismatches instead of treating confidence as correctness.",
    },
  },
  {
    title: { zh: "拒答即能力", en: "Refusal as capability" },
    copy: {
      zh: "拒答和转交跟正常回答用同一套标准。说不确定，也算一种输出。",
      en: "Refusal and handoff follow the same standards as normal answers; saying uncertain is also an output.",
    },
  },
];

const roadmap: Pillar[] = [
  {
    title: { zh: "阶段一 · 产品验证", en: "Phase 1 · Product validation" },
    copy: {
      zh: "通过 Prima 在真实长任务中验证哪些认知能力值得进入模型层，收集可量化的用户证据。",
      en: "Use Prima in real long tasks to validate which cognitive capabilities belong at the model layer and collect measurable user evidence.",
    },
  },
  {
    title: { zh: "阶段二 · 架构设计", en: "Phase 2 · Architecture design" },
    copy: {
      zh: "把已验证的探索策略与记忆机制沉淀进 DCM 的架构规划，形成可复现的设计文档。",
      en: "Turn validated exploration and memory mechanisms into reproducible DCM design documents.",
    },
  },
  {
    title: { zh: "阶段三 · 模型训练", en: "Phase 3 · Model training" },
    copy: {
      zh: "在小规模验证集上确认架构假设成立，再决定是否扩大参数规模与训练范围。",
      en: "Confirm architecture assumptions on small validation sets before expanding parameter scale or training scope.",
    },
  },
];

export default function ModelPage() {
  const { locale } = useI18n();

  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="model-hero-title">
        <p className="eyebrow">{locale === "zh" ? "模型矩阵" : "Model matrix"}</p>
        <h1 id="model-hero-title">{locale === "zh" ? "两条技术路线，一个判断标准。" : "Two routes, one standard of judgment."}</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          {locale === "zh"
            ? "一条路线在序列生成上做并行探索与对抗校验，另一条把同样的做法搬进隐状态动力学。两者都要控制算力预算，也都要能如实说出自己有多确定。"
            : "One route explores and verifies in parallel sequence generation; the other applies the approach to hidden-state dynamics. Both must control compute and state their certainty honestly."}
        </p>
      </section>

      <section className="container about-section" aria-labelledby="family-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "当前规划" : "Current plans"}</p>
          <h2 id="family-title">{locale === "zh" ? "五个模型，覆盖探索与决策。" : "Five models across exploration and decisioning."}</h2>
          <p className="section-copy">
            {locale === "zh"
              ? "每个条目只标注当前阶段；公开机制停留在方向层，实验细节等论文或发布说明确认后再补充。"
              : "Each entry is labeled only by current stage; mechanisms stay directional until publications or release notes confirm details."}
          </p>
          <p>
            <a className="text-link" href="../progress/">
              {locale === "zh" ? "查看进展与研究" : "See progress and research"}&nbsp;&rarr;
            </a>
          </p>
        </div>
        <div className="card-grid">
          {modelMatrix.map((item) => (
            <article className="card" key={item.name}>
              <p className={`tag ${item.tone}`}>{item.status[locale]}</p>
              <h3>{item.name}</h3>
              <p className="model-series">{item.series[locale]}</p>
              <p>{item.copy[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" aria-labelledby="tbm-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{locale === "zh" ? "序列生成路线" : "Sequence generation route"}</p>
            <h2 id="tbm-title">{locale === "zh" ? "结论由对立的分支来怀疑。" : "Conclusions are challenged by opposing branches."}</h2>
            <p className="section-copy">
              {locale === "zh"
                ? "Avenues 与 Terrace 走多分支并行的生成范式：每个请求同时展开成对的探索分支，一部分推进推理，一部分专门尝试推翻它。"
                : "Avenues and Terrace use paired parallel branches: some advance reasoning while others try to overturn it."}
            </p>
          </div>
          <div className="card-grid">
            {tbmPillars.map((item) => (
              <article className="card" key={item.title.en}>
                <h3>{item.title[locale]}</h3>
                <p>{item.copy[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cdm-title">
        <div className="container">
          <div className="split">
            <div className="split-copy">
              <p className="eyebrow">{locale === "zh" ? "校准决策路线" : "Calibrated decisioning route"}</p>
              <h2 id="cdm-title">{locale === "zh" ? "不确定时，它说不知道。" : "When uncertain, it says so."}</h2>
              <p className="lead">
                {locale === "zh"
                  ? "CDM 是专门输出诚实概率的判别式模型。它要做的是把「不确定」说出来，不让自信盖过它。"
                  : "CDM is a discriminative model for honest probability. It states uncertainty rather than letting confidence override it."}
              </p>
            </div>
            <div className="stack-cards">
              {cdmTraits.map((item) => (
                <article className="card" key={item.title.en}>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.copy[locale]}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="arch-title">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">{locale === "zh" ? "DCM 路线" : "DCM route"}</p>
            <h2 id="arch-title">{locale === "zh" ? "探索和收敛都在模型内部完成。" : "Exploration and convergence happen inside the model."}</h2>
            <p>
              {locale === "zh"
                ? "DCM 不依赖外部脚本干预：探索、校验与收敛都发生在模型自己的计算过程里。"
                : "DCM does not rely on external scripts: exploration, verification, and convergence happen in the model's own computation."}
            </p>
          </div>
          <figure className="split-visual">
            <InternalVisual />
          </figure>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="roadmap-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "路线图" : "Roadmap"}</p>
          <h2 id="roadmap-title">{locale === "zh" ? "顺序是验证、设计、训练。" : "The order is validate, design, train."}</h2>
        </div>
        <div className="timeline">
          {roadmap.map((step) => (
            <div className="timeline-item" key={step.title.en}>
              <h3>{step.title[locale]}</h3>
              <p>{step.copy[locale]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="model-cta-title">
        <div className="contact-panel">
          <div>
            <h2 id="model-cta-title">{locale === "zh" ? "愿意参与早期验证？" : "Interested in early validation?"}</h2>
            <p>
              {locale === "zh"
                ? "Prima 正在收集真实长任务场景和 Beta 反馈，你的输入会直接影响哪些认知能力进入架构规划。"
                : "Prima is collecting real long-task scenarios and Beta feedback; your input directly shapes which capabilities enter architecture planning."}
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
