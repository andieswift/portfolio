import React from 'react';
import ReactDOM from 'react-dom';


export default function About() {
  return (
    <div id="about" className="about-div bg-light">
      <div className="h-100 container">
        <div className="row h-100">
          <div className = "about-top-div col-lg-4 col-sm-12 profile-img-div d-flex flex-column justify-content-center align-items-center">
            <h1 className="sm-about-me">ABOUT ME</h1>
            <img src="./images/profile-border.png" className="rounded profile-img"></img>
            <div className="d-flex flex-align-center justify-content-between m-lg-3 contact-bar">
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
          <div className="col-lg-8 col-sm-12 d-flex flex-column profile-text justify-content-center align-items-start">
          <h1 className="lg-about-me"> ABOUT ME</h1>
          <p>
           My name is Andie Swift. I am a Front-End Developer with an eye for design and a love of
          Coding. <br /><br />

          My bachelor’s degree in computer science helped me develop a solid understanding of
          algorithms, data structures, object-oriented programming, and relational databases. After college, I attended a coding boot camp, which consisted of 700+ hours of coding. This help strengthen my skills and gain real-world experience in Javascript, React, Node, HTML, and CSS.
           <br /><br />
          In college as well as during boot camp, I participated in hackathons and team projects
          where we practiced git-flow and experienced an AGILE work environment.
          After completing the coding boot camp, I had the opportunity to help a start-up build the
          front end of their website. Before I started to code for them, I used Sketch to design the
          look and feel as well as the flow of pages for the website. Then I created new pages for their site using React, Redux and Sass. In addition I worked with a 3rd party RESTful API to ensure data was protected and flowed throughout the application.
            <br /><br />
          With my desire to grow as a programmer and to create as a designer, plus my passion
          for coding, willingness to work hard, and team-player attitude, I bet I’d make a
          great addition to your team.

           </p>
          </div>
        </div>
      </div>
    </div>
  )
}
