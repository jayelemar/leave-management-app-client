
import { RegisterUser } from "@/types/authTypes"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"


const BACKEND_URL: string = "http://localhost:8000"

// Register Hook
export const useRegisterUser = () => {

  const registerUser = async (data: RegisterUser) => {
    const response = await axios.post(`${BACKEND_URL}/api/users/register`, data)
    return response.data
  }

  return useMutation({
    mutationKey: ['users'],
    mutationFn: registerUser,
  })
}

// export const useGetUsers = () => {
//   const getUsers = async (data: ) => {
//     const response = await axios.get("", data)
//   };
// }