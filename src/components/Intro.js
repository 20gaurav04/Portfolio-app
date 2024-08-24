import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Intro.css';
import hireMe from '../asset/hireme.png'
import reactLogo from '../asset/react1.png'

function Intro() {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Freelance Graphic Designer'],
    loop: true,
  });

  return (
    <section className="section" id="nav">
      <span className="intro">Creating <span className="sleek">SLEEK</span>, responsive designs</span>
      <span className="subIntro">{text} <Cursor className="cursor" cursorStyle="|"/></span>
      <button class = "hireMe" onClick={()=> {document.getElementById('').scrollIntoView({behavior:'smooth'})}}><img src={hireMe} alt='Hire Me' className='hireMeImg'/>Hire Me</button>
    <img src = {reactLogo} alt="logo" className="reactLogo"></img>
    </section>
  );
}

export default Intro;
