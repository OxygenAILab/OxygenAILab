import type { Localized } from "./content";

export type ModelTone = "mint" | "gray";
export type ModelRouteId = "generation" | "internal" | "decision";

export type ModelRoute = {
  id: ModelRouteId;
  label: Localized;
  basis: Localized;
  summary: Localized;
  objective: Localized;
  boundary: Localized;
};

export type ModelEntry = {
  name: string;
  route: ModelRouteId;
  series: Localized;
  status: Localized;
  tone: ModelTone;
  focus: Localized;
  copy: Localized;
};

export const modelRoutes: ModelRoute[] = [
  {
    id: "generation",
    label: { zh: "TBM · 序列生成", en: "TBM · Sequence generation" },
    basis: { zh: "思维气泡模型", en: "Thought Bubble Model" },
    summary: {
      zh: "在生成过程里并行探索，用独立路径检查结论是否站得住。",
      en: "Explore in parallel during generation and use independent paths to test whether conclusions hold.",
    },
    objective: {
      zh: "在相近算力预算下改善准确率与延迟的平衡。",
      en: "Improve the accuracy-latency balance at comparable compute budgets.",
    },
    boundary: {
      zh: "阶段划分、控制机制和完整评测暂不公开。",
      en: "Phase structure, control mechanisms, and full evaluations are not public yet.",
    },
  },
  {
    id: "internal",
    label: { zh: "DCM · 内部动力学", en: "DCM · Internal dynamics" },
    basis: { zh: "内生动态认知模型", en: "Endogenous dynamic cognitive model" },
    summary: {
      zh: "把任务难度判断、探索深度和收敛控制放进模型内部。",
      en: "Put task difficulty sensing, exploration depth, and convergence control inside the model.",
    },
    objective: {
      zh: "让算力消耗随任务复杂度和认知深度自适应变化。",
      en: "Let compute consumption adapt to task complexity and cognitive depth.",
    },
    boundary: {
      zh: "状态演化、路由与早退机制暂不公开。",
      en: "State evolution, routing, and early-exit mechanisms are not public yet.",
    },
  },
  {
    id: "decision",
    label: { zh: "CDM · 校准决策", en: "CDM · Calibrated decisioning" },
    basis: { zh: "概率校准模型", en: "Probabilistic calibration model" },
    summary: {
      zh: "为需要明确判断的场景输出可解释的置信度与边界。",
      en: "Produce explainable confidence and boundaries for scenarios that require explicit judgment.",
    },
    objective: {
      zh: "区分模型的真实正确率与主观笃定程度，并用选择性决策衡量风险。",
      en: "Separate true accuracy from subjective certainty and measure risk with selective decisions.",
    },
    boundary: {
      zh: "输出契约、训练策略和业务指标口径暂不公开。",
      en: "Output contracts, training strategy, and business metric definitions are not public yet.",
    },
  },
];

export const modelMatrix: ModelEntry[] = [
  {
    name: "OxygenTBM Avenues",
    route: "generation",
    series: { zh: "序列生成 · 多模态", en: "Sequence generation · Multimodal" },
    status: { zh: "研究中", en: "In research" },
    tone: "gray",
    focus: { zh: "多模态探索", en: "Multimodal exploration" },
    copy: {
      zh: "面向视觉与文本交织任务的多模态探索模型，以序列生成为基底。",
      en: "A multimodal exploration model for interleaved visual-text tasks, based on sequence generation.",
    },
  },
  {
    name: "OxygenTBM Terrace",
    route: "generation",
    series: { zh: "序列生成 · 文本", en: "Sequence generation · Text" },
    status: { zh: "研究中", en: "In research" },
    tone: "mint",
    focus: { zh: "文本探索", en: "Text exploration" },
    copy: {
      zh: "纯文本场景的探索模型。同源架构的轻量变体，用于在更低成本下验证同一套探索策略。",
      en: "A text exploration model and lighter variant of the same architecture, used to validate the exploration strategy at lower cost.",
    },
  },
  {
    name: "OxygenDCM N1",
    route: "internal",
    series: { zh: "隐状态动力学 · 35B MoE", en: "Hidden-state dynamics · 35B MoE" },
    status: { zh: "规划中", en: "Planned" },
    tone: "gray",
    focus: { zh: "长任务连续性", en: "Long-task continuity" },
    copy: {
      zh: "内生动态认知模型。目标是在模型内部完成探索、校验与收敛，而不是靠外部脚本编排。",
      en: "An endogenous dynamic cognitive model aiming to complete exploration, verification, and convergence internally rather than through external scripts.",
    },
  },
  {
    name: "OxygenCDM T1",
    route: "decision",
    series: { zh: "校准决策 · 文本", en: "Calibrated decisioning · Text" },
    status: { zh: "规划中", en: "Planned" },
    tone: "mint",
    focus: { zh: "文本判断", en: "Text judgment" },
    copy: {
      zh: "文本决策模型。为上游系统提供可审计、可追溯的概率判断层。",
      en: "A text decision model providing an auditable and traceable probabilistic judgment layer for upstream systems.",
    },
  },
  {
    name: "OxygenCDM V1",
    route: "decision",
    series: { zh: "校准决策 · 视觉", en: "Calibrated decisioning · Vision" },
    status: { zh: "规划中", en: "Planned" },
    tone: "mint",
    focus: { zh: "视觉判断", en: "Visual judgment" },
    copy: {
      zh: "视觉决策模型。把校准框架扩展到视觉判别任务，与 T1 保持一致的判断口径。",
      en: "A visual decision model extending the calibration framework to visual discrimination, aligned with T1's judgment terms.",
    },
  },
];
