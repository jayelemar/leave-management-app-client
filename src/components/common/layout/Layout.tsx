
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom';


const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/request-leave");

  return (
    <div className='flex flex-col mx-auto min-h-screen max-w-screen-2xl'>
      {!isDashboard ? <Header/> : null }
      
      <main>
      { children }
      </main>
      {!isDashboard ? <Footer/> : null }
    </div>
  )
}

export default Layout
