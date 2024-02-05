import { FC } from 'react';

import items, { ItemProps } from './SidebarData';
import SidebarItem from './SidebarItem';



const SidebarList: FC = () => {


  return (
    <ul>
      {items.map((item: ItemProps) => {
        return (
          <SidebarItem key={item.path} item={item}/>
        )
      })}
    </ul>
  );
};

export default SidebarList;
