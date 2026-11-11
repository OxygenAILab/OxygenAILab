import { useState } from "react";
import { siteConfig } from "../config";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";

type Track = { title: Localized; status: Localized; copy: Localized; items: Localized[] };
type Requirement = { title: Localized; copy: Localized };
type Step = { title: Localized; copy: Localized };
type Faq = { q: Localized; a: Localized };

const tracks: Track[] = [
  {
    title: { zh: "产品共创", en: "Product co-creation" },
    status: { zh: "长期开放", en: "Open ongoing" },
    copy: {
      zh: "把 Prima 放进已经存在的真实工作流，验证它能否减少返工与重复解释。",
      en: "Put Prima into an existing workflow and test whether it reduces rework and repeated explanation.",
    },
    items: [
      { zh: "真实任务样本", en: "Real task samples" },
      { zh: "每周一次反馈", en: "One feedback session each week" },
      { zh: "共同确认优先级", en: "Shared priority reviews" },
    ],
  },
  {
    title: { zh: "研究协作", en: "Research collaboration" },
    status: { zh: "按课题筛选", en: "Topic-based selection" },
    copy: {
      zh: "围绕长任务失败点整理可复现样本，帮助团队判断哪些能力值得进入模型研究。",
      en: "Organize reproducible samples around long-task failures to decide which capabilities should enter model research.",
    },
    items: [
      { zh: "任务断点记录", en: "Task-break records" },
      { zh: "评测口径讨论", en: "Evaluation-method reviews" },
      { zh: "方向级结论同步", en: "Direction-level findings" },
    ],
  },
];

const requirements: Requirement[] = [
  {
    title: { zh: "中文（如有）", en: "Chinese (if available)" },
    copy: {
      zh: "如果你有中文材料，请一并附上；没有中文材料不影响申请。",
      en: "Include Chinese material when available; not having it does not block an application.",
    },
  },
  {
    title: { zh: "英文全名", en: "Full name in English" },
    copy: {
      zh: "请在邮件正文中写明你的英文全名。",
      en: "State your full name in English in the email body.",
    },
  },
  {
    title: { zh: "简短自我介绍", en: "Brief introduction" },
    copy: {
      zh: "说明你想参与的岗位、相关经历，以及你希望解决的问题。",
      en: "Describe the role you want, relevant experience, and the problem you want to solve.",
    },
  },
  {
    title: { zh: "简历", en: "Resume" },
    copy: {
      zh: "附上最新简历；GitHub、论文或项目链接可以放在简历或邮件正文中。",
      en: "Attach your latest resume; GitHub, paper, or project links can go in the resume or email.",
    },
  },
  {
    title: { zh: "作品集", en: "Portfolio" },
    copy: {
      zh: "提供能代表你能力的作品集、项目清单或案例说明。",
      en: "Share a portfolio, project list, or case notes that represent your work.",
    },
  },
];

const steps: Step[] = [
  {
    title: { zh: "01 · 发送申请", en: "01 · Send application" },
    copy: {
      zh: "CN 岗位发送至 hr001@oxygenai.top，Lab 岗位发送至 lab@oxygenai.top。",
      en: "Send CN roles to hr001@oxygenai.top and Lab roles to lab@oxygenai.top.",
    },
  },
  {
    title: { zh: "02 · 初步沟通", en: "02 · Initial conversation" },
    copy: {
      zh: "我们会根据岗位匹配度安排一轮沟通，确认方向、经验和时间预期。",
      en: "We schedule an initial conversation based on role fit to align on direction, experience, and timing.",
    },
  },
  {
    title: { zh: "03 · 面试与双向选择", en: "03 · Interviews and mutual fit" },
    copy: {
      zh: "围绕真实问题展开讨论，不用背答案；双方都确认合适后再进入下一步。",
      en: "Discussions center on real problems rather than memorized answers; both sides confirm fit before moving ahead.",
    },
  },
];

const faqs: Faq[] = [
  {
    q: { zh: "现在有哪些职位？", en: "Which roles are open?" },
    a: {
      zh: "CN 总部开放产品、后端、平台/API、前端、美术与建模、商务/销售、客户成功和技术运营；Lab 开放模型负责人、训练/推理和评测/对齐岗位。",
      en: "The CN headquarters is hiring across product, backend, platform/API, frontend, art/modeling, sales, customer success, and technical operations. The Lab is hiring a model lead, training/inference engineer, and evaluation/alignment engineer.",
    },
  },
  {
    q: { zh: "没有完全匹配的职位怎么办？", en: "What if no role matches exactly?" },
    a: {
      zh: "仍然可以投递。请在邮件里说明最适合你的方向，我们会按 CN 与 Lab 的实际需求判断。",
      en: "You can still apply. Explain the direction that fits you best; we will route it against current CN and Lab needs.",
    },
  },
  {
    q: { zh: "远程办公如何安排？", en: "How does remote work work?" },
    a: {
      zh: "CN 岗位在 27Q2–27Q4 远程办公，27Q4 起需要为到杭州公司报告做准备；Lab 从 28Q1 起按意愿选择 CN/SG，此前远程。",
      en: "CN roles are remote from 27Q2 through 27Q4, with preparation for reporting at the Hangzhou company from 27Q4. Lab roles choose CN or SG from 28Q1 and are remote before that.",
    },
  },
  {
    q: { zh: "申请邮件需要包含什么？", en: "What should the application email include?" },
    a: {
      zh: "中文材料（如有）、英文全名、简短自我介绍、简历和作品集。",
      en: "Chinese material if available, your full name in English, a brief introduction, a resume, and a portfolio.",
    },
  },
];

