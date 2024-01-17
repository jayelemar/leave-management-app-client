import { ChevronsLeftRight } from 'lucide-react'
import { ReactNode, useState } from 'react'
import menu from './SidebarData'
import SidebarItem from './SidebarItem'

const Sidebar = ({children}:{children: ReactNode}) => {
  const [isOpen, setisOpen] = useState(true)

  const toggleSidebar = () => {
    setisOpen(!isOpen)
  };
  return (
    <section>
      <div className="flex flex-col  min-h-[100vh]">
        <div 
          className={`flex justify-between items-center h-10 overflow-hidden p-2 bg-solidGreen flex-shrink-0 transition-all duration-500 
          ${isOpen ? 'w-60' : 'w-12' }`}
        >
          {isOpen ? <h5 className='font-medium'>logo</h5> : null}
          <ChevronsLeftRight size={25} onClick={toggleSidebar} className='ml-1 cursor-pointer'/>
        </div>
        <div className="">
          {menu.map((item, index) : ReactNode => {
            return(
              <SidebarItem key={index} item={item} isOpen={isOpen}/>
            )
          })}
        </div>
      </div>
      <main className='w-full flex-col min-h-[100vh]'>
        {children}
      </main>
    </section>
  )
}

export default Sidebar
