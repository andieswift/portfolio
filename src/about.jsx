import React from 'react';
import ReactDOM from 'react-dom';


export default function About() {
  return (
    <div id="about" className="about-div bg-light">
      <div className="h-100 container">
        <div className="row h-100">
          <div className = "about-top-div col-lg-4 col-sm-12 profile-img-div d-flex flex-column justify-content-center align-items-center">
            <h1 className="sm-about-me">ABOUT ME</h1>
            <img src="./images/profile-picture.jpg" className="rounded profile-img"></img>
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
              My name is Andie Swift. I am a software engineer with an eye for design and a love of coding.
              My bachelor’s degree in computer science helped me develop a solid understanding of algorithms, data structures, object-oriented programming, and relational databases.
              After college, I attended a coding boot camp, which help strengthen my skills and gain real-world experience in Javascript, React, Node, HTML, and CSS.
           <br /><br />
              Beyond programming I have quite a few passions I want to continue to integrate into my career.
              Currently I work for McGraw Hill coding interactive homework and test questions.
              I am so excited be part of this team because I have always had a passion for education.
              In-between college and the boot camp, I served a year for AmeriCorps in a classroom helping students with math.
              I love that my experience in AmeriCorps is able to transfer into my current role.
            <br /><br />
              I also am passionate about design, mental health, and sustainability.
              I find fulfillment from being a part of a company whose mission aligns with one or more of my passions.
           </p>
          </div>
        </div>
      </div>
    </div>
  )
}
