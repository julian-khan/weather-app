import { useState } from "react";
import SettingsIcon from "./weather-icons/icons/SettingsIcon";


export default function UISettingsDropdown({viewMode, setViewMode}) {
  const [opened, setOpened] = useState(false);

  function GenerateSettingsIcon() { 
    return (
      <SettingsIcon />
    );
  }

  function DropDownSection(props) {
    return ( 
    <div className="flex flex-col">
      <button onClick={() => {setViewMode(viewMode === 'light'? 'dark' : 'light')}}>Enable {viewMode === 'light'? 'dark' : 'light'} mode</button>
      <button>Toggle units</button>
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