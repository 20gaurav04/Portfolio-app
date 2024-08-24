import React from 'react'
import './About.css'
import reactlogo from '../asset/logoa.png'
import jslogo from '../asset/logob.png'
import javalogo from '../asset/logoc.png'
import sqllogo from '../asset/logod.png'
import taillogo from '../asset/logoe.svg'
import nodelogo from '../asset/logof.svg'
import mongologo from '../asset/logog.svg'
import htmllogo from '../asset/logoi.svg'
import photologo from '../asset/logoh.svg'
import csslogo from '../asset/css.svg'
import pylogo from '../asset/python.svg'
import bootlogo from '../asset/bootsrap.svg'

function About() {
  return (
    <section className="about" id="abouts">
          <section><h3>My Journey</h3>
      <section className = "timeline">

        <div className = "container delay1">
        <div class="text-content">
          <h2>July,2024</h2>
          <p>Joined Learn&Build as an Intern</p>
        </div>
      </div>
      <div className = "container">
        <div class="text-content">
          <h2>October,2023</h2>
          <p>Qualified for Smart India Hackathon 2023 round 2</p>
        </div>
      </div>
      <div className = "container" >
        <div class="text-content">
          <h2>August,2023</h2>
          <p>Completed  an internship at Zeetron Networks Pvt Ltd.</p>
        </div>
      </div>
      <div className = "container" >
        <div class="text-content">
          <h2>November,2022</h2>
          <p>Started B.Tech in Computer Science from Poornima College Of Engineering</p>
        </div>
      </div>
      <div className = "container" >
        <div class="text-content">
          <h2>June,2022</h2>
          <p>Completed High School from Subodh Public School</p>
        </div>
      </div>

    </section>
    
    </section>
    <section><h3>TechStack</h3>
    <div className = "techstack">
      <div className="t1"><img src={reactlogo}alt="logo" className = "logos"></img>React</div>
      <div className="t1"><img src={jslogo} alt="logo" className = "logos"></img>JavaScript</div>
      <div className="t1"><img src={javalogo} alt="logo" className = "logos"></img>Java</div>
      <div className="t1"><img src={sqllogo} alt="logo" className = "logos"></img>MySql</div>
      <div className="t1"><img src={taillogo} alt="logo" className = "logos"></img>Tailwind</div>
      <div className="t1"><img src={nodelogo} alt="logo" className = "logos"></img>Node</div>
      <div className="t1"><img src={mongologo} alt="logo" className = "logos"></img>MongoDB</div>
      <div className="t1"><img src={htmllogo} alt="logo" className = "logos"></img>HTML</div>
      <div className="t1"><img src={photologo}alt="logo" className = "logos"></img>PhotoShop</div>
      <div className="t1"><img src={pylogo} alt="logo" className = "logos"></img>Python</div>
      <div className="t1"><img src={bootlogo} alt="logo" className = "logos"></img>Boostrap</div>
      <div className="t1"><img src={csslogo}alt="logo" className = "logos"></img>CSS</div>
    </div>
    </section>
   </section>
  )

}

export default About
