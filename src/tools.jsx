import React from 'react';
import ReactDOM from 'react-dom';


export default function Tools() {
  return (
    <div id="tools" className="tools-div tool-bg d-flex flex-column align-itmes-center pt-5">
      <div className="h-15 d-flex align-items-center justify-content-center" >
        <h1 className="text-white">TOOLS</h1>
      </div>
      <div className="container h-85">
        <div className="row tools-row">
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className=" icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="tools-icon" src="./images/tools/github.png"></img>
              <p className="text-white m-0">GitHub</p>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center flex-column">
            <div className="icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="react-icon" src="./images/tools/amazonwebservices-original.png"></img>
              <p className="text-white m-0">AWS</p>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="tools-icon npm" src="./images/tools/npm-original-wordmark.png"></img>
              <p className="text-white m-0">npm</p>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className=" icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="icon chrome" src="./images/tools/chrome-plain.png"></img>
              <p className="text-white m-0 chrome-text">Chrome Dev Tools</p>
            </div>
          </div>
        </div>

        <div className="row tools-row">
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="icon babel" src="./images/tools/babel-plain.png"></img>
              <p className="text-white m-0">Babel</p>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box-dark d-flex align-items-center justify-content-center justify-content-end flex-column">
              <img className="tools-icon nginx" src="./images/tools/nginx-original.png"></img>
              <p className="text-white m-0">nginx</p>
            </div >
          </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="tools-icon" src="./images/tools/webpack-plain.png"></img>
              <p className="text-white m-0">WebPack</p>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="tools-icon" src="./images/tools/visualstudio-plain.png"></img>
              <p className="text-white m-0">VS Code</p>
            </div>
          </div>
        </div>

        <div className="row tools-row">
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="tools-icon figma" src="./images/tools/Figma-512.png"></img>
              <p className="text-white m-0">Figma</p>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="tools-icon" src="./images/tools/photoshop-plain.png"></img>
              <p className="text-white m-0">Photoshop</p>
            </div >
          </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box-dark d-flex align-items-center justify-content-center flex-column">
              <img className="tools-icon" src="./images/tools/ubuntu-plain.png"></img>
              <p className="text-white m-0">Ubuntu</p>
            </div>
          </div>
          <div className="col-md-3 col-6 d-flex align-items-center justify-content-center">
            <div className="icon-box-dark d-flex justify-content-center align-items-center flex-column">
              <img className="tools-icon" src="./images/tools/slack-plain.png"></img>
              <p className="text-white m-0">Slack</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
