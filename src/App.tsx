import Modal from "react-modal"
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./components/common/layout/Loader";
import Layout from "./components/common/layout/Layout";
import { useAuthStore } from "./store/authStore";
import { useGetLoginStatus } from "./services/authServices";
import { Spinner } from "./components/common/layout/Spinner";
import DashboardLayout from "./components/common/dashboard/DashboardLayout";
import Sidebar from "./components/common/sidebar/Sidebar";
const Home = lazy(() => import("./pages/home/Home"));
const NotFound = lazy(() => import("./pages/404/NotFound"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"))
const Register = lazy(() => import("./pages/auth/Register"))
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"))
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))
const RequestLeave = lazy(() => import ("./pages/dashboard/RequestLeave"))



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
          <Route 
            path="/dashboard" 
            element={
              <Sidebar>
                <DashboardLayout>
                  <Suspense fallback={ <Spinner/> }>
                    <Dashboard/>
                  </Suspense>
                </DashboardLayout>
              </Sidebar>
            }
          />
          <Route path="/request-leave" element={
            <Sidebar>
              <DashboardLayout>
                <Suspense fallback={ <Spinner /> }>
                    <RequestLeave/>
                </Suspense>
              </DashboardLayout>
            </Sidebar>
            }
          />

        </Routes>
      </Layout>
  )
}

export default App
