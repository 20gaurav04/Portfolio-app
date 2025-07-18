import React from 'react';
import './Project.css';
import reactlogo from '../asset/logoa.png'
import jslogo from '../asset/logob.png'
import csslogo from '../asset/css.svg'
import taillogo from '../asset/logoe.svg'
import nodelogo from '../asset/logof.svg'
import htmllogo from '../asset/logoi.svg'
import bootlogo from '../asset/bootsrap.svg'
import pythonlogo from '../asset/python.svg'

function Project() {
  return (
    <section className='Project' id='Project'>
      <section>
        <h3 id="head">Projects</h3>
        <div className='container1'>

          <a href="https://your-netflix-clone-url.com" target="_blank" rel="noopener noreferrer" className="Projects">
            <h4 className='title'>Site Clone</h4>
            <hr />
            <p>A Netflix clone built with HTML and CSS, featuring on-demand streaming, profiles, and shows.</p>
            <img src={htmllogo} alt="HTML" className="builds" />
            <img src={csslogo} alt="CSS" className="builds" />
            <img src={bootlogo} alt="Bootstrap" className="builds" />
          </a>

          <a href="https://landing-page-six-psi-83.vercel.app/" target="_blank" rel="noopener noreferrer" className="Projects">
            <h4 className='title'>Landing Page</h4>
            <hr />
            <p>A clothing brand landing page with interactive features.</p>
            <img src={htmllogo} alt="HTML" className="builds" />
            <img src={csslogo} alt="CSS" className="builds" />
            <img src={jslogo} alt="JavaScript" className="builds" />
          </a>

          <a href="https://your-gps-nav-url.com" target="_blank" rel="noopener noreferrer" className="Projects">
            <h4 className='title'>GPS Nav</h4>
            <hr />
            <p>A GPS navigation system built with Python, offering route planning, distance calculation.</p>
            <img src={pythonlogo} alt="Python" className="builds" />
            <img src={csslogo} alt="CSS" className="builds" />
            <img src={htmllogo} alt="HTML" className="builds" />
          </a>

          <a href="https://travel-savvy-o5yn.vercel.app/" target="_blank" rel="noopener noreferrer" className="Projects">
            <h4 className='title'>TravelSavvy</h4>
            <hr />
            <p>A travel planner site built with React featuring HORECA details and cost with AI support.</p>
            <img src={reactlogo} alt="React" className="builds" />
            <img src={nodelogo} alt="Node.js" className="builds" />
            <img src={taillogo} alt="Tailwind" className="builds" />
          </a>

        </div>
      </section>
    </section>
  );
}

export default Project;
