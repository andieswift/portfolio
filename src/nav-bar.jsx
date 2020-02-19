import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll'

export default class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-light p-0">
      <button className="navbar-toggler borderless" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white"></span>
      </button>
      <div className="collapse nav-bar-bg navbar-collapse ">
          <Link spy={true} smooth={true} duration={500} activeClass="active" to="home" className="cursor-pointer ml-3 p-2 h-75">
          <h5 className="text-white">AS</h5>
        </Link>
        <div className="w-100 d-flex justify-content-end pr-5">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link spy={true} smooth={true} duration={500} activeClass="active" to="about" className=" cursor-pointer nav-link text-white">ABOUT</Link>
            </li>
            <li className="nav-item">
                <Link spy={true} smooth={true} duration={500} activeClass="active" to="skills" className="cursor-pointer nav-link text-white">SKILLS</Link>
            </li>
            <li className="nav-item">
                <Link spy={true} smooth={true} duration={500} activeClass="active" to="tools" className="cursor-pointer nav-link text-white">TOOLS</Link>
            </li>
            <li className="nav-item">
                <Link spy={true} smooth={true} duration={500} activeClass="active" to="portfolio" className="cursor-pointer nav-link text-white">PORTFOLIO</Link>
            </li>
            <li className="nav-item">
                <Link spy={true} smooth={true} duration={500} activeClass="active" to="contact" className="cursor-pointer nav-link text-white">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );}
}
