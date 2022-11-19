
export default function UITodayWeatherGridItem ({propName, propValue}) { //make this component a flexbox container with the name above and value below

  return (
    <div className="rounded-md flex flex-col justify-center items-center border-zinc-400 border-4 my-2 mx-2">
      <div className="text-lg">
        {propName}
      </div>
      <div>
        {propValue}
      </div>

    </div>
  ); 
};


