import React,{ useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../asset/logo6.png'
import Contact from '../asset/contact.png'
import Menu from '../asset/menu.png'

function Navbar() {
  const [showMenu, setshowMenu] = useState(false)
  return (
    <nav className="navbar"> 
    <div className="logo">
    <img src={logo} alt="logo" className="logo"></img>
    </div>

    <div className="nav-links">
        <Link activeClass="active" to='nav' spy ={true} smooth = {true} offset={-50} duration={500} className="nav-links-item">Home</Link> 
        <Link activeClass="active" to='abouts' spy ={true} smooth = {true} offset={-100} duration={500} className="nav-links-item">About</Link>
        <Link activeClass="active" to='Project' spy ={true} smooth = {true} offset={-50} duration={500} className="nav-links-item">Projects</Link>
        <Link activeClass="active" to='contact' spy ={true} smooth = {true} offset={-50} duration={500} className="nav-links-item">Socials</Link>
    </div>
    <button class = "btn" onClick={()=> {document.getElementById('reach').scrollIntoView({behavior:'smooth'})}}><img src={Contact} alt='Contact Me' className='btn-Image'/>Reach Me</button>

    <img src = {Menu} alt = "menu" className= "mobMenu" onClick={()=> setshowMenu(!showMenu)} />
    
    <div className="navMenu" style={{display:showMenu ? 'flex':'none'}}>

        <Link activeClass="active" to='nav' spy ={true} smooth = {true} offset={-100} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>Home</Link> 
        <Link activeClass="active" to='about' spy ={true} smooth = {true} offset={-50} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>About</Link>
        <Link activeClass="active" to='Project' spy ={true} smooth = {true} offset={-50} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>Project</Link>
        <Link activeClass="active" to='socials' spy ={true} smooth = {true} offset={-50} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>Socials</Link>
        <Link activeClass="active" to='reach' spy ={true} smooth = {true} offset={-50} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>Contact Me</Link>
    </div>
    
    </nav>  
  )
}
export default Navbar
