import React, { FC } from 'react'
import SidebarHeader from './SidebarHeader';
import SidebarList from './SidebarList';
import { useSidebarStore } from '@/store/sidebarStore';
import MobileNav from '../mobile/MobileNav';

type SidebarProps = {
  children: React.ReactNode
}

const Sidebar:FC<SidebarProps> = ({ children }) => {
  const isOpen = useSidebarStore().isOpen

  return (
    <nav className={`relative w-full flex`}>
      <div className="lg:hidden">
      <MobileNav/>
      </div>


      <div className={`flex-col  min-h-[100vh] bg-slate-100 
          top-0 left-0 hidden lg:flex  flex-shrink-0 transition-all duration-500 ease-ou 
          w-64`}
      >

        <div className={`flex justify-between items-center h-16 overflow-hidden bg-slate-700 flex-shrink-0
          transition-all duration-500 ease-out w-full text-yellow-50`}
        >
          <SidebarHeader  />
        </div>

        <div>
          <SidebarList />
        </div>

      </div>

      <div className={`top-0 w-full ${isOpen ? 'left-60' : 'left-0 lg:left-12' } `}>
        {children}
      </div>

    </nav>
  );
}

export default Sidebar
