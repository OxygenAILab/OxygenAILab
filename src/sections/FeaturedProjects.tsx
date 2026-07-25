import { motion } from 'framer-motion';
import { Star, ArrowUpRight } from 'lucide-react';
import { featuredProjects, CATEGORY_LABELS } from '@/data/projects';
import LanguageBadge from '@/components/LanguageBadge';

export default function FeaturedProjects() {
  return (
    <section className="relative py-24 md:py-32 bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-oxygen-400/70 uppercase mb-5">
            02 — Featured
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-white tracking-tight">
            代表项目
          </h2>
        </motion.div>

        <div className="space-y-4">
          {featuredProjects.map((p, i) => (
            <motion.a
              key={p.code}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative block border-t border-ink-700/40 pt-8 md:pt-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* 代号 */}
                <div className="md:col-span-3">
                  <span className="font-mono text-4xl md:text-6xl font-bold text-oxygen-400/90 group-hover:text-oxygen-300 transition-colors tracking-tight">
                    {p.code}
                  </span>
                  <p className="mt-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {CATEGORY_LABELS[p.category]}
                  </p>
                </div>

                {/* 名称 + 描述 */}
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-white group-hover:text-oxygen-200 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">
                    {p.desc}
                  </p>
                </div>

                {/* 元信息 */}
                <div className="md:col-span-2 flex md:flex-col items-start md:items-end gap-4 md:gap-3">
                  <span className="inline-flex items-center gap-1.5 text-sm font-mono text-amber-400">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    {p.stars}
                  </span>
                  <LanguageBadge language={p.language} />
                  <span className="text-xs font-mono text-slate-500">{p.license}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-oxygen-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
