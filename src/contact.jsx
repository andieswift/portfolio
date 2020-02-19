import React from 'react';
import ReactDOM from 'react-dom';

export default function Contact() {
  return (
    <div className="h-100vh bg-light pt-5 d-flex flex-column justify-content-between align-items-center">
      <div className="w-50 h-60 logo-background d-flex flex-column justify-content-center align-items-center">
        <h1 className="h1-lg text-spacing">ANDIE SWIFT</h1>
        <h3 className="text-spacing">Software Engineer</h3>
      </div>
      <div className="w-50 d-flex justify-content-between align-item-center">
        <p className='pink-hover'><i className="fas fa-map-marker-alt"></i> Orange County, CA</p>
        <p className='pink-hover cursor-pointer'><i className="fas fa-phone"></i> (949)439-7264</p>
        <p className='pink-hover cursor-pointer'><i className="fas fa-envelope"></i> andie.swift5@gmail.com</p>
      </div>
      <div className="w-25 d-flex justify-content-between align-item-center">
        <div className="icon-circle d-flex align-items-center justify-content-center ">
          <i className="contact-icon fab fa-github"></i>
        </div>
        <div className="icon-circle d-flex align-items-center justify-content-center">
          <i className="contact-icon fab fa-linkedin"></i>
        </div>
        <div className="icon-circle d-flex align-items-center justify-content-center">
          <i className="contact-icon fas fa-file"></i>
        </div>
      </div>
      <div className="w-25 d-flex justify-content-center">
        <p>© Andie Swift 2020</p>
      </div>
    </div>

  );
}
