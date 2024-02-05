

import { MoreVertical } from "lucide-react";
import Logo from "../layout/Logo";
import { useSidebarStore } from "@/store/sidebarStore";

function DashboardHeader() {

  const openSidebar = useSidebarStore((state) => state.openSidebar)
  const handleClick = (e:React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    openSidebar(true)
  };

  return (
    
    <header className="flex justify-between items-center h-16 w-full bg-green-50 px-4 ">
      <div className="flex flex-col xs:relative top-1 z-[100]">
        <Logo/>
      </div>
      <MoreVertical 
        size={30} 
        className="cursor-pointer lg:hidden"
        onClick={handleClick}
      />
    </header>
  );
}

export default DashboardHeader;