export default function Developers() {
  const { locale } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main id="main" className="about-page developer-page">
      <section className="container about-hero" aria-labelledby="dev-hero-title">
        <p className="eyebrow">{locale === "zh" ? "加入我们" : "Careers"}</p>
        <h1 id="dev-hero-title">
          {locale === "zh" ? "可怕的不是犯错，而是不敢试错。" : "The real risk is not making mistakes. It is being afraid to try."}
        </h1>
        <p className="lead" style={{ maxWidth: "56ch" }}>
          {locale === "zh" ? "加入 OxygenAI，与我们一起探索、创造。" : "Join OxygenAI to explore and build with us."}
        </p>
      </section>

      <section className="container about-section" aria-labelledby="tracks-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "参与方式" : "Ways to join"}</p>
          <h2 id="tracks-title">{locale === "zh" ? "两种参与方式。" : "Two ways to participate."}</h2>
          <p className="section-copy">
            {locale === "zh" ? "找到合适你的落点。" : "Find the place where you can contribute best."}
          </p>
        </div>
        <div className="card-grid dev-track-grid">
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

      <section className="container about-section" aria-labelledby="requirements-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "申请材料" : "Application materials"}</p>
          <h2 id="requirements-title">{locale === "zh" ? "一封邮件，说明你是谁。" : "One email that shows who you are."}</h2>
          <p className="section-copy">
            {locale === "zh"
              ? "我们接受申请邮件的要求是：中文（如有）、英文全名、简短自我介绍、简历和作品集。"
              : "Your application email should include Chinese material if available, your full name in English, a brief introduction, a resume, and a portfolio."}
          </p>
        </div>
        <div className="application-requirements">
          {requirements.map((item, index) => (
            <article className="requirement-row" key={item.title.en}>
              <span className="requirement-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title[locale]}</h3>
                <p>{item.copy[locale]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-section" aria-labelledby="steps-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "申请流程" : "Application process"}</p>
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

      <section className="container about-section" aria-labelledby="jobs-entry-title">
        <div className="jobs-entry">
          <div className="jobs-entry-copy">
            <p className="eyebrow">{locale === "zh" ? "职业机会" : "Open roles"}</p>
            <h2 id="jobs-entry-title">{locale === "zh" ? "查看当前开放职位。" : "Explore current openings."}</h2>
            <p>
              {locale === "zh"
                ? "CN 总部开放 8 个方向，OxygenAI Lab 开放 3 个研究方向。进入职位列表后可以按团队筛选，也可以直接搜索岗位关键词。"
                : "The CN headquarters has eight hiring directions and OxygenAI Lab has three research roles. Filter by team or search by role in the job list."}
            </p>
            <div className="jobs-entry-meta">
              <span>CN · Hangzhou</span>
              <span>OxygenAI Lab · CN / SG</span>
              <span>{locale === "zh" ? "共 11 个职位" : "11 roles"}</span>
            </div>
          </div>
          <div className="jobs-entry-actions">
            <a className="button primary" href="../careers/">
              {locale === "zh" ? "查看职位列表" : "View open roles"}
            </a>
            <a className="text-link" href={`mailto:${siteConfig.hrEmail}`}>{siteConfig.hrEmail}</a>
            <a className="text-link" href={`mailto:${siteConfig.labEmail}`}>{siteConfig.labEmail}</a>
          </div>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="faq-title">
        <div className="section-head">
          <p className="eyebrow">{locale === "zh" ? "常见问题" : "FAQ"}</p>
          <h2 id="faq-title">{locale === "zh" ? "投递之前。" : "Before you apply."}</h2>
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
            <h2 id="dev-cta-title">{locale === "zh" ? "没有看到完全匹配的职位？" : "No exact match yet?"}</h2>
            <p>
              {locale === "zh"
                ? "仍然可以写信给我们。说明你想解决的问题和最适合的方向，我们会帮你转接到 CN 或 Lab。"
                : "Write to us anyway. Tell us what you want to solve and where you fit best; we will route you to CN or the Lab."}
            </p>
          </div>
          <a className="button primary" href={`mailto:${siteConfig.hrEmail}`}>
            {locale === "zh" ? "联系招聘团队" : "Contact recruiting"}
          </a>
        </div>
      </section>
    </main>
  );
}
