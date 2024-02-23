import React from 'react'
import LeaveTable from '../LeaveTable'
import LeaveMobileTable from '../LeaveMobileTable'
import ReactPaginate from 'react-paginate'

const LeaveListCardContent = () => {
  return (
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
      ``      {currentPage === 0 ? null : (
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
  )
}

export default LeaveListCardContent