
import mail from './ContactMeHeader-icons/mail.svg';
import linkedinicon from './ContactMeHeader-icons/linkedinicon.png';

export default function ContactMeHeader() {
 

  return (
    <div className="flex flex-row items-center justify-between mb-8 mx-20 ">
      <span className = 'text-2xl tracking-tight text-gray-900 sm:text-3xl md:text-4xl'>Contact me</span>

      <span className="flex flex-row items-center "> 
        <img src={linkedinicon} className='w-9' /> 
        <img src={mail} className='w-10 align-middle'/> 
      </span>
    </div >   
  );

    };