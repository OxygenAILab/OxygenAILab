import { siteConfig } from "../config";
import { modelMatrix } from "../data/models";
import { InternalVisual } from "./SplitArtwork";

const tbmPillars = [
  {
    title: "并行探索",
    copy: "同一个请求同时展开几条互不干扰的路径，不沿着单一线索一路推到底。",
  },
  {
    title: "对抗校验",
    copy: "让一部分分支专门去证伪结论。分歧会保留下来，不取平均。",
  },
  {
    title: "预算内收敛",
    copy: "探索有预算上限。到点就给一个能交付的结论。",
  },
];

const cdmTraits = [
  {
    title: "即时判断",
    copy: "面向需要即时判断的场景，直接给结论，不逐字生成。",
  },
  {
    title: "诚实概率",
    copy: "同时给出客观概率与主观笃定度。两者明显不一致时会标记出来，不把自信当成正确。",
  },
  {
    title: "拒答即能力",
    copy: "拒答和转交跟正常回答用同一套标准。说不确定，也算一种输出。",
  },
];

const roadmap = [
  {
    title: "阶段一 · 产品验证",
    copy: "通过 Prima 在真实长任务中验证哪些认知能力值得进入模型层，收集可量化的用户证据。",
  },
  {
    title: "阶段二 · 架构设计",
    copy: "把已验证的探索策略与记忆机制沉淀进 DCM 的架构规划，形成可复现的设计文档。",
  },
  {
    title: "阶段三 · 模型训练",
    copy: "在小规模验证集上确认架构假设成立，再决定是否扩大参数规模与训练范围。",
  },
];

export default function ModelPage() {
  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="model-hero-title">
        <p className="eyebrow">模型矩阵</p>
        <h1 id="model-hero-title">两条技术路线，一个判断标准。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          一条路线在序列生成上做并行探索与对抗校验，另一条把同样的做法搬进隐状态动力学。两者都要控制算力预算，也都要能如实说出自己有多确定。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="family-title">
        <div className="section-head">
          <p className="eyebrow">当前规划</p>
          <h2 id="family-title">五个模型，覆盖探索与决策。</h2>
          <p className="section-copy">每个条目只标注当前阶段；公开机制停留在方向层，实验细节等论文或发布说明确认后再补充。</p>
          <p>
            <a className="text-link" href="../progress/">查看进展与研究&nbsp;&rarr;</a>
            <a className="text-link pricing-link" href="../pricing/">查看定价&nbsp;&rarr;</a>
          </p>
        </div>
        <div className="card-grid">
          {modelMatrix.map((item) => (
            <article className="card" key={item.name}>
              <p className={`tag ${item.tone}`}>{item.status}</p>
              <h3>{item.name}</h3>
              <p className="model-series">{item.series}</p>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" aria-labelledby="tbm-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">序列生成路线</p>
            <h2 id="tbm-title">结论由对立的分支来怀疑。</h2>
            <p className="section-copy">
              Avenues 与 Terrace 走多分支并行的生成范式：每个请求同时展开成对的探索分支，一部分推进推理，一部分专门尝试推翻它。
            </p>
          </div>
          <div className="card-grid">
            {tbmPillars.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cdm-title">
        <div className="container">
          <div className="split">
            <div className="split-copy">
              <p className="eyebrow">校准决策路线</p>
              <h2 id="cdm-title">不确定时，它说不知道。</h2>
              <p className="lead">
                CDM 是专门输出诚实概率的判别式模型。它要做的是把「不确定」说出来，不让自信盖过它。
              </p>
            </div>
            <div className="stack-cards">
              {cdmTraits.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="arch-title">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">DCM 路线</p>
            <h2 id="arch-title">探索和收敛都在模型内部完成。</h2>
            <p>
              DCM 不依赖外部脚本干预：探索、校验与收敛都发生在模型自己的计算过程里。
            </p>
          </div>
          <figure className="split-visual">
            <InternalVisual />
          </figure>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="roadmap-title">
        <div className="section-head">
          <p className="eyebrow">路线图</p>
          <h2 id="roadmap-title">顺序是验证、设计、训练。</h2>
        </div>
        <div className="timeline">
          {roadmap.map((step) => (
            <div className="timeline-item" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="model-cta-title">
        <div className="contact-panel">
          <div>
            <h2 id="model-cta-title">愿意参与早期验证？</h2>
            <p>Prima 正在收集真实长任务场景和 Beta 反馈，你的输入会直接影响哪些认知能力进入架构规划。</p>
          </div>
          <a className="button primary" href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">
            参与 Prima 调研
          </a>
        </div>
      </section>
    </main>
  );
}
