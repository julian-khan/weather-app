import { useState } from "react";
import SettingsIcon from "./weather-icons/icons/SettingsIcon";


export default function UISettingsDropdown(props) {
  const [opened, setOpened] = useState(false);

  function GenerateSettingsIcon() { 
    return (
      <SettingsIcon />
    );
  }

  function DropDownSection(props) {
    return ( 
    <div>

    </div>
    );
  }

  return (
    <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-320"> 
    <GenerateSettingsIcon />

    </li>
    );
  };