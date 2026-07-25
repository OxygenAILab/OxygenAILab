import { motion } from 'framer-motion';
import { Mail, Github, ArrowUpRight } from 'lucide-react';
import { ORG_INFO } from '@/data/projects';

export default function Contact() {
  return (
    <section className="relative py-24 md:py-32 bg-ink-950 noise-overlay overflow-hidden">
      {/* 背景装饰：青色光晕 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-oxygen-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs tracking-[0.3em] text-oxygen-400/70 uppercase mb-8"
        >
          05 — Connect
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-light text-white tracking-tight leading-tight"
        >
          让 Agent
          <br />
          <span className="text-gradient-oxygen font-normal">自由呼吸</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <a
            href={`mailto:${ORG_INFO.email}`}
            className="group inline-flex items-center gap-3 font-display text-2xl md:text-4xl font-light text-white hover:text-oxygen-300 transition-colors"
          >
            <Mail className="w-6 h-6 text-oxygen-400" />
            {ORG_INFO.email}
            <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-oxygen-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>

          <div className="mt-4 flex items-center gap-6">
            <a
              href={ORG_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-oxygen-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              github.com/OxygenAILab
            </a>
            <span className="w-px h-4 bg-ink-700" />
            <span className="text-sm font-mono text-slate-500">{ORG_INFO.domain}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
