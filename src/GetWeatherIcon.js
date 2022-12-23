import ClearDay from "./weather-icons/icons/ClearDay";
import ClearNight from "./weather-icons/icons/ClearNight";
import CloudsDay from "./weather-icons/icons/CloudsDay";
import CloudsNight from "./weather-icons/icons/CloudsNight";
import ManyClouds from "./weather-icons/icons/ManyClouds";
import ShowersDay from "./weather-icons/icons/ShowersDay";
import ShowersNight from "./weather-icons/icons/ShowersNight";
import Snow from "./weather-icons/icons/Snow";


export default function GetWeatherIcon({ processedCurrentWeatherData }) {
  //make this function generic so that it can be reused for 5-day daily components
  //Returns an SVG image as a React Component

  const currentDateTime = processedCurrentWeatherData.dt;
  const todaySunsetDateTime = processedCurrentWeatherData.sunset;
  const weatherDesc = processedCurrentWeatherData.weather[0].main;
  const visibility = processedCurrentWeatherData.visibility;
  const VisibilityCutoff = 8000; // This value for the visibility cutoff is arbitrary.

  const isDay = (currentDt, sunsetDt) => {
    //Takes two Unix timestamps as arguments
    return currentDt < sunsetDt ? true : false;
  };

  if (isDay(currentDateTime, todaySunsetDateTime) && weatherDesc === "Clear") {
    return <ClearDay />;
  } else if (
    isDay(currentDateTime, todaySunsetDateTime) &&
    weatherDesc === "Clouds" &&
    visibility > VisibilityCutoff
  ) {
    return <CloudsDay />;
  } else if (
    isDay(currentDateTime, todaySunsetDateTime) &&
    weatherDesc === "Clouds" &&
    visibility < VisibilityCutoff
  ) {
    return <ManyClouds />;
  } else if (
    (isDay(currentDateTime, todaySunsetDateTime) && weatherDesc === "Rain") ||
    weatherDesc === "Drizzle"
  ) {
    return <ShowersDay />;
  } else if (
    isDay(currentDateTime, todaySunsetDateTime) &&
    weatherDesc === "Snow"
  ) {
    return <Snow />;
  } else if (
    !isDay(currentDateTime, todaySunsetDateTime) &&
    weatherDesc === "Clear"
  ) {
    return <ClearNight />;
  } else if (
    !isDay(currentDateTime, todaySunsetDateTime) &&
    weatherDesc === "Clouds"
  ) {
    return <CloudsNight />;
  } else if (
    (!isDay(currentDateTime, todaySunsetDateTime) && weatherDesc === "Rain") ||
    weatherDesc === "Drizzle"
  ) {
    return <ShowersNight />;
  } else return <div />;
}
