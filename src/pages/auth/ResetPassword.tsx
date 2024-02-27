import ResetImage from "@/assets/reset.svg"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useResetPassword } from "@/services/authServices"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast as toastify } from "react-toastify"
import { z } from "zod"

const FormSchema = z.object({
  password: z.string(),
  confirmPassword: z.string(),
});

const PasswordMatchSchema = FormSchema.refine(data => data.confirmPassword === data.password, {
  message: "Passwords do not match",
});

const ResetPassword = () => {
  const { mutateAsync: ResetPasswordMutation } = useResetPassword();
  const { resetToken } = useParams<{resetToken?: string }>()
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(PasswordMatchSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {

    if (resetToken !== undefined) {
      const response = await ResetPasswordMutation({ data, resetToken });
      toastify.success(response.message);
      navigate('/')
    } else {
      // Handle the case where resetToken is undefined
      console.error("resetToken is undefined");
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="w-full">
          <img src={ResetImage} alt="img1" width="400px" className="animate-slide-down hidden md:flex"/>
        <Card className='animate-slide-up flex justify-center items-center mx-4 w-full md:w-[400px] mb-4 h-[500px] md:h-[500px] shadow-none md:shadow-lg border-none'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-3">
              <Label className='flex items-center justify-center text-2xl'>Reset Password</Label>
    
              <div className="relative">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className='flex flex-col justify-center items-start'>
                    <FormLabel className='mr-4'>Password</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="" 
                        type={showPassword ? 'text' : 'password'} 
                        {...field}
                      />            
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {showPassword ? (
                  <EyeOff
                    className='absolute top-8 right-2 text-gray-300 cursor-pointer'
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    className='absolute top-8 right-2 text-gray-300 cursor-pointer'
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
                
              <div className="relative">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className='flex flex-col justify-center items-start mb-10'>
                    <FormLabel className='mt-2 mr-4'>Confirm Password</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="" 
                        type={showConfirmPassword ? 'text' : 'password'} {...field}
                      />                    
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {showConfirmPassword ? (
                  <EyeOff
                    className='absolute top-10 right-2 text-gray-300 cursor-pointer'
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <Eye
                    className='absolute top-10 right-2 text-gray-300 cursor-pointer'
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>
                
              <Button type="submit" className='w-full '>Reset Password</Button>
              <Link to='/'className='text-base font-normal flex text-slate-500'><ChevronLeft size={23} />Home</Link>
            </form>
          </Form>
        </Card>
    </section>
  )
}

export default ResetPassword
