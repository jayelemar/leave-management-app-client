
import { LeaveProps } from "@/types/leaveTypes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios"

const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL

// Create a new Leave Request
export const useCreateLeave = () => {
  const createLeave = async (data: LeaveProps) => {
    const response = await axios.post(`${BACKEND_URL}/api/`, data)
    return response.data
  };

  return useMutation({
    mutationKey:['leaves'],
    mutationFn: createLeave
  })
}
