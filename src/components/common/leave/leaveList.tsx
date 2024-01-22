
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

import { FC } from "react"
import { LeaveProps } from "@/types/leaveTypes"
import LeaveStatusTable from "./leaveStatusTable"
interface LeaveListProps {
  leaves:  LeaveProps[] | [],
}

const LeaveList:FC<LeaveListProps> = ({ leaves }) => {


  if(!leaves) {
    return (
      <p>No Upcoming Request Leave</p>
    )
  } else {
    return (
      <Card className="m-4 p-4">
        <CardHeader className="flex flex-row justify-between items-baseline">
          <CardTitle className="text-solidGreen text-3xl font-normal">Request Leaves</CardTitle>
          <Select>
            <SelectTrigger className="w-[250px]">
            <Search size={20} /><SelectValue placeholder="Seach by Leave Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div>
          {Array.isArray(leaves) && leaves.length === 0 ? (
                <p>-- No Request Leave Found --</p>
              ): (
                <LeaveStatusTable leaves={leaves ?? []}/>
              )
            }
          </div>
        </CardContent>
      </Card>
    )
  }
  
}
export default LeaveList
