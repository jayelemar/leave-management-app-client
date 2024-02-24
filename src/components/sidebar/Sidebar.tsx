import React, { FC } from 'react'

import SidebarList from './SidebarList';
import SidebarHeader from './SidebarHeader';


type SidebarProps = {
  children: React.ReactNode
}

const Sidebar:FC<SidebarProps> = ({ children }) => {


  return (
    <nav className={`relative w-full flex `}>
      <div className={`flex-col  min-h-[100vh] 
          top-0 left-0 hidden lg:flex  flex-shrink-0 transition-all duration-500 ease-out 
          w-64 border border-r-slate-300`}
      >

        <div className={`flex justify-between items-center h-16 overflow-hidden  flex-shrink-0
          transition-all duration-500 ease-out w-full text-yellow-50`}
        >
          <SidebarHeader  />
        </div>

        <div className='mt-6'>
          <SidebarList />
        </div>

      </div>

      <div className={`top-0 w-full 'left-60' : 'left-0 lg:left-12' } `}>
        {children}
      </div>

    </nav>
  );
}

export default Sidebar
