import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll'

export default class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const show = this.state.isOpen ? "show" : null;
    console.log(this.state.isOpen);

    return (
      <nav className="fixed-top navbar navbar-expand-lg nav-bar-bg navbar-light p-0">
        <Link spy={true} smooth={true} duration={500} activeClass="active" to="home" className=" cursor-pointer nav-link text-white">
          <h5 className="text-white nav-item">AS</h5>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={this.state.isOpen} aria-label="Toggle navigation" onClick={this.toggleNav}>
          <span className="cursor-pointer text-white"><i className="fas fa-bars"></i></span>
        </button>
      <div className={`collapse navbar-collapse ${show}`}>
        <div className="w-100 d-flex justify-content-end">
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
