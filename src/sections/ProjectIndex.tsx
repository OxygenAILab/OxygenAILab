import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects, CATEGORY_FULL, type Category } from '@/data/projects';
import ProjectRow from '@/components/ProjectRow';

const CATEGORY_ORDER: Category[] = [
  'runtime',
  'cognition',
  'engineering',
  'evolution',
  'research',
  'meta',
];

export default function ProjectIndex() {
  return (
    <section className="relative py-24 md:py-32 bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-oxygen-400/70 uppercase mb-5">
              04 — Index
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-white tracking-tight">
              全部项目
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-oxygen-300 hover:text-oxygen-200 transition-colors group"
          >
            筛选与搜索
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="space-y-12">
          {CATEGORY_ORDER.map((cat) => {
            const list = projects.filter((p) => p.category === cat);
            if (list.length === 0) return null;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-baseline gap-4 mb-2 px-6 md:px-8">
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                    {cat}
                  </span>
                  <span className="text-sm text-slate-400">{CATEGORY_FULL[cat]}</span>
                  <span className="font-mono text-xs text-slate-600">· {list.length}</span>
                </div>
                <div className="border-t border-ink-700/40">
                  {list.map((p) => (
                    <ProjectRow key={p.code} project={p} showCategory={false} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
