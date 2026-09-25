import { useEffect, useRef } from "react";

/**
 * 首屏装饰件：基元点阵 + 节点连线网络 + 星火光核 + 游走粒子。
 *
 * 母题取自「氧合万物」：细描边点阵是「基元」，节点与连线是
 * 基元之间的组合关系，品牌色菱形是「星火」。参照 stepfun-design skill 的主视觉公式
 * （细点阵 + 一个品牌色光核，占视口一侧、CSS/SVG 绘制、无素材依赖）。
 * 刻意与 Prima 站区分：那边是玻璃板拼贴 + 同心量具环，这边是星图式网络。
 *
 * 三层运动（与 Prima 站同一套手感）：
 *   1. 入场：各层按不同延迟淡入（cubic-bezier(.22,1,.36,1)）
 *   2. 常态：点阵呼吸、连线明暗流动、节点错时闪烁、光核呼吸、粒子游走
 *   3. 响应：随指针做小幅分层位移（写入 --art-mx / --art-my）
 * 无障碍：容器 aria-hidden；prefers-reduced-motion 下仅保留静态构图。
 */

// 节点坐标（viewBox 640x520）；第 0 个是星火所在的枢纽
const nodes = [
  { x: 320, y: 250 },
  { x: 168, y: 132 },
  { x: 236, y: 398 },
  { x: 452, y: 168 },
  { x: 508, y: 340 },
  { x: 120, y: 300 },
  { x: 396, y: 432 },
  { x: 560, y: 96 },
];

// 连线只连相邻层，形成一张稀疏的网而不是一团线
const edges: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 7], [3, 7], [2, 6], [4, 6], [5, 1], [5, 2], [3, 4],
];

export default function HeroArtwork() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = rootRef.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let tx = 0;
    let ty = 0;

    const apply = () => {
      frame = 0;
      host.style.setProperty("--art-mx", tx.toFixed(3));
      host.style.setProperty("--art-my", ty.toFixed(3));
    };

    const onMove = (event: PointerEvent) => {
      tx = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
      ty = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
      if (!frame) frame = window.requestAnimationFrame(apply);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-field" ref={rootRef}>
        <span className="art-grid" />

        <svg className="art-graph" viewBox="0 0 640 520" aria-hidden="true">
          <defs>
            <radialGradient id="artSpark">
              <stop offset="0%" className="art-stop-core" />
              <stop offset="42%" className="art-stop-mid" />
              <stop offset="100%" className="art-stop-edge" />
            </radialGradient>
          </defs>

          <g className="art-edges">
            {edges.map(([a, b]) => (
              <line
                key={`${a}-${b}`}
                className="art-edge"
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                style={{ animationDelay: `${((a * 7 + b * 3) % 11) * 0.6}s` }}
              />
            ))}
          </g>

          <g className="art-nodes">
            {nodes.map((node, index) => (
              <rect
                key={`${node.x}-${node.y}`}
                className={index === 0 ? "art-node art-node-hub" : "art-node"}
                x={node.x - 7}
                y={node.y - 7}
                width={14}
                height={14}
                style={{ animationDelay: `${(index * 1.3) % 7}s` }}
              />
            ))}
          </g>

          {/* 星火光核：径向渐变光晕 + 品牌色菱形 */}
          <circle className="art-halo" cx={320} cy={250} r={150} fill="url(#artSpark)" />
          <rect
            className="art-core"
            x={320 - 10}
            y={250 - 10}
            width={20}
            height={20}
          />
        </svg>

        <span className="art-particle art-particle-a" />
        <span className="art-particle art-particle-b" />
        <span className="art-particle art-particle-c" />
        <span className="art-particle art-particle-d" />
      </div>
    </div>
  );
}
