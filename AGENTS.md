# AGENTS.md — Oxygen AI 官网协作规范

本文件是仓库内文案与代码改动的上位约定。改任何页面前先读这里。

## 一、品牌结构（三层，不可混用）

| 层级 | 名称 | 用途 |
| --- | --- | --- |
| 母品牌 | `Oxygen AI` | 站点名、页脚主体、导航左上角标识 |
| 产品 | `Prima` | 面向真实长任务的 Agent，当前处于产品探索与 Beta 共创阶段 |
| 模型 | `OxygenDCM N1` | 规划中的 35B MoE 模型，**尚未发布** |

写法要求：

- 母品牌固定写作 `Oxygen AI`（英文、中间一个空格），不要写成 `OxygenAI`、`Oxygen AI 团队`。
- 产品固定写作 `Prima`，不写 `PrimaAgent`、`PrimalDE`、`Prima Agent`。
- 模型固定写作 `OxygenDCM N1`，首次出现后可简称 `OxygenDCM`。
- 不要指定或暗示其它并列主品牌；历史写法 `PrimaAgent / PrimalDE` 已废弃。

## 二、Slogan

```text
Spark dreams, build from primitives.
氧合万物。
```

使用规则：

- 中文用于中文页面正文（Hero 主标题、页脚收口）；Prima 的口号固定为「星火灵现，构于基元。」，不得写进 Oxygen 品牌位。
- 不拆句、不改字、不加标点变体（保留句末句号）。
- 可见正文中最多出现两次：Hero 一次、页脚一次。不要在每个区块重复（`index.html` 的 meta / og 标签不算正文）。

## 三、文案口径

- 产品处于早期阶段，`OxygenDCM N1` 是规划中能力，**不得写成已可用或已发布**。
- 不虚构客户案例、性能指标、用户规模、团队履历、商业合作。
- 首屏（Hero）只讲价值与定位，`35B MoE`、`内生动态认知架构` 等技术术语后置到模型区块。
- 术语统一：复杂度感知 / 分层记忆 / 执行一致性 / 动态认知。
- 中文正文用全角标点，中英文之间不加空格。
- 不用格言体、对偶句标题，不做自我表扬式声明（如「你在这里看到的边界，就是团队内部的边界」）。写陈述句，写具体名词。
- 机制细节只写到方向级，不展开实现路径。

## 四、技术栈与命令

React 19 + Vite 7 + TypeScript，纯静态构建。

```bash
npm install     # 安装依赖
npm run dev     # 本地开发，默认 http://localhost:5173
npm run lint    # tsc --noEmit 类型检查
npm run build   # 类型检查 + 生产构建到 dist/
npm run preview # 预览构建产物
```

**部署机制见 `README.md` 的「部署」一节，动手前务必读完。** 要点：`oxygenai.top` 由 Pages 直接服务仓库里已提交的 `docs/` 目录，推送分支不会上线，要发布需 `npm run build` 后把 `dist/` 同步进 `docs/`。`docs/` 是构建产物，不手工编辑；也不要批量用 `*/index.html` 这类通配去改入口文件，会连带命中 `docs/index.html`。

## 五、文件职责

- `src/config.ts` — 品牌名、产品/Beta 链接、联系邮箱、模型信息的**唯一来源**，改链接改这里，不要在组件里硬编码。
- `src/data/models.ts` — 模型矩阵的**唯一来源**，模型页与研究页都从这里取，不要在两处各写一份。
- `src/components/Sections.tsx` — 首页正文区块：Hero、Products、Model、Approach、About。区块内文案数组放在文件顶部。
- `src/components/Chrome.tsx` — 页头 Header、页脚 Footer、移动抽屉导航，以及页面导航数组（新增页面在此登记）。
- `src/components/Progress.tsx` — 模型进展与研究页：路线级模型状态、研究方向和可公开记录。
- `src/components/HeroArtwork.tsx` — 首屏主视觉（CSS + SVG，无素材依赖）。
- `src/components/SplitArtwork.tsx` — 分栏区块的线稿图，每个区块一张、对应各自的命题，不要在多处复用同一张。
- `<page>/index.html` — 该页的 `<title>`、`meta description`、`og:*` 分享卡片文案。
- `src/site.css` — 全站样式，沿用现有类名与设计令牌，不新造体系。

新增页面要改三处：新建 `<page>/index.html`、在 `vite.config.ts` 的 `rollupOptions.input` 里登记、在 `Chrome.tsx` 的导航数组里加上。

## 六、改动约定

- 改文案前先确认该句属于哪个区块、是否已在上位文档（`docs/官网目标`）定稿。
- 文案改动同步检查该页 `index.html` 的 title / description / og:description 是否需要跟着改。
- 不提交密钥、统计 Token 或个人联系方式。
- 改完至少跑一次 `npm run lint`，确认类型与构建通过。
