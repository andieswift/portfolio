import React from 'react';
import ReactDOM from 'react-dom';


export default function Skills() {
  return (
  <div id="skills" className="skills-div d-flex flex-column align-items-center">
    <div className="h-15 d-flex skill-row align-items-end justify-content-end" >
      <h1>SKILLS</h1>
    </div>
    <div className="container h-85">
      <div className="row h-50 skill-row">
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
          <div className="icon-box d-flex flex-column align-items-center justify-content-center">
            <img className="icon" src="./images/skills/javascript-plain.png"></img>
            <p className="m-0">JavaScript</p>
          </div>
        </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box d-flex flex-column align-items-center justify-content-center">
          <img className="react-icon" src="./images/skills/react.png"></img>
          <p>React.js</p>
            </div>
        </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box d-flex flex-column align-items-center justify-content-center">
          <img className="node-icon" src="./images/skills/nodejs-plain.png"></img>
          <p>Node.js</p>
            </div>
        </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box d-flex flex-column align-items-center justify-content-center">
          <img className="icon" src="./images/skills/postgresql-plain.png"></img>
          <p>PosgreSQL</p>
            </div>
        </div>
      </div>
      <div className="row h-50 skill-row">
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box d-flex flex-column align-items-center justify-content-center">
          <img className="icon" src="./images/skills/jquery-plain.png"></img>
        <p>jQuery</p>
            </div>
      </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box d-flex flex-column align-items-center justify-content-center">
          <img className="bootstrap-icon" src="./images/skills/bootstrap-plain.png"></img>
        <p>Bootstrap4 </p>
            </div>
      </div >
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box d-flex flex-column align-items-center justify-content-center">
          <img className="HTML-icon" src="./images/skills/html5-plain.png"></img>
          <p>HTML5</p>
            </div>
      </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box d-flex flex-column align-items-center justify-content-center">
          <img className="CSS-icon" src="./images/skills/css3-plain.png"></img>
          <p>CSS3</p>
            </div>
        </div>
      </div>
    </div>
  </div>);
}
