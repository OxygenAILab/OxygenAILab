export type Category = 'runtime' | 'cognition' | 'engineering' | 'evolution' | 'research' | 'meta';
export type Language = 'Python' | 'Rust' | 'Other';

export interface Project {
  code: string;
  name: string;
  desc: string;
  category: Category;
  language: Language;
  license: string;
  stars: number;
  forks: number;
  updated: string;
  url: string;
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  runtime: 'Runtime',
  cognition: 'Cognition',
  engineering: 'Engineering',
  evolution: 'Evolution',
  research: 'Research',
  meta: 'Meta',
};

export const CATEGORY_FULL: Record<Category, string> = {
  runtime: '核心运行时',
  cognition: '认知与记忆',
  engineering: '工程与编排',
  evolution: '自主进化',
  research: '前沿研究',
  meta: '组织元项目',
};

export const projects: Project[] = [
  {
    code: 'OXY',
    name: 'OpenOxygen',
    desc: '核心运行时引擎。Better than OpenClaw.',
    category: 'runtime',
    language: 'Rust',
    license: 'MIT',
    stars: 5,
    forks: 0,
    updated: '2026-07-13',
    url: 'https://github.com/OxygenAILab/OpenOxygen',
    featured: true,
  },
  {
    code: 'ODC',
    name: 'OxygenDynamicCognition.skill',
    desc: '动态认知推理引擎。五级认知 L1-L5 + 置信门控早退 + 工具感知 + 自适应阈值 + Token 预算控制。',
    category: 'cognition',
    language: 'Python',
    license: 'GPL-3.0',
    stars: 1,
    forks: 0,
    updated: '2026-07-14',
    url: 'https://github.com/OxygenAILab/OxygenDynamicCognition.skill',
    featured: true,
  },
  {
    code: 'OCC',
    name: 'OxygenCognitionConstruction.skill',
    desc: '认知构建与知识图谱。从推理过程构建结构化认知模型、知识图谱与思维框架。',
    category: 'cognition',
    language: 'Python',
    license: 'MIT',
    stars: 0,
    forks: 0,
    updated: '2026-07-14',
    url: 'https://github.com/OxygenAILab/OxygenCognitionConstruction.skill',
  },
  {
    code: 'OMM',
    name: 'OxygenMemo.skill',
    desc: '零改动分层记忆管理。多级树索引 + TLB 热页缓存 + 指针链接记忆网络 + 语义预取 + 记忆蒸馏。',
    category: 'cognition',
    language: 'Python',
    license: 'GPL-3.0',
    stars: 1,
    forks: 0,
    updated: '2026-07-14',
    url: 'https://github.com/OxygenAILab/OxygenMemo.skill',
  },
  {
    code: 'OIA',
    name: 'OxygenIOAggregator.skill',
    desc: '高性能 SSD 友好批量文件 I/O 引擎。LRU 缓存 + 写合并 + mmap + 原子写入 + 二进制检视。',
    category: 'engineering',
    language: 'Python',
    license: 'GPL-3.0',
    stars: 1,
    forks: 0,
    updated: '2026-07-10',
    url: 'https://github.com/OxygenAILab/OxygenIOAggregator.skill',
  },
  {
    code: 'OUC',
    name: 'OxygenUltraCode.skill',
    desc: '高级代码推理与开发框架。结构化思维 + Agent 工作流 + 多视角代码审查 + GitHub 集成 + 系统化调试。',
    category: 'engineering',
    language: 'Python',
    license: 'GPL-3.0',
    stars: 1,
    forks: 0,
    updated: '2026-07-07',
    url: 'https://github.com/OxygenAILab/OxygenUltraCode.skill',
  },
  {
    code: 'ATO',
    name: 'agent-task-orchestrator.skill',
    desc: '任务编排。基于 OpenOxygen 决策逻辑，修复原生 Agent 任务拆分缺陷，全生命周期标准化处理。',
    category: 'engineering',
    language: 'Other',
    license: 'MIT',
    stars: 1,
    forks: 0,
    updated: '2026-04-25',
    url: 'https://github.com/OxygenAILab/agent-task-orchestrator.skill',
  },
  {
    code: 'OSE',
    name: 'OxygenSelfEvolution.skill',
    desc: '让 Agent 自主进化。不受上下文召回与存在约束限制，实现持续自我增强。',
    category: 'evolution',
    language: 'Other',
    license: 'GPL-3.0',
    stars: 0,
    forks: 0,
    updated: '2026-07-24',
    url: 'https://github.com/OxygenAILab/OxygenSelfEvolution.skill',
  },
  {
    code: 'OOE',
    name: 'OxygenOutE',
    desc: 'MoE 外部专家仓库。为所有 MoE 模型创建外部专家库，通过知识注入与提示工程使 MoE 将知识视为原生 Expert 参数。',
    category: 'research',
    language: 'Other',
    license: 'Apache-2.0',
    stars: 1,
    forks: 0,
    updated: '2026-06-05',
    url: 'https://github.com/OxygenAILab/OxygenOutE',
    featured: true,
  },
  {
    code: 'OAL',
    name: 'OxygenAILab',
    desc: 'Oxygen AI Lab 官网本身。介绍实验室愿景、目标、研究成果与现状。',
    category: 'meta',
    language: 'Other',
    license: 'GPL-3.0',
    stars: 0,
    forks: 0,
    updated: '2026-07-25',
    url: 'https://github.com/OxygenAILab/OxygenAILab',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const ORG_INFO = {
  name: 'Oxygen AI Lab',
  tagline: 'Breath for Agents.',
  description:
    '专注 AI Agent 增强与生产力加速的研究型实验室。从核心运行时到认知引擎，从记忆管理到自主进化，为 Agent 注入氧气。',
  email: 'zechuan30@outlook.com',
  github: 'https://github.com/OxygenAILab',
  domain: 'oxygen.n0th1n3ssd0ma1n.top',
  location: 'China',
  projectCount: projects.length,
  languages: ['Python', 'Rust'] as Language[],
};
