import { Menu } from "lucide-react"
import Logo from "./Logo"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="container h-16 max-w-1000 flex justify-between items-center relative mx-2 px-4">
        <Logo/>

        <nav className="hidden lg:flex gap-x-7">
            <NavLink 
              to='/' 
              className={({ isActive }) => isActive ? 'text-orange-400 underline underline-offset-4' : '' }
            >
              Home
            </NavLink>
            <NavLink 
              to='/dashboard'
              className={({ isActive }) => isActive ?  'text-orange-400 underline underline-offset-4' : ''}
            >
              Dashboard
            </NavLink>
        </nav>
  
        <Menu className="cursor-pointer m-1 lg:hidden" size={30}/>
        <div className="hidden lg:flex">
          <NavLink 
            to='/register'
            className={({ isActive }) => isActive ?  'text-orange-400 underline underline-offset-4' : ''}
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
