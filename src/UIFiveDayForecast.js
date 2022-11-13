import DailySummary5D from "./DailySummary5D";

export default function UIFiveDayForecast({threeHDDailySummaries, units}) {

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

  //    <DailySummary5D daySummary={testDayData} units={units}/>


 

  return (
    <div>
      {threeHDDailySummaries.map((daySummary, index) => {
        return <DailySummary5D key={index} daySummary={daySummary} units={units} />
      })}
   
    </div>
  );
    };