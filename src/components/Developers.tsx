import { useState } from "react";
import { siteConfig } from "../config";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";

type Track = { title: Localized; status: Localized; copy: Localized; items: Localized[] };
type Item = { title: Localized; copy: Localized };
type Faq = { q: Localized; a: Localized };

const tracks: Track[] = [
  {
    title: { zh: "产品共创", en: "Product co-creation" },
    status: { zh: "少量名额", en: "Limited openings" },
    copy: {
      zh: "把 Prima 放进一个已经存在的真实工作流，验证它能否减少返工和重复解释。",
      en: "Put Prima into an existing real workflow and test whether it reduces rework and repeated explanations.",
    },
    items: [
      { zh: "每周一次短反馈", en: "One short feedback session each week" },
      { zh: "可追溯的任务样本", en: "Traceable task samples" },
      { zh: "共同确认优先级", en: "Confirm priorities together" },
    ],
  },
  {
    title: { zh: "研究协作", en: "Research collaboration" },
    status: { zh: "按场景筛选", en: "Scenario-based selection" },
    copy: {
      zh: "围绕长任务失败点整理可复现样本，帮助团队判断哪些能力值得进入模型研究。",
      en: "Organize reproducible samples around long-task failures to decide which capabilities deserve model research.",
    },
    items: [
      { zh: "任务断点记录", en: "Task-break records" },
      { zh: "评测口径讨论", en: "Evaluation-metric discussion" },
      { zh: "方向级结论同步", en: "Direction-level conclusions" },
    ],
  },
  {
    title: { zh: "边界探索", en: "Boundary exploration" },
    status: { zh: "规划中", en: "Planned" },
    copy: {
      zh: "面向敏感工作区讨论访问控制、私有上下文和更清晰的部署边界。",
      en: "Discuss access control, private context, and clearer deployment boundaries for sensitive workspaces.",
    },
    items: [
      { zh: "权限与保留策略", en: "Permission and retention policies" },
      { zh: "私有区适用性", en: "Private-zone fit" },
      { zh: "控制方式反馈", en: "Control-method feedback" },
    ],
  },
];

const statuses: Array<{ label: Localized; value: Localized }> = [
  { label: { zh: "公开 API", en: "Public API" }, value: { zh: "未开放", en: "Not open" } },
  { label: { zh: "早期接入", en: "Early access" }, value: { zh: "邀约制", en: "Invitation only" } },
  { label: { zh: "数据用于训练", en: "Data used for training" }, value: { zh: "默认不使用", en: "Not by default" } },
];

const readiness: Item[] = [
  {
    title: { zh: "一个真实任务", en: "One real task" },
    copy: {
      zh: "有具体文件、工具、审批人或交付物，而不是一个泛化的演示需求。",
      en: "Concrete files, tools, approvers, or deliverables, not a generic demo requirement.",
    },
  },
  {
    title: { zh: "一条边界说明", en: "A boundary statement" },
    copy: {
      zh: "说明哪些资料能进入验证、哪些必须脱敏，以及结果可以保留多久。",
      en: "State what can enter validation, what must be anonymized, and how long results may be retained.",
    },
  },
  {
    title: { zh: "一个失败现场", en: "A failure scene" },
    copy: {
      zh: "能指出任务在哪里中断、谁需要补救，以及正确结果本应是什么。",
      en: "Show where the task broke, who had to remediate it, and what the correct result should have been.",
    },
  },
  {
    title: { zh: "一段反馈时间", en: "A feedback window" },
    copy: {
      zh: "团队里有人能在验证周期内回答追问并确认结论。",
      en: "Someone on the team can answer follow-ups and confirm conclusions during the validation window.",
    },
  },
];

