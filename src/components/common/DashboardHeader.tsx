

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { actions, selectName } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/store";
useSelector;

function DashboardHeader() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);

  const handleLogoutClick = async () => {
    // await logoutUser();
    await dispatch(actions.SET_NAME(""));
    await dispatch(actions.SET_LOGIN(false));
    navigate("/");
    toast.success("You have successfully log-out.");
  };

  return (
    <header className="flex justify-between items-center h-10">
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
