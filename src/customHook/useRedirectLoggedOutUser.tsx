import { useGetLoginStatus } from "@/services/authServices";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useRedirectLoggedOutUser = (path: string) => {
  const navigate = useNavigate();
  const isLoggedInData = useGetLoginStatus().data;
  const setLoginStatus = useAuthStore((state) => state.setLoginStatus)

  useEffect(() => {
    const redirectLoggedOutUser = async () => {
      setLoginStatus(isLoggedInData); 

      if (!isLoggedInData) {
        toast.info("Session expired, please login to continue.");
        navigate("/");
        return;
      }
    };

    redirectLoggedOutUser();
  }, [navigate, path, isLoggedInData, setLoginStatus]);
};

export default useRedirectLoggedOutUser;
