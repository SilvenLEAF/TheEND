import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'


import Landing from '../landing/Landing';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import About from '../about/About';
import MobileLanding from '../mobileLanding/MobileLanding';
import MobileContact from '../contact/MobileContact';





function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      const myBackToTopButton = document.getElementById('myBackToTopButton');
  
      if(window.pageYOffset > 300) {
        myBackToTopButton.style.display = "flex";
      } else {
        myBackToTopButton.style.display = "none";
      }
  
    })
  })

  return (
    <>
      <Landing />
      <MobileLanding/>
      
      
      <div className="container myHomeSectionTitleHolder">        
        <div className="myHomeSectionTitle">Skills</div>
      </div>
      <Skills/>






      <div className="container myHomeSectionTitleHolder">        
        <div className="myHomeSectionTitle">My Works</div>
      </div>
      <Projects/>




      <div id="experienceSection" className="scrollspy container myHomeSectionTitleHolder myContactMeTitleHolder" style={{ marginBottom: "0px" }} >
        <div className="myHomeSectionTitle">Experience</div>
      </div>

      <p className="myExperienceParagraph container" style={{ marginBottom: "50px" }} >
        Created apis, handled server side and client side programming, implemented oauth2.0, applied MVC Design Pattern, implemented CRUD, handled security issues, improved UI/UX, created Servers, REST APIs, Web apps, PWA's, Websites, Applied clean code.
      </p>
      
      
      
      <div className="container myHomeSectionTitleHolder myContactMeTitleHolder">        
        <div className="myHomeSectionTitle">Contact Me</div>
      </div>
      <Contact/>
      <MobileContact/>





      <div className="container myHomeSectionTitleHolder">        
        <div className="myHomeSectionTitle">About Me</div>
      </div>
      <About/>


      <a href="#myNavbar" id="myBackToTopButton">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  )
}

export default Home
