import { FC } from "react"
import SelectLeaveType from "./SelectLeaveType"
import StartDate from "./StartDate"
import EndDate from "./EndDate"
import ReasonTextbox from "./ReasonTextbox"
import { Card } from "../ui/card"
import InputDuration from "./InputDuration"
import ContactDetail from "./ContactDetail"
import { Button } from "react-day-picker"




interface LeaveFormProps {

}


const LeaveForm: FC<LeaveFormProps> = () => {
    const onSubmit = () => {
        
    };
    return (
        <Card className="m-10 p-4 flex flex-col lg:flex-row">
            <form onSubmit={onSubmit}>
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
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Card>
    )
}

export default LeaveForm;

