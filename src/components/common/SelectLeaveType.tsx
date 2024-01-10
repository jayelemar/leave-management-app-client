import { FC, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import leaveCategories from '@/data/leaveData';

interface SelectLeaveTypeProps {
}

const SelectLeaveType: FC<SelectLeaveTypeProps> = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (newValue: string) => {  
    setSelectedValue(newValue);
  };

  const handleButtonClick = () => {
    console.log(selectedValue);
  };

  return (
    <div className="flex justify-start items-start sm:items-center gap-2 flex-col sm:flex-row relative">
      <label htmlFor="leaveSelect">Leave Type:</label>
      <Select 
        defaultValue='annualLeave' 
        value={selectedValue} 
        onValueChange={handleSelectChange}
      >
        <SelectTrigger className="w-[280px] sm:w-[190px] md:w-[280px] ml-4">
          <SelectValue/>
        </SelectTrigger>
        <SelectContent>
          {leaveCategories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}

export default SelectLeaveType;
