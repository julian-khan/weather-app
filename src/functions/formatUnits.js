export default function formatUnits(units) {
    let outputStr = null;
    units === 'metric'? outputStr = ' °C' : outputStr = '°F';
    return outputStr;
  };