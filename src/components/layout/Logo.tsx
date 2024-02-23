import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className=" text-black cursor-pointer mt-4 xs:mt-2">
      <Link to='/' >
        <h2 className="text-lg xs:text-2xl flex flex-col xs:flex-row xs:gap-2">
        Leave <span className="text-solidGreen">Management System</span>
        </h2>
      </Link>
    </div>
  )
}

export default Logo
