
import { FC } from "react"
import { Link } from "react-router-dom"




const SidebarHeader:FC = () => {

  return (
    <div className="flex justify-between w-full">
      <Link to='/' >
      <h2 className="text-lg xs:text-lg flex flex-col xs:flex-row xs:gap-2 ml-4 mt-4">
      logo
      </h2>
    </Link>

    </div>
  )
}

export default SidebarHeader
