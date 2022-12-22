export default function UITitleSection(props) {
  /* The weather icons used are from Wikimedia Commons:
  https://commons.wikimedia.org/wiki/Category:Weather_icons 
  */
  return (
    <div className='sm:text-center lg:text-left'>
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-slate-900 dark:text-white py-8 ">Weather App</span>
        </h1>
    </div>      
    );
}