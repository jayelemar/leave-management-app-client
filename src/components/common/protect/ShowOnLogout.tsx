import { selectIsLoggedIn } from '@/redux/features/authSlice'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

const ShowOnLogout = ({ children }: {children:ReactNode}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if(!isLoggedIn) {
    return <>{children}</>
  } else {
    return null
  }
}

export default ShowOnLogout
