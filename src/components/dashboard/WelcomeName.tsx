import { useAuthStore } from "@/store/authStore"



const WelcomeName = () => {
  const name = useAuthStore((state) => state.name)
  
  return (
    <div>
      <h5 className="flex flex-col xs:flex-row font-normal text-lg">
        <span>Welcome,&nbsp;</span>
        <span className="font-semibold">{name}</span>
      </h5>  
    </div>
  )
}

export default WelcomeName
