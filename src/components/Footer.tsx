import { Github, Mail, Globe } from 'lucide-react';
import { ORG_INFO } from '@/data/projects';

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700/40 bg-ink-950 noise-overlay">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 品牌 */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="relative flex items-center justify-center w-7 h-7">
                <span className="absolute w-2 h-2 rounded-full bg-oxygen-400 top-0.5" />
                <span className="absolute w-2 h-2 rounded-full bg-oxygen-200 bottom-0.5" />
              </span>
              <span className="font-display text-base font-semibold text-white">
                Oxygen AI Lab
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              {ORG_INFO.tagline} 专注 AI Agent 增强与生产力加速。
            </p>
          </div>

          {/* 链接 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${ORG_INFO.email}`} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-oxygen-300 transition-colors">
                  <Mail className="w-4 h-4" /> {ORG_INFO.email}
                </a>
              </li>
              <li>
                <a href={ORG_INFO.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-oxygen-300 transition-colors">
                  <Github className="w-4 h-4" /> GitHub Organization
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <Globe className="w-4 h-4" /> {ORG_INFO.domain}
                </span>
              </li>
            </ul>
          </div>

          {/* 信息 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Lab</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>{ORG_INFO.projectCount} open-source projects</li>
              <li>Python · Rust</li>
              <li>{ORG_INFO.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-700/30 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono text-slate-500">
            © {new Date().getFullYear()} Oxygen AI Lab. GPL-3.0
          </p>
          <p className="text-xs font-mono text-slate-600">
            Built with React · Vite · Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
