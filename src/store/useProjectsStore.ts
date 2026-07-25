import { create } from 'zustand';
import type { Category, Language } from '@/data/projects';

interface ProjectsState {
  search: string;
  categoryFilter: Category | 'all';
  languageFilter: Language | 'all';
  licenseFilter: string | 'all';
  setSearch: (s: string) => void;
  setCategory: (c: Category | 'all') => void;
  setLanguage: (l: Language | 'all') => void;
  setLicense: (l: string | 'all') => void;
  reset: () => void;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  search: '',
  categoryFilter: 'all',
  languageFilter: 'all',
  licenseFilter: 'all',
  setSearch: (s) => set({ search: s }),
  setCategory: (c) => set({ categoryFilter: c }),
  setLanguage: (l) => set({ languageFilter: l }),
  setLicense: (l) => set({ licenseFilter: l }),
  reset: () =>
    set({ search: '', categoryFilter: 'all', languageFilter: 'all', licenseFilter: 'all' }),
}));
