
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FC, lazy, useState } from "react"
import { LeaveProps } from "@/types/leaveTypes"
import ReactPaginate from 'react-paginate';
import SelectStatus from "../selectStatus/SelectStatus"


const LeaveTable = lazy(() => import ("./LeaveTable"))
const LeaveMobileTable = lazy(() => import ("./LeaveMobileTable"))


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
      <Card className="w-full">
        <CardHeader className="flex flex-row justify-between items-baseline">
          <CardTitle className="text-solidGreen text-base sm:text-3xl font-normal">My Leaves</CardTitle>
          <SelectStatus/>
        </CardHeader>
        <CardContent>
          <div>
          {Array.isArray(leaves) && leaves.length === 0 ? (
                <p>-- No Request Leave Found --</p>
              ): (
                <div>
                  <div className="hidden md:flex flex-col min-w-full">
                    <LeaveTable leaves={currentItems}/>
                  </div>
                  <div className="flex md:hidden w-full">
                    <LeaveMobileTable leaves={currentItems}/>
                  </div>
 
                  {currentPage === 0 ? null : (
                    <ReactPaginate 
                      className="flex justify-center items-center gap-4 text-solidGreen"
                      activeClassName="text-red-500 underline underline-offset-4 font-semibold"
                      pageCount={Math.ceil(leaves.length / itemsPerPage)}
                      pageRangeDisplayed={3}
                      marginPagesDisplayed={1}
                      onPageChange={handlePageChange}
                      containerClassName="pagination"
                    />
                  )}
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
