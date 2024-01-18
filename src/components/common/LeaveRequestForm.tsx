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
import { useState } from "react"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"
import { phoneRegex } from "@/utils/phoneRegex"



const FormSchema = z.object({
  leaveType: z.string({
      required_error: "Please select a leave type.",
  }),
  startDate: z.date({
    required_error: "Please select a starting date.",
  }),
  endDate: z.date({
    required_error: "Please select a ending date.",
  }),
  reason: z
    .string()
    .min(5, {
      message: "Reason must be at least 5 characters.",
    })
    .max(160, {
      message: "Reason must not be longer than 160 characters.",
  }),
  contactAddress: z
    .string()
    .min(5, {
      message: "Reason must be at least 5 characters.",
    })
    .max(160, {
      message: "Reason must not be longer than 160 characters.",
  }),
  contactNumber: z.string().regex(phoneRegex, 'Invalid Number')
})

export function LeaveRequestForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

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
  
  // Daye Picker Functions
  const startDateValue = form.watch("startDate")
  const endDateValue = form.watch("endDate")
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);

  const closeStartCalendar = () => {
    setIsStartCalendarOpen(false);
  };

  const openStartCalendar = () => {
    setIsStartCalendarOpen(true);
  };

  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);

  const closeEndCalendar = () => {
    setIsEndCalendarOpen(false);
  };

  const openEndCalendar = () => {
    setIsEndCalendarOpen(true);
  };

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
                      onClick={openStartCalendar}
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

                {isStartCalendarOpen && (
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > endDateValue || date < new Date("1900-01-01")
                        }
                        initialFocus
                        onDayClick={closeStartCalendar}
                      />
                    </PopoverContent>
                )}
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
                      onClick={openEndCalendar}
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
                    
                    {isEndCalendarOpen && (
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < startDateValue || date < new Date("1900-01-01")
                          }
                          initialFocus
                          onDayClick={closeEndCalendar}
                        />
                      </PopoverContent>         
                      )}
              </Popover>
              <FormMessage />
            </FormItem>
            )
          }}
        />

        {/* Reason Textbox */}
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a comment..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Address */}
        <FormField
          control={form.control}
          name="contactAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Address:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write a contact address..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="0926 000 0000" type="text" {...field} pattern="\d*" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
