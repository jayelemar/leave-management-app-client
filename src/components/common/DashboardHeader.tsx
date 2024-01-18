

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { actions, selectName } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/store";
import { useLogoutUser } from "@/services/authServices";
import Loader from "./Loader";

function DashboardHeader() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);

  const { refetch: LogoutUserQuery, isPending } = useLogoutUser();

  const handleLogoutClick = async () => {
 
    await LogoutUserQuery();
    toast.success("You successfully logout.");
    await dispatch(actions.LOGOUT_USER())
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
