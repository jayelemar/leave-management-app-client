
import { CalendarCheck } from "lucide-react"
import { FC } from "react"
import { Link } from "react-router-dom"




const SidebarHeader:FC = () => {

  return (
    <div className="flex justify-between w-full border-b-2 border-white">
      <Link to='/' >
      <h2 className="text-xl xs:text-lg flex flex-col xs:flex-row xs:gap-2 ml-4 mt-4">
      <CalendarCheck /> Logo
      </h2>
    </Link>

    </div>
  )
}

export default SidebarHeader
