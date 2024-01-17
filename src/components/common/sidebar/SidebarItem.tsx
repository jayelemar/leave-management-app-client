import { ChevronRight } from 'lucide-react';
import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom';



interface SideBarItemProps {
  item: {
    title: string;
    icon: React.ReactElement;
    path?: string;
    children?: {
      title: string;
      path: string;
    }[];
  };
  isOpen: boolean;
}

const SidebarItem: FC<SideBarItemProps> = ({item, isOpen}) => {
  const [expandMenu, setExpandMenu] = useState(false)

  const toggleMenu = () => {
    setExpandMenu(!expandMenu)
  };


  return (
    <ul>

      {item.children ? (
        <li>
          <details>
            <summary className={`flex gap-2 whitespace-nowrap rounded-none pl-3 ${!isOpen ? "after:w-0" : "10"}  p-1 block bg-opacity-10 transition duration-150 ease-in-out cursor-pointer border-b-2 `}>
              {item.icon}
              {isOpen ? item.title : null}
              <ChevronRight onClick={toggleMenu} className={` ${!isOpen ? "hidden" : "flex"}`}/>
            </summary>
            <ul className={`${!isOpen ? "hidden" : "block"}`}>
              {item.children.map((child) => (
                <li key={child.path} className=' p-1 block bg-opacity-10 transition duration-150 ease-in-out cursor-pointer border-b-2'>
                  <NavLink to={child.path} className="whitespace-nowrap pl-12" >{child.title}</NavLink>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ) : 
      <li className='flex gap-2  p-1  bg-opacity-10 transition duration-150 ease-in-out cursor-pointer border-b-2 pl-3'>
        <NavLink to={item.path ?? 'path'} className='flex flex-row gap-2'>
        {item.icon}
        {isOpen ? item.title : null }
        </NavLink>
      </li>
    }

    

    </ul>
  )
}

export default SidebarItem
