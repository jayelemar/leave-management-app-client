import { FC } from "react"
import SelectLeaveType from "./SelectLeaveType"
import StartDate from "./StartDate"
import EndDate from "./EndDate"
import ReasonTextbox from "./ReasonTextbox"
import { Card } from "../ui/card"
import InputDuration from "./InputDuration"
import ContactDetail from "./ContactDetail"




interface LeaveFormProps {

}


const LeaveForm: FC<LeaveFormProps> = () => {
    return (
        <Card className="m-10 p-4 flex flex-col lg:flex-row">
            <div className="">
                <SelectLeaveType />
                <StartDate />
                <EndDate />
                <ReasonTextbox />
                <InputDuration />
            </div>
            <div>
            <ContactDetail/>
            </div>


        </Card>
    )
}

export default LeaveForm

