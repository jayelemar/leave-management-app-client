import ResetImage from "@/assets/reset.svg"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

const FormSchema = z.object({
  password: z.string(),
  confirmPassword: z.string(),
});

const PasswordMatchSchema = FormSchema.refine(data => data.confirmPassword === data.password, {
  message: "Passwords do not match",
});

const ResetPassword = () => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(PasswordMatchSchema),
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section>
      <div className="w-screen flex flex-row-reverse md:justify-center gap-x-4 md:px-4 h-[450px]">
        <div className="hidden md:flex md:justify-between animate-slide-down">
          <img src={ResetImage} alt="img1" width="400px" />
        </div>
        <Card className='flex justify-center items-center mx-4 md:w-[400px] mb-4 h-[500px] md:h-[430px] animate-slide-up shadow-lg'>
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
              <Link to='/'className='text-xs text-darkGrey'>Back to Home</Link>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  )
}

export default ResetPassword
