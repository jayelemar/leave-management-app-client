import Modal from "react-modal"
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import Loader from "./components/common/layout/Loader";
import Sidebar from "./components/common/sidebar/Sidebar";
import Layout from "./components/common/layout/Layout";
import { useAuthStore } from "./store/authStore";
import { useGetLoginStatus } from "./services/authServices";
import { Spinner } from "./components/common/layout/Spinner";
import RequestLeave from "./pages/dashboard/RequestLeave";
const Home = lazy(() => import("./pages/home/Home"));
const NotFound = lazy(() => import("./pages/404/NotFound"));
const Login = lazy(() => import("./pages/auth/Login"))
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"))
const Register = lazy(() => import("./pages/auth/Register"))
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"))
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))



Modal.setAppElement('#root');

const App = () => {

  const {data: isLoggedInData} = useGetLoginStatus()
  const setLoginStatus = useAuthStore((state) => state.setLoginStatus)

  useEffect(() => {
    setLoginStatus(isLoggedInData)
  }, [isLoggedInData,setLoginStatus ])
  
  
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
          <Route path="/request-leave" element={
            <Sidebar>
              <Suspense fallback={ <Spinner /> }>
                  <RequestLeave/>
              </Suspense>
            </Sidebar>}
          />

        </Routes>
      </Layout>
  )
}

export default App
