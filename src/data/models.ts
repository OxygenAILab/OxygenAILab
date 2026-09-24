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

export type ModelEntry = {
  name: string;
  series: string;
  status: string;
  tone: ModelTone;
  copy: string;
};

export const modelMatrix: ModelEntry[] = [
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