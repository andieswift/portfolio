import React from 'react';
import ReactDOM from 'react-dom';


export default function About() {
  return (
    <div id="about" className="about-div bg-light">
      <div className="h-100 container">
        <div className="row h-100">
          <div className = "about-top-div col-lg-4 col-sm-12 profile-img-div d-flex flex-column justify-content-center align-items-center">
            <h1 className="sm-about-me">ABOUT ME</h1>
            <img src="./images/profile-border.png" className="rounded profile-img w-100"></img>
            <div className="d-flex flex-align-center justify-content-between w-100 m-lg-3 contact-bar">
              {/* git hub linked in phone email resume */}
              <a href="https://github.com/andieswift" target="_blank" className="icon-circle d-flex align-items-center justify-content-center ">
                <i className="contact-icon fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/andieswift/" target="_blank" className="icon-circle d-flex align-items-center justify-content-center">
                <i className="contact-icon fab fa-linkedin"></i>
              </a>
              <a href="tel:9494397264" target="_blank" className="icon-circle d-flex align-items-center justify-content-center">
                <i className="contact-icon fas fa-phone"></i>
              </a>
              <a href="mailto:andie.swift5@gmail.com" target="_blank" className="icon-circle d-flex align-items-center justify-content-center">
                <i className="contact-icon fas fa-envelope"></i>
              </a>
              <a target="_blank" className="icon-circle d-flex align-items-center justify-content-center" href="./assets/Andie-Swift-Resume.pdf" download="./assets/Andie-Swift-Resume.pdf">
                <i className="contact-icon fas fa-file"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 d-flex flex-column justify-content-center align-items-start">
          <h1 className="lg-about-me"> ABOUT ME</h1>
            <p>Hi my name is Andie Swift and I am a Software Engineer located in Orange County, California. Ever since I was a kid, I have loved problem solving and creating new things. Throughout my life I have always enjoyed drawing and art; in particular I like creating something out of nothing. In college I discovered coding, and realized it was the perfect combination of problem solving and creativity. I fell in love immediately.
            <br /> <br />In addition to a degree in Mathematics and Computer Science, I have also contributed in team-based hackathons and worked on solo projects to build front-end and full-stack applications. This experience, along with my collaborative style and easy-going personality would make me a valuable asset to your team.
            My passion is to create applications that help users live a happier, healthier life. My dream is to be part of a team who has a passion that aligns with my own.
           </p>
          </div>
        </div>
      </div>
    </div>
  )
}
