import UIDailySummaryGridItem from "./UIDailySummaryGridItem";

export default function UIFiveDayForecastGrid({
  threeHDDailySummaries,
  units,
}) {
  return (
    <div className="mx-auto mt-8 grid w-2/4 min-w-[450px] max-w-[800px] rounded-md border-4 border-zinc-400 py-2 px-3">
      {threeHDDailySummaries.map((daySummary, index) => {
        return (
          <UIDailySummaryGridItem
            key={index}
            daySummary={daySummary}
            units={units}
          />
        );
      })}
    </div>
  );
}
