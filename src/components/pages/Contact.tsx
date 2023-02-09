import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import {useRef} from 'react'
import './Contact.css'



const Contact = () => {

    const form = useRef<any>();

    const sendEmail = (e:any) => {
        e.preventDefault();
        emailjs.sendForm('service_yrqt3v9', 'template_o4zgfwe', form.current, 'ljWGCvqVBFgClHLHo')
          .then(() => {
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='contact'>
        <h1>Kontakt</h1>
        <h1><FaIcons.FaPhoneAlt/>{' '}318 336</h1>
        <p><AiIcons.AiOutlineMail/> amshoes2019@gmail.com</p>
        <p>Ponedeljak-Petak 08:00-18:00</p>
        <h1>Pišite nam</h1>
         <div className="input-form">
          <form ref={form} onSubmit={sendEmail}>
            <p>Ime *</p>
            <input type="text" name="user_name" />
            <p>Email *</p>
            <input type="email" name="user_email"/>
            <p>Poruka *</p>
            <textarea name="message"></textarea>
            <div>
                <input type="submit" value="POTVRDI"  className='potvrdi'/>
            </div>
         </form>
         </div>

    </div>
  )
}

export default Contact