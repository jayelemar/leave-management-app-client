import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { LeaveProps } from '@/types/leaveTypes'
import { formatDate } from '@/utils/formatDate'
import { Eye, Trash2 } from 'lucide-react'
import { FC } from 'react'

interface LeaveTableProps {
  leaves: LeaveProps[] | [],
}

const LeaveTable: FC<LeaveTableProps> = ({ leaves }) => {

  return (
      <Table>
        <TableHeader>
          <TableRow className='flex justify-between text-center'>
          <TableHead className='w-[150px] font-bold'>Name</TableHead>
          <TableHead className=' font-bold' >Start Date</TableHead>
          <TableHead className=' font-bold' >End Date</TableHead>
          <TableHead className=' font-bold' >Status</TableHead>
          <TableHead className='font-bold' >Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='w-full'>
        {leaves.map((leave, index) => (
          
          <TableRow key={index} className='flex justify-between text-center'>
            <TableCell className='whitespace-nowrap'>{leave.name}</TableCell>
            <TableCell className='whitespace-nowrap'>
              {formatDate(leave.startDate)}
            </TableCell>
            <TableCell className='whitespace-nowrap'>
              {formatDate(leave.endDate)}
            </TableCell>

            <TableCell>
              <span className='text-base italic font-light bg-darkGrey/20 px-4 xs:px-2 py-1 text-yellow-50 rounded-lg'>
                {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
              </span>
            </TableCell>

            <TableCell className='flex flex-row gap-2 justify-center items-center'> 
                <Eye   size={25} className='bg-green-600 text-yellow-100 rounded cursor-pointer p-1'/>
                <Trash2 size={25} className='bg-slate-700 text-yellow-100 rounded cursor-pointer p-1'/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table> 
  )
}

export default LeaveTable
