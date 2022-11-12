import UITodayWeatherGridItem from "./UITodayWeatherGridItem";

export default function UITodayWeatherInfoGrid ({processedCurrentWeatherData, units}) { //make this component a generic css grid container
  // that contains another component for each grid item, recursively rendered to contain all required information.

  return (
    <div className="grid grid-cols-3 gap-4 place-items-center mx-8">
  <UITodayWeatherGridItem />

  <div>test 2</div>
  <div>test 3 </div>
  <div>test 4 </div>
</div>
  );

  
};


