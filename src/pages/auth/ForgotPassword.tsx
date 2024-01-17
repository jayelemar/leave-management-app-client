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
import { Link, useNavigate } from 'react-router-dom'
import { useForgotPassword } from '@/services/authServices'
import { ChevronLeft } from 'lucide-react'

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
  ,
})


const ForgotPassword: FC = () => {
  const navigate = useNavigate();
  const { mutateAsync: ForgotPasswordMutation } = useForgotPassword();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    try {
      await ForgotPasswordMutation(data)
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        // Handle specific error types if needed
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(()=> {
    inputRef.current?.focus();
})

  return (
    <section>
        <img src={ForgotImage} alt="img1" width="430px" className='hidden md:flex animate-slide-down' />
        <Card className='animate-slide-up flex justify-center items-center mx-4 w-5/6 md:w-[400px] mb-4 h-[500px] md:h-[500px] shadow-none md:shadow-lg border-none'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 ">
              <Label className='flex items-center justify-center text-2xl relative bottom-6'>Forgot Password</Label>
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
              <Link to='/'className='text-base font-normal flex text-slate-500 relative bottom-3'><ChevronLeft size={23} />Home</Link>
            </form>
          </Form>



        </Card>

    </section>
  )
}

export default ForgotPassword
