import GetWeatherIcon from "./GetWeatherIcon";
import capitaliseString from "./functions/capitaliseString";
import formatUnits from "./functions/formatUnits";

export default function UICurrentWeatherInfo({
  processedCurrentWeatherData,
  units,
  todayMinAndMax,
}) {
  if (processedCurrentWeatherData && units && todayMinAndMax) {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="flex items-center">
          <span className="px-3 text-xl text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            {processedCurrentWeatherData.name}
          </span>
          <span>
            <GetWeatherIcon
              processedCurrentWeatherData={processedCurrentWeatherData}
            />
          </span>
        </div>
        <div className="text-xl text-slate-500 dark:text-slate-400 sm:text-2xl md:text-3xl">
          {capitaliseString(processedCurrentWeatherData.weather[0].description)}
          , {processedCurrentWeatherData.temp}
          {formatUnits(units)}
        </div>
        <div className="text-md text-slate-500 dark:text-slate-400 sm:text-xl md:text-2xl">
          <span className="text-red-500 dark:text-red-300 p-1">
            Min: {todayMinAndMax[0]}{formatUnits(units)}*
          </span>
          <span className="text-red-500 dark:text-red-300 p-1">
            Max: {todayMinAndMax[1]}{formatUnits(units)}*
          </span>
        </div>
      </div>
    );
  }
}
