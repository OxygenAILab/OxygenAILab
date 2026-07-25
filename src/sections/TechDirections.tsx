import { motion } from 'framer-motion';
import {
  Cpu,
  Brain,
  Database,
  Gauge,
  GitBranch,
  FlaskConical,
} from 'lucide-react';

const DIRECTIONS = [
  { icon: Cpu, name: 'Runtime', desc: '核心运行时引擎，Agent 执行的基石', code: 'OXY' },
  { icon: Brain, name: 'Cognition', desc: '动态认知推理与认知构建', code: 'ODC · OCC' },
  { icon: Database, name: 'Memory', desc: '分层记忆管理与热页缓存', code: 'OMM' },
  { icon: Gauge, name: 'Performance', desc: '高性能 I/O 聚合与批量处理', code: 'OIA' },
  { icon: GitBranch, name: 'Evolution', desc: 'Agent 自主进化与持续增强', code: 'OSE' },
  { icon: FlaskConical, name: 'Research', desc: 'MoE 外部专家与前沿探索', code: 'OOE · OUC · ATO' },
];

export default function TechDirections() {
  return (
    <section className="relative py-24 md:py-32 bg-ink-950 noise-overlay">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-oxygen-400/70 uppercase mb-5">
            03 — Directions
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-white tracking-tight">
            技术方向
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-700/30">
          {DIRECTIONS.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-ink-950 p-8 md:p-10 hover:bg-ink-900/50 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl border border-ink-700/60 flex items-center justify-center group-hover:border-oxygen-500/60 group-hover:bg-oxygen-500/5 transition-colors">
                  <d.icon className="w-5 h-5 text-slate-400 group-hover:text-oxygen-300 transition-colors" />
                </div>
                <span className="font-mono text-[10px] text-slate-600 group-hover:text-oxygen-500/60 transition-colors tracking-wider">
                  {d.code}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">{d.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{d.desc}</p>
              {/* hover 底部线 */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-oxygen-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
