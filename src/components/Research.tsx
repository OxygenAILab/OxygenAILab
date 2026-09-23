import detailImage from "../../assets/images/detail.jpg";

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
    title: "产品先验证",
    copy: "先用 Prima 在真实工作流中验证哪些认知能力有价值，再把稳定结论带入模型架构研究。",
  },
  {
    title: "诚实标注阶段",
    copy: "探索中的架构、未上线功能和用户数据边界都会明确标注，不做不可验证的宣传。",
  },
  {
    title: "可复现优先",
    copy: "结论必须能沉淀为可复现的设计文档与评测协议，而不是停留在一次性的演示里。",
  },
];

export default function Research() {
  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="research-hero-title">
        <p className="eyebrow">研究</p>
        <h1 id="research-hero-title">我们研究长任务里的连续性。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          Oxygen AI 的研究围绕一个命题展开：让系统在真实的长任务中保持连续、可靠与诚实。产品与模型共同服务这个命题。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="directions-title">
        <div className="section-head">
          <p className="eyebrow">研究方向</p>
          <h2 id="directions-title">三个相互支撑的方向。</h2>
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
            <h2 id="split-title">从产品证据到架构假设。</h2>
            <p>
              我们不直接从论文出发设计模型。每一轮架构迭代之前，先回答两个问题：真实用户在哪里失去上下文？哪些验证过的策略值得进入模型层？证据不足时，宁可慢。
            </p>
          </div>
          <figure className="split-visual">
            <img
              src={detailImage}
              alt="白色玻璃与光谱折射的抽象视觉，表达研究方法中的层层验证"
              width={1280}
              height={800}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="principles-title">
        <div className="section-head">
          <p className="eyebrow">研究原则</p>
          <h2 id="principles-title">约束让我们更自由。</h2>
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
