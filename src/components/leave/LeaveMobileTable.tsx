import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { LeaveProps } from '@/types/leaveTypes'
import { formatDate } from '@/utils/formatDate'
import { Eye, Trash2 } from 'lucide-react'
import { FC } from 'react'


interface LeaveTableProps {
  leaves: LeaveProps[] | [],
}

const LeaveMobileTable:FC<LeaveTableProps> = ({ leaves }) => {
  return (
    <Table>
      <TableBody className='w-full'>
        {leaves.map((leave, index) => (
          <TableRow key={index} className='flex w-full'>
            <TableCell className='flex flex-col w-full'>
              <h5 className='text-lg'>{leave.name}</h5>
              <div className="flex flex-col xs:flex-row w-full relative">
                
                <div className="flex flex-col w-full">
                  <p className='text-sm'>Start: {formatDate(leave.startDate)}</p>
                  <p className='text-sm'>End: {formatDate(leave.endDate)}</p>
                </div>

                <div className="flex flex-row justify-between mt-1 xs:flex-col xs:gap-2 xs:absolute xs: right-0 xs:bottom-0">
                  <span className='text-base italic font-light bg-darkGrey/20 px-4 xs:px-2 text-yellow-50 rounded-lg'>{leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}</span>
                  <div className='text-center flex flex-row gap-2 justify-center items-center'> 
                    <Eye   size={25} className='bg-green-600 text-yellow-100 rounded cursor-pointer p-1'/>
                    <Trash2 size={25} className='bg-slate-700 text-yellow-100 rounded cursor-pointer p-1'/>
                  </div>
                </div>

              </div>

            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default LeaveMobileTable
