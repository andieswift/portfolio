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
              <a target="_blank" className="icon-circle d-flex align-items-center justify-content-center" href="./assets/Andie-Swift.pdf" download="./assets/Andie-Swift.pdf">
                <i className="contact-icon fas fa-file"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 d-flex flex-column justify-content-center align-items-start">
          <h1 className="lg-about-me"> ABOUT ME</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Tempor id eu nisl nunc mi. Volutpat ac tincidunt vitae semper quis
          lectus nulla at. Eget nunc scelerisque viverra mauris in. Purus semper
          eget duis at tellus. Etiam tempor orci eu lobortis. Bibendum ut tristique
          et egestas quis ipsum. Nisl condimentum id venenatis a. Eget magna fermentum
          iaculis eu non diam phasellus vestibulum lorem. Augue ut lectus arcu bibendum at.
          Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Dui vivamus
          arcu felis bibendum ut tristique et egestas. Sed sed risus pretium quam vulputate
          dignissim suspendisse. Sapien pellentesque habitant morbi tristique. Pretium aenean
          pharetra magna ac placerat vestibulum. Blandit cursus risus at ultrices mi tempus
          imperdiet nulla malesuada. Sagittis id consectetur purus ut faucibus. Elementum
          integer enim neque volutpat ac. Mi ipsum faucibus vitae aliquet nec. Posuere
          sollicitudin aliquam ultrices sagittis. Tristique et egestas quis ipsum suspendisse
          ultrices gravida.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
