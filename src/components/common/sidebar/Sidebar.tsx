import { ChevronsLeftRight } from 'lucide-react'
import { ReactNode, useState } from 'react'
import menu from './SidebarData'
import SidebarItem from './SidebarItem'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({children}:{children: ReactNode}) => {
  const [isOpen, setisOpen] = useState(true)
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setisOpen(!isOpen)
  };

  const handleClickHome = () => {
    navigate('/')
  };
  return (
    <section className='gap-x-0 md:px-0'>
      <div className="flex flex-col  min-h-[100vh] bg-slate-100 ">
        <div 
          className={`flex justify-between items-center h-10 overflow-hidden p-2 bg-solidGreen flex-shrink-0 transition-all duration-500 ease-out
          ${isOpen ? 'w-60' : 'w-12' }`}
        >
          {isOpen ? <h5 className='font-medium pl-3 cursor-pointer' onClick={handleClickHome}>logo</h5> : null}
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
        {children}
    </section>
  )
}

export default Sidebar
