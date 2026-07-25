import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OxygenLatticeScene from '@/three/OxygenLatticeScene';

const STORAGE_KEY = 'oxygen-welcomed';

/** 首次访问纯艺术欢迎层：全屏氧分子 WebGL + 组织身份，localStorage 记忆 */
export default function WelcomeOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setShow(true);
      }
    } catch {
      setShow(true);
    }
  }, []);

  const enter = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
    setShow(false);
  };

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') enter();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-ink-950 cursor-pointer"
          onClick={enter}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          {/* WebGL 背景 */}
          <div className="absolute inset-0">
            <OxygenLatticeScene />
          </div>

          {/* 渐变遮罩，增强文字可读性 */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60 pointer-events-none" />

          {/* 居中内容 */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-oxygen-400/80 uppercase mb-6">
                AI Laboratory
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tightest text-white leading-none">
                Oxygen
                <span className="block font-normal text-gradient-oxygen mt-1">AI Lab</span>
              </h1>
              <p className="mt-8 font-mono text-sm md:text-base text-slate-400 tracking-wide">
                Breath for Agents.
              </p>
            </motion.div>

            <motion.button
              onClick={enter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-16 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 hover:text-oxygen-300 transition-colors uppercase"
            >
              点击或按 Enter 进入
              <span className="inline-block w-8 h-px bg-current" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
