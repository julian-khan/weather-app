import { ReactComponent as Mail } from './ContactMeHeader-icons/mail.svg';
import linkedinicon from './ContactMeHeader-icons/linkedinicon.png';

export default function ContactMeHeader() {
 

  return (
    <div className="flex flex-row">
      <span>Contact me</span><div> <img src={linkedinicon} /> </div >   <Mail />
    
      
    </div>

  );

    };