const steps: Item[] = [
  {
    title: { zh: "01 · 表达兴趣", en: "01 · Express interest" },
    copy: {
      zh: `写信到 ${siteConfig.contactEmail}，简单介绍团队、场景和当前瓶颈。我们目前在邀约制阶段，还没有开放自助注册。`,
      en: `Email ${siteConfig.contactEmail} with a short introduction to your team, scenario, and bottleneck. We are invitation-only and do not offer self-service registration yet.`,
    },
  },
  {
    title: { zh: "02 · 场景对齐", en: "02 · Align on scenario" },
    copy: {
      zh: "我们会安排一次约 30 分钟的沟通，确认任务是否适合当前验证范围，以及双方期待是否一致。",
      en: "We schedule a 30-minute conversation to confirm task fit and whether expectations align.",
    },
  },
  {
    title: { zh: "03 · 早期接入", en: "03 · Early access" },
    copy: {
      zh: "通过筛选的团队会获得早期版本的接入方式与配套说明，并进入共创反馈通道。",
      en: "Selected teams receive early-version access instructions and join the co-creation feedback channel.",
    },
  },
];

const brief = {
  zh: ["团队 / 系统：", "工作流：", "参与人员：", "输入与工具：", "交付标准：", "当前瓶颈：", "数据边界："].join("\n"),
  en: ["Team / system:", "Workflow:", "Participants:", "Inputs and tools:", "Delivery criteria:", "Current bottleneck:", "Data boundary:"].join("\n"),
};

const faqs: Faq[] = [
  {
    q: { zh: "现在有公开 API 吗？", en: "Is there a public API now?" },
    a: {
      zh: "还没有。产品与模型都处于早期验证阶段，我们优先保证共创团队的使用质量，暂不提供公开自助接入。",
      en: "Not yet. Products and models are early; we prioritize co-creation quality and do not offer public self-service access yet.",
    },
  },
  {
    q: { zh: "早期接入会收费吗？", en: "Is early access paid?" },
    a: {
      zh: "现阶段不收费。我们先把有没有用验证清楚，商业化形态会在产品更稳定后再讨论。",
      en: "Not at this stage. We first validate usefulness; commercialization is discussed after the product stabilizes.",
    },
  },
  {
    q: { zh: "使用我的数据训练模型吗？", en: "Do you train on my data?" },
    a: {
      zh: "不会。共创阶段的数据仅用于服务与产品研究，边界会写入接入协议。",
      en: "No. Co-creation data is used only for service and product research; boundaries are written into access agreements.",
    },
  },
  {
    q: { zh: "什么样的团队最适合？", en: "Which teams fit best?" },
    a: {
      zh: "有真实长任务、能提供失败样本，并且有人愿意在验证周期内持续确认结果的团队。",
      en: "Teams with real long tasks, failure samples, and someone available to confirm results during validation.",
    },
  },
];

