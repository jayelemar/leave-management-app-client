import { ChevronsUpDown } from 'lucide-react'
import { FC } from 'react'
import { ItemProps } from './SidebarData'
import { NavLink } from 'react-router-dom'

type SidebarSubmenuProps = {
  item: ItemProps,
  toggleMenu: () => void,
}

const SidebarSubmenu:FC<SidebarSubmenuProps> = ({ item, toggleMenu }) => {


  return (
    <details>
      <summary
        className={`flex gap-2 whitespace-nowrap  pl-3 p-2 bg-opacity-10 transition duration-150 ease-in-out cursor-pointer flex justify-between hover:bg-slate-500 m-1 rounded-lg hover:text-yellow-50`}
        onClick={toggleMenu}
      >
        <div className="flex flex-row gap-2 ">
          {item.icon}
          {item.title}
        </div>

        <ChevronsUpDown size={20}/>
      </summary>
      <ul>
        { (item.children as ItemProps[]).map((child) => (
          <li 
            key={child.path}
            className="p-2 block bg-opacity-10 transition duration-150 ease-in-out cursor-pointer hover:bg-slate-500 m-1 rounded-lg hover:text-yellow-50"
          >
            <NavLink to={child.path ?? '/'} className='whitespace-nowrap pl-12'>
              {child.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default SidebarSubmenu
