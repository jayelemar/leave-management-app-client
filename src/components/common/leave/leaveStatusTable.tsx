import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { LeaveProps } from '@/types/leaveTypes'
import { formatDate } from '@/utils/formatDate'
import { Pen, Trash2 } from 'lucide-react'
import { FC } from 'react'

interface LeaveStatusTableProps {
  leaves: LeaveProps[] | [],
}

const LeaveStatusTable: FC<LeaveStatusTableProps> = ({ leaves }) => {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-center'>Name</TableHead>
          <TableHead className='text-center'>Start Date</TableHead>
          <TableHead className='text-center hidden md:table-cell'>End Date</TableHead>
          <TableHead className='text-center'>Status</TableHead>
          <TableHead className='text-center'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaves.map((leave, index) => (
          <TableRow key={index}>
            <TableCell className='text-center whitespace-nowrap'>{leave.name}</TableCell>
            <TableCell className='text-center whitespace-nowrap'>
              {formatDate(leave.startDate)}
            </TableCell>
            <TableCell className='text-center hidden md:table-cell whitespace-nowrap'>
              {formatDate(leave.endDate)}
            </TableCell>
            <TableCell className='text-center'>{leave.status}</TableCell>
            <TableCell className='text-center flex flex-row gap-2 justify-center items-center'> 
                <Pen  size={22} className='bg-green-600 text-yellow-100 rounded cursor-pointer p-1'/>
                <Trash2 size={22} className='bg-slate-700 text-yellow-100 rounded cursor-pointer p-1'/>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default LeaveStatusTable
