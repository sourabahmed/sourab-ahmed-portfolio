import React from 'react';
import AboutImg from '../../Images/C360_2020-01-18-20-48-29-274.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-intro">
                <h6> Who I am</h6>
                <h3 className="about-text">About me</h3>
                <p> This is Sourab Ahmed, Professional Web developer.
                    While studying a book in mid-2020, I was introduced to programming. I have always
                    been curious about Software development after reading this book. Since being
                    introduced to programming I have read as many materials as can possibly go through,
                    taken courses, and created some applications. <br />

                    I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie.
                </p>
                <a target="_blank" href="https://drive.google.com/file/d/1ve6S7Ky6rmaRFKUkt8ehHx03NdyhkN4h/view?usp=sharing"><button className=" resume-button">Get Resume</button></a>
            </div>
            <div className="about-img">
                <img className="img-fluid" src={AboutImg} alt="" />
            </div>
        </div>
    );
};

export default About;