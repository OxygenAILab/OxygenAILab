import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import OxygenLatticeScene from '@/three/OxygenLatticeScene';
import { ORG_INFO } from '@/data/projects';

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink-950">
      {/* WebGL 背景 / 降级渐变 */}
      <div className="absolute inset-0">
        {reduced ? (
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950" />
        ) : (
          <OxygenLatticeScene />
        )}
      </div>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent pointer-events-none" />

      {/* 内容 */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl w-full px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-xs md:text-sm tracking-[0.3em] text-oxygen-400/80 uppercase mb-6"
          >
            AI Laboratory · China
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tightest text-white leading-[0.95]"
          >
            Oxygen
            <span className="block font-normal text-gradient-oxygen">AI Lab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-xl text-base md:text-lg text-slate-300/90 leading-relaxed"
          >
            {ORG_INFO.tagline} 专注 AI Agent 增强与生产力加速的研究型实验室。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-oxygen-400 text-ink-950 font-medium text-sm hover:bg-oxygen-300 transition-colors glow-oxygen"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={ORG_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-700 text-slate-200 font-medium text-sm hover:border-oxygen-500 hover:text-oxygen-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              Visit GitHub
            </a>
          </motion.div>
        </div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-oxygen-400/60 to-transparent" />
      </motion.div>
    </section>
  );
}
