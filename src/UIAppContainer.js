import UITitleSection from "./UITitleSection";
import UIContactMeHeader from "./UIContactMeHeader";
import UILocationSearch from "./UILocationSearch";
import UICurrentWeatherInfo from "./UICurrentWeatherInfo";
import UISectionHeading from "./UISectionHeading";
import UITodayWeatherInfoGrid from "./UITodayWeatherInfoGrid";
import UIFiveDayForecastGrid from "./UIFiveDayForecastGrid";

export default function UIAppContainer({
  setLocationName,
  processedCurrentWeatherData,
  threeHDDailySummaries,
  units,
  setUnits,
  viewMode,
  setViewMode,
}) {
  let todayMinAndMax = null;
  if (threeHDDailySummaries) {
    todayMinAndMax = threeHDDailySummaries[0].MinAndMaxTemp;
  }
  if (
    setLocationName &&
    processedCurrentWeatherData &&
    threeHDDailySummaries &&
    units
  ) {
    return (
      <div className="h-fit min-w-[600px] bg-white pb-12 dark:bg-slate-800 pb-12">
        <UIContactMeHeader
          viewMode={viewMode}
          setViewMode={setViewMode}
          units={units}
          setUnits={setUnits}
        />
        <UITitleSection />
        <div className="flex items-center">
          <UILocationSearch setLocationName={setLocationName} />
        </div>
        <UICurrentWeatherInfo
          processedCurrentWeatherData={processedCurrentWeatherData}
          units={units}
          todayMinAndMax={todayMinAndMax}
        />
        <UITodayWeatherInfoGrid
          processedCurrentWeatherData={processedCurrentWeatherData}
          units={units}
        />
        <UISectionHeading headingName={"Five-day forecast"} />
        <UIFiveDayForecastGrid
          threeHDDailySummaries={threeHDDailySummaries}
          units={units}
        />
        <div className="text-md text-red-500 dark:text-red-300 mx-auto mt-8 w-2/4 min-w-[450px] max-w-[800px] rounded-md px-3">
          *Please note that the displayed minimum and maximum temperatures are usually inaccurate due to a limitation
          of the data received from the API. Please refer to the project's README file on GitHub for an explanation.
        </div>
      </div>
    );
  }
}
