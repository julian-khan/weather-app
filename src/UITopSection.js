export default function UITopSection({processedCurrentWeatherData, todayMinAndMax}) {
  /* The weather icons used are from Wikimedia Commons:
  https://commons.wikimedia.org/wiki/Category:Weather_icons 
  */


  /* Move the below JSX to separate UI component(s):
  <div>{processedCurrentWeatherData.name}</div> // Add weather image depending on weather inline with city name
        <div>
          Today: {processedCurrentWeatherData.weather[0].main}
        </div>

        <div>
          <span>Min: {todayMinAndMax[0]}</span>
          <span>Max: {todayMinAndMax[1]}</span>
        </div>
      </div>
  */

    return (
      <div className='sm:text-center lg:text-left'>
          <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block py-8 ">A weather app</span>
          </h1>
      </div>      
    );
  }