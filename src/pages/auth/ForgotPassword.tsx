import { FC, useEffect, useRef } from 'react'
import { toast } from '@/components/ui/use-toast'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from '@/components/ui/button'

import { Card } from '@/components/ui/card'
import  ForgotImage from '@/assets/forget.svg'

import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
  ,
})


const ForgotPassword: FC = () => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
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

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(()=> {
    inputRef.current?.focus();
})

  return (
    <section>
      <div className="w-screen flex flex-col md:flex-row md:justify-center gap-x-4 md:px-4 h-[450px]">
        <div className="animate-slide-down hidden md:flex md:justify-between">
          <img src={ForgotImage} alt="img1" width="430px" />
        </div>
        <Card className='animate-slide-up flex justify-center items-center mx-4 md:w-[400px] mb-4 h-[500px] md:h-[430px] shadow-lg '>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
              <Label className='flex items-center justify-center text-2xl'>Forgot Password</Label>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className='flex flex-col justify-center items-start'>
                    <FormLabel className='mt-2 mr-10'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} ref={inputRef} autoComplete='off'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className='w-full'>Get Reset Email</Button>
              <Link to='/'className='text-xs text-darkGrey'>Back to Home</Link>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  )
}

export default ForgotPassword
