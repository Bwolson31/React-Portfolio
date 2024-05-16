import React from 'react';
import { projects } from '../data/projects'; // Adjust the path as necessary
import Project from '../components/Project'; // Adjust the path if your Project component is in a different folder
import "./Portfolio.css";


function Portfolio() {
    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        demoLink={project.demoLink}
                        repoLink={project.repoLink}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;


