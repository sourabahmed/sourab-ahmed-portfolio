import React from 'react';
import AboutImg from '../../Images/C360_2020-01-18-20-48-29-274.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="about-intro">
            <h6> Who I am</h6>
            <h3>About me</h3>
                <p>I’m Oluwakemi Adeleke, a professional and talented Product Designer with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics. <br />

                    I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie.

                    Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.
                </p>
                <button className="btn btn-danger">Get Resume</button>
            </div>
            <div className="about-img">
                <img className="img-fluid" src={AboutImg} alt="" />
            </div>
        </div>
    );
};

export default About;