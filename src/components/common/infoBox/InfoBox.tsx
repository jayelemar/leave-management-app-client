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
      className={`${bgColor} flex flex-col xs:flex-row  xs:gap-2 justify-center text-center items-center  text-white p-2`}
    >


        <h1 className="text-4xl inline h-6">{count}</h1>

        <p className="text-xs xs:text-sm sm:text-base md:text-lg xl:text-xl inline md:whitespace-nowrap">{title}</p>

    </Card>
  )
}

export default InfoBox
