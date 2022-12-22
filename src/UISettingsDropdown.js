import { useRef, useEffect, useState } from "react";
import SettingsIcon from "./weather-icons/icons/SettingsIcon";

export default function UISettingsDropdown({
  viewMode,
  setViewMode,
  units,
  setUnits,
}) {
  const [opened, setOpened] = useState(false);

  function DropDownSection() {
    const itemStyling =
      "border-solid border-zinc-400 border-2 rounded-md transition ease-in-out delay-100 hover:bg-sky-500 dark:hover:bg-sky-700 duration-320 text-md dark:text-white ";
    return (
      <div className="absolute flex w-40 -translate-x-32 translate-y-4 flex-col">
        <button
          className={itemStyling}
          onClick={() => {
            setViewMode(viewMode === "light" ? "dark" : "light");
          }}
        >
          Enable {viewMode === "light" ? "dark" : "light"} mode
        </button>
        <button
          className={itemStyling}
          onClick={() => {
            setUnits(units === "metric" ? "imperial" : "metric");
          }}
        >
          Switch to degrees {units === "metric" ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
    );
  }

  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          opened === true
        ) {
          setOpened(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        //Cleanup to remove the event listener
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, opened]);
  }

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  return (
    <li
      ref={wrapperRef}
      onClick={() => {
        setTimeout(() => {
          setOpened(!opened);
        }, 150);
      }}
      className="duration-320 transition delay-100 ease-in-out hover:-translate-y-1 hover:scale-110"
    >
      <SettingsIcon />
      {opened && <DropDownSection />}
    </li>
  );
}
