import React from 'react'
import './Footer.css'
import logo from '../asset/logo6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <div>
      <hr></hr>
        <footer className="footer">
      
          <span className="footer-heading"><img src={logo} alt="logo" className="footlogo"></img></span>
          <p className="footer-description">For any type of queries , questions feel free to reach me out.</p>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/gaurav-sharma-51515725a/" className="footer-icon"> <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/ig_myto/?hl=en" className="footer-icon"> <FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/20gaurav04" className="footer-icon"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://youtu.be/9tao4E3C8O0?si=d4KsyYnnMzb4ue3U" className="footer-icon"> <FontAwesomeIcon icon={faYoutube} /></a>
          </div>
          <p className="footer-copyright">Copyright ©2024 Gaurav. Designed By Gaurav</p>
        </footer>
        </div>
      );
    }

export default Footer
