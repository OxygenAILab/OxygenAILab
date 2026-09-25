import { useState } from "react";
import { siteConfig } from "../config";

const tracks = [
  {
    title: "产品共创",
    status: "少量名额",
    copy: "把 Prima 放进一个已经存在的真实工作流，验证它能否减少返工和重复解释。",
    items: ["每周一次短反馈", "可追溯的任务样本", "共同确认优先级"],
  },
  {
    title: "研究协作",
    status: "按场景筛选",
    copy: "围绕长任务失败点整理可复现样本，帮助团队判断哪些能力值得进入模型研究。",
    items: ["任务断点记录", "评测口径讨论", "方向级结论同步"],
  },
  {
    title: "边界探索",
    status: "规划中",
    copy: "面向敏感工作区讨论访问控制、私有上下文和更清晰的部署边界。",
    items: ["权限与保留策略", "私有区适用性", "控制方式反馈"],
  },
];

const statuses = [
  { label: "公开 API", value: "未开放" },
  { label: "早期接入", value: "邀约制" },
  { label: "数据用于训练", value: "默认不使用" },
];

const readiness = [
  {
    title: "一个真实任务",
    copy: "有具体文件、工具、审批人或交付物，而不是一个泛化的演示需求。",
  },
  {
    title: "一条边界说明",
    copy: "说明哪些资料能进入验证、哪些必须脱敏，以及结果可以保留多久。",
  },
  {
    title: "一个失败现场",
    copy: "能指出任务在哪里中断、谁需要补救，以及正确结果本应是什么。",
  },
  {
    title: "一段反馈时间",
    copy: "团队里有人能在验证周期内回答追问并确认结论。",
  },
];

const steps = [
  {
    title: "01 · 表达兴趣",
    copy: `写信到 ${siteConfig.contactEmail}，简单介绍团队、场景和当前瓶颈。我们目前在邀约制阶段，还没有开放自助注册。`,
  },
  {
    title: "02 · 场景对齐",
    copy: "我们会安排一次约 30 分钟的沟通，确认任务是否适合当前验证范围，以及双方期待是否一致。",
  },
  {
    title: "03 · 早期接入",
    copy: "通过筛选的团队会获得早期版本的接入方式与配套说明，并进入共创反馈通道。",
  },
];

const brief = [
  "团队 / 系统：",
  "工作流：",
  "参与人员：",
  "输入与工具：",
  "交付标准：",
  "当前瓶颈：",
  "数据边界：",
].join("\n");

const faqs = [
  {
    q: "现在有公开 API 吗？",
    a: "还没有。产品与模型都处于早期验证阶段，我们优先保证共创团队的使用质量，暂不提供公开自助接入。",
  },
  {
    q: "早期接入会收费吗？",
    a: "现阶段不收费。我们先把有没有用验证清楚，商业化形态会在产品更稳定后再讨论。",
  },
  {
    q: "使用我的数据训练模型吗？",
    a: "不会。共创阶段的数据仅用于服务与产品研究，边界会写入接入协议。",
  },
  {
    q: "什么样的团队最适合？",
    a: "有真实长任务、能提供失败样本，并且有人愿意在验证周期内持续确认结果的团队。",
  },
];

export default function Developers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="dev-hero-title">
        <p className="eyebrow">开发者</p>
        <h1 id="dev-hero-title">和我们一起验证长任务里的真实瓶颈。</h1>
        <p className="lead" style={{ maxWidth: "60ch" }}>
          Oxygen AI 的开发者计划目前采用邀约制。第一批共创团队优先来自真实工作流：有具体任务、明确边界，也愿意告诉我们哪里失败了。
        </p>
        <div className="status-grid" aria-label="当前接入状态">
          {statuses.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="tracks-title">
        <div className="section-head">
          <p className="eyebrow">合作轨道</p>
          <h2 id="tracks-title">三种参与方式。</h2>
          <p className="section-copy">不同轨道都从真实场景开始；我们不会为了演示效果制造伪需求。</p>
        </div>
        <div className="card-grid">
          {tracks.map((item) => (
            <article className="card dev-track" key={item.title}>
              <p className="tag gray">{item.status}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <ul className="dev-track-list">
                {item.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="readiness-title">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">准备清单</p>
            <h2 id="readiness-title">带着这四件事来，效率更高。</h2>
            <p>
              我们不需要正式方案或完整数据。越接近真实工作现场，越容易判断哪些能力值得继续打磨。
            </p>
          </div>
          <div className="stack-cards">
            {readiness.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
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

      <section className="container about-section" aria-labelledby="brief-title">
        <div className="brief-shell">
          <div className="brief-head">
            <div>
              <p className="eyebrow">联系模板</p>
              <h2 id="brief-title">可以用这份提纲写信。</h2>
            </div>
            <button className="button secondary compact" type="button" onClick={copyBrief}>
              {copied ? "已复制" : "复制提纲"}
            </button>
          </div>
          <pre aria-label="联系提纲">{brief}</pre>
          <p className="brief-note">
            把提纲发到 <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>。空缺项可以直接写“还不确定”。
          </p>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="faq-title">
        <div className="section-head">
          <p className="eyebrow">常见问题</p>
          <h2 id="faq-title">在你写信之前。</h2>
        </div>
        <div className="accordion">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div className={isOpen ? "accordion-item open" : "accordion-item"} key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={`dev-faq-button-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`dev-faq-panel-${index}`}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.q}
                  </button>
                </h3>
                <div
                  className="accordion-panel"
                  id={`dev-faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`dev-faq-button-${index}`}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="dev-cta-title">
        <div className="contact-panel">
          <div>
            <h2 id="dev-cta-title">有具体场景就写信吧。</h2>
            <p>介绍你的团队、工作流和当前瓶颈，我们会尽快回复。</p>
          </div>
          <a className="button primary" href={`mailto:${siteConfig.contactEmail}`}>联系我们</a>
        </div>
      </section>
    </main>
  );
}
