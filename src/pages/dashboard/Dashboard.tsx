import DashboardLayout from "@/components/common/dashboard/DashboardLayout"
import LeaveList from "@/components/common/leave/leaveList";
import useRedirectLoggedOutUser from "@/customHook/useRedirectLoggedOutUser"
import { useGetLeaves } from "@/services/leaveServices";
import { LeaveProps } from "@/types/leaveTypes";
import { FC, useEffect } from "react";

interface DashboardProps {
  leaves:  LeaveProps[] | [],
}

const Dashboard: FC<DashboardProps> = () => {
  useRedirectLoggedOutUser("/");
  const {data: leaves, refetch} = useGetLeaves();
  
  useEffect(() => {
    refetch
  }, [refetch])
  
  
  return (
    <DashboardLayout>

      <div className="h-full">
        Dashboard Page
      </div>
      <div className="">
        <LeaveList leaves={leaves ?? []}/>
      </div>
    </DashboardLayout>  

  )
}

export default Dashboard
