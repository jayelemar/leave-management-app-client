import { FC, useState } from 'react'
import { ItemProps } from './SidebarData'
import { NavLink } from 'react-router-dom'
import SidebarSubmenu from './SidebarSubmenu'
import { useMobileNavStore } from '@/store/mobileNavStore'


type SidebarItemProps = {
  item:ItemProps,
}

const SidebarItem:FC<SidebarItemProps> = ({ item}) => {
  const setIsOpen = useMobileNavStore().setIsOpen
  const [expandMenu, setExpandMenu] = useState(false)

  const toggleMenu = () => {
    setExpandMenu(!expandMenu);
  }

  return (
    <li key={item.path} className=''>
      {item.children ? (
        <SidebarSubmenu item={item} toggleMenu={toggleMenu} />
      ) : (
        <NavLink 
          to={item.path ?? '/'}
          className={({ isActive}) =>  isActive ? 'bg-slate-300 text-muted-foreground  flex gap-2 my-2 p-2 cursor-pointer pl-2 text-lg sideitem' : 'flex gap-2 my-2 p-2 cursor-pointer pl-2  sideitem text-muted-foreground' }
          onClick={() => setIsOpen(false)}
        >
          {item.icon}
          {item.title}
        </NavLink>
      )}
    </li>
  )
}

export default SidebarItem
