import React from 'react';

function Skill({skill,progress,width}) {
    return (
        <div className="Skills-Section">
            <div className="skills-container">
                <h5 className="skills-title">{skill}</h5>
                <div className="skills-bar">
                    <p className="skills-text">{progress}</p>
                    <div className="skills-progress">
                        <div className="progress">
                            <div className="internal-pregress" style={{width:width}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;