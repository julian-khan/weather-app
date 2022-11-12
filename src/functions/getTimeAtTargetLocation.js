export default function getTimeAtTargetLocation(dateObj) {
    const options = {hour12: 'true', hour: 'numeric', minute: 'numeric'}
    return dateObj.toLocaleString('en-GB', options)    
  }