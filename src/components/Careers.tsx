import { useMemo, useState } from "react";
import { siteConfig } from "../config";
import { useI18n } from "../i18n";
import type { Localized } from "../data/content";

type Category = "all" | "product" | "engineering" | "business" | "lab";
type Role = {
  id: string;
  title: Localized;
  focus: Localized;
  description: Localized;
  category: Exclude<Category, "all">;
  team: Localized;
  location: Localized;
  mode: Localized;
  count: number;
  email: string;
  lab?: boolean;
};

const cnMode: Localized = {
  zh: "27Q2–27Q4 远程办公；27Q4 起准备杭州公司报告",
  en: "Remote 27Q2–27Q4; prepare for Hangzhou reporting from 27Q4",
};
const labMode: Localized = {
  zh: "28Q1 起按意愿选择 CN/SG；此前远程办公",
  en: "Choose CN/SG from 28Q1; remote before that",
};

const roles: Role[] = [
  {
    id: "agent-product-lead",
    title: { zh: "Agent 产品负责人", en: "Agent Product Lead" },
    focus: { zh: "Prima 主线产品与 Agent 编排", en: "Prima product and agent orchestration" },
    description: {
      zh: "负责 Prima 主线产品、工作流、Agent 编排、PrimaHub/EchoHub、计费、权限与开发者体验，并推进 Oxygen 副线产品的 ToB/ToC 方向。",
      en: "Own Prima's core product, workflows, agent orchestration, PrimaHub/EchoHub, billing, permissions, developer experience, and the ToB/ToC direction of Oxygen product lines.",
    },
    category: "product",
    team: { zh: "Prima / Oxygen", en: "Prima / Oxygen" },
    location: { zh: "CN · 杭州", en: "CN · Hangzhou" },
    mode: cnMode,
    count: 1,
    email: siteConfig.hrEmail,
  },
  {
    id: "backend-core",
    title: { zh: "后端核心工程师", en: "Backend Core Engineer" },
    focus: { zh: "Agent runtime 与核心服务", en: "Agent runtime and core services" },
    description: {
      zh: "构建 Agent runtime、状态机、记忆系统、工具协议、多 Agent 通信与任务持久化，并参与 OxygenAccount 等核心服务。",
      en: "Build agent runtime, state machines, memory systems, tool protocols, multi-agent communication, durable tasks, and services such as OxygenAccount.",
    },
    category: "engineering",
    team: { zh: "平台 / 核心服务", en: "Platform / Core services" },
    location: { zh: "CN · 杭州", en: "CN · Hangzhou" },
    mode: cnMode,
    count: 3,
    email: siteConfig.hrEmail,
  },
  {
    id: "platform-api",
    title: { zh: "平台 & API 工程师", en: "Platform & API Engineer" },
    focus: { zh: "开放平台与租户基础设施", en: "Open platform and tenant infrastructure" },
    description: {
      zh: "负责开放 API、SDK、Webhook、权限、配额、计费底层与租户隔离，让外部团队可以稳定接入。",
      en: "Own open APIs, SDKs, webhooks, permissions, quotas, billing infrastructure, and tenant isolation for external teams.",
    },
    category: "engineering",
    team: { zh: "开放平台", en: "Open platform" },
    location: { zh: "CN · 杭州", en: "CN · Hangzhou" },
    mode: cnMode,
    count: 1,
    email: siteConfig.hrEmail,
  },
  {
    id: "frontend",
    title: { zh: "前端工程师", en: "Frontend Engineer" },
    focus: { zh: "编排画布、调试器与控制台", en: "Canvas, debugger, and console" },
    description: {
      zh: "实现可视化编排画布、调试器、控制台、监控面板、文档站和面向真实工作流的 Prima 前端体验。",
      en: "Build the visual orchestration canvas, debugger, console, monitoring surfaces, documentation site, and Prima frontend for real workflows.",
    },
    category: "product",
    team: { zh: "Prima 产品", en: "Prima product" },
    location: { zh: "CN · 杭州", en: "CN · Hangzhou" },
    mode: cnMode,
    count: 1,
    email: siteConfig.hrEmail,
  },
  {
    id: "art-modeling",
    title: { zh: "美术与建模", en: "Art & 3D Modeling" },
    focus: { zh: "产品美术与视觉表达", en: "Product art and visual expression" },
    description: {
      zh: "负责 Prima 产品美术、美学方向与 2D/3D 视觉资产，让复杂的 Agent 工作流保持清晰和克制。",
      en: "Own Prima product art, aesthetic direction, and 2D/3D assets while keeping complex agent workflows clear and restrained.",
    },
    category: "product",
    team: { zh: "设计与创意", en: "Design & creative" },
    location: { zh: "CN · 杭州", en: "CN · Hangzhou" },
    mode: cnMode,
    count: 2,
    email: siteConfig.hrEmail,
  },
  {
    id: "sales",
    title: { zh: "商务 / 销售", en: "Business / Sales" },
    focus: { zh: "企业客户与渠道拓展", en: "Enterprise customers and channels" },
    description: {
      zh: "负责企业客户拓展、方案报价、商务谈判和渠道对接，把真实的 ToB 需求带回产品团队。",
      en: "Drive enterprise customer development, proposal pricing, negotiation, and channel partnerships while bringing real ToB needs back to product.",
    },
    category: "business",
    team: { zh: "商务", en: "Business" },
    location: { zh: "CN · 杭州", en: "CN · Hangzhou" },
    mode: cnMode,
    count: 1,
    email: siteConfig.hrEmail,
  },
  {
    id: "customer-success",
    title: { zh: "客户成功", en: "Customer Success" },
    focus: { zh: "上线、闭环与续约", en: "Launch, closure, and renewal" },
    description: {
      zh: "负责上线跟进、问题闭环、需求收集、客户培训与续约跟进，让产品交付真正变成持续使用。",
      en: "Own launch follow-up, issue closure, requirement collection, customer training, and renewals so delivery turns into sustained use.",
    },
    category: "business",
    team: { zh: "客户成功", en: "Customer success" },
    location: { zh: "CN · 杭州", en: "CN · Hangzhou" },
    mode: cnMode,
    count: 1,
    email: siteConfig.hrEmail,
  },
  {
    id: "technical-ops",
    title: { zh: "技术运营", en: "Technical Operations" },
    focus: { zh: "文档、社区与版本运营", en: "Docs, community, and releases" },
    description: {
      zh: "维护文档、示例库、社区、工单、内测管理、版本公告与指标看板，保持开发者信息的一致和可追踪。",
      en: "Maintain docs, examples, community, tickets, beta programs, release notes, and dashboards so developer information stays consistent and traceable.",
    },
    category: "business",
    team: { zh: "开发者运营", en: "Developer operations" },
    location: { zh: "CN · 杭州", en: "CN · Hangzhou" },
    mode: cnMode,
    count: 1,
    email: siteConfig.hrEmail,
  },
  {
    id: "lab-model-lead",
    title: { zh: "模型负责人 / 算法 Lead", en: "Model Lead / Algorithms Lead" },
    focus: { zh: "模型选型、训练策略与评测", en: "Model strategy, training, and evaluation" },
    description: {
      zh: "负责模型选型、训练策略、对齐、评测体系与优先级排期，并承担技术方案评审。",
      en: "Own model selection, training strategy, alignment, evaluation systems, prioritization, and technical design reviews.",
    },
    category: "lab",
    team: { zh: "OxygenAI Lab", en: "OxygenAI Lab" },
    location: { zh: "CN / SG", en: "CN / SG" },
    mode: labMode,
    count: 1,
    email: siteConfig.labEmail,
    lab: true,
  },
  {
    id: "lab-training-inference",
    title: { zh: "训练 & 推理工程师", en: "Training & Inference Engineer" },
    focus: { zh: "训练、推理优化与部署", en: "Training, inference, and deployment" },
    description: {
      zh: "负责数据清洗、SFT/DPO、推理优化、量化、部署、KV 缓存和后端推理服务。",
      en: "Own data cleaning, SFT/DPO, inference optimization, quantization, deployment, KV caching, and backend inference services.",
    },
    category: "lab",
    team: { zh: "OxygenAI Lab", en: "OxygenAI Lab" },
    location: { zh: "CN / SG", en: "CN / SG" },
    mode: labMode,
    count: 1,
    email: siteConfig.labEmail,
    lab: true,
  },
  {
    id: "lab-evaluation-alignment",
    title: { zh: "评测 & 对齐工程师", en: "Evaluation & Alignment Engineer" },
    focus: { zh: "自动评测、红队与安全护栏", en: "Evaluation, red teaming, and guardrails" },
    description: {
      zh: "建立自动评测集、红队流程、badcase 闭环、安全护栏和版本回归体系。",
      en: "Build automated evaluation sets, red-team processes, badcase loops, safety guardrails, and version regression systems.",
    },
    category: "lab",
    team: { zh: "OxygenAI Lab", en: "OxygenAI Lab" },
    location: { zh: "CN / SG", en: "CN / SG" },
    mode: labMode,
    count: 1,
    email: siteConfig.labEmail,
    lab: true,
  },
];

