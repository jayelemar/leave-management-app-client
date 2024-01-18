import { actions } from "@/redux/features/authSlice"
import { useAppDispatch } from "@/redux/store"
import { useGetLoginStatus } from "@/services/authServices"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const useRedirectLoggedOutUser = (path: string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data: isLoggedIn } = useGetLoginStatus()

  useEffect(() => {
    const redirectLoggedOutUser = async () => {
      try {
        dispatch(actions.SET_LOGIN(isLoggedIn))
  
        if(!isLoggedIn){
          toast.info("Session expired, please login to continue.")
          navigate("/")
          return
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }

      
    };

      redirectLoggedOutUser();
    
  }, [navigate, path, dispatch, isLoggedIn ])
  
}

export default useRedirectLoggedOutUser
