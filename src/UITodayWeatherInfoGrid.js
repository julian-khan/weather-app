import UITodayWeatherGridItem from "./UITodayWeatherGridItem";

export default function UITodayWeatherInfoGrid ({processedCurrentWeatherData, units}) { //make this component a generic css grid container
  // that contains another component for each grid item, recursively rendered to contain all required information.
  let currentDateFormatted = null;

  const formatDate = (currentDateStr) => {
    //A pure function that takes a date string as an argument and returns a formatted string for output in the UI
    const separatedDateArr = currentDateStr.split(',');
    separatedDateArr.pop();
    return separatedDateArr;
  }

  processedCurrentWeatherData? currentDateFormatted = formatDate("Saturday, November 12, 2022") : currentDateFormatted = null;

  if (processedCurrentWeatherData && units) { 
  return (
   <div className="grid grid-cols-3 gap-4 place-items-center mx-8">
   <div className="currentDateAndTime"> 
    <div>
      {currentDateFormatted[0]},
    </div>
    <div>
      {currentDateFormatted[1]}
    </div>
    <div>
      {processedCurrentWeatherData.time}
    </div>
   </div>
    
  <div>
    <div>
      Sunrise
    </div>
    <div>
      {processedCurrentWeatherData.sunriseFormatted}
    </div>
  </div>

  <div>
    <div>
      Sunset
    </div>
    <div>
      {processedCurrentWeatherData.sunsetFormatted}
    </div>
  </div>


  <div>test 3 </div>
  <div>test 4 </div>
</div>
  );

  }
};


