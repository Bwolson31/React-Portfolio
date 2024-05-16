import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <section className="resume">
            <h1>Resume</h1>
            {/* old resume, don't quite have the time to update this yet. */}
            <p>Download my full resume <a href="Resume.pdf" download>here</a>.</p>
            <h2>Skills & Proficiencies</h2>
            <div className="skills">
                <div className="category">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>JQuery</li>
                    </ul>
                </div>
                <div className="category">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                    </ul>
                </div>
                <div className="category">
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>Webpack</li>
                        <li>MySQL Workbench</li>
                        <li>MongoDB Compass</li>
                        <li>Sequelize</li>
                        <li>Postman</li>
                        <li>Heroku</li>
                        <li>Render</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;

