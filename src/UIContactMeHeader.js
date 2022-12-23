import linkedinicon from "./ContactMeHeader-icons/linkedinicon.png";
import UISettingsDropdown from "./UISettingsDropdown";

export default function UIContactMeHeader({
  viewMode,
  setViewMode,
  units,
  setUnits,
}) {
  return (
    <nav className=" flex items-center justify-between bg-slate-200 py-2 px-4">
      <a
        className="duration-320 transition delay-150 ease-in-out hover:-translate-y-0.5 hover:scale-105"
        href="https://github.com/julian-khan/weather-app#readme"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-sm tracking-tight text-black bg-white py-2 px-2 rounded-lg border border-gray-300">
          View project README
        </div>
      </a>
      <ul className="flex items-center">
        <li className="duration-320 transition delay-150 ease-in-out hover:-translate-y-0.5 hover:scale-105">
          <a href="https://au.linkedin.com/in/julian-khan">
            <img src={linkedinicon} className="w-9" />
          </a>
        </li>
        <UISettingsDropdown
          viewMode={viewMode}
          setViewMode={setViewMode}
          units={units}
          setUnits={setUnits}
        />
      </ul>
    </nav>
  );
}
