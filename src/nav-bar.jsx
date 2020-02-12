import React from 'react';
import ReactDOM from 'react-dom';


export default function NavBar() {
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler borderless" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end pr-5" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">ABOUT <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">SKILLS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">TOOLS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
