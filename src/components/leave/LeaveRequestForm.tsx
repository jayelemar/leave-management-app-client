
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateLeave } from "@/services/leaveServices";
import { phoneRegex } from "@/utils/phoneRegex";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as z from "zod"
import { Spinner } from "../layout/Spinner";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import leaveCategories from '@/data/leaveData';
import { useAuthStore } from "@/store/authStore";
import { formatDate } from "@/utils/formatDate";




const FormSchema = z.object({
  name: z.string({
    required_error: "Name is undefined"
  }),
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
  const { mutateAsync: CreateLeaveMutation, isPending } = useCreateLeave()
  const displayName = useAuthStore().name
  const navigate = useNavigate();

  const today = new Date()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: displayName,
      startDate: today
    }
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      console.log(data);
      await CreateLeaveMutation(data);
      toast.success("Request Leave is Successfully Created")
      navigate("/dashboard");
    } catch (error) {
      console.log(error)
    }
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
    <Card className="mx-8 mb-6 p-4">
      {isPending ? <Spinner/> : null }
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 pb-6">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="flex-col">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col md:flex-row md:items-center">
                <FormLabel className="mr-2 pt-2 text-base">Name:</FormLabel>
                <FormControl>
                  <Input disabled {...field} className="border-none text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      
          <FormField
            control={form.control}
            name="leaveType"
            render={({ field }) => {
              return (
                <FormItem className="flex justify-start items-start md:items-center gap-2 flex-col md:flex-row my-3">
                <FormLabel className="mr-2 whitespace-nowrap pt-2">Leave Type:</FormLabel>
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
                        <SelectItem key={category.value} value={category.label}>
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
                <FormLabel className="mr-2 whitespace-nowrap pt-2">Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] md:w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                        onClick={openStartCalendar}
                      >
                        {field.value ? (
                          formatDate(field.value)
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
                <FormLabel className="mr-2 whitespace-nowrap pt-2">End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] md:w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                        onClick={openEndCalendar}
                      >
                        {field.value ? (
                          formatDate(field.value)
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
                    className="resize-none w-[240px] md:w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex-col relative lg:top-16 w-full">
          <FormField
            control={form.control}
            name="contactAddress"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Contact Address:</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a contact address..."
                    className="resize-none w-[240px] md:w-full"
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
                  <Input placeholder="0926 000 0000" type="text" {...field} pattern="\d*" className="w-[240px] md:w-full md:max-w-[335px] lg:w-72" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        </div>
        <Button type="submit" className="w-60 md:w-full md:max-w-[335px] lg:ml-52 lg:max-w-[250px]">Submit</Button>

      </form>
    </Form>
    </Card>
  )
}
