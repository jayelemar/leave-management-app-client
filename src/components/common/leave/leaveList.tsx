
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { FC, useState } from "react"
import { LeaveProps } from "@/types/leaveTypes"

import ReactPaginate from 'react-paginate';
import LeaveStatusTable from "./LeaveStatusTable"


interface LeaveListProps {
  leaves:  LeaveProps[] | [],
}

const LeaveList:FC<LeaveListProps> = ({ leaves }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0)
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = leaves.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = ({selected}: {selected: number}) => {
    setCurrentPage(selected)
  };

  if(!leaves) {
    return (
      <p>No Upcoming Request Leave</p>
    )
  } else {
    return (
      <Card className="m-4 p-4">
        <CardHeader className="flex flex-row justify-between items-baseline">
          <CardTitle className="text-solidGreen text-3xl font-normal">My Leaves</CardTitle>
          <Select>
            <SelectTrigger className="w-[250px]">
            <Search size={20} /><SelectValue placeholder="Seach by Leave Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div>
          {Array.isArray(leaves) && leaves.length === 0 ? (
                <p>-- No Request Leave Found --</p>
              ): (
                <div>
                  <LeaveStatusTable leaves={currentItems}/>
                  <ReactPaginate 
                    className="flex justify-center items-center gap-4 text-solidGreen"
                    activeClassName="text-red-500 underline underline-offset-4 font-semibold"
                    pageCount={Math.ceil(leaves.length / itemsPerPage)}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                  />
                </div>
              )
            }
          </div>
        </CardContent>
      </Card>
    )
  }
  
}
export default LeaveList
