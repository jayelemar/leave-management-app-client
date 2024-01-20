import loaderImg from '@/assets/loader.gif'

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center flex-col  mx-auto text-center w-24">
      <img src={loaderImg} alt="Loading..." />
    </div>
  )
};