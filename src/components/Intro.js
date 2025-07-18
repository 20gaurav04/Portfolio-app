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

    window.open('https://drive.google.com/file/d/1p96dnSHB8eKRCb3TgZzqTHRrnTuqimcs/view?usp=drive_link', '_blank'); 
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
