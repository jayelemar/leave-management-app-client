
import DashboardLayout from "@/components/common/dashboard/DashboardLayout"
import { LeaveRequestForm } from "@/components/common/leave/LeaveRequestForm"


const RequestLeave = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-grow justify-center items-center">
      Request Leave .tsx
      </div>
      <div className="">
        <LeaveRequestForm/>
      </div>
      </DashboardLayout>
  )
}

export default RequestLeave
