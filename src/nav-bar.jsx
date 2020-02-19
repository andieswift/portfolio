import React from 'react';
import ReactDOM from 'react-dom';


export default function NavBar() {
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-light p-0">
      <button className="navbar-toggler borderless" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white"></span>
      </button>
      <div className="collapse nav-bar-bg navbar-collapse ">
        <div className="ml-3 p-2 h-75">
          <h5 className="text-white">AS</h5>
        </div>
        <div className="w-100 d-flex justify-content-end pr-5">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">SKILLS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">TOOLS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
