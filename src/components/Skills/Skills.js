
import React from 'react';
import './Skills.css'
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return (
        <div>
            <h2>My Skills</h2>
            <div className="skills">
                <div className="skill">
                    <div className="skill-name">
                        <h4>HTML</h4>
                        <h4>90%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={90} />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4>HTML</h4>
                        <h4>90%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" className="progress" now={90} />
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-name">
                        <h4>HTML</h4>
                        <h4>90%</h4>
                    </div>
                    <div>
                        <ProgressBar variant="info" now={90} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;