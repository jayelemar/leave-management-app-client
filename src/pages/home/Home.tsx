
import { FC, useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Image1 from '@/assets/home-image.svg'
import { Link } from 'react-router-dom'

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
  ,
  password: z.string(),
})


const Home: FC= () => {
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

  const [showPassword, setShowPassword] = useState(false);


  return (
    <main>
      <div className="w-screen flex flex-col md:flex-row md:justify-center gap-x-4 md:px-4 h-[450px]">
      <div className="hidden md:flex md:justify-between">
        <img src={Image1} alt="img1" width="430px" />
      </div>
      <Card className='flex justify-center items-center mx-4 md:w-[400px] mb-4 h-[500px] md:h-[430px]'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='flex flex-col justify-center items-start'>
                  <FormLabel className='mt-2 mr-10'>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="relative">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className='flex flex-col justify-center items-start mb-12'>
                  <FormLabel className='mt-2 mr-4'>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="" type={showPassword ? 'text' : 'password'} {...field} />
                    
                  </FormControl>
                  <FormDescription>
                    <Link to='/forgetpassword'>Forget password?</Link>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {showPassword ? (
                <EyeOff
                  className='absolute top-10 right-2 text-gray-300 cursor-pointer'
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  className='absolute top-10 right-2 text-gray-300 cursor-pointer'
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <Button type="submit" className='w-full'>Login</Button>
          </form>
        </Form>
      </Card>
      </div>
    </main>
  )
}

export default Home
