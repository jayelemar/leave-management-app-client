import { ForgotPassword, LoginUser, RegisterUser, ResetPassword } from "@/types/authTypes"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"

const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL  || "http://localhost:8000"

// Register User
export const useRegisterUser = () => {
  const registerUser = async (data: RegisterUser) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/users/register`, data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          "An unexpected error occurred during login.";
        console.error("Server response:", message);
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }

  return useMutation({
    mutationKey: ['registerUser'],
    mutationFn: registerUser,
  })
}
 
// Login User
export const useLoginUser = () => {
  const loginUser = async (data: LoginUser) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/users/login`, data)
      if(response.data.success) {
        toast.success("Login Successful...")
      }
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          "An unexpected error occurred during login.";
        console.error("Server response:", message);
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }

  return useMutation({
    mutationKey: ['loginUser'],
    mutationFn: loginUser,
  })
}

// Logout User
export const useLogoutUser = () => {

  const logoutUser = async () => {
    await axios.get(`${BACKEND_URL}/api/users/logout`)
    return true
  }
  return useQuery({
    queryKey: ['logoutUser'],
    queryFn: logoutUser,
    enabled: false, 
  })
}

// Forgot Password
export const useForgotPassword = () => {
  const forgotPassword = async (data: ForgotPassword) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/users/forgotpassword`, data)
      if(response.data.success) {
        toast.success(response.data.message)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          "An unexpected error occurred during login.";
        console.error("Server response:", message);
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }

  return useMutation({
    mutationKey: ['forgotPassword'],
    mutationFn: forgotPassword,
  })
}

// Reset Password
export const useResetPassword = () => {
  const resetPassword = async ({ data, resetToken }:{data: ResetPassword, resetToken: string}) => {
    try {
      const response = await axios.put(`${BACKEND_URL}/api/users/resetpassword/${resetToken}`, data)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          "An unexpected error occurred during login.";
        console.error("Server response:", message);
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }

  return useMutation({
    mutationKey: ['resetPassword'],
    mutationFn: resetPassword,
  })
}

// Get Login Status
export const useGetLoginStatus = () => {
  const getLoginStatus = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/users/loggedin`)
      console.log("Backend URL:", BACKEND_URL);
      return response.data || {}
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          "An unexpected error occurred during login.";
        // console.error("Server response:", message);
        return false;
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }

  return useQuery({
    queryKey: ['getLoginStatus'],
    queryFn: getLoginStatus,
    enabled: false,
  })
}


