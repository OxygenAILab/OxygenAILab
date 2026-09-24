import { siteConfig } from "../config";

const steps = [
  {
    title: "01 · 表达兴趣",
    copy: `写信到 ${siteConfig.contactEmail}，简单介绍你的团队与使用场景。我们目前在邀约制阶段，还没有开放自助注册。`,
  },
  {
    title: "02 · 场景对齐",
    copy: "我们会安排一次 30 分钟的沟通，确认你的场景是否适合当前的验证范围，以及双方期待是否一致。",
  },
  {
    title: "03 · 早期接入",
    copy: "通过筛选的团队会获得早期版本的接入方式与配套文档，并进入共创反馈通道。",
  },
];

const faqs = [
  {
    q: "现在有公开的 API 吗？",
    a: "还没有。产品与模型都处于早期验证阶段，我们优先保证共创团队的使用质量，暂不提供公开自助接入。",
  },
  {
    q: "早期接入会收费吗？",
    a: "早期接入阶段不收费。我们希望先验证价值，再讨论商业化的形态。",
  },
  {
    q: "使用我的数据训练模型吗？",
    a: "不会。共创阶段的数据仅用于服务与产品研究，边界会写入接入协议。",
  },
];

export default function Developers() {
  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="dev-hero-title">
        <p className="eyebrow">开发者</p>
        <h1 id="dev-hero-title">和我们一起验证下一代 Agent。</h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          Oxygen AI 的开发者计划目前采用邀约制。我们希望第一批共创团队来自真实的长任务场景，而不是为了尝鲜。
        </p>
      </section>

      <section className="container about-section" aria-labelledby="steps-title">
        <div className="section-head">
          <p className="eyebrow">接入流程</p>
          <h2 id="steps-title">三步开始。</h2>
        </div>
        <div className="timeline">
          {steps.map((item) => (
            <div className="timeline-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="faq-title">
        <div className="section-head">
          <p className="eyebrow">常见问题</p>
          <h2 id="faq-title">在你写信之前。</h2>
        </div>
        <div className="stack-cards">
          {faqs.map((item) => (
            <article className="card" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="dev-cta-title">
        <div className="contact-panel">
          <div>
            <h2 id="dev-cta-title">准备好开始了吗？</h2>
            <p>写信介绍你的团队与场景，我们会尽快回复。</p>
          </div>
          <a className="button primary" href={`mailto:${siteConfig.contactEmail}`}>联系我们</a>
        </div>
      </section>
    </main>
  );
}
