import { useEffect } from "react";
import * as dataHandling from "./functions/dataHandling3H5DModule";

export default function useParse3H5D(
  processedCurrentWeatherData,
  threeH5DData,
  setThreeHDDailySummaries
) {
  function getSummaries3H5D(separated3H5D) {
    const currentTemp = processedCurrentWeatherData.temp;
    let summarisedDay3H = [];

    for (let i = 0; i <= separated3H5D.length - 1; i++) {
      let dayListOutput = {};
      dayListOutput.dayNumber = i + 1;

      const dayForData = separated3H5D[i];

      const weatherDescCount =
        dataHandling.getDailyWeatherDescriptions(dayForData);
      const mostCommonWeather =
        dataHandling.getMostCommonWeatherDescription(weatherDescCount);
      dayListOutput.weather = mostCommonWeather;

      const dailyTempArray = dataHandling.getDailyTempArray(dayForData);
      let MinAndMaxTemp = dataHandling.getMinAndMaxTemp(dailyTempArray);
      if (i === 0 && currentTemp < MinAndMaxTemp[0]) {
        MinAndMaxTemp[0] = currentTemp;
      } else if (i === 0 && currentTemp > MinAndMaxTemp[1]) {
        MinAndMaxTemp[1] = currentTemp;
      }
      dayListOutput.MinAndMaxTemp = MinAndMaxTemp;

      const date = new Date(dayForData[0].dt * 1000);
      const dayOfWeek = new Intl.DateTimeFormat("en-GB", {
        weekday: "long",
      }).format(date);
      dayListOutput.dayOfWeek = dayOfWeek;

      const averageVisibility = dataHandling.calculateAvVisibility(dayForData);
      dayListOutput.averageVisibility = averageVisibility;

      summarisedDay3H.push(dayListOutput);
    }
    return summarisedDay3H;
  }

  useEffect(() => {
    if (processedCurrentWeatherData && threeH5DData) {
      const separated3H5D = dataHandling.separate3H5DDataToDays(threeH5DData);
      const summaryOutput = getSummaries3H5D(separated3H5D);
      setThreeHDDailySummaries(summaryOutput);
    }
  }, [processedCurrentWeatherData, threeH5DData]);
}
