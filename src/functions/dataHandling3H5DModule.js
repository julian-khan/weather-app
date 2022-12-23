export function separate3H5DDataToDays(data) {
  /* Takes raw 3H5D data obj as a parameter and returns an array of 5 arrays, one for each day's data */
  let separated3HDailyData = [];
  let dailyData = [];
  let dayOfMonth = null;
  const time_adjustment_seconds = data.city.timezone;

  function getLocalDayOfMonth(date_seconds, time_adjustment_seconds) {
    const date = new Date(date_seconds * 1000 + time_adjustment_seconds * 1000);
    return date.getUTCDate();
  }

  for (let i = 0; i <= data.list.length - 1; i++) {
    if (i === 39) {
      dailyData.push(data.list[i])
      separated3HDailyData.push(dailyData)
    } else if (getLocalDayOfMonth(data.list[i].dt, time_adjustment_seconds) === dayOfMonth) {
      dailyData.push(data.list[i]);
    } else {
      dayOfMonth = getLocalDayOfMonth(data.list[i].dt, time_adjustment_seconds);
      dailyData.length > 0
        ? separated3HDailyData.push(dailyData)
        : (dailyData = null);
      dailyData = [];
      dailyData.push(data.list[i]);
    }
  }
  return separated3HDailyData;
}

export function getDailyWeatherDescriptions(data) {
  var weatherDescCount = {};
  for (let i = 0; i <= data.length - 1; i++) {
    let threeHourWeatherDesc = data[i].weather[0].main;
    if (threeHourWeatherDesc in weatherDescCount) {
      weatherDescCount[threeHourWeatherDesc]++;
    } else {
      weatherDescCount[threeHourWeatherDesc] = 1;
    }
  }
  return weatherDescCount;
}

export function getMostCommonWeatherDescription(Obj) {
  return Object.keys(Obj).reduce((a, b) => (Obj[a] > Obj[b] ? a : b));
}

export function getDailyTempArray(data) {
  /* Takes the 3H5D weather object as a parameter and outputs an array of all of 3-hourly temperatures
    that includes the min and max temperatures. */
  let dailyTemperatures = [];
  for (let i = 0; i <= data.length - 1; i++) {
    dailyTemperatures.push(data[i].main.temp);
  }
  return dailyTemperatures;
}

export function getMinAndMaxTemp(Arr) {
  return [Math.min(...Arr).toFixed(0), Math.max(...Arr).toFixed(0)];
}

export function calculateAvVisibility(dayForData) {
  let summedVisibility = 0;
  for (let i = 0; i < dayForData.length; i++) {
    summedVisibility += dayForData[i].visibility;
  }
  return summedVisibility / dayForData.length;
}
