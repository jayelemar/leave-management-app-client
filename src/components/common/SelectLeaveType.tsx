import { FC } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import leaveCategories from '@/data/leaveData'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"





interface SelectLeaveTypeProps {
    
}

const SelectLeaveType: FC<SelectLeaveTypeProps> = () => {
    return (
        <div className="flex justify-start items-start sm:items-center gap-2 flex-col sm:flex-row relative">
            <label htmlFor="leaveSelect" >Leave Type:</label>
            <Select>
                <SelectTrigger className="w-[180px] ml-4">
                    <SelectValue placeholder="Please select..." />
                </SelectTrigger>
                <SelectContent>
                    {leaveCategories.map((category) => {
                        return (
                        <SelectItem key={category.value} value={category.value}>
                            {category.label}
                        </SelectItem>
                    )})}
                </SelectContent>
            </Select>
            <div className="flex items-center space-x-2 my-3 absolute -top-1.5 sm:top-0 left-32 sm:left-80 text-base">
                <Checkbox id="planned-leave"/>
                <Label
                    htmlFor="planned-leave"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Planned Leave
                </Label>
            </div>
        </div>

    )
}

export default SelectLeaveType
