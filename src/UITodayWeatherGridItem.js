
export default function UITodayWeatherGridItem ({propName, propValue}) { //make this component a flexbox container with the name above and value below

  return (
    <div className="rounded-md flex flex-col items-center border-zinc-400 border-4">
      <div>
        {propName}
      </div>
      <div>
        {propValue}
      </div>

    </div>
  ); 
};


