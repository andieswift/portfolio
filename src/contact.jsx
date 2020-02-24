import React from 'react';
import ReactDOM from 'react-dom';

export default function Contact() {
  return (
    <div id="contact" className="contact-div bg-light pt-5 d-flex flex-column justify-content-between align-items-center">
      <div className="container contact-logo logo-background">
        <div className="h-100 row flex-column justify-content-center align-items-center">
          <h1 className="sm-heigh h1-lg text-spacing text-center">ANDIE SWIFT</h1>
          <h3 className="sm-height text-spacing text-center">Software Engineer</h3>
        </div>
      </div>
      <div className="container d-flex flex-column align-items-center">
          <div className="location-div row justify-content-between align-item-center">
              <p className='pink-hover col-12 col-md-4 text-center'><i className="fas fa-map-marker-alt"></i> Orange County, CA</p>
              <a href="tel:9494397264" target="_blank" className="col-12 col-md-4 text-center" > <p className='pink-hover cursor-pointer'><i className="fas fa-phone"></i> (949)439-7264</p></a>
              <a href="mailto:andie.swift5@gmail.com" className="col-12 col-md-4 text-center" target="_blank"> <p className='pink-hover cursor-pointer'><i className="fas fa-envelope"></i> andie.swift5@gmail.com</p></a>
            </div>
          <div className="contact-info row justify-content-between align-item-center">
            <a href="https://github.com/andieswift" target="_blank" className="icon-circle d-flex align-items-center justify-content-center ">
              <i className="contact-icon fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/andieswift/" target="_blank" className="icon-circle d-flex align-items-center justify-content-center">
              <i className="contact-icon fab fa-linkedin"></i>
            </a>
            <a target="_blank" className="icon-circle d-flex align-items-center justify-content-center" href="./assets/Andie-Swift-Resume.pdf" download="./assets/Andie-Swift-Resume.pdf">
              <i className="contact-icon fas fa-file"></i>
            </a>
          </div>
          <div className="copy-right row justify-content-center">
            <p >© Andie Swift 2020</p>
          </div>

      </div>
    </div>

  );
}
