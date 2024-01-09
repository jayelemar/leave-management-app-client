import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const categories = [
  { 
    value: 'annualLeave', 
    label: 'Annual Leave', 
  },
  { 
      value: 'soloParents',
      label: 'Solo Parents',
  },
  {
      value: 'volunteerLeave',
      label: 'Volunteer Leave',
  },
  {
      value: 'paternity',
      label: 'Paternity',
  },
  {
      value: 'violenceAct',
      label: 'Violence Act',
  },
  {
      value: 'adoptionLeave',
      label: 'Adoption Leave',
  },
  { 
      value: 'sabbaticalLeave',
      label: 'Sabbatical Leave',
  },
  {
      value: 'carryForwardLeave',
      label: 'Carry Forward Leave',
  },
  {
      value: 'bereavement',
      label: 'Bereavement',
  },
]

export function SelectCategory() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <>
    <label htmlFor="leaveSelect">Leave Type:</label>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No Leave Category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                key={category.value}
                value={category.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >

                
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    </>
  )
}
