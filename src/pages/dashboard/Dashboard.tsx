import DashboardLayout from "@/components/common/dashboard/DashboardLayout"
import useRedirectLoggedOutUser from "@/customHook/useRedirectLoggedOutUser"

const Dashboard = () => {
  useRedirectLoggedOutUser("/");
  
  return (
    <DashboardLayout>

      <div className="h-full">
        Dashboard Page
      </div>
    </DashboardLayout>  

  )
}

export default Dashboard
