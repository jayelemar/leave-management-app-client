import React, { createContext, useState } from "react";
import { LayoutProps } from "../../components/layout/Layout";

interface SidebarContextType {
  isOpen: boolean;
  expandMenu: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
  closeMenu: () => void;
}

const SideBarContext = createContext<SidebarContextType | undefined>(undefined);

export const SideBarContextProvider: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 640);
  const [expandMenu, setExpandMenu] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setExpandMenu(false);
  };

  const closeSidebar = () => {
    setIsOpen(false);
    setExpandMenu(false);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setExpandMenu(false);
  };

  return (
    <SideBarContext.Provider
      value={{
        isOpen,
        expandMenu,
        toggleSidebar,
        closeSidebar,
        openSidebar,
        closeMenu,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarContext;
