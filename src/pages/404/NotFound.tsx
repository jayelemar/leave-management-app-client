import { FC } from "react"
import NotFoundImg from "@/assets/not-found.svg"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const NotFound: FC = () => {

  return (
    <section>
      <div className="container flex justify-center items-center min-h-[80vh] flex-col">
          <img src={NotFoundImg} width={300} alt="not-found.img" />
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-xl">Oops! Page Not Found</h2>
            <p className="text-sm">We are sorry, the page you were looking doesn't exist.</p>
            <Link to='/'><Button className="mt-10 px-4 py-2 w-full">Back to Home</Button></Link>
          </div>
      </div>
    </section>
  )
}

export default NotFound
