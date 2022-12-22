export default function UITodayWeatherGridItem ({propName, propValue}) {
  return (
    <div className="text-slate-900 dark:text-white rounded-md flex flex-col justify-center items-center border-zinc-400 border-4 px-3 h-24 w-40">
      <div className="text-lg text-center">
        {propName}
      </div>
      <div>
        {propValue}
      </div>
    </div>
    ); 
};


