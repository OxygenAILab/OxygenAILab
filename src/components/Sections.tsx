import { siteConfig } from "../config";
import detailImage from "../../assets/images/detail.jpg";

const capabilities = [
  {
    title: "复杂度感知",
    copy: "判断一个请求是只需轻响应，还是需要多轮验证、上下文回看与计划修正。",
  },
  {
    title: "分层记忆",
    copy: "把偏好、项目状态、关键决策和失败教训分层组织，减少反复交代。",
  },
  {
    title: "执行一致性",
    copy: "在长任务里保持目标、约束和已确认事实的一致，降低连带修改风险。",
  },
];

const steps = [
  {
    title: "01 · 真实任务",
    copy: "从多文件工程、数据分析和长文档工作出发，观察用户在哪里失去上下文。",
  },
  {
    title: "02 · 产品验证",
    copy: "通过 Prima 的调研、共创与试用反馈，确认哪些认知能力值得进入模型层。",
  },
  {
    title: "03 · 模型内化",
    copy: "把已验证的动态推理与记忆策略沉淀进 OxygenDCM 的架构规划。",
  },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-inner reveal">
          <p className="eyebrow">Oxygen AI</p>
          <h1 id="hero-title">让推理、记忆与执行长在一起。</h1>
          <p className="hero-sub">
            Prima 是我们面向真实长任务的 Agent 产品方向。OxygenDCM N1 是规划中的 35B MoE 模型，围绕内生动态认知架构组织注意力、记忆与执行。
          </p>
          <div className="hero-actions">
            <a className="button primary" href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">
              了解 Prima
            </a>
            <a className="button ghost" href="#model">查看模型规划</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section className="section" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">当前矩阵</p>
          <h2 id="products-title">从产品场景长出模型能力</h2>
          <p className="section-copy">
            Oxygen AI 还在早期阶段。我们不急着把所有方向写成产品，而是先在真实长任务中验证哪些能力真正减少返工。
          </p>
        </div>
        <div className="card-grid reveal">
          <article className="card">
            <p className="tag mint">正在打磨</p>
            <h3>Prima</h3>
            <p>面向长项目、长文档与数据分析的 Agent。它探索自适应推理深度、分层长期记忆和更稳定的任务执行。</p>
            <a className="text-link" href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">
              访问 Prima 官网&nbsp;&rarr;
            </a>
          </article>
          <article className="card">
            <p className="tag gray">规划中</p>
            <h3>{siteConfig.model.name}</h3>
            <p>35B MoE 模型规划，目标是把任务复杂度感知、动态认知深度和长期协作状态放进同一套模型架构。</p>
            <a className="text-link" href="#model">了解规划方向&nbsp;&rarr;</a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Model() {
  return (
    <section className="section alt" id="model" aria-labelledby="model-title">
      <div className="container">
        <div className="split reveal">
          <div className="split-copy">
            <p className="eyebrow">模型规划</p>
            <h2 id="model-title">{siteConfig.model.name}</h2>
            <p className="lead">
              {siteConfig.model.parameters} · {siteConfig.model.architecture}
            </p>
            <p>
              OxygenDCM N1 不是把“多想几步”作为外挂提示，而是希望在模型层感知任务复杂度，并在快答、深想、记忆检索和执行校验之间动态切换。
            </p>
            <div className="spec-grid">
              <div><span>规模</span><strong>{siteConfig.model.parameters}</strong></div>
              <div><span>架构重点</span><strong>动态认知</strong></div>
              <div><span>阶段</span><strong>{siteConfig.model.status}</strong></div>
            </div>
          </div>
          <figure className="split-visual">
            <img
              src={detailImage}
              alt="白色玻璃与光谱折射的抽象视觉，表达模型架构中的动态认知"
              width={1280}
              height={720}
              loading="lazy"
            />
          </figure>
        </div>
        <div className="card-grid reveal">
          {capabilities.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">方法</p>
          <h2 id="approach-title">先减少返工，再扩大能力</h2>
        </div>
        <div className="timeline">
          {steps.map((step) => (
            <div className="timeline-item reveal" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="cta-section" id="about" aria-labelledby="about-title">
      <div className="container reveal" style={{textAlign: "center"}}>
        <p className="eyebrow">关于 Oxygen AI</p>
        <h2 id="about-title">我们在早期，所以更重视真实反馈。</h2>
        <p className="section-copy">
          Oxygen AI 目前专注少数方向：Prima、用户共创，以及 OxygenDCM 的架构研究。我们不会把规划中的能力描述成已经可用。
        </p>
        <div className="hero-actions">
          <a className="button primary" href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">
            参与 Prima Beta 调研
          </a>
          <a className="button ghost" href={`mailto:${siteConfig.contactEmail}`}>联系我们</a>
        </div>
      </div>
    </section>
  );
}
