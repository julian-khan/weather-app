import { useState } from "react";
import SettingsIcon from "./weather-icons/icons/SettingsIcon";


export default function UISettingsDropdown({viewMode, setViewMode, units, setUnits}) {
  const [opened, setOpened] = useState(false);

  function GenerateSettingsIcon() { 
    return (
      <SettingsIcon />
    );
  }

  function DropDownSection(props) {
    return ( 
    <div className="flex flex-col">
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-320" onClick={() => {setViewMode(viewMode === 'light'? 'dark' : 'light')}}>Enable {viewMode === 'light'? 'dark' : 'light'} mode</button>
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-320" onClick={() => {setUnits(units === 'metric'? 'imperial' : 'metric')}}>Switch units to {units === 'metric'? 'imperial': 'metric'}</button>
    </div>
    );
  }

  return (
    <li onClick={() => {setOpened(!opened)}} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-320"> 
    <GenerateSettingsIcon />
    {opened && <DropDownSection/>}

    </li>
    );
  };