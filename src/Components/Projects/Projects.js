import React from 'react';
import ProjectData from './ProjectData'
import Tittle from '../Tittle/Tittle';

const Projects = () => {
    return (
        <div >
        <div className="b-title">
            <Tittle title={'Projects'} span={'Recent Projects'} />
        </div>
        <div className="project-page">
            {
                ProjectData.map((project)=>{
                    return <div className="project" key={project.id}>
                        <div className="projects-content">
                            <img src={project.image} alt=""/>
                            <a href={project.link} className="project-link">
                                {project.title}
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
        
    </div>
    );
};

export default Projects;