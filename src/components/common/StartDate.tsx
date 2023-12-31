import { FC, useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



interface StartDateProps {

}

const StartDate: FC<StartDateProps> = () => {
    const [date, setDate] = useState<Date>()
    const [ isCalendarOpen, setIsCalendarOpen ] = useState(false);
    
    const closeCalendar = () => {
        setIsCalendarOpen(false)
    };

    const openCalendar = () => {
        setIsCalendarOpen(true)
    }

    const handleDayClick = (clickedDate: Date) => {
        console.log("clickedDate:", clickedDate);
        setDate(clickedDate)
        closeCalendar();
    };

    return (
        <div className="flex justify-start items-start md:items-center gap-2 flex-col md:flex-row my-3">
            <label htmlFor="" className="mr-2 lg:relative lg:bottom-3">Start Date:</label>
            <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-start sm:items-center lg:items-start gap-2">
            <div>
                <Popover>
                    <PopoverTrigger asChild >
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal ml-4",
                                !date && "text-muted-foreground"
                            )}
                            onClick={openCalendar}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    
                    {isCalendarOpen && (
                        <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            initialFocus
                            required
                            selected={date}
                            onSelect={setDate}
                            onDayClick={handleDayClick}
                        />
                    </PopoverContent>
                    )}
                </Popover>
            </div>
            <div className="ml-4">
                <RadioGroup defaultValue="full-day" className="flex flex-row">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full-day" id="full-day" />
                        <Label htmlFor="full-day">Full Day</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="half-day" id="half-day" />
                        <Label htmlFor="half-day">Half Day</Label>
                    </div>
                </RadioGroup>
            </div>
            </div>
        </div>
    )
}

export default StartDate
