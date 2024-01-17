import { year } from "@/utils/constant"


const Footer = () => {
  return (
    <footer className="h-8 flex justify-center items-center mx-2 px-2 bg-darkGrey text-white">
        <p className="text-sm">Copyright © {year} - All right reserved</p>
    </footer>
  )
}

export default Footer
