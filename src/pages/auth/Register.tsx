// bunch of imports
import { toast } from "@/components/ui/use-toast";
import { useRegisterUser } from "@/services/authServices"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import registerImage from "@/assets/register.svg"
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  name: z
  .string()
  .min(1, { message: "required" }),
  email: z
    .string()
    .min(1, { message: "required" })
    .email("This is not a valid email."),
  password: z
  .string()
  .min(1, { message: "required" }),
});


const Register = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name:"",
      email: "",
      password: "",
    },
  })

  const { mutate: RegisterMutation } = useRegisterUser();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  
    try {
      await RegisterMutation(data);
      console.log("Registration successful!");
    } catch (error) {
      console.log("registration failed", error);
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <section>
      <div className="w-screen flex flex-row-reverse md:justify-center gap-x-4 md:px-4 h-[450px]">
        <div className="hidden md:flex md:justify-between animate-slide-down">
          <img src={registerImage} alt="img1" width="400px" />
        </div>
        <Card className='flex justify-center items-center mx-4 md:w-[400px] mb-4 h-[500px] md:h-[430px] animate-slide-up shadow-lg'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-3">
              <Label className='flex items-center justify-center text-2xl'>Register</Label>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className='flex flex-col justify-center items-start'>
                    <FormLabel className='mt-2 mr-10'>Name:</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className='flex flex-col justify-center items-start'>
                    <FormLabel className='mt-2 mr-10'>Email:</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="" 
                        {...field} 
                      />
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
                  <FormItem className='flex flex-col justify-center items-start'>
                    <FormLabel className='mr-4'>Password:</FormLabel>
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
                
              <Button type="submit" className='w-full '>Register</Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  )
}
export default Register
