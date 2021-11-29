import React from 'react';
import './Intro.css'

const Intro = () => {
    return (
        <div className="main-intro row" id="intro">
            <div className="col-sm-12 col-lg-2 icon order-2 order-lg-1">
                <a target="_blank" href="https://github.com/sourabahmed"><i class="fs-3 text-white fab fa-github"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/sourab-ahmed/"><i class="fs-3 text-white my-sm-3  fab fa-linkedin-in"></i></a>
                <a target="_blank" href="https://web.facebook.com/ahmedsourav.talukdar"><i class="fs-3 text-white  fab fa-facebook"></i></a>
            </div>
            <div className="col-sm-12 col-lg-10 intro order-1 order-lg-2">
                <h4 className="gretting">Hi there! I am</h4>
                <h1>Sourab Ahmed</h1>
                <h3>Front end developer</h3>
                <h5 className="mb-5">Web developer || Programmer</h5>
                <a target="_blank" href="https://drive.google.com/file/d/1ve6S7Ky6rmaRFKUkt8ehHx03NdyhkN4h/view?usp=sharing"><button className=" resume-button">Get Resume</button></a>
                <a href="#contact"><button className=" contact-button ms-4">Contact me</button></a>
            </div>
        </div>
    );
};

export default Intro;