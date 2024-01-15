import { year } from "@/utils/constant"


const Footer = () => {
  return (
    <footer className="z-50">
      <div className="container flex justify-center p-2 bg-base-300 text-base-content text- bg-darkGrey text-white">
        <p className="text-sm">Copyright © {year} - All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
