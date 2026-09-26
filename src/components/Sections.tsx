import { siteConfig } from "../config";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";
import HeroArtwork from "./HeroArtwork";
import { DepthVisual } from "./SplitArtwork";

type Item = { title: Localized; copy: Localized };

const capabilities: Item[] = [
  {
    title: { zh: "复杂度感知", en: "Complexity sensing" },
    copy: {
      zh: "判断一个请求是只需轻响应，还是需要多轮验证、上下文回看与计划修正。",
      en: "Determine whether a request needs a light response or multi-round verification, context review, and plan correction.",
    },
  },
  {
    title: { zh: "分层记忆", en: "Layered memory" },
    copy: {
      zh: "把偏好、项目状态、关键决策和失败教训分层组织，减少反复交代。",
      en: "Organize preferences, project state, decisions, and lessons in layers to reduce repeated explanations.",
    },
  },
  {
    title: { zh: "执行一致性", en: "Execution consistency" },
    copy: {
      zh: "在长任务里保持目标、约束和已确认事实的一致，降低连带修改风险。",
      en: "Keep goals, constraints, and confirmed facts aligned in long tasks to reduce collateral change risk.",
    },
  },
];

const steps: Item[] = [
  {
    title: { zh: "01 · 真实任务", en: "01 · Real tasks" },
    copy: {
      zh: "从多文件工程、数据分析和长文档工作出发，观察用户在哪里失去上下文。",
      en: "Start with multi-file engineering, data analysis, and long documents to see where users lose context.",
    },
  },
  {
    title: { zh: "02 · 产品验证", en: "02 · Product validation" },
    copy: {
      zh: "通过 Prima 的调研、共创与试用反馈，确认哪些认知能力值得进入模型层。",
      en: "Use Prima research, co-creation, and trial feedback to confirm which cognitive capabilities belong at the model layer.",
    },
  },
  {
    title: { zh: "03 · 模型内化", en: "03 · Model internalization" },
    copy: {
      zh: "验证出结论之后，再看哪些该写进 OxygenDCM 的架构规划。",
      en: "After validation, decide what belongs in OxygenDCM's architecture plan.",
    },
  },
];

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroArtwork />
      <div className="container">
        <div className="hero-inner reveal">
          <p className="eyebrow">Oxygen AI</p>
          <h1 id="hero-title">{t("oxygen.slogan")}</h1>
          <p className="hero-sub">{t("hero.sub")}</p>
          <div className="hero-actions">
            <a className="button primary" href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">
              {t("cta.learnPrima")}
            </a>
            <a className="button ghost" href="#model">{t("cta.modelPlan")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  const { locale } = useI18n();

  return (
    <section className="section" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{locale === "zh" ? "当前矩阵" : "Current matrix"}</p>
          <h2 id="products-title">{locale === "zh" ? "产品与模型，共用一条证据链" : "Products and models share one evidence chain"}</h2>
          <p className="section-copy">
            {locale === "zh"
              ? "Oxygen AI 还在早期阶段。我们暂时不铺产品线，先把「哪些能力真的能减少返工」这件事弄明白。"
              : "Oxygen AI is early. We are not spreading product lines yet; we are establishing which capabilities actually reduce rework."}
          </p>
        </div>
        <div className="card-grid reveal">
          <article className="card">
            <p className="tag mint">{locale === "zh" ? "正在打磨" : "In progress"}</p>
            <h3>Prima</h3>
            <p>
              {locale === "zh"
                ? "面向长项目、长文档与数据分析的 Agent。它探索自适应推理深度、分层长期记忆和更稳定的任务执行。"
                : "An agent for long projects, documents, and data analysis. It explores adaptive reasoning depth, layered memory, and more stable execution."}
            </p>
            <a className="text-link" href={siteConfig.productUrl} target="_blank" rel="noopener noreferrer">
              {locale === "zh" ? "访问 Prima 官网" : "Open the Prima site"}&nbsp;&rarr;
            </a>
          </article>
          <article className="card">
            <p className="tag gray">{locale === "zh" ? "规划中" : "Planned"}</p>
            <h3>{siteConfig.model.name}</h3>
            <p>
              {locale === "zh"
                ? "35B MoE 模型规划，目标是把任务复杂度感知、动态认知深度和长期协作状态放进同一套模型架构。"
                : "A 35B MoE plan to put task complexity sensing, dynamic cognitive depth, and long-term collaboration state in one model architecture."}
            </p>
            <a className="text-link" href="#model">{locale === "zh" ? "了解规划方向" : "See plan direction"}&nbsp;&rarr;</a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Model() {
  const { locale } = useI18n();

  return (
    <section className="section alt" id="model" aria-labelledby="model-title">
      <div className="container">
        <div className="split reveal">
          <div className="split-copy">
            <p className="eyebrow">{locale === "zh" ? "模型规划" : "Model plan"}</p>
            <h2 id="model-title">{siteConfig.model.name}</h2>
            <p className="lead">
              {siteConfig.model.parameters} · {locale === "zh" ? siteConfig.model.architecture : "Endogenous dynamic cognitive architecture"}
            </p>
            <p>
              {locale === "zh"
                ? "「多想几步」不该靠外挂。我们让它回到模型内部：识别任务复杂度，再决定探索的深度、记忆的层次与收敛的时机。"
                : "Thinking more should not be bolted on. We move it inside the model: sense task complexity, then decide exploration depth, memory layers, and convergence timing."}
            </p>
            <div className="spec-grid">
              <div><span>{locale === "zh" ? "规模" : "Scale"}</span><strong>{siteConfig.model.parameters}</strong></div>
              <div><span>{locale === "zh" ? "架构重点" : "Architecture focus"}</span><strong>{locale === "zh" ? "动态认知" : "Dynamic cognition"}</strong></div>
              <div><span>{locale === "zh" ? "阶段" : "Stage"}</span><strong>{locale === "zh" ? siteConfig.model.status : "Planned"}</strong></div>
            </div>
          </div>
          <figure className="split-visual">
            <DepthVisual />
          </figure>
        </div>
        <div className="card-grid reveal">
          {capabilities.map((item) => (
            <article className="card" key={item.title.en}>
              <h3>{item.title[locale]}</h3>
              <p>{item.copy[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  const { locale } = useI18n();

  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{locale === "zh" ? "方法" : "Approach"}</p>
          <h2 id="approach-title">{locale === "zh" ? "让长任务回到秩序" : "Restore order to long tasks"}</h2>
        </div>
        <div className="timeline">
          {steps.map((step) => (
            <div className="timeline-item reveal" key={step.title.en}>
              <h3>{step.title[locale]}</h3>
              <p>{step.copy[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const { locale } = useI18n();

  return (
    <section className="cta-section" id="about" aria-labelledby="about-title">
      <div className="container reveal" style={{textAlign: "center"}}>
        <p className="eyebrow">{locale === "zh" ? "关于 Oxygen AI" : "About Oxygen AI"}</p>
        <h2 id="about-title">{locale === "zh" ? "把复杂留给系统，把秩序还给你。" : "Leave complexity to the system; return order to you."}</h2>
        <p className="section-copy">
          {locale === "zh"
            ? "Oxygen AI 目前专注少数方向：Prima、用户共创，以及 OxygenDCM 的架构研究。哪些能用、哪些还在规划，页面上都标了。"
            : "Oxygen AI focuses on a few directions: Prima, user co-creation, and OxygenDCM architecture research. Pages mark what is available and what remains planned."}
        </p>
        <div className="hero-actions">
          <a className="button primary" href={siteConfig.betaUrl} target="_blank" rel="noopener noreferrer">
            {locale === "zh" ? "参与 Prima Beta 调研" : "Join Prima Beta research"}
          </a>
          <a className="button ghost" href={`mailto:${siteConfig.contactEmail}`}>{locale === "zh" ? "联系我们" : "Contact us"}</a>
        </div>
      </div>
    </section>
  );
}
