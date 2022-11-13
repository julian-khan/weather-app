import DailySummary5D from "./DailySummary5D";

export default function UIFiveDayForecast({threeHDDailySummaries}) {

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
    <div>
      <DailySummary5D daySummary={testDayData} />
 
    </div>
  );
    };