import { FC } from "react"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"

import leaveCounts, { leaveHeader } from "@/data/leaveData"


interface ResourceTableProps {

}

const ResourceTable: FC<ResourceTableProps> = () => {
    return (
        <Card className="m-10 p-4">
            <Table>
                <TableCaption>PeopleSoft ID 45122771</TableCaption>
                <TableHeader className="bg-blue-500 ">
                    <TableRow>  
                        {leaveHeader.map((head) => {
                            return (
                                <TableHead key={head} className="text-white text-center">{head}</TableHead>
                            )
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                {leaveCounts.map((leave) => {
                    return (
                        <TableRow key={leave.value}>
                            <TableCell className="text-center">{leave.label}</TableCell>
                            <TableCell className="text-center">{leave.unit}</TableCell>
                            <TableCell className="text-center">{leave.eligitibility}</TableCell>
                            <TableCell className="text-center">{leave.pending}</TableCell>
                            <TableCell className="text-center">{leave.approved}</TableCell>
                            <TableCell className="text-center">{leave.balance}</TableCell>
                            <TableCell className="text-center">{leave.expirationDate}</TableCell>
                        </TableRow>
                    )
                })}
                </TableBody>
            </Table>
        </Card>
    )
}

export default ResourceTable
