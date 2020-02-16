import React from 'react';
import ReactDOM from 'react-dom';


export default function Skills() {
  return (
  <div className="h-100vh p-5">
    <div className="h-25 d-flex align-items-center justify-content-center" >
      <h1>SKILLS</h1>
    </div>
    <div className="d-flex h-75 align-items-center justify-content-center flex-wrap">
        <div className="w-25 d-flex align-items-center justify-conent-center flex-column">
        <img className="icon" src="./images/skills/javascript-plain.png"></img>
        <p>JavaScript 4</p>
      </div>
        <div className="w-25 d-flex align-items-center justify-conent-center flex-column">
          <img className="react-icon" src="./images/skills/react.png"></img>
        <p>React.js</p>
      </div>
        <div className="w-25 d-flex align-items-center justify-conent-center flex-column">
          <img className="icon" src="./images/skills/nodejs-plain.png"></img>
        <p>Node.js</p>
      </div>
        <div className="w-25 d-flex align-items-center justify-conent-center flex-column">
          <img className="icon" src="./images/skills/postgresql-plain.png"></img>
        <p>PosgreSQL</p>
      </div>
        <div className="w-25 d-flex align-items-center justify-conent-center flex-column">
          <img className="icon" src="./images/skills/jquery-plain.png"></img>
        <p>jQuery</p>
      </div>
        <div className="w-25 d-flex align-items-center justify-conent-center flex-column">
          <img className="icon" src="./images/skills/bootstrap-plain.png"></img>
        <p>Bootstrap4 </p>
      </div >
        <div className="w-25 d-flex align-items-center justify-conent-center flex-column">
          <img className="icon" src="./images/skills/html5-plain.png"></img>
          <p>HTML5</p>
        </div>
        <div className="w-25 d-flex align-items-center justify-conent-center flex-column">
          <img className="icon" src="./images/skills/css3-plain.png"></img>
          <p>CSS3</p>
        </div>
      </div>
  </div>);
}
