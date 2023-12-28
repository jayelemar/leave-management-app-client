import { FC } from "react"
import * as React from "react"
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

interface EndDateProps {

}

const EndDate: FC<EndDateProps> = () => {
    const [date, setDate] = React.useState<Date>()

    return (
        <div className="flex justify-start items-start sm:items-center gap-2 flex-col sm:flex-row my-3">
        <label htmlFor="" className="mr-3">End Date:</label>
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal ml-4",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
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
    )
}

export default EndDate
