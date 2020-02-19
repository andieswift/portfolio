import React from 'react';
import ReactDOM from 'react-dom';

export default function Projects() {
  return (
    <div className="h-100vh p-5">
      <div className="h-15 d-flex align-items-center justify-content-center" >
        <h1>PROJECTS</h1>
      </div>
      <div className="h-85 d-flex align-items-center justify-content-center">
        <div className="d-flex project-card card m-2  mt-0 h-100 p-2 w-25 flex-column align-items-center jus">
          <img className="card-img-top project-img" src="./images/projects/wildflower-match-gradient-name.png" />
          <div className="card-body p-2">
            <p className="card-text project-description"><b>Wildflower Match</b> is a memory matching game. The images used are hand drawn illistrations of wildflowers.</p>
            <p className="card-text m-0 card-back"><b>Made Using:</b></p>
            <p className="card-text m-0 card-back">JavaScript JQuery HTML CSS </p>
            <div className="card-back">
              <button className="btn btn-outline-pink mr-1">GitHub  <i className="fab fa-github"></i></button>
              <button className="btn btn-outline-pink">Live <i className="fas fa-external-link-alt"></i> </button>
            </div>
          </div>
        </div>
        <div className="d-flex project-card card m-2  mt-0 h-100 w-25 p-2 flex-column align-items-center">
          <img className="card-img-top project-img" src="./images/projects/bujo-central-gradient-name.png" />
          <div className="card-body p-2">
            <p className="card-text project-description"><b>Bujo Central</b> is a full-stack e-commerce application where the user can shop for bullet journalling supplies.</p>
            <p className="card-text m-0 card-back"><b>Made Using:</b></p>
            <p className="card-text m-0 card-back">React.js Bootstrap Node.js PostgreSQL</p>
            <div className="card-back">
              <button className="btn btn-outline-pink mr-1">GitHub  <i className="fab fa-github"></i></button>
              <button className="btn btn-outline-pink">Live <i className="fas fa-external-link-alt"></i></button>
            </div>
          </div>
        </div>
        <div className="d-flex project-card card m-2  mt-0 h-100 w-25 p-2 flex-column align-items-center">
          <img className="card-img-top project-img" src="./images/projects/habit-tracker-gradient-name.png" />
          <div className="card-body p-2">
            <p className="card-text project-description"><b>Habit Tracker</b> is a full-stack application for users to track their habits or send list of habits to other users.</p>
            <p className="card-text m-0 card-back"><b>Made Using:</b></p>
            <p className="card-text m-0 card-back">React.js Bootstrap Node.js PostgreSQL</p>
            <div className="card-back">
              <button className="btn btn-outline-pink mr-1">GitHub  <i className="fab fa-github"></i></button>
              <button className="btn btn-outline-pink">Live <i className="fas fa-external-link-alt"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
