
import mail from './ContactMeHeader-icons/mail.svg';
import linkedinicon from './ContactMeHeader-icons/linkedinicon.png';

export default function ContactMeHeader() {
 

  return (
    <div className="flex flex-row items-center justify-between">
      <span>Contact me</span>

      <span className="flex flex-row items-center "> 
        <img src={linkedinicon} className='w-9' /> 
        <img src={mail} className='w-10 align-middle'/> 
      </span>
    </div >   
  );

    };