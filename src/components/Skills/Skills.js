
import React from 'react';
import './Skills.css'
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {

    return (
        <div id="skills"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h2>My Skills</h2>
            <div className="skills">
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">HTML</h4>
                        <h4 className="skill-text">90%</h4>
                    </div>
                    <div>
                        <ProgressBar
                            completed={90}
                            bgColor="#00ffbb"
                            baseBgColor="#312ftf"
                            labelColor="#00ffbb"
                        />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">CSS</h4>
                        <h4 className="skill-text">85%</h4>
                    </div>
                    <div>
                    <ProgressBar
                            completed={85}
                            bgColor="#00ffbb"
                            baseBgColor="#312ftf"
                            labelColor="#00ffbb"
                        />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">JavaScript</h4>
                        <h4 className="skill-text">80%</h4>
                    </div>
                    <div>
                    <ProgressBar
                            completed={80}
                            bgColor="#00ffbb"
                            baseBgColor="#312ftf"
                            labelColor="#00ffbb"
                        />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">React js</h4>
                        <h4 className="skill-text">70%</h4>
                    </div>
                    <div>
                    <ProgressBar
                            completed={70}
                            bgColor="#00ffbb"
                            baseBgColor="#312ftf"
                            labelColor="#00ffbb"
                        />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">Bootstrap</h4>
                        <h4 className="skill-text">90%</h4>
                    </div>
                    <div>
                    <ProgressBar
                            completed={90}
                            bgColor="#00ffbb"
                            baseBgColor="#312ftf"
                            labelColor="#00ffbb"
                        />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">Node js</h4>
                        <h4 className="skill-text">40%</h4>
                    </div>
                    <div>
                    <ProgressBar
                            completed={40}
                            bgColor="#00ffbb"
                            baseBgColor="#312ftf"
                            labelColor="#00ffbb"
                        />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">MongoDB</h4>
                        <h4 className="skill-text">60%</h4>
                    </div>
                    <div>
                    <ProgressBar
                            completed={60}
                            bgColor="#00ffbb"
                            baseBgColor="#312ftf"
                            labelColor="#00ffbb"
                        />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">Express js</h4>
                        <h4 className="skill-text">50%</h4>
                    </div>
                    <div>
                    <ProgressBar
                            completed={50}
                            bgColor="#00ffbb"
                            baseBgColor="#312ftf"
                            labelColor="#00ffbb"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;