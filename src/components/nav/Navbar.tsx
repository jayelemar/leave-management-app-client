import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Logo from '../common/Logo'
import { NavLink, useLocation } from 'react-router-dom'




const Navbar = () => {

  const location = useLocation();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="cursor-pointer m-1 lg:hidden" size={30}/>
      </SheetTrigger>
      <SheetContent className="w-[320px] xs:w-[380px]" side={'left'}>
        <SheetHeader>
          <SheetDescription>
            <div className="w-full whitespace-nowrap my-16">
            <Logo/>
            </div>
            <div className='text-center'>
              {location.pathname !== '/' && (
                <NavLink 
                to='/' 
                className='block rounded-md bg-slate-50 px-3.5 py-3 my-2 text-lg font-normal text-darkGrey shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
              >
                login
              </NavLink>
              )}
              {location.pathname !== '/register' && (
                <NavLink 
                  to='/register' 
                  className='block rounded-md bg-slate-50 px-3.5 py-3 my-2 text-lg font-normal text-darkGrey shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
                >
                  Register
                </NavLink>
              )}
              {location.pathname !== '/forgotpassword' && (
                <NavLink 
                  to='forgotpassword' 
                  className='block rounded-md bg-slate-50 px-3.5 py-3 my-2 text-lg font-normal text-darkGrey shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
                >
                    Forget Password
                </NavLink>
              )}
              
              
              
            </div>

          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Navbar
