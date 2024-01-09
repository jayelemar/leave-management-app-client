
// import LeaveForm from "./components/common/LeaveForm"
// import ResourceTable from "./components/common/ResourceTable"
import Modal from "react-modal"
import Calendar from "./components/common/Calendar";

Modal.setAppElement('#root');


const App = () => {
  const start = new Date ("2024-01-02T16:00:00.000Z")
  const end = new Date ("2024-01-05T16:00:00.000Z")

  return (
    <div className="w-auto h-auto">
      <Calendar start={start} end={end} title="title props"/>
    </div>
  )
}

export default App
