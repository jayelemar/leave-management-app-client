
import { LeaveFormProps } from "@/types/leaveTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios"


const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL

// Create a new Leave Request
export const useCreateLeave = () => {
  const createLeave = async (data: LeaveFormProps) => {
      const response = await axios.post(`${BACKEND_URL}/api/leaves`, data)
        console.log(response.data);
  };

  return useMutation({
    mutationKey:['leaves'],
    mutationFn: createLeave
  })
}


// Get Leaves
export const useGetLeaves = () => {
  const getLeaves = async () => {
    const response =await axios.get(`${BACKEND_URL}/api/leaves`)
    return response.data
  };

  return useQuery({
    queryKey:['leaves'],
    queryFn: getLeaves,
    
  })
}
