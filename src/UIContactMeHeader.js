
import mail from './ContactMeHeader-icons/mail.svg';
import linkedinicon from './ContactMeHeader-icons/linkedinicon.png';

export default function UIContactMeHeader() {
 

  return (
    <div className="flex flex-row items-center justify-between px-20 ">
      <span className = 'text-xl sm:text-2xl md:text-3xl tracking-tight text-gray-900 '>Contact me</span>

      <span className="flex flex-row items-center "> 
        <img src={linkedinicon} className='w-9' /> 
        <img src={mail} className='w-10 align-middle'/> 
      </span>
    </div >   
  );

    };