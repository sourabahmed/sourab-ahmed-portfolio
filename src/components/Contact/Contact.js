
import './Contact.css'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    console.log(form);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_57rap6i', 'template_281ubw8', form.current, 'user_cU1a7IqcolKbuXAbiVjMe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id="contact">
            <h2>Contact me</h2>
            <div className="contact row" id="contact">
                <div className="contact-address col-sm-12 col-lg-4">
                    <div>
                        <h6 className="address"> <i class="fas iconic fa-globe-asia"></i> Sylhet, Banglades</h6>
                        <h6 className="address"> <i class="fas iconic fa-envelope"></i> sourabahmed546@gmail.com</h6>
                        <h6 className="address"> <i class="fas iconic fa-phone-alt"></i> +880 1301-996733</h6>
                    </div>
                </div>
                <div className="contact-form col-sm-12 col-lg-8">
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <input className="input" type="text" name="user_name" placeholder="Fulll Name" required />
                            <br />
                            <input className="input" type="email" name="user_email" placeholder="Email" required />
                            <br />
                            <textarea className="textarea" name="message" placeholder="Write your message" required />
                            <br />
                            <input className="submit" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;


