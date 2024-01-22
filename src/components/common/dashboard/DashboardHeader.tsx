


import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogoutUser } from "@/services/authServices";
import Loader from "../layout/Loader";
import { useAuthStore } from "@/store/authStore";

function DashboardHeader() {

  const navigate = useNavigate();
  const name = useAuthStore((state) => state.name)

  const { refetch: LogoutUserQuery, isPending } = useLogoutUser();
  const SET_LOGOUT = useAuthStore((state) => state.SET_LOGOUT)

  const handleLogoutClick = async () => {
    console.log("Logout button clicked");
 
    await LogoutUserQuery();
    SET_LOGOUT();
    toast.success("You successfully logout.");
  
    navigate("/");

  };

  return (
    
    <header className="flex justify-between items-center h-16 w-full">
      {isPending ? <Loader/> : null}
      <h5 className="flex font-normal">
        <span>Welcome,</span>
        <span>{name}</span>
      </h5>
      <button className="btn btn-error" onClick={handleLogoutClick}>
        Logout
      </button>
    </header>
  );
}

export default DashboardHeader;
