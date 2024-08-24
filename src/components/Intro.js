import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Intro.css';
import resumeIcon from '../asset/hireme.png';  // Assuming you're using the same icon, you can rename the variable to better reflect its new purpose
import reactLogo from '../asset/react1.png';

function Intro() {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Freelance Graphic Designer'],
    loop: true,
  });

  const handleResumeClick = () => {

    window.open('https://docs.google.com/document/d/12vtqqdOZq51N_y9Nsp7TLctcUliZDHG9/edit?usp=drive_link&ouid=115979587760637855097&rtpof=true&sd=true', '_blank'); 
  };

  return (
    <section className="section" id="nav">
      <span className="intro">Creating <span className="sleek">SLEEK</span>, responsive designs</span>
      <span className="subIntro">{text} <Cursor className="cursor" cursorStyle="|"/></span>
      <button className="resumeButton" onClick={handleResumeClick}>
        <img src={resumeIcon} alt='Resume' className='resumeImg'/>Resume
      </button>
      <img src={reactLogo} alt="logo" className="reactLogo"></img>
    </section>
  );
}

export default Intro;
