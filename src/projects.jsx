import React from 'react';
import ReactDOM from 'react-dom';

export default function Projects() {
  return (
    <div className="h-100vh p-5">
      <div className="h-25 d-flex align-items-center justify-content-center" >
        <h1>PROJECTS</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <img className="project-img" src="./images/projects/wildflower-match-gradient.png" />
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="project-img" src="./images/projects/bujo-central-gradient.png" />
        </div>
        <div className="d-flex flex-column align-items-center">
          <img className="project-img" src="./images/projects/habit-tracker-gradient.png" />
        </div>
      </div>
    </div>
  );
}
