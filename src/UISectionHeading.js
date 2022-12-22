export default function UISectionHeading({ headingName }) {
  return (
    <div className="-mb-4 sm:text-center lg:text-left">
      <h2 className="text-center text-xl tracking-tight text-gray-900 sm:text-xl md:text-3xl">
        <span className="block text-slate-900 dark:text-white">
          {headingName}
        </span>
      </h2>
    </div>
  );
}
