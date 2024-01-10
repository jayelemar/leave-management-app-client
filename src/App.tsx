
// import LeaveForm from "./components/common/LeaveForm"
// import ResourceTable from "./components/common/ResourceTable"
import Modal from "react-modal"
import Calendar from "./components/common/Calendar";
import {LeaveRequestForm} from "./components/common/LeaveRequestForm";
import { Card } from "./components/ui/card";
// import SelectLeaveType from "./components/common/SelectLeaveType";

Modal.setAppElement('#root');


const App = () => {
  const start = new Date ("2024-01-02T16:00:00.000Z")
  const end = new Date ("2024-01-05T16:00:00.000Z")

  return (
    <>
    <Card className="m-8 p-8">
    <LeaveRequestForm/>
    {/* <SelectLeaveType/> */}
    </Card>
    <div className="w-1/2">
      
      <Calendar start={start} end={end} title="title props"/>
    </div>
    </>
  )
}

export default App
