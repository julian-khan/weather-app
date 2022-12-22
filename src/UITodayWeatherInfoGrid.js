import UITodayWeatherGridItem from "./UITodayWeatherGridItem";
import formatUnits from "./functions/formatUnits";

export default function UITodayWeatherInfoGrid({
  processedCurrentWeatherData,
  units,
}) {
  let currentDateFormatted = null;

  const formatDate = (currentDateStr) => {
    // A pure function that takes a date string as an argument and returns a formatted string for output in the UI
    const separatedDateArr = currentDateStr.split(",");
    separatedDateArr.pop();
    return separatedDateArr;
  };
  processedCurrentWeatherData
    ? (currentDateFormatted = formatDate(processedCurrentWeatherData.date))
    : (currentDateFormatted = null);

  if (processedCurrentWeatherData && units) {
    return (
      <div className="my-8 mx-auto grid max-w-lg auto-rows-fr grid-cols-3 gap-4">
        <UITodayWeatherGridItem
          propName={currentDateFormatted[0] + ", " + currentDateFormatted[1]}
          propValue={processedCurrentWeatherData.time}
        />
        <UITodayWeatherGridItem
          propName="Sunrise"
          propValue={processedCurrentWeatherData.sunriseFormatted}
        />
        <UITodayWeatherGridItem
          propName="Sunset"
          propValue={processedCurrentWeatherData.sunsetFormatted}
        />
        <UITodayWeatherGridItem
          propName="Visibility"
          propValue={processedCurrentWeatherData.visibility / 1000 + " km"}
        />
        <UITodayWeatherGridItem
          propName="Feels like"
          propValue={
            processedCurrentWeatherData.feels_like + formatUnits(units)
          }
        />
        <UITodayWeatherGridItem
          propName="Humidity"
          propValue={processedCurrentWeatherData.humidity + "%"}
        />
      </div>
    );
  }
}
