import React from 'react';
import './Portfolio.css';
import Derai from '../../Images/deraipharmacy.png';
import Tour from '../../Images/tour12.png';
import Glassy from '../../Images/glassymart.png';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <h2>My Portfolio</h2>
            <div className="portfolios">
                <div className="portfolio">
                    <div>
                        <img className="img-fluid" src={Glassy} alt="" />
                    </div>
                    <div>
                        <h4>Glassy Mart</h4>
                        <p>Glassy mart is a sunglass selling website. It is one of the best website</p>
                        <a target="_blank" href="https://glassy-mart-project.web.app/">Preview</a>
                        <a target="_blank" href="https://github.com/sourabahmed/glassy-mart-client-side">Client-code</a>
                        <a target="_blank" href="https://github.com/sourabahmed/glassy-mart-server-side">Server-code</a>
                        <p><small>React js, Node js, Express js, MongoDB, Bootstrap</small></p>
                    </div>
                </div>
                <div className="portfolio">
                    <div>
                        <img className="img-fluid" src={Tour} alt="" />
                    </div>
                    <div>
                        <h4>Tour12</h4>
                        <p>Tour12 is a Travel agency which provide best traveling service.</p>
                        <a target="_blank" href="https://tour12-project.web.app/">Preview</a>
                        <a target="_blank" href="https://github.com/sourabahmed/tour12-client-side">Client-code</a>
                        <a target="_blank" href="https://github.com/sourabahmed/tour12-server-side">Server-code</a>
                        <p><small>React js, Node js, Express js, MongoDB, Bootstrap</small></p>
                    </div>
                </div>
                <div className="portfolio">
                    <div>
                        <img className="img-fluid" src={Derai} alt="" />
                    </div>
                    <div>
                        <h4>Derai Pharmacy</h4>
                        <p>Derai Pharmacy is a online paharmacy. It sells medicine around the country.</p>
                        <a target="_blank" href="https://derai-pharmacy.web.app/">Preview</a>
                        <a target="_blank" href="https://github.com/sourabahmed/derai-pharmacy">Code</a>
                        <p><small>React js, Bootstrap, CSS</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;