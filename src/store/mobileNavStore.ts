import { create } from 'zustand';


interface MobileNavStore {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
}

export const useMobileNavStore = create<MobileNavStore>((set) => ({
  isOpen:false,
  setIsOpen: (isOpen) => set({ isOpen })
}))