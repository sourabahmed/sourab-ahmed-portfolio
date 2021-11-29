
import React from 'react';
import './Skills.css'
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return (
        <div id="skills">
            <h2>My Skills</h2>
            <div className="skills">
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">HTML</h4>
                        <h4 className="skill-text">90%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={90} />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">CSS</h4>
                        <h4 className="skill-text">85%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={85} />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">JavaScript</h4>
                        <h4 className="skill-text">80%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={80} />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">React js</h4>
                        <h4 className="skill-text">70%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={70} />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">Bootstrap</h4>
                        <h4 className="skill-text">90%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={90} />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">Node js</h4>
                        <h4 className="skill-text">40%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={40} />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">MongoDB</h4>
                        <h4 className="skill-text">60%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={60} />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4 className="skill-text">Express js</h4>
                        <h4 className="skill-text">50%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={50} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;