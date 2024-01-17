
import { FC, useEffect, useRef, useState } from 'react'
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
import { Link, useNavigate } from 'react-router-dom'

import { Label } from '@/components/ui/label'
import { useLoginUser } from '@/services/authServices'
import { useDispatch } from 'react-redux'
import { actions } from '@/redux/features/auth/authSlice'
import { toast as toastify } from 'react-toastify'
import Loader from '@/components/common/Loader'


const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
  ,
  password: z.string(),
})

const Home: FC= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  }) 

  const { mutateAsync: LoginMutation, isPending } = useLoginUser();

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
      const response = await LoginMutation(data);
      console.log("data from DB", response.name);
      dispatch(actions.SET_NAME(response.name))
      setTimeout(() => { 
        console.log("redux name is :", name); 
     }, 0);

      toastify.success("User Login Successfully")
      navigate("/dashboard")

    } catch (error) {
      console.error("Registration failed", error);

    }

  }

  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(()=> {
      inputRef.current?.focus();
  })

  return (

      <section>
      {isPending ? <Loader/> : null}

        <img src={Image1} alt="img1" width="430px" className='hidden md:flex animate-slide-down' />

        <Card className='animate-slide-up flex justify-center items-center mx-4 w-5/6 md:w-[400px] mb-4 h-[500px] md:h-[500px] shadow-none md:shadow-lg border-none '>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
              <Label className='flex items-center justify-center text-2xl'>Login</Label>
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
                      <Link to='/forgotpassword' className='text-base font-normal text-slate-500'>Forget password?</Link>
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
      </section>
  )
}

export default Home
