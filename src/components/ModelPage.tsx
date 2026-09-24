import { siteConfig } from "../config";
import detailImage from "../../assets/images/detail.jpg";

const tbmPillars = [
  {
    title: "并行探索",
    copy: "同一个请求同时展开多条互不干扰的探索路径，而不是沿单一线索一路推到底。",
  },
  {
    title: "对抗校验",
    copy: "让一部分分支专门去证伪结论。分歧被显式保留，而不是被平均掉。",
  },
  {
    title: "预算内收敛",
    copy: "探索设预算上限，在给定预算内收敛到可交付的结论，而不是无限推演。",
  },
];

const cdmTraits = [
  {
    title: "即时判断",
    copy: "面向需要即时判断的场景，直接给出结论，而不是逐字生成。",
  },
  {
    title: "诚实概率",
    copy: "同时给出客观概率与主观笃定度；两者明显不一致时主动标记，而不是把自信当成正确。",
  },
  {
    title: "拒答即能力",
    copy: "拒答与转交和正常回答受同一套标准约束：说不确定，也是一种能力。",
  },
];

const family = [
  {
    name: "OxygenTBM Avenues",
    series: "序列生成 · 多模态",
    status: "研究中",
    tone: "gray",
    copy: "面向视觉与文本交织任务的多模态探索模型，以序列生成为基底。",
  },
  {
    name: "OxygenTBM Terrace",
    series: "序列生成 · 文本",
    status: "研究中",
    tone: "mint",
    copy: "纯文本场景的探索模型。同源架构的轻量变体，用于在更低成本下验证同一套探索策略。",
  },
  {
    name: "OxygenDCM N1",
    series: "隐状态动力学 · 35B MoE",
    status: "规划中",
    tone: "gray",
    copy: "内生动态认知模型。目标是在模型内部完成探索、校验与收敛，而不是靠外部脚本编排。",
  },
  {
    name: "OxygenCDM T1",
    series: "校准决策 · 文本",
    status: "规划中",
    tone: "mint",
    copy: "文本决策模型。为上游系统提供可审计、可追溯的概率判断层。",
  },
  {
    name: "OxygenCDM V1",
    series: "校准决策 · 视觉",
    status: "规划中",
    tone: "mint",
    copy: "视觉决策模型。把校准框架扩展到视觉判别任务，与 T1 保持一致的判断口径。",
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
        <h1 id="model-hero-title">两条正交的技术路线，同一套认知纪律。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          一条路线在序列生成上做并行探索与对抗校验，另一条把同样的认知纪律放到隐状态动力学里。两者共享算力预算意识与诚实输出原则。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="family-title">
        <div className="section-head">
          <p className="eyebrow">当前规划</p>
          <h2 id="family-title">五个模型，覆盖探索与决策。</h2>
        </div>
        <div className="card-grid">
          {family.map((item) => (
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
            <h2 id="tbm-title">让分支替你怀疑结论。</h2>
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
                CDM 是专门输出诚实概率的判别式模型，目标是让「不确定」被准确表达，而不是被自信掩盖。
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
            <h2 id="arch-title">认知循环长在模型里。</h2>
            <p>
              DCM 不依赖外部脚本干预，目标是让探索、校验与收敛发生在模型自身的计算过程里，而不是靠外部编排。
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
