# Oxygen AI 官网

Oxygen AI（`oxygenai.top`）的官网源码。React 19 + Vite 7 + TypeScript，纯静态构建，无 UI 框架、无 Tailwind，样式集中在 `src/site.css`。

站点共 10 个页面：

| 路径 | 标题 | 说明 |
| --- | --- | --- |
| `/` | Oxygen AI · Prima 与 OxygenDCM N1 | 首页：主视觉、产品、模型、方法 |
| `/model/` | 模型矩阵 | 五条模型线（OxygenTBM / OxygenDCM / OxygenCDM）的方向级介绍 |
| `/research/` | 研究 | 研究方向与研究方法 |
| `/progress/` | 模型进展与研究 | 三条模型路线的当前状态、研究方向和可公开研究记录 |
| `/pricing/` | 定价 | SparkPlan、PrimaPlan 与 Credit+ 的额度、限制和完整对照 |
| `/about/` | 关于 Oxygen AI | 团队定位与在做的事 |
| `/developers/` | 开发者 | 接入入口与文档占位 |
| `/news/` | 新闻与动态 | 已发布的动态列表 |
| `/careers/` | 加入我们 | 两个投递入口 + 工作方式 |
| `/contact/` | 联系我们 | 三个联系邮箱通道 |

## 关于当前分支

分支名 `feat/oxygen-redesign-v1`，从 `Website-Oxygen` 派生（基线 `6f31fb7`），**只改源码、不动发布产物、不影响线上**。

- `docs/` 在本分支与 `Website-Oxygen` 逐字节一致，因此这个分支不存在任何能改变线上站点的路径。
- 本分支不会触发任何自动发布（见下文「部署」）。
- 合并前请先确认是否需要重新生成 `docs/`。

## 品牌与文案约定

三层品牌结构、Slogan 使用次数限制、术语统一口径、不得写成已发布的能力，都写在 [`AGENTS.md`](./AGENTS.md)。**改任何页面的文案前先读那一份**，README 不重复它的内容。

三条最容易踩的：

- 母品牌固定 `Oxygen AI`（中间一个空格），产品固定 `Prima`，不写 `PrimaAgent` / `PrimalDE` / `Prima Agent`。
- 模型 `OxygenDCM N1` 是**规划中**能力，不得写成已可用或已发布。
- Slogan「星火灵现，构于基元。」在可见正文里最多出现两次（Hero、页脚各一次）。

## 技术栈与命令

```bash
npm install     # 安装依赖
npm run dev     # 本地开发，默认 http://localhost:5173
npm run lint    # tsc --noEmit 类型检查
npm run build   # 类型检查 + 生产构建到 dist/
npm run preview # 预览 dist/ 构建产物
```

依赖只有 `react`、`react-dom` 与自托管的 `@fontsource/lora`。字体走 fontsource 本地加载，不依赖外网 CDN；`--font-display` 声明了字体就必须真的加载，否则衬线标题会静默回退成无衬线。

## 目录结构

```
index.html              首页入口
<page>/index.html       其余 9 个页面入口（about / model / research / progress / pricing / news / developers / careers / contact）
vite.config.ts          多页构建：rollupOptions.input 逐个登记页面入口，base 为 "./"
src/
  main.tsx              读 document.body.dataset.page，交给 PageApp 分发
  PageApp.tsx           跳过链接 + Header + 页面内容 + Footer 的统一外壳
  config.ts             品牌名、产品/Beta 链接、联系邮箱、模型信息的唯一来源
  data/models.ts        模型矩阵数据源，模型页与研究页都从这里取
  components/           Chrome（页头/页脚/移动抽屉）、Sections（首页区块）、
                        HeroArtwork（首屏主视觉）、各页组件
  site.css              全站样式与设计令牌
public/                 原样拷贝进 dist：404.html、CNAME、favicon.png、og.jpg、robots.txt、sitemap.xml
assets/images/          源图（logo、配图），由组件 import 后走 Vite 哈希
docs/                   GitHub Pages 的实际发布目录，见下节
```

新增页面需要改三处：新建 `<page>/index.html`、在 `vite.config.ts` 的 `rollupOptions.input` 里登记、在 `src/components/Chrome.tsx` 的导航数组里加上。

## 部署（重要，先读完再动 `docs/`）

`oxygenai.top` 由 GitHub Pages 直接服务**仓库里已提交的 `docs/` 目录**，不是由 Actions 构建产物发布。实测判据（2026-09-24）：

- `docs/.nojekyll` 已提交，而 `public/` 下没有同名文件，所以它不可能被打进 `dist/`；但 `https://oxygenai.top/.nojekyll` 返回 200。
- 线上首页引用的 `assets/main--w7gzswx.js`、`assets/main-hFRw-9_1.css`、`assets/favicon-C1SZchOP.png`、`assets/og-B1xrDO3g.jpg` 与 `docs/assets/` 里的文件逐个对应。

两条直接后果：

1. **推分支不会上线。** 任何分支（包括本分支）的推送都不会改变线上站点。
2. **要发布必须手动同步 `docs/`。** 步骤是 `npm run build`，然后把 `dist/` 的内容覆盖到 `docs/`（保留 `CNAME` 与 `.nojekyll`），提交后推到 `Website-Oxygen` 分支。

