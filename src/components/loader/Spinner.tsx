
import { Loader2 } from 'lucide-react';

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full w-full flex-col  mx-auto text-center">
      <Loader2 size={50} className='animate-spin text-primary '/>
    </div>
  )
};