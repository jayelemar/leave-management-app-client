import { FC } from 'react'



interface InputDurationProps {

}
const InputDuration: FC<InputDurationProps> = () => {
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 m-4'>
    <p
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >        
        Holiday Duration 
        <span className='bg-slate-100 border border-solid border-primary mx-2 py-1 px-3 rounded-md text-primary font-bold'>
            2
        </span>
    </p>
    <p
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4 sm:mt-0"
    >        
        Total Duration 
        <span className='bg-slate-100 border border-solid border-1 border-primary mx-2 py-1 px-3 rounded-md text-primary font-bold ml-6 sm:ml-2'>
            4
        </span>
    </p>
    </div>
  )
}

export default InputDuration
