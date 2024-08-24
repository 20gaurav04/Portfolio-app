import React from 'react'
import './Project.css'
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
     <section><h3 id="head">Projects</h3>
    <div className='container1'>

      <div className='Projects'><h4 className='title'>Netflix Clone</h4><hr></hr><p>
      A Netflix clone built with HTML and CSS, featuring on-demand streaming, profiles, and shows.</p>
      <img src= {htmllogo}alt="#" className="builds"></img>
      <img src= {csslogo}alt="#" className="builds"></img>
      <img src= {bootlogo}alt="#" className="builds"></img></div>
      <div className='Projects'><h4 className='title'>Tic Tac Toe</h4><hr></hr><p>A Tic Tac Toe game built with JavaScript, featuring interactive gameplay and dynamic scoring.</p>
      <img src= {htmllogo}alt="#" className="builds"></img>
      <img src= {csslogo}alt="#" className="builds"></img>
      <img src= {jslogo}alt="#" className="builds"></img></div>
      <div className='Projects'><h4 className='title'>GPS Nav</h4><hr></hr><p>A GPS navigation system built with Python, offering route planning, distance calculation.</p>
      <img src= {pythonlogo}alt="#" className="builds"></img>
      <img src= {csslogo}alt="#" className="builds"></img>
      <img src= {htmllogo}alt="#" className="builds"></img></div>
      <div className='Projects'><h4 className='title'>Quizzie</h4><hr></hr><p>A quiz app built with Node,React featuring interactive quizzes, and real-time scoring.</p>
      <img src= {reactlogo}alt="#" className="builds"></img>
      <img src= {nodelogo}alt="#" className="builds"></img>
      <img src= {taillogo}alt="#" className="builds"></img></div>
    </div>
    </section>
    </section>
  )
}

export default Project
