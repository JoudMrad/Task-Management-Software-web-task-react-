import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  activeSection: string;
  setMenuOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  activeSection: 'hero',
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
}));
