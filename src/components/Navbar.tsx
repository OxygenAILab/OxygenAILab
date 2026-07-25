import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';
import { ORG_INFO } from '@/data/projects';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-ink-700/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          {/* O₂ 标志 */}
          <span className="relative flex items-center justify-center w-8 h-8">
            <span className="absolute w-2.5 h-2.5 rounded-full bg-oxygen-400 glow-oxygen top-1" />
            <span className="absolute w-2.5 h-2.5 rounded-full bg-oxygen-200 bottom-1" />
            <span className="absolute w-0.5 h-3 bg-oxygen-500/60" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Oxygen<span className="text-oxygen-400"> AI</span> Lab
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-oxygen-300' : 'text-slate-300 hover:text-white'}`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-medium transition-colors ${location.pathname === '/projects' ? 'text-oxygen-300' : 'text-slate-300 hover:text-white'}`}
          >
            Projects
          </Link>
          <a
            href={ORG_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="切换菜单"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* 移动端菜单 */}
      {open && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-xl border-b border-ink-700/40 px-6 py-4 flex flex-col gap-4">
          <Link to="/" className="text-sm font-medium text-slate-300 hover:text-oxygen-300">Home</Link>
          <Link to="/projects" className="text-sm font-medium text-slate-300 hover:text-oxygen-300">Projects</Link>
          <a href={ORG_INFO.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-oxygen-300 inline-flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      )}
    </header>
  );
}
