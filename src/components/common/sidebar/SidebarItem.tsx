import { ChevronRight } from 'lucide-react';
import { FC, useState } from 'react'
import { Link } from 'react-router-dom';



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

      {item.children && (
        <li>
          <details>
            <summary className={`flex gap-2 whitespace-nowrap rounded-none ${!isOpen ? "after:w-0" : "10"} `}>
              {item.icon}
              {isOpen ? item.title : null}
              <ChevronRight onClick={toggleMenu} className={` ${!isOpen ? "hidden" : "flex"}`}/>
            </summary>
            <ul className={`${!isOpen ? "hidden" : "block"}`}>
              {item.children.map((child) => (
                <li key={child.path}>
                  <Link to={child.path} className="whitespace-nowrap" >{child.title}</Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      )}


      <li className='flex gap-2'>
        {item.icon}
        {isOpen ? item.title : null }
      </li>
    </ul>
  )
}

export default SidebarItem
