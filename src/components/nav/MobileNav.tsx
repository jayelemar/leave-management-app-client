

import Logo from '../common/Logo';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import { useMobileNavStore } from '@/store/mobileNavStore'
import SidebarList from '../sidebar/SidebarList';


const MobileNav = () => {
  const {isOpen, setIsOpen} = useMobileNavStore()

  const handleNavClick = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className="z-50">
      <Sheet open={isOpen} onOpenChange={handleNavClick}>
        <SheetContent side={'right'}>
          <SheetHeader>
            <SheetTitle className="text-left mb-12">
              <Logo/>
            </SheetTitle>
            </SheetHeader>
          <div className="">
            <SidebarList/>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav