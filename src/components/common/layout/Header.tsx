import { Menu } from "lucide-react"
import Logo from "@/components/common/layout/Logo"
import { NavLink } from "react-router-dom"
import ShowOnLogout from "../protect/ShowOnLogout"
import ShowOnLogin from "../protect/ShowOnLogin"

const Header = () => {
  return (
    <header className="h-16 flex justify-between items-center mx-2 px-2">
        <Logo/>

        <nav className="hidden lg:flex gap-x-7">
            <NavLink 
              to='/' 
              className={({ isActive }) => isActive ? 'text-rose-500 underline underline-offset-4' : '' }
            >
              Home
            </NavLink>

            <ShowOnLogin>
              <NavLink 
                to='/dashboard'
                className={({ isActive }) => isActive ?  'text-rose-500 underline underline-offset-4' : ''}
              >
                Dashboard
              </NavLink>
            </ShowOnLogin>

        </nav>
  
        <Menu className="cursor-pointer m-1 lg:hidden" size={30}/>
        <div className="hidden lg:flex">

          <ShowOnLogout>
            <NavLink 
              to='/register'
              className={({ isActive }) => isActive ?  'text-rose-500 underline underline-offset-4' : ''}
            >
              Register
            </NavLink>
          </ShowOnLogout>

        </div>
    </header>
  )
}

export default Header
