import { siteConfig } from "../config";
import detailImage from "../../assets/images/detail.jpg";

const pillars = [
  {
    title: "复杂度感知",
    copy: "模型在进入任务前先判断：这是一次轻量查询，还是需要多轮验证、上下文回看与计划修正的长任务。",
  },
  {
    title: "分层记忆",
    copy: "把偏好、项目状态、关键决策和失败教训分层组织，让模型能区分“该记住什么”和“该在什么时候想起什么”。",
  },
  {
    title: "执行一致性",
    copy: "在长任务里保持目标、约束和已确认事实一致，减少因为上下文窗口扩大而出现的连带返工。",
  },
];

const roadmap = [
  {
    title: "阶段一 · 产品验证",
    copy: "通过 Prima 在真实长任务中验证哪些认知能力值得进入模型层，收集可量化的用户证据。",
  },
  {
    title: "阶段二 · 架构设计",
    copy: "把已验证的动态推理与记忆策略沉淀进 OxygenDCM 的架构规划，形成可复现的设计文档。",
  },
  {
    title: "阶段三 · 模型训练",
    copy: "在小规模验证集上训练，确认架构假设成立，再决定是否扩大参数规模与训练范围。",
  },
];

export default function ModelPage() {
  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="model-hero-title">
        <p className="eyebrow">模型规划</p>
        <h1 id="model-hero-title">{siteConfig.model.name}</h1>
        <p className="lead" style={{maxWidth: "56ch"}}>
          {siteConfig.model.parameters} · {siteConfig.model.architecture}
        </p>
        <div className="hero-actions" style={{justifyContent: "flex-start", marginTop: "32px"}}>
          <span className="tag gray">{siteConfig.model.status}</span>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="pillar-title">
        <div className="section-head">
          <p className="eyebrow">三大支柱</p>
          <h2 id="pillar-title">不是“多想几步”，而是让思考变成架构的一部分。</h2>
        </div>
        <div className="card-grid">
          {pillars.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="arch-title">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">架构愿景</p>
            <h2 id="arch-title">在模型层组织注意力、记忆与执行。</h2>
            <p className="lead">
              OxygenDCM N1 不把推理深度作为外挂提示，而是希望模型能自己感知任务复杂度，并在快答、深想、记忆检索和执行校验之间动态切换。
            </p>
            <p>
              这不是一次简单的参数堆叠。它要求注意力机制、记忆结构和执行循环在训练时就长在一起，而不是在推理时拼装。
            </p>
          </div>
          <figure className="split-visual">
            <img
              src={detailImage}
              alt="白色玻璃与光谱折射的抽象视觉，表达模型架构中的动态认知"
              width={1280}
              height={800}
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="roadmap-title">
        <div className="section-head">
          <p className="eyebrow">路线图</p>
          <h2 id="roadmap-title">先验证，再设计，后训练。</h2>
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
            <p>Prima 正在收集真实长任务场景和 Beta 反馈，你的输入会直接影响哪些认知能力进入 OxygenDCM 的架构规划。</p>
          </div>
          <a className="button primary" href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">
            参与 Prima 调研
          </a>
        </div>
      </section>
    </main>
  );
}
