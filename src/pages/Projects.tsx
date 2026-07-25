import { useMemo } from 'react';
import { Search, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, CATEGORY_LABELS, type Category, type Language } from '@/data/projects';
import { useProjectsStore } from '@/store/useProjectsStore';
import ProjectRow from '@/components/ProjectRow';

const CATEGORIES: (Category | 'all')[] = [
  'all',
  'runtime',
  'cognition',
  'engineering',
  'evolution',
  'research',
  'meta',
];

const LANGUAGES: (Language | 'all')[] = ['all', 'Python', 'Rust', 'Other'];

const LICENSES = ['all', 'MIT', 'GPL-3.0', 'Apache-2.0'];

export default function Projects() {
  const { search, categoryFilter, languageFilter, licenseFilter, setSearch, setCategory, setLanguage, setLicense, reset } =
    useProjectsStore();

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      if (categoryFilter !== 'all' && p.category !== categoryFilter) return false;
      if (languageFilter !== 'all' && p.language !== languageFilter) return false;
      if (licenseFilter !== 'all' && p.license !== licenseFilter) return false;
      if (q && !(`${p.code} ${p.name} ${p.desc}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [search, categoryFilter, languageFilter, licenseFilter]);

  return (
    <div className="min-h-screen bg-ink-950 pt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
        {/* 标题 */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-oxygen-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-6xl font-light text-white tracking-tight">
            Projects
          </h1>
          <p className="mt-3 text-sm text-slate-400 font-mono">
            {filtered.length} / {projects.length} projects
          </p>
        </div>

        {/* 搜索框 */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索代号、名称或描述..."
            className="w-full pl-11 pr-10 py-3.5 bg-ink-900/60 border border-ink-700/50 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-oxygen-500/60 focus:bg-ink-900 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              aria-label="清除搜索"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 筛选侧栏 */}
          <aside className="lg:col-span-3 space-y-8">
            <FilterGroup label="方向">
              {CATEGORIES.map((c) => (
                <FilterButton
                  key={c}
                  active={categoryFilter === c}
                  onClick={() => setCategory(c)}
                >
                  {c === 'all' ? '全部' : CATEGORY_LABELS[c as Category]}
                </FilterButton>
              ))}
            </FilterGroup>

            <FilterGroup label="语言">
              {LANGUAGES.map((l) => (
                <FilterButton
                  key={l}
                  active={languageFilter === l}
                  onClick={() => setLanguage(l)}
                >
                  {l === 'all' ? '全部' : l}
                </FilterButton>
              ))}
            </FilterGroup>

            <FilterGroup label="License">
              {LICENSES.map((l) => (
                <FilterButton
                  key={l}
                  active={licenseFilter === l}
                  onClick={() => setLicense(l)}
                >
                  {l === 'all' ? '全部' : l}
                </FilterButton>
              ))}
            </FilterGroup>

            <button
              onClick={reset}
              className="text-xs font-mono text-slate-500 hover:text-oxygen-300 transition-colors"
            >
              重置筛选
            </button>
          </aside>

          {/* 项目列表 */}
          <div className="lg:col-span-9">
            {filtered.length > 0 ? (
              <div className="border-t border-ink-700/40">
                {filtered.map((p) => (
                  <ProjectRow key={p.code} project={p} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center border border-ink-700/40 rounded-xl">
                <p className="text-slate-400 mb-4">没有匹配的项目</p>
                <button
                  onClick={reset}
                  className="px-5 py-2 rounded-full bg-oxygen-400 text-ink-950 text-sm font-medium hover:bg-oxygen-300 transition-colors"
                >
                  重置筛选
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
        active
          ? 'bg-oxygen-400 text-ink-950'
          : 'bg-ink-800/60 text-slate-400 border border-ink-700/50 hover:text-oxygen-300 hover:border-oxygen-700/40'
      }`}
    >
      {children}
    </button>
  );
}
