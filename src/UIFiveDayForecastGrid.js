import DailySummaryGridItem from "./DailySummaryGridItem";

export default function UIFiveDayForecastGrid({threeHDDailySummaries, units}) {

  const testDayData = {
    "dayNumber": 2,
    "weather": "Snow",
    "MinAndMaxTemp": [
        14.18,
        22.69
    ],
    "dayOfWeek": "Monday",
    "visibility": 10000, //visibility not in object by default
  }

  return (
    <div className="grid gap-4 my-8 mx-20">
      {threeHDDailySummaries.map((daySummary, index) => {
        if(index>0){ return <DailySummaryGridItem key={index} daySummary={daySummary} units={units} /> }
      })}
   
    </div>
  );
    };