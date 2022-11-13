import DailySummary5D from "./DailySummary5D";

export default function UIFiveDayForecast({threeHDDailySummaries}) {

  const testDayData = {
    "dayNumber": 2,
    "weather": "Clear",
    "MinAndMaxTemp": [
        14.18,
        22.69
    ],
    "dayOfWeek": "Monday"
  }

  return (
    <div>
      <DailySummary5D daySummary={testDayData} />
 
    </div>
  );
    };