export default function Developers() {
  const { locale } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief[locale]);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main id="main" className="about-page">
      <section className="container about-hero" aria-labelledby="dev-hero-title">
        <p className="eyebrow">{locale === "zh" ? "开发者" : "Developers"}</p>
        <h1 id="dev-hero-title">{locale === "zh" ? "和我们一起验证长任务里的真实瓶颈。" : "Validate real long-task bottlenecks with us."}</h1>
        <p className="lead" style={{ maxWidth: "60ch" }}>
          {locale === "zh"
            ? "Oxygen AI 的开发者计划目前采用邀约制。第一批共创团队优先来自真实工作流：有具体任务、明确边界，也愿意告诉我们哪里失败了。"
            : "Oxygen AI's developer program is invitation-only. The first co-creation teams come from real workflows with concrete tasks, clear boundaries, and willingness to report failures."}
        </p>
        <div className="status-grid" aria-label={locale === "zh" ? "当前接入状态" : "Current access status"}>
          {statuses.map((item) => (
            <div key={item.label.en}>
              <span>{item.label[locale]}</span>
              <strong>{item.value[locale]}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="tracks-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "合作轨道" : "Tracks"}</p>
          <h2 id="tracks-title">{locale === "zh" ? "三种参与方式。" : "Three ways to participate."}</h2>
          <p className="section-copy">
            {locale === "zh" ? "不同轨道都从真实场景开始；我们不会为了演示效果制造伪需求。" : "Each track starts in a real scenario; we do not manufacture fake requirements for demos."}
          </p>
        </div>
        <div className="card-grid">
          {tracks.map((item) => (
            <article className="card dev-track" key={item.title.en}>
              <p className="tag gray">{item.status[locale]}</p>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
              <ul className="dev-track-list">
                {item.items.map((entry) => (
                  <li key={entry.en}>{entry[locale]}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="readiness-title">
        <div className="split">
          <div className="split-copy">
            <p className="eyebrow">{locale === "zh" ? "准备清单" : "Readiness checklist"}</p>
            <h2 id="readiness-title">{locale === "zh" ? "带着这四件事来，效率更高。" : "Bring these four things and we can move faster."}</h2>
            <p>
              {locale === "zh"
                ? "我们不需要正式方案或完整数据。越接近真实工作现场，越容易判断哪些能力值得继续打磨。"
                : "We do not need formal plans or complete data. The closer to real work, the easier it is to judge what to refine."}
            </p>
          </div>
          <div className="stack-cards">
            {readiness.map((item) => (
              <article className="card" key={item.title.en}>
                <h3>{item.title[locale]}</h3>
                <p>{item.copy[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="steps-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "接入流程" : "Access process"}</p>
          <h2 id="steps-title">{locale === "zh" ? "三步开始。" : "Start in three steps."}</h2>
        </div>
        <div className="timeline">
          {steps.map((item) => (
            <div className="timeline-item" key={item.title.en}>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="brief-title">
        <div className="brief-shell">
          <div className="brief-head">
            <div>
              <p className="eyebrow">{locale === "zh" ? "联系模板" : "Contact template"}</p>
              <h2 id="brief-title">{locale === "zh" ? "可以用这份提纲写信。" : "Use this outline to write to us."}</h2>
            </div>
            <button className="button secondary compact" type="button" onClick={copyBrief}>
              {copied ? (locale === "zh" ? "已复制" : "Copied") : (locale === "zh" ? "复制提纲" : "Copy outline")}
            </button>
          </div>
          <pre aria-label={locale === "zh" ? "联系提纲" : "Contact outline"}>{brief[locale]}</pre>
          <p className="brief-note">
            {locale === "zh" ? "把提纲发到 " : "Send the outline to "}
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            {locale === "zh" ? "。空缺项可以直接写“还不确定”。" : ". It is fine to write \"not sure yet\" for missing items."}
          </p>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="faq-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "常见问题" : "FAQ"}</p>
          <h2 id="faq-title">{locale === "zh" ? "在你写信之前。" : "Before you write."}</h2>
        </div>
        <div className="accordion">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div className={isOpen ? "accordion-item open" : "accordion-item"} key={item.q.en}>
                <h3>
                  <button
                    type="button"
                    id={`dev-faq-button-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`dev-faq-panel-${index}`}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.q[locale]}
                  </button>
                </h3>
                <div
                  className="accordion-panel"
                  id={`dev-faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`dev-faq-button-${index}`}
                  hidden={!isOpen}
                >
                  <p>{item.a[locale]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="dev-cta-title">
        <div className="contact-panel">
          <div>
            <h2 id="dev-cta-title">{locale === "zh" ? "有具体场景就写信吧。" : "Write to us with a concrete scenario."}</h2>
            <p>
              {locale === "zh" ? "介绍你的团队、工作流和当前瓶颈，我们会尽快回复。" : "Introduce your team, workflow, and current bottleneck; we will reply as soon as possible."}
            </p>
          </div>
          <a className="button primary" href={`mailto:${siteConfig.contactEmail}`}>{locale === "zh" ? "联系我们" : "Contact us"}</a>
        </div>
      </section>
    </main>
  );
}
