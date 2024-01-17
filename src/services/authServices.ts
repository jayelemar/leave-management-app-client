
import { LoginUser, RegisterUser } from "@/types/authTypes"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"



const BACKEND_URL: string = "http://localhost:8000"

// Register User
export const useRegisterUser = () => {
  const registerUser = async (data: RegisterUser) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/users/register`, data)
      if(response.data.success) {
        toast.success("User Registered Succussfully...")
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
    mutationKey: ['users'],
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
    mutationKey: ['users'],
    mutationFn: loginUser,
  })
}

