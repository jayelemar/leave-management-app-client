import { year } from "@/utils/constant"


const Footer = () => {
  return (
    <footer className="h-8 flex justify-center items-center px-2 bg-darkGrey text-white w-full">
        <p className="text-sm">Copyright © {year} - All right reserved</p>
    </footer>
  )
}

export default Footer
