export default function UISettings-dropdown(props) {
  
    return (
      <div className="grid gap-4 my-8 mx-auto w-2/4 max-w-[800px] min-w-[450px]">
        {threeHDDailySummaries.map((daySummary, index) => {
          return <UIDailySummaryGridItem key={index} daySummary={daySummary} units={units} /> 
        })}
      </div>
    );
      };