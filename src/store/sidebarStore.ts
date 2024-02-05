import { create } from 'zustand';



interface SidebarStore {
  isOpen: boolean,
  openSidebar: (isOpen:boolean) => void,
  toggleSidebar: (isOpen: boolean) => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  openSidebar: (isOpen) => set({isOpen}),
  toggleSidebar: (isOpen) => set({isOpen: !isOpen})
}))