import UIDailySummaryGridItem from "./UIDailySummaryGridItem";

export default function UIFiveDayForecastGrid({threeHDDailySummaries, units}) {

  return (
    <div className="grid border-4 border-zinc-400 rounded-md py-2 px-3 mx-auto mt-8 w-2/4 max-w-[800px] min-w-[450px]">
      {threeHDDailySummaries.map((daySummary, index) => {
        return <UIDailySummaryGridItem key={index} daySummary={daySummary} units={units} /> 
      })}
    </div>
  );
    };