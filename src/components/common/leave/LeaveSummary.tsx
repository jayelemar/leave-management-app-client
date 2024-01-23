import InfoBox from "../infoBox/InfoBox"


const summaryList = [
  {
    bgColor: "bg-solidGreen",
    title: "Leave Entitlement",
    count: 25,
  },
  {
    bgColor: "bg-solidGreen",
    title: "Leave Utilization",
    count: 4,
  },
  {
    bgColor: "bg-slate-500",
    title: "Leave Entitlement",
    count: 20,
  },
  {
    bgColor: "bg-red-500",
    title: "Total Leave Token",
    count: 20,
  },
];

const LeaveSummary = () => {
  return (
    <div>
      <h3>Leave Stats</h3>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">
        {summaryList.map((item, index) => {
          return (
            <InfoBox  key={index} bgColor={item.bgColor} title={item.title} count={item.count}/>
          )  
        })}
      </div>
    </div>
  )
}

export default LeaveSummary
