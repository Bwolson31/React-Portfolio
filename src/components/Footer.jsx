import React from 'react';
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Brian Olson. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="https://github.com/Bwolson31" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/brian-olson-711111308/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;