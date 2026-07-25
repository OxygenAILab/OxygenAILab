import { Star, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { CATEGORY_LABELS } from '@/data/projects';
import LanguageBadge from './LanguageBadge';

interface ProjectRowProps {
  project: Project;
  showCategory?: boolean;
}

/** 编辑式项目行：代号 + 名称 + 描述 + 元信息条，hover 时左侧青色指示条出现 */
export default function ProjectRow({ project, showCategory = true }: ProjectRowProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block border-b border-ink-700/40 hover:border-oxygen-700/40 transition-colors duration-300"
    >
      {/* 左侧指示条 */}
      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-oxygen-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
      {/* hover 背景微亮 */}
      <span className="absolute inset-0 bg-oxygen-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative grid grid-cols-12 gap-4 px-6 py-6 md:px-8 md:py-7 items-center">
        {/* 代号 */}
        <div className="col-span-3 md:col-span-2">
          <span className="font-mono text-lg md:text-2xl font-bold text-oxygen-400 tracking-tight">
            {project.code}
          </span>
        </div>

        {/* 名称 + 描述 */}
        <div className="col-span-9 md:col-span-6">
          <h3 className="font-display text-lg md:text-xl font-semibold text-white group-hover:text-oxygen-200 transition-colors">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-slate-400 line-clamp-2 group-hover:text-slate-300 transition-colors">
            {project.desc}
          </p>
        </div>

        {/* 元信息 */}
        <div className="col-span-12 md:col-span-4 flex flex-wrap items-center gap-3 md:justify-end mt-2 md:mt-0">
          {showCategory && (
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              {CATEGORY_LABELS[project.category]}
            </span>
          )}
          <LanguageBadge language={project.language} />
          <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            {project.stars}
          </span>
          <span className="text-xs font-mono text-slate-500 hidden md:inline">{project.license}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-oxygen-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </a>
  );
}
