import loaderImg from '@/assets/loader.gif'
import { createPortal } from 'react-dom'

const Loader = () => {
  const loaderContainer = document.getElementById("loader")

  if(!loaderContainer) {
    return null
  }
  return createPortal(
    <div className='fixed top-0 left-0 w-screen h-screen bg-slate-100 z-99'>
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-999 w-24">
        <img src={loaderImg} alt="Loading..."  />
      </div>
    </div>, 
    loaderContainer
  )
}
export default Loader


