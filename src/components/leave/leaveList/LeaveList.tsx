
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import SelectStatus from "../../common/SelectStatus"
import LeaveListCardContent from "./LeaveListCardContent";
import { LeaveProps } from "@/types/leaveTypes";
import React from "react";





interface LeaveListProps {
  leaves:  LeaveProps[] | [],
}

const LeaveList:React.FC<LeaveListProps> = ({ leaves }) => {


  if(!leaves) {
    return (
      <p>No Upcoming Request Leave</p>
    )
  } else {
    return (
      <Card className="w-full">
        <CardHeader className="flex flex-row justify-between items-baseline">
          <CardTitle className="text-solidGreen text-base sm:text-3xl font-normal">My Leaves</CardTitle>
          <SelectStatus/>
        </CardHeader>
        <CardContent>
          <LeaveListCardContent leaves={leaves} />
        </CardContent>
      </Card>
    )
  }
  
}
export default LeaveList
