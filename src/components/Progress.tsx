import { siteConfig } from "../config";
import { modelMatrix, modelRoutes } from "../data/models";

const directions = [
  {
    title: "复杂度感知",
    copy: "判断任务是轻量查询，还是需要多轮验证、上下文回看与计划修正的长任务。",
  },
  {
    title: "分层记忆",
    copy: "把项目状态、关键决策和失败教训分层组织，让重要信息在合适时机可用。",
  },
  {
    title: "执行一致性",
    copy: "在多轮长任务里保持目标、约束和已确认事实一致，减少重复解释与返工。",
  },
];

const records = [
  {
    date: "2026.09",
    title: "长任务 Agent 的自适应推理与分层记忆",
    status: "论文准备中",
    note: "外部论文发布后，这里会补充公开链接和简短说明。",
  },
  {
    date: "2026.09",
    title: "Prima 长任务共创调研",
    status: "进行中",
    note: "围绕真实工作流收集任务断点、记忆需求和执行一致性反馈。",
  },
];

export default function Progress() {
  return (
    <main id="main" className="about-page progress-page">
      <section className="container about-hero" aria-labelledby="progress-hero-title">
        <p className="eyebrow">模型进展与研究</p>
        <h1 id="progress-hero-title">每个模型只报告当前阶段。</h1>
        <p className="lead" style={{ maxWidth: "60ch" }}>
          这里汇总研究中的模型方向、规划中的模型线，以及正在推进的研究记录。没有公开论文的条目不会展开技术细节。
        </p>
        <nav className="progress-index" aria-label="页面分区">
          <a href="#model-progress">模型进展</a>
          <a href="#research-directions">研究方向</a>
          <a href="#research-records">研究记录</a>
        </nav>
      </section>

      <section id="model-progress" className="container about-section" aria-labelledby="model-progress-title">
        <div className="section-head">
          <p className="eyebrow">模型进展</p>
          <h2 id="model-progress-title">三条基础路线，五个模型。</h2>
        </div>
        <div className="progress-route-grid">
          {modelRoutes.map((route) => {
            const models = modelMatrix.filter((item) => item.route === route.id);

            return (
              <article className="progress-route-card" key={route.id}>
                <div className="progress-route-head">
                  <h3>{route.label}</h3>
                  <p className="progress-route-basis">{route.basis}</p>
                  <p>{route.summary}</p>
                </div>
                <ul className="progress-model-list">
                  {models.map((item) => (
                    <li key={item.name}>
                      <div>
                        <p className="progress-model-name">{item.name}</p>
                        <p className="progress-model-focus">{item.focus}</p>
                      </div>
                      <span className={`tag ${item.tone}`}>{item.status}</span>
                    </li>
                  ))}
                </ul>
                <div className="progress-research">
                  <p>
                    <span>研究目标</span>
                    {route.objective}
                  </p>
                  <p>
                    <span>公开边界</span>
                    {route.boundary}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="research-directions" className="container about-section" aria-labelledby="research-directions-title">
        <div className="section-head">
          <p className="eyebrow">研究方向</p>
          <h2 id="research-directions-title">研究围绕长任务连续性展开。</h2>
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

      <section id="research-records" className="container about-section" aria-labelledby="research-records-title">
        <div className="section-head">
          <p className="eyebrow">研究记录</p>
          <h2 id="research-records-title">可公开的进展会放在这里。</h2>
        </div>
        <ul className="progress-record-list">
          {records.map((item) => (
            <li key={item.title}>
              <div className="progress-record-main">
                <p className="progress-record-date">{item.date}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </div>
              <span className="tag gray">{item.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container about-section" aria-labelledby="progress-cta-title">
        <div className="contact-panel">
          <div>
            <h2 id="progress-cta-title">把真实场景交给我们验证。</h2>
            <p>Prima 调研收集长任务中的断点和期望，验证结果会决定哪些方向进入模型规划。</p>
          </div>
          <a className="button primary" href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">
            参与 Prima 调研
          </a>
        </div>
      </section>
    </main>
  );
}
