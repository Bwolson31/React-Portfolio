import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg';

function About() {
  return (
      <div className="about-container">
          <div className="profile-section">
         <img src={profilePic} alt="Brian Olson" className="profile-pic"/>
         </div>
          <h1>About Me</h1>
          <section>
              <h2>Introduction</h2>
              <p>Hello, I'm Brian Olson, an experienced All Source Analyst with a strong background in research and analysis. Currently, I work remotely for the Pacific Northwest affiliate of Digistream Investigations. With a passion for data-driven decision-making and a knack for detailed research, I've built a career that bridges the gap between technical analysis and actionable insights.</p>
          </section>
          <section>
              <h2>Professional Journey</h2>
              <p>I began my journey with Digistream in January 2022 as a Workflow Assistant. Through dedication and a commitment to learning, I quickly transitioned to the role of Research Analyst in April 2022. Recognizing my analytical skills and ability to handle complex datasets, I was promoted to All Source Analyst in February 2024. Each role has strengthened my capabilities in data interpretation, problem-solving, and strategic planning.</p>
          </section>
          <section>
              <h2>Educational Background</h2>
              <p>I graduated from the University of Minnesota in 2012, where I double majored in English and Sociology. This educational background has given me a solid foundation in both critical thinking and understanding societal structures, which are invaluable in my analytical roles.</p>
          </section>
          <section>
              <h2>Technical Skills and Development</h2>
              <ul>
                  <li>Web Development: Proficient in HTML, CSS, Git, JavaScript, and Bootstrap.</li>
                  <li>Advanced Programming: Skilled in JavaScript ES6, Object-oriented programming, and frameworks like React and Express.</li>
                  <li>Database Management: Experienced with MySQL, Sequelize, and NoSQL databases.</li>
                  <li>Full Stack Integration: Developed full-stack applications using RESTful API routes and AJAX methods.</li>
                  <li>Team Collaboration and Agile Development: Engaged in Agile development practices and team collaboration.</li>
                  <li>Project Demonstration and Storytelling: Effective in presenting complex projects in an understandable manner.</li>
              </ul>
          </section>
          <section>
              <h2>Looking Forward</h2>
              <p>As I continue to expand my technical toolbox and deepen my expertise in both the analytical and development realms, I am eager to connect with professionals who share a passion for technology and innovation. Whether it's a potential collaboration or just to share ideas, feel free to reach out!</p>
          </section>
      </div>
  );
}

export default About;