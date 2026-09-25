/**
 * 分栏线稿图：与首屏主视觉同一套语言（细描边 + 基元点阵 + 一点品牌青），纯 SVG，无素材依赖。
 * 三张图各自对应所在区块的命题，不复用同一张图。
 */

export function DepthVisual() {
  return (
    <svg
      className="split-art"
      viewBox="0 0 640 400"
      role="img"
      aria-label="同一条请求进入后按任务难度分出深浅两条推理路径的示意图"
    >
      <defs>
        <radialGradient id="depthHalo">
          <stop offset="0%" className="art-stop-core" />
          <stop offset="55%" className="art-stop-mid" />
          <stop offset="100%" className="art-stop-edge" />
        </radialGradient>
      </defs>

      {/* 深度基准线与右侧深度刻度 */}
      <g className="split-art-group">
        <path
          className="split-art-layer"
          d="M 84 108 H 580 M 84 172 H 580 M 84 236 H 580 M 84 300 H 580"
        />
        <path
          className="split-art-layer"
          d="M 612 108 V 300 M 606 108 H 618 M 606 172 H 618 M 606 236 H 618 M 606 300 H 618"
        />
      </g>

      <g className="split-art-group-late">
        <circle className="split-art-node" cx="56" cy="108" r="5" />
        <path className="split-art-line" d="M 61 108 H 204" />

        {/* 浅路径：停在第一层 */}
        <path className="split-art-line-faint" d="M 228 108 H 548" />
        <circle className="split-art-node" cx="556" cy="108" r="5" />

        {/* 深路径：逐层下行 */}
        <path
          className="split-art-line"
          d="M 228 108 C 296 108 292 172 356 172 C 424 172 420 236 484 236 C 528 236 528 300 548 300"
        />
        <circle className="split-art-node" cx="356" cy="172" r="5" />
        <circle className="split-art-node" cx="484" cy="236" r="5" />
        <circle className="split-art-node" cx="556" cy="300" r="5" />
      </g>

      {/* 难度判断点 */}
      <g className="split-art-group-late">
        <circle className="split-art-halo" cx="212" cy="108" r="46" fill="url(#depthHalo)" />
        <rect className="split-art-spark" x="204" y="100" width="16" height="16" rx="2" />
      </g>
    </svg>
  );
}

export function InternalVisual() {
  return (
    <svg
      className="split-art"
      viewBox="0 0 640 400"
      role="img"
      aria-label="模型边界内先展开并行探索分支、再收敛到单一结论的示意图"
    >
      <defs>
        <radialGradient id="dcmHalo">
          <stop offset="0%" className="art-stop-core" />
          <stop offset="55%" className="art-stop-mid" />
          <stop offset="100%" className="art-stop-edge" />
        </radialGradient>
      </defs>

      {/* 模型边界：探索与收敛都发生在框内 */}
      <rect className="split-art-frame" x="64" y="84" width="408" height="232" rx="20" />

      <g className="split-art-group-late">
        <circle className="split-art-node" cx="40" cy="200" r="5" />
        <path className="split-art-line" d="M 45 200 H 100" />
        <circle className="split-art-node" cx="104" cy="200" r="5" />

        {/* 展开分支 */}
        <path className="split-art-line" d="M 109 200 C 144 200 158 124 196 124" />
        <path className="split-art-line" d="M 109 200 C 144 200 160 200 196 200" />
        <path className="split-art-line-faint" d="M 109 200 C 144 200 158 276 196 276" />
        <circle className="split-art-node" cx="204" cy="124" r="5" />
        <circle className="split-art-node" cx="204" cy="200" r="5" />

        {/* 负责证伪的分支：不取平均，保留但标掉 */}
        <circle className="split-art-falsify" cx="204" cy="276" r="6" />
        <path className="split-art-falsify" d="M 199 271 L 209 281 M 209 271 L 199 281" />

        {/* 并行推进 */}
        <path className="split-art-line" d="M 212 124 H 300" />
        <path className="split-art-line" d="M 212 200 H 300" />
        <path className="split-art-line-faint" d="M 212 276 H 300" />

        {/* 收敛为一点 */}
        <path className="split-art-line" d="M 300 124 C 342 124 348 200 378 200" />
        <path className="split-art-line" d="M 300 200 H 378" />
        <path className="split-art-line-faint" d="M 300 276 C 342 276 348 200 378 200" />

        {/* 出口 */}
        <path className="split-art-line" d="M 402 200 H 528" />
        <circle className="split-art-node" cx="536" cy="200" r="5" />
      </g>

      <g className="split-art-group-late">
        <circle className="split-art-halo" cx="390" cy="200" r="56" fill="url(#dcmHalo)" />
        <rect className="split-art-spark" x="382" y="192" width="16" height="16" rx="2" />
      </g>
    </svg>
  );
}

export function ContinuityVisual() {
  return (
    <svg
      className="split-art"
      viewBox="0 0 640 400"
      role="img"
      aria-label="上下文在长任务中掉线、被回看接回并逐层验证的示意图"
    >
      <defs>
        <marker
          id="lookArrow"
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="9"
          markerHeight="9"
          orient="auto"
        >
          <path className="split-art-arrow-brand" d="M 0 0.6 L 7.4 4 L 0 7.4 Z" />
        </marker>
      </defs>

      <g className="split-art-group">
        {/* 上下文主线，在中间断开 */}
        <path className="split-art-line" d="M 56 176 H 316" />
        <path className="split-art-line" d="M 384 176 H 576" />
        <circle className="split-art-node" cx="112" cy="176" r="5" />
        <circle className="split-art-node" cx="208" cy="176" r="5" />
        <circle className="split-art-node" cx="272" cy="176" r="5" />
        <circle className="split-art-node" cx="432" cy="176" r="5" />
        <circle className="split-art-node" cx="576" cy="176" r="5" />

        {/* 掉线处 */}
        <circle className="split-art-break" cx="350" cy="176" r="7" />
        <path className="split-art-break" d="M 350 138 V 214" />
      </g>

      <g className="split-art-group-late">
        {/* 接回之后的层层验证 */}
        <path
          className="split-art-gate"
          d="M 486 96 V 256 M 486 128 H 502 M 486 176 H 502 M 486 224 H 502"
        />
        <path
          className="split-art-gate"
          d="M 542 96 V 256 M 542 128 H 558 M 542 176 H 558 M 542 224 H 558"
        />

        {/* 回看：从掉线之后折回掉线之前 */}
        <path
          className="split-art-look"
          d="M 432 176 C 432 306 286 306 286 188"
          markerEnd="url(#lookArrow)"
        />
      </g>
    </svg>
  );
}