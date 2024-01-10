import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

import leaveCategories from '@/data/leaveData';
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "../ui/calendar"



const FormSchema = z.object({
  leaveType: z.string({
      required_error: "Please select a leave type.",
  }),
  startDate: z.date({
    required_error: "Please select a leave type.",
  }),
  endDate: z.date({
    required_error: "Please select a leave type.",
  }),
})

export function LeaveRequestForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const startDateValue = form.watch("startDate")

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <FormField
            control={form.control}
            name="leaveType"
            render={({ field }) => {
              return (
                <FormItem className="flex justify-start items-start md:items-center gap-2 flex-col md:flex-row my-3">
                <FormLabel className="mr-2 lg:relative lg:bottom-3">Leave Type:</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl >
                      <SelectTrigger className="w-[240px]">
                        <SelectValue placeholder="Please select a leave type"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
          {leaveCategories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

        <FormField
          control={form.control}
          name="startDate"
          render={({ field })=> {
            return(
              <FormItem className="flex justify-start items-start md:items-center gap-2 flex-col md:flex-row my-3">
              <FormLabel className="mr-2 lg:relative lg:bottom-3">Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="endDate"
          render={({ field })=> {
            return(
              <FormItem className="flex justify-start items-start md:items-center gap-2 flex-col md:flex-row my-3">
              <FormLabel className="mr-2 lg:relative lg:bottom-3">End Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < startDateValue || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
            )
          }}
        
        />


      
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
