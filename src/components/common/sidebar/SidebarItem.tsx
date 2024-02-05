import { FC, useState } from 'react'
import { ItemProps } from './SidebarData'
import { NavLink } from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu'


type SidebarItemProps = {
  item:ItemProps,
}

const SidebarItem:FC<SidebarItemProps> = ({ item}) => {
  const [expandMenu, setExpandMenu] = useState(false)

  const toggleMenu = () => {
    setExpandMenu(!expandMenu);

  }

  return (
    <li key={item.path}>
      {item.children ? (
        <SidebarSubmenu item={item} toggleMenu={toggleMenu} />
      ) : (
        <NavLink to={item.path ?? '/'}
          className={`flex gap-2  p-2  bg-opacity-10 transition duration-150 ease-in-out cursor-pointer border-b-2 pl-3  hover:bg-slate-500 m-1 rounded-lg hover:text-yellow-50`}
        >
          {item.icon}
          {item.title}
        </NavLink>
      )}
    </li>
  )
}

export default SidebarItem
