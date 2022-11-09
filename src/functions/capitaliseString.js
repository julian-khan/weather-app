export default function capitaliseString(str) {
    const returnStr = str.charAt(0).toUpperCase() + str.slice(1);
    return returnStr;
  }