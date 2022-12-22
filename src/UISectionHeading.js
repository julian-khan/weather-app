export default function UISectionHeading({headingName}) { 
return (
    <div className='sm:text-center lg:text-left -mb-4'>
        <h2 className="text-center text-xl tracking-tight text-gray-900 sm:text-xl md:text-3xl">
            <span className="text-slate-900 dark:text-white block">{headingName}</span>
        </h2>
    </div>
    );    
}