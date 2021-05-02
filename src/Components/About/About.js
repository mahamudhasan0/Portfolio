import React from 'react';
import Selection from '../Selection/Selection';
import Skill from '../Skills/Skill';
import Tittle from '../Tittle/Tittle'

const About = () => {
    return (
        <div className="about">
         <Tittle title={'About Me'} span={'About Me'} />
         <Selection/>
         <Tittle title={'Skills'} span={'Skills'} />
         <div className="skills-Container">
                <Skill skill={'Javascript'} progress={'80%'} width={'80%'} />
                <Skill skill={'Typescript'} progress={'30%'} width={'30%'} />
                <Skill skill={'React Js'} progress={'80%'} width={'80%'} />
                <Skill skill={'Node Js'} progress={'40%'} width={'40%'} />
                <Skill skill={'C'} progress={'90%'} width={'90%'} />
                <Skill skill={'C++'} progress={'60%'} width={'60%'} />
                <Skill skill={'Java'} progress={'40%'} width={'40%'} />
                <Skill skill={'Web Design'} progress={'65%'} width={'65%'} />
                <Skill skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>
        </div>
    );
};

export default About;