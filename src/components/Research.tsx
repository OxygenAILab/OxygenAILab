import { ContinuityVisual } from "./SplitArtwork";

const directions = [
  {
    title: "复杂度感知",
    copy: "在进入任务前判断这是一次轻量查询，还是需要多轮验证、上下文回看与计划修正的长任务。感知结果是后续所有资源分配的依据。",
  },
  {
    title: "分层记忆",
    copy: "把偏好、项目状态、关键决策和失败教训分层组织。记忆的价值不在存储量，而在「该记住什么」与「该在什么时候想起什么」的判断。",
  },
  {
    title: "执行一致性",
    copy: "在长任务里保持目标、约束和已确认事实的一致，减少因上下文窗口扩大而出现的连带返工。这是我们从用户调研里听到的最高频痛点。",
  },
];

const principles = [
  {
    title: "证据先于假设",
    copy: "架构假设必须由用户证据触发。证据不足时，这一轮就停在这里。",
  },
  {
    title: "可复现优先",
    copy: "结论要能落成可复现的设计文档和评测协议，不能停在一次演示上。",
  },
  {
    title: "阶段写清楚",
    copy: "研究中就是研究中，规划中就是规划中，页面上不混着说。",
  },
];

export default function Research() {
  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="research-hero-title">
        <p className="eyebrow">研究</p>
        <h1 id="research-hero-title">我们研究长任务里的连续性。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          Oxygen AI 的研究只有一条主线：让系统在长任务里保持连续、可靠，不知道的时候会说不知道。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="directions-title">
        <div className="section-head">
          <p className="eyebrow">研究方向</p>
          <h2 id="directions-title">这三件事得一起做。</h2>
        </div>
        <div className="card-grid">
          {directions.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="split-title">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">方法</p>
            <h2 id="split-title">从用户掉线的地方开始。</h2>
            <p>
              每一轮架构迭代之前，先回答两个问题：真实用户在哪里失去上下文，哪些验证过的策略值得进模型层。答不上来就先不动架构。
            </p>
          </div>
          <figure className="split-visual">
            <ContinuityVisual />
          </figure>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="principles-title">
        <div className="section-head">
          <p className="eyebrow">研究原则</p>
          <h2 id="principles-title">我们给自己定的规矩。</h2>
        </div>
        <div className="three-grid">
          {principles.map((item) => (
            <article className="feature-tile" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
