
import './Contact.css'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_57rap6i', 'template_281ubw8', form.current, 'user_cU1a7IqcolKbuXAbiVjMe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <h5>Contact me</h5>
            <div className="contact">
                <div className="contact-address">
                    <h3>contact</h3>
                </div>
                <div className="contact-form">
                    <h3>Form</h3>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;


