export default function UITodayWeatherGridItem({ propName, propValue }) {
  return (
    <div className="flex h-24 w-40 flex-col items-center justify-center rounded-md border-4 border-zinc-400 px-3 text-slate-900 dark:text-white">
      <div className="text-center text-lg">{propName}</div>
      <div>{propValue}</div>
    </div>
  );
}
