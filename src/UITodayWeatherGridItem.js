
export default function UITodayWeatherGridItem ({propName, propValue}) { //make this component a flexbox container with the name above and value below

  return (
    <div className="className='flex flex-col items-center'">
      <div>
        {propName}
      </div>
      <div>
        {propValue}
      </div>

    </div>
  ); 
};