仓库里同时存在 `.github/workflows/deploy.yml`（推送 `Website-Oxygen` 时构建 `dist/` 并走 `actions/deploy-pages`）。它与上述结论只有一个能生效，取决于仓库 Settings → Pages 的 Source 设置；以线上实测为准，当前生效的是 `docs/`。**改这一个之前先在 Settings 里确认当前 Source**，否则会造成线上直接 404。

`docs/` 是构建产物，不要手工编辑（历史上手工改 `docs/index.html` 出错一次，用 `revert:` 提交撤回）。也不要批量用 `*/index.html` 这类通配去改根目录入口文件——它会连带命中 `docs/index.html`。

## 本次改造（`feat/oxygen-redesign-v1`）

对齐 StepFun 式设计语言：浅色纸面为唯一画布、1px 暖灰描边分区、单一品牌色克制使用、衬线标题拉大尺度、文案说证据不说修辞。

**设计系统**

- `:root` 令牌整体重估：`--bg: #f7f7f5`、`--bg-alt: #efefec`、`--border: #e3e2de`、`--brand: #0a6b60`，圆角收敛为 8/16/24 三档。
- 删除 `.section.dark` 整屏深色叙事区（原 `#141414`，是「滚动到某处突然变黑」的根因）。深色现在只允许出现在页脚与 ≤5% 面积的小面板。
- 区块之间改用 `border-top: 1px solid var(--border)` 分隔，不再靠底色切换；卡片改白底 + 描边，阴影只保留 hover 反馈。
- eyebrow 改灰色小字，品牌色只留给链接、tag、按钮 hover、图表高亮与主视觉光核，取消第二个强调色（原 `tag peri`）。

**首屏主视觉**

- 新增 `src/components/HeroArtwork.tsx`：CSS + SVG 手绘的「星火 / 基元」图谱——细描边网格、节点连线、品牌色光核与飘散粒子，无素材依赖。
- 入场动画挂在 SVG `<g>` 分组上，常态动效挂在单个图元上，两者用独立的 `translate` / `rotate` / `scale` 属性写入，避免同一 transform 互相覆盖。
- 鼠标视差走 `--art-mx/--art-my` 自定义属性 + rAF，只在指针设备生效。

**工程盲区**

- 字体改为 `@fontsource/lora` 自托管（此前声明了 Lora 却从未加载）。
- 新增移动端导航：`.nav-toggle` 44px 触控目标、三横线 morph 成 X、`.nav-drawer` 全屏抽屉、Esc 关闭并锁滚动。
- 新增 `public/404.html`：自包含的中文 404，含返回首页与问卷入口。
- 修正社交卡片：`og:image` 原来指向 Vite 哈希路径（线上必 404），现改为稳定的 `https://oxygenai.top/og.jpg`。`og.jpg` 与 `favicon.png` 一并从 `assets/` 迁到 `public/`，避免文件名被哈希。8 个入口页同步补齐 `og:url`、`og:site_name`、`twitter:*`、`theme-color`。
- `App.tsx` 的锚点跳转加了非法 hash 兜底，`querySelector` 不再因坏 hash 抛异常。
- `.gitignore` 建立，`node_modules/`、`dist/`、`*.tsbuildinfo` 不再可能被提交。
- CI 的 `deploy.yml` 补上 `npm run lint`。

**分栏配图**

- 原先首页模型区块、模型页、研究页三处复用同一张 `assets/images/detail.jpg`（白底淡彩渐变，几乎看不出内容，且与单一品牌色的规则冲突），现改为三张各自对应区块命题的 SVG 线稿：
  - `DepthVisual`（首页）：同一条请求按难度分出深浅两条推理路径。
  - `InternalVisual`（模型页）：模型边界内完成并行探索、对抗校验与收敛，被证伪的分支保留但标掉。
  - `ContinuityVisual`（研究页）：上下文掉线、被回看接回，之后逐层验证。
- 三张图与首屏主视觉共用一套语言（基元点阵、1px 细描边、一点品牌青），无素材依赖；`assets/images/detail.jpg` 随后删除。

**文案**

- 去掉格言体与对偶句标题（「结论由对立的分支来怀疑。」这类），改成陈述句。
- 删掉自我表扬式声明（「你在这里看到的边界，就是团队内部的边界」这类）。
- 模型描述压到方向级，只讲路线与判断标准，不展开机制细节，避免创意被直接抄走。

**清理**

- 删除已无引用的 `assets/images/hero.jpg`、`assets/favicon.svg`、`assets/images/detail.jpg`（`grep` 确认零引用）。
- 意外被改到 `docs/index.html` 的改动已用 `revert:` 提交撤回，`git diff --stat origin/Website-Oxygen -- docs/` 为空。

## 还没做（下一阶段）

- **② 模型进展与研究**：`/progress/` 已建立路线级进展、基础架构目标、公开边界、研究方向和记录索引。机制细节保持方向级，完整内容等论文或发布说明公开。
- **③ 定价**：`/pricing/` 已录入 SparkPlan、PrimaPlan 和 Credit+ 的额度、限制与完整对照表。
