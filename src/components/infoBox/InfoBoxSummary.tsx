import InfoBox from "./InfoBox"
import { infoBoxData } from "./InfoBoxData"

const InfoBoxSummary = () => {
  return (
    <div className="w-full mx-4 ">
      <h5>Leave Statistics</h5>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-1 my-1">
        {infoBoxData.map((item, index) => {
          return (
            <InfoBox  key={index} bgColor={item.bgColor} title={item.title} count={item.count}/>
          )  
        })}
      </div>
    </div>
  )
}

export default InfoBoxSummary
