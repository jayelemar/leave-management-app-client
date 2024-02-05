import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SelectStatus = () => {
  return (
    <Select>
    <SelectTrigger className="w-28">
      <SelectValue placeholder="Status" />
    </SelectTrigger>
    <SelectContent>
    <SelectItem value="all">All</SelectItem>
      <SelectItem value="pending">Pending</SelectItem>
      <SelectItem value="approved">Approved</SelectItem>
      <SelectItem value="rejected">Rejected</SelectItem>
    </SelectContent>
  </Select>
  )
}

export default SelectStatus
