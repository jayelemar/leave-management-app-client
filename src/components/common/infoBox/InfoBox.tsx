import { Card } from "@/components/ui/card"
import { FC } from "react";

interface InfoBoxProps {
  bgColor: string; // You can adjust the type accordingly based on your needs
  title: string;
  count: number;
}


const InfoBox:FC<InfoBoxProps> = ({ bgColor, title, count }) => {
  return (
    <Card 

      className={`${bgColor} w-full m-auto pt-3 pl-3 flex items-center justify-center gap-2 text-white mx-4`}
    >

      <h1>{count}</h1>
      <p className="text-xl relative bottom-3">{title}</p>

 
  
    </Card>
  )
}

export default InfoBox
