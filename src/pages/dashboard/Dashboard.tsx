
import Calendar from "@/components/calendar/Calendar";
import WelcomeName from "@/components/dashboard/WelcomeName";
import LeaveList from "@/components/leave/leaveList/LeaveList";
import useRedirectLoggedOutUser from "@/customHook/useRedirectLoggedOutUser"
import { useGetLeaves } from "@/services/leaveServices";
import { LeaveProps } from "@/types/leaveTypes";
import { FC, useEffect } from "react";
import InfoBoxSummary from "@/components/infoBox/InfoBoxSummary";

interface DashboardProps {
  leaves:  LeaveProps[] | [],
}

interface LeaveMapProps {
  name: string;
  startDate: Date;
  endDate: Date;
}

const transformLeavesToCalendarEvents = (leaves: LeaveMapProps[]) => {
  return leaves.map((leave) => ({
    start: new Date(leave.startDate),
    end: new Date(new Date(leave.endDate).setHours(23, 59, 59)),
    title: leave.name
  }));
};

const Dashboard: FC<DashboardProps> = () => {
  useRedirectLoggedOutUser("/");
  const { data: leavesData, refetch } = useGetLeaves();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const calendarEvents = leavesData ? transformLeavesToCalendarEvents(leavesData) : [];

  
  return (
        <main className="flex flex-col justify-start item-start w-full gap-4">

          <div className="mt-6 text-darkGrey text-sm w-full px-4">
            <WelcomeName/>
          </div>

          <div className="flex w-full">
            <InfoBoxSummary/>
          </div>
          <div className="flex flex-col xl:flex-row">
            <div className="px-4 w-full hidden xs:flex">
              <Calendar events = {calendarEvents}/>
            </div>

          </div>
          <div className="w-full px-4">
            <LeaveList   leaves={leavesData ?? []} /> 
          </div>
        </main>
  )
}

export default Dashboard
