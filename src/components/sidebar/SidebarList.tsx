import { FC } from 'react';

import items, { ItemProps } from './SidebarData';
import SidebarItem from './SidebarItem';



const SidebarList: FC = () => {


  return (
    <ul className='
    text-yellow-50'>
      {items.map((item: ItemProps) => {
        return (
          <SidebarItem key={item.id} item={item}/>
        )
      })}
    </ul>
  );
};

export default SidebarList;
