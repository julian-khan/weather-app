import linkedinicon from './ContactMeHeader-icons/linkedinicon.png';
import UISettingsDropdown from './UISettingsDropdown';

export default function UIContactMeHeader({viewMode, setViewMode, units, setUnits}) {
  return (
    <nav className=" flex items-center justify-between py-2 px-4 bg-slate-200">
      <a className="transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 duration-320"
      href="https://github.com/julian-khan/weather-app#readme">
        <div className = 'text-sm tracking-tight text-gray-900 '>Please view the README file on GitHub</div>
      </a>
      <ul className="flex items-center">
        <li className="transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 duration-320"> 
          <a href="https://au.linkedin.com/in/julian-khan">
            <img src={linkedinicon} className='w-9' /> 
          </a>
        </li>
        <UISettingsDropdown viewMode={viewMode} setViewMode={setViewMode} units={units} setUnits={setUnits}/>
      </ul>
    </nav >   
  );

  };