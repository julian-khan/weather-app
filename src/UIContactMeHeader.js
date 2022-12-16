
import mail from './ContactMeHeader-icons/mail.svg';
import SettingsIcon from './weather-icons/icons/SettingsIcon';
import linkedinicon from './ContactMeHeader-icons/linkedinicon.png';
import UISettingsDropdown from './UISettingsDropdown';

export default function UIContactMeHeader() {
 

  return (
    <nav className=" flex items-center justify-between py-2 px-4 bg-slate-200">
      <div className = 'text-xl sm:text-2xl md:text-3xl tracking-tight text-gray-900 '>Contact me</div>
      <ul className="flex items-center">
        <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-320"> 
          <a href="https://au.linkedin.com/in/julian-khan">
            <img src={linkedinicon} className='w-9' /> 
          </a>
        </li>
        <UISettingsDropdown />
      </ul>
    </nav >   
  );

    };