/**
 * 模型矩阵的唯一数据源。
 *
 * 模型页（ModelPage）直接渲染它；后续的「模型进展与研究」页也应从这里取数，
 * 不要在页面组件里各写一份。
 *
 * 文案口径受仓库 AGENTS.md 约束：
 * - `OxygenDCM N1` 是规划中能力，不得写成已可用或已发布；
 * - 状态只用「研究中 / 规划中」，不承诺时间表；
 * - 描述停在方向层，不写实现机制（避免随页面公开可照做的细节）。
 */

export type ModelTone = "mint" | "gray";

export type ModelRouteId = "generation" | "internal" | "decision";

export type ModelRoute = {
  id: ModelRouteId;
  label: string;
  basis: string;
  summary: string;
  objective: string;
  boundary: string;
};

export type ModelEntry = {
  name: string;
  route: ModelRouteId;
  series: string;
  status: string;
  tone: ModelTone;
  focus: string;
  copy: string;
};

export const modelRoutes: ModelRoute[] = [
  {
    id: "generation",
    label: "TBM · 序列生成",
    basis: "思维气泡模型",
    summary: "在生成过程里并行探索，用独立路径检查结论是否站得住。",
    objective: "在相近算力预算下改善准确率与延迟的平衡。",
    boundary: "阶段划分、控制机制和完整评测暂不公开。",
  },
  {
    id: "internal",
    label: "DCM · 内部动力学",
    basis: "内生动态认知模型",
    summary: "把任务难度判断、探索深度和收敛控制放进模型内部。",
    objective: "让算力消耗随任务复杂度和认知深度自适应变化。",
    boundary: "状态演化、路由与早退机制暂不公开。",
  },
  {
    id: "decision",
    label: "CDM · 校准决策",
    basis: "概率校准模型",
    summary: "为需要明确判断的场景输出可解释的置信度与边界。",
    objective: "区分模型的真实正确率与主观笃定程度，并用选择性决策衡量风险。",
    boundary: "输出契约、训练策略和业务指标口径暂不公开。",
  },
];

export const modelMatrix: ModelEntry[] = [
  {
    name: "OxygenTBM Avenues",
    route: "generation",
    series: "序列生成 · 多模态",
    status: "研究中",
    tone: "gray",
    focus: "多模态探索",
    copy: "面向视觉与文本交织任务的多模态探索模型，以序列生成为基底。",
  },
  {
    name: "OxygenTBM Terrace",
    route: "generation",
    series: "序列生成 · 文本",
    status: "研究中",
    tone: "mint",
    focus: "文本探索",
    copy: "纯文本场景的探索模型。同源架构的轻量变体，用于在更低成本下验证同一套探索策略。",
  },
  {
    name: "OxygenDCM N1",
    route: "internal",
    series: "隐状态动力学 · 35B MoE",
    status: "规划中",
    tone: "gray",
    focus: "长任务连续性",
    copy: "内生动态认知模型。目标是在模型内部完成探索、校验与收敛，而不是靠外部脚本编排。",
  },
  {
    name: "OxygenCDM T1",
    route: "decision",
    series: "校准决策 · 文本",
    status: "规划中",
    tone: "mint",
    focus: "文本判断",
    copy: "文本决策模型。为上游系统提供可审计、可追溯的概率判断层。",
  },
  {
    name: "OxygenCDM V1",
    route: "decision",
    series: "校准决策 · 视觉",
    status: "规划中",
    tone: "mint",
    focus: "视觉判断",
    copy: "视觉决策模型。把校准框架扩展到视觉判别任务，与 T1 保持一致的判断口径。",
  },
];
