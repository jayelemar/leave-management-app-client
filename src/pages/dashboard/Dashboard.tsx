import Calendar from "@/components/common/Calendar";
import DashboardLayout from "@/components/common/dashboard/DashboardLayout"
import LeaveList from "@/components/common/leave/LeaveList";
import LeaveSummary from "@/components/common/leave/LeaveSummary";
import { Card } from "@/components/ui/card";


import useRedirectLoggedOutUser from "@/customHook/useRedirectLoggedOutUser"
import { useGetLeaves } from "@/services/leaveServices";
import { LeaveProps } from "@/types/leaveTypes";
import { FC, useEffect } from "react";

interface DashboardProps {
  leaves:  LeaveProps[] | [],
}

interface LeaveMapProps {
  name: string,
  startDate: Date,
  endDate: Date,
}

const Dashboard: FC<DashboardProps> = () => {
  useRedirectLoggedOutUser("/");
  const {data: leaves, refetch} = useGetLeaves();
  
  useEffect(() => {
    refetch
  }, [refetch])
  
  
  return (
    <DashboardLayout>

        <LeaveSummary/>
        <div className="flex justify-between w-full m-4 flex-col lg:flex-row gap-4 my-8">
          <Card className="p-4 w-full lg:w-4/6">
            <Calendar 
              events = {
                leaves ? leaves.map((leave: LeaveMapProps) => ({
                  start:new Date(leave.endDate),
                  end:new Date(leave.endDate),
                  title: leave.name
                }))
                : []
              }






            />
          </Card>
        <div className="w-2/6">
          Leave Statistics.
        </div>
        </div>
        <LeaveList   leaves={leaves ?? []}/>
 
    </DashboardLayout>  

  )
}

export default Dashboard
