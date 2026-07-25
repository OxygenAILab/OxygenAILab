import type { Language } from '@/data/projects';

const LANG_COLORS: Record<Language, { dot: string; text: string; label: string }> = {
  Python: { dot: 'bg-oxygen-400', text: 'text-oxygen-300', label: 'Python' },
  Rust: { dot: 'bg-amber-500', text: 'text-amber-400', label: 'Rust' },
  Other: { dot: 'bg-slate-400', text: 'text-slate-300', label: 'Other' },
};

export default function LanguageBadge({ language, size = 'sm' }: { language: Language; size?: 'sm' | 'md' }) {
  const c = LANG_COLORS[language];
  const pad = size === 'md' ? 'px-3 py-1.5' : 'px-2.5 py-1';
  const text = size === 'md' ? 'text-sm' : 'text-xs';
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${pad} ${text} font-mono font-medium bg-ink-800/60 border border-ink-700/50 ${c.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}
