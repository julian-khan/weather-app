
time_adjustment_seconds = 28800
const date = new Date(1671451200 * 1000 + time_adjustment_seconds * 1000); // time in ms
day_of_month = date.getUTCDate()

console.log(day_of_month, date.getUTCHours(), date.getUTCMinutes())
