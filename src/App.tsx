import Modal from "react-modal"
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import Loader from "./components/common/Loader";
import Sidebar from "./components/common/sidebar/Sidebar";
import Layout from "./components/common/Layout";
import { useAppDispatch } from "./redux/store";
import { useGetLoginStatus } from "./services/authServices";
import { actions } from "./redux/features/authSlice";
const Home = lazy(() => import("./pages/home/Home"));
const NotFound = lazy(() => import("./pages/404/NotFound"));
const Login = lazy(() => import("./pages/auth/Login"))
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"))
const Register = lazy(() => import("./pages/auth/Register"))
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"))
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))



Modal.setAppElement('#root');

const App = () => {
  const dispatch = useAppDispatch();
  const {data: LoginStatus} = useGetLoginStatus()

  useEffect(() => {
    const loginStatus = async() => {
      await dispatch(actions.SET_LOGIN(LoginStatus))
    }
    loginStatus()
  }, [dispatch, LoginStatus ])
  
  
  return (
    <Layout>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={
            <Suspense fallback={ <Loader/> }><Login/></Suspense>
          }/>
          <Route path="/register" element={
            <Suspense fallback={ <Loader/> }>
              <Register/>
            </Suspense>
          }/>
          <Route path="/resetpassword/:resetToken" element={
            <Suspense fallback={ <Loader/> }>
              <ResetPassword/>
            </Suspense>}
          />
          <Route path="/forgotpassword" element={
            <Suspense fallback={ <Loader/> }>
              <ForgotPassword/>
            </Suspense>}
          />
          <Route path="*" element={
            <Suspense fallback={ <Loader/> }>
              <NotFound/>
            </Suspense>}
          />
          <Route path="/dashboard" element={
            <Suspense fallback={ <Loader/> }>
              <Sidebar>
                  <Dashboard/>
              </Sidebar>
            </Suspense>}
          />

        </Routes>
      </Layout>
  )
}

export default App
