import M from 'materialize-css'
// import './../../styles/Navbar.scss'

import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'



function Navbar() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  return (
    <nav id="myNavbar" className="nav nav-wrapper scrollspy">
      <div className="container">

        <Link to= "/" className= "brand-logo">$ilvenLEAF</Link>
        <div className="sidenav-trigger hide-on-large-only" data-target= "mobilenav" id="myHam">
            <i className="fas fa-hamburger"></i>
        </div>




        <ul className="sidenav" id="mobilenav">
          <li><a href="#mySkills" className="sidenav-close" ><i className="fa fa-cogs"></i>Skills</a></li>
          <li><a href="#myProjects" className="sidenav-close" ><i className="fa fa-paint-brush"></i>Works</a></li>
          <li><a href="#experienceSection" className="sidenav-close" ><i className="fa fa-graduation-cap"></i>Experience</a></li>
          <li className="hide-on-small-only"><a href="#myContact" className="sidenav-close" ><i className="fa fa-envelope"></i>Contact Me</a></li>
          <li className="hide-on-med-and-up" ><a href="#myMobileContact" className="sidenav-close" ><i className="fa fa-envelope"></i>Contact Me</a></li>
          <li><a href="#myAbout" className="sidenav-close" ><i className="fa fa-info-circle"></i>About Me</a></li>
        </ul>





        <ul className="PCNav right hide-on-med-and-down">
          <li><a href="#mySkills">Skills</a></li>
          <li><a href="#myProjects">Works</a></li>           
          <li><a href="#experienceSection">Experience</a></li>           
          <li><a href="#myContact">Contact Me</a></li>           
          <li><a href="#myAbout">About Me</a></li>
        </ul>



      </div>
    </nav>
  )
}

export default Navbar
