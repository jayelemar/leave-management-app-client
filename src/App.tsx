import Modal from "react-modal"
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/common";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import { ForgotPassword, Login, Register, ResetPassword } from "./pages/auth";





Modal.setAppElement('#root');

const App = () => {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
