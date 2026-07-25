import { motion } from 'framer-motion';
import { ORG_INFO } from '@/data/projects';
import LanguageBadge from '@/components/LanguageBadge';

const STATS = [
  { value: String(ORG_INFO.projectCount), label: 'Open-source Projects' },
  { value: '2', label: 'Primary Languages' },
  { value: '∞', label: 'Agent Enhancement' },
];

export default function LabIntro() {
  return (
    <section className="relative py-24 md:py-32 bg-ink-950 noise-overlay">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* 左：定位文字 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-oxygen-400/70 uppercase mb-5">
              01 — Laboratory
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
              为 Agent 注入<span className="text-gradient-oxygen font-normal">氧气</span>，
              <br className="hidden md:block" />
              让智能体自由呼吸。
            </h2>
            <p className="mt-8 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {ORG_INFO.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {ORG_INFO.languages.map((lang) => (
                <LanguageBadge key={lang} language={lang} size="md" />
              ))}
            </div>
          </motion.div>

          {/* 右：关键数据 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-ink-700/40"
          >
            <div className="space-y-8">
              {STATS.map((s, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span className="font-display text-5xl md:text-6xl font-light text-gradient-oxygen leading-none tabular-nums">
                    {s.value}
                  </span>
                  <span className="text-sm text-slate-400 font-mono">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
