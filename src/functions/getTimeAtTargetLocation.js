export default function getTimeAtTargetLocation(dateObj) {
  const options = {
    hour12: "true",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  };
  let time_str = dateObj.toLocaleString("en-GB", options);

  if (time_str[0] === "0") {
    time_str = "12" + time_str.slice(1);
  }
  return time_str;
}
