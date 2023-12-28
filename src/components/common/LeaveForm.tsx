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
        <Card className="m-4 p-4">
            <SelectLeaveType />
            <StartDate />
            <EndDate />
            <ReasonTextbox />
            <InputDuration />
            <ContactDetail />


        </Card>
    )
}

export default LeaveForm

