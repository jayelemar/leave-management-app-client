

import { MoreVertical } from "lucide-react";
import Logo from "../common/Logo";
import { useMobileNavStore } from "@/store/mobileNavStore";
import MobileNav from "../nav/MobileNav";

function DashboardHeader() {
  const setIsOpen = useMobileNavStore().setIsOpen

  const handleClick = (e:React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(true)
  };

  return (
    
    <header className="flex justify-between items-center h-16 w-full bg-green-50 px-4 z-40 ">
      <div className="flex flex-col xs:relative top-1 z-[100]">
        <Logo/>
      </div>
      <MobileNav/>
      {/* Navbar Icon */}
      <MoreVertical 
        size={30} 
        className="cursor-pointer lg:hidden"
        onClick={handleClick}
      />


    </header>
  );
}

export default DashboardHeader;
