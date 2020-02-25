import React from 'react';
import ReactDOM from 'react-dom';

export default function Projects() {

  return (
    <div id="portfolio" className="portfolio-div">
      <div className="h-15 d-flex align-items-center justify-content-center" >
        <h1>PORTFOLIO</h1>
      </div>
      <div className="h-85 container">
        <div className="row project-row h-100 align-items-center justify-content-between">
          <div className="col-md-4 h-100">
            <div className="d-flex project-card card flex-column align-items-center">
              <img className="card-img-top project-img" src="./images/projects/wildflower-match-gradient-name.png" />
              <div className="card-body pt-1 pl-3 pr-1">
                <p className="card-text project-description"><b>Wildflower Match</b> is a memory matching game. The images used are hand drawn illistrations of wildflowers.</p>
                <p className="card-text m-0 card-back"><b>Made Using:</b></p>
                <p className="card-text m-0 card-back">JavaScript JQuery HTML CSS </p>
                <div className="card-back">
                  <a href='https://github.com/andieswift/wildflower-match' target='_blank' className="btn btn-outline-pink mr-1">GitHub  <i className="fab fa-github"></i></a>
                  <a href='https://wildflower-match.andieswift.dev' target='_blank' className="btn btn-outline-pink">Live <i className="fas fa-external-link-alt"></i> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 h-100">
            <div className="d-flex project-card card flex-column align-items-center">
              <img className="card-img-top project-img" src="./images/projects/bujo-central-gradient-name.png" />
              <div className="card-body pt-1 pl-3 pr-1">
                <p className="card-text project-description"><b>Bujo Central</b> is a full-stack e-commerce application where the user can shop for bullet journalling supplies.</p>
                <p className="card-text m-0 card-back"><b>Made Using:</b></p>
                <p className="card-text m-0 card-back">React.js Bootstrap Node.js PostgreSQL</p>
                <div className="card-back btn-div">
                  <a href='https://github.com/andieswift/bujo-central' target='_blank' className="btn btn-outline-pink mr-1">GitHub  <i className="fab fa-github"></i></a>
                  <a href='https://bujo-central.andieswift.dev' target='_blank' className="btn btn-outline-pink">Live <i className="fas fa-external-link-alt"></i> </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 h-100">
            <div className="d-flex project-card card flex-column align-items-center">
              <img className="card-img-top project-img" src="./images/projects/habit-tracker-gradient-name.png" />
              <div className="card-body pt-1 pl-3 pr-1">
                <p className="card-text project-description"><b>Habit Tracker</b> is a full-stack application for users to track their habits or send list of habits to other users.</p>
                <p className="card-text m-0 card-back"><b>Made Using:</b></p>
                <p className="card-text m-0 card-back">React.js Bootstrap Node.js PostgreSQL</p>
                <div className="card-back">
                  <a href='https://github.com/andieswift/habit-tracker' target='_blank' className="btn btn-outline-pink mr-1">GitHub  <i className="fab fa-github"></i></a>
                  <a href='https://habit-tracker.andieswift.dev' target='_blank' className="btn btn-outline-pink">Live <i className="fas fa-external-link-alt"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
