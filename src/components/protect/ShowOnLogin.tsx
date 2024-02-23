
import { useAuthStore } from '@/store/authStore'
import { ReactNode } from 'react'


const ShowOnLogin = ({ children }: {children:ReactNode}) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  if(isLoggedIn) {
    return <>{children}</>
  } else {
    return null
  }
}

export default ShowOnLogin
