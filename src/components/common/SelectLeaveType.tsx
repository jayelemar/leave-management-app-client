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
                <SelectTrigger className="w-[280px] sm:w-[190px] md:w-[280px] ml-4">
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
            <div className="items-center space-x-2 my-3 absolute hidden xs:flex -top-1.5 sm:top-0 left-44 sx:left-30 sm:left-80 md:left-[410px] lg:left-[480px] whitespace-nowrap text-base">
                <Checkbox id="planned-leave"/>
                <Label
                    htmlFor="planned-leave"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
                >
                    Planned Leave
                </Label>
            </div>
        </div>

    )
}

export default SelectLeaveType
