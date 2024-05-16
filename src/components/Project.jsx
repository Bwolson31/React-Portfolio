import React from 'react';

function Project({ title, image, demoLink, repoLink }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={image} alt={`Screenshot of ${title}`} />
            <div>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
        </div>
    );
}

export default Project;