const filters: Array<{ id: Category; label: Localized }> = [
  { id: "all", label: { zh: "全部职位", en: "All roles" } },
  { id: "product", label: { zh: "产品与创意", en: "Product & creative" } },
  { id: "engineering", label: { zh: "工程与平台", en: "Engineering & platform" } },
  { id: "business", label: { zh: "商务与运营", en: "Business & operations" } },
  { id: "lab", label: { zh: "实验室", en: "Lab" } },
];

const applicationItems: Localized[] = [
  { zh: "中文材料（如有）", en: "Chinese material (if available)" },
  { zh: "英文全名", en: "Full name in English" },
  { zh: "简短自我介绍", en: "Brief introduction" },
  { zh: "简历", en: "Resume" },
  { zh: "作品集", en: "Portfolio" },
];

function RoleGroup({
  title,
  description,
  items,
  locale,
}: {
  title: string;
  description: string;
  items: Role[];
  locale: "zh" | "en";
}) {
  if (!items.length) return null;

  return (
    <section className="job-group" aria-label={title}>
      <div className="job-group-head">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      <div className="job-list">
        {items.map((role) => (
          <article className="job-row" key={role.id}>
            <div>
              <div className="job-titleline">
                <h3>{role.title[locale]}</h3>
                <span className="job-headcount">
                  {locale === "zh" ? `${role.count} 人` : `${role.count} ${role.count === 1 ? "role" : "roles"}`}
                </span>
              </div>
              <p className="job-focus">{role.focus[locale]}</p>
              <p className="job-description">{role.description[locale]}</p>
              <div className="job-meta">
                <span>{role.team[locale]}</span>
                <span>{role.location[locale]}</span>
                <span>{role.mode[locale]}</span>
              </div>
            </div>
            <a
              className="button ghost compact"
              href={`mailto:${role.email}?subject=${encodeURIComponent(`${role.title[locale]} / OxygenAI`)}`}
            >
              {locale === "zh" ? "申请" : "Apply"}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Careers() {
  const { locale } = useI18n();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return roles.filter((role) => {
      const categoryMatch = category === "all" || role.category === category;
      if (!categoryMatch) return false;
      if (!normalized) return true;
      return [
        role.title[locale],
        role.focus[locale],
        role.description[locale],
        role.team[locale],
        role.location[locale],
      ]
        .join(" ")
        .toLocaleLowerCase()
        .includes(normalized);
    });
  }, [category, locale, query]);

  const cnRoles = filtered.filter((role) => !role.lab);
  const labRoles = filtered.filter((role) => role.lab);

  return (
    <main id="main" className="about-page careers-page">
      <section className="container about-hero" aria-labelledby="careers-hero-title">
        <p className="eyebrow">{locale === "zh" ? "职业机会" : "Careers"}</p>
        <h1 id="careers-hero-title">
          {locale === "zh" ? "加入 OxygenAI，与我们一起探索、创造。" : "Join OxygenAI to explore and build with us."}
        </h1>
        <p className="lead" style={{ maxWidth: "60ch" }}>
          {locale === "zh"
            ? "我们在 CN 总部与 OxygenAI Lab 招募产品、工程、设计、商务和研究人才，一起把长任务 Agent 做成真正可用的产品。"
            : "We are hiring across product, engineering, design, business, and research at our CN headquarters and OxygenAI Lab to make long-task agents useful in real work."}
        </p>
        <div className="careers-locations">
          <div className="careers-location">
            <strong>CN · 杭州</strong>
            <p>
              {locale === "zh"
                ? "总部；27Q2–27Q4 远程办公，27Q4 起需要为到杭州公司报告做准备。"
                : "Headquarters. Remote from 27Q2–27Q4, with preparation for reporting in Hangzhou from 27Q4."}
            </p>
          </div>
          <div className="careers-location">
            <strong>OxygenAI Lab · CN / SG</strong>
            <p>
              {locale === "zh"
                ? "28Q1 起按意愿选择 CN/SG，28Q1 以前远程办公。"
                : "Choose CN or SG from 28Q1; remote before 28Q1."}
            </p>
          </div>
          <div className="careers-location">
            <strong>{locale === "zh" ? "投递材料" : "Application kit"}</strong>
            <p>{applicationItems.map((item) => item[locale]).join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="container about-section" aria-labelledby="jobs-title">
        <div className="jobs-layout">
          <aside className="jobs-guide">
            <p className="eyebrow">{locale === "zh" ? "申请前准备" : "Before applying"}</p>
            <h2 id="jobs-title">{locale === "zh" ? "把真实的你写清楚。" : "Make the real you clear."}</h2>
            <ol>
              {applicationItems.map((item) => (
                <li key={item.en}>{item[locale]}</li>
              ))}
            </ol>
            <div className="jobs-guide-contact">
              <span>{locale === "zh" ? "CN 岗位" : "CN roles"}</span>
              <a href={`mailto:${siteConfig.hrEmail}`}>{siteConfig.hrEmail}</a>
              <span>{locale === "zh" ? "Lab 岗位" : "Lab roles"}</span>
              <a href={`mailto:${siteConfig.labEmail}`}>{siteConfig.labEmail}</a>
            </div>
          </aside>

          <div className="jobs-browser">
            <div className="jobs-toolbar">
              <label className="jobs-search">
                <span className="skip-link">{locale === "zh" ? "搜索职位" : "Search roles"}</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={locale === "zh" ? "搜索职位、团队或关键词" : "Search roles, teams, or keywords"}
                  aria-label={locale === "zh" ? "搜索职位" : "Search roles"}
                />
              </label>
              <div className="jobs-filter" role="group" aria-label={locale === "zh" ? "职位筛选" : "Role filters"}>
                {filters.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={category === item.id ? "active" : ""}
                    aria-pressed={category === item.id}
                    onClick={() => setCategory(item.id)}
                  >
                    {item.label[locale]}
                  </button>
                ))}
              </div>
            </div>

            <div className="jobs-result-meta">
              <span>
                {locale === "zh" ? `${filtered.length} 个职位方向` : `${filtered.length} role directions`}
              </span>
              <span>{locale === "zh" ? "滚动查看全部" : "Scroll to view all"}</span>
            </div>

            {filtered.length ? (
              <>
                <RoleGroup
                  title={locale === "zh" ? "CN · 总部" : "CN · Headquarters"}
                  description={locale === "zh" ? "产品、平台、商务与运营" : "Product, platform, business, and operations"}
                  items={cnRoles}
                  locale={locale}
                />
                <RoleGroup
                  title="OxygenAI Lab"
                  description={locale === "zh" ? "模型研究与训练基础设施" : "Model research and training infrastructure"}
                  items={labRoles}
                  locale={locale}
                />
              </>
            ) : (
              <p className="jobs-empty" role="status">
                {locale === "zh"
                  ? "没有匹配的职位。可以清空搜索或直接写信给我们。"
                  : "No matching roles. Clear the search or write to us directly."}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
