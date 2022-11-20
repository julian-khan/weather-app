import UIDailySummaryGridItem from "./UIDailySummaryGridItem";

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
    <div className="grid gap-4 my-8 mx-auto w-2/4 max-w-[800px] min-w-[450px]">
      {threeHDDailySummaries.map((daySummary, index) => {
        return <UIDailySummaryGridItem key={index} daySummary={daySummary} units={units} /> 
      })}
    </div>
  );
    };