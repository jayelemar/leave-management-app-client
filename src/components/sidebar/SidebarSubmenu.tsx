
import { FC } from 'react'
import { ItemProps } from './SidebarData'
import { NavLink } from 'react-router-dom'
import { useMobileNavStore } from '@/store/mobileNavStore'

type SidebarSubmenuProps = {
  item: ItemProps,
  toggleMenu: () => void,
}

const SidebarSubmenu:FC<SidebarSubmenuProps> = ({ item, toggleMenu }) => {
  const setIsOpen = useMobileNavStore().setIsOpen


  return (
    <details>
      <summary
        className={`flex gap-2 whitespace-nowrap  py-2 cursor-pointer justify-between `}
        onClick={toggleMenu}
      >
        <div className="flex justify-start items-center flex-row gap-2 sideitem  w-[100%] py-2 px-2  cursor-pointer text-lg text-muted-foreground">
          {item.icon}
          {item.title}
        </div>
      </summary>
      <ul>
        { (item.children as ItemProps[]).map((child) => (
          <li 
            key={child.path}
            className="sideitem w-[97%] py-2 px-0  cursor-pointer text-lg flex gap-2 my-2 text-muted-foreground "
          >
            <NavLink 
            to={child.path ?? '/'} 

            className={({ isActive}) =>  isActive ? 'bg-slate-400  flex gap-2 my-2 p-2 cursor-pointer  text-lg sideitem whitespace-nowrap pl-12' : 'flex gap-2  px-2 cursor-pointer  text-lg sideitem whitespace-nowrap pl-12' }
            onClick={() => setIsOpen(false)}
            >
              {child.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default SidebarSubmenu
