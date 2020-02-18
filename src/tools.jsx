import React from 'react';
import ReactDOM from 'react-dom';


export default function Tools() {
  return (
    <div className="h-100vh tool-bg d-flex flex-column align-itmes-center p-5">
      <div className="h-15 d-flex align-items-center justify-content-center" >
        <h1 className="text-white">TOOLS</h1>
      </div>
      <div className="d-flex h-85 align-items-center justify-content-center flex-wrap">
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="tools-icon" src="./images/tools/github.png"></img>
          <p className="text-white">GitHub</p>
        </div>
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="react-icon" src="./images/tools/amazonwebservices-original.png"></img>
          <p className="text-white">AWS</p>
        </div>
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="tools-icon npm" src="./images/tools/npm-original-wordmark.png"></img>
          <p className="text-white">npm</p>
        </div>
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="icon chrome" src="./images/tools/chrome-plain.png"></img>
          <p className="text-white">Chrome Dev Tools</p>
        </div>
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center justify-content-end flex-column">
          <img className="icon babel" src="./images/tools/babel-plain.png"></img>
          <p className="text-white">Babel</p>
        </div>
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center justify-content-end justify-content-end flex-column">
          <img className="tools-icon nginx" src="./images/tools/nginx-original.png"></img>
          <p className="text-white">nginx</p>
        </div >
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="tools-icon" src="./images/tools/webpack-plain.png"></img>
          <p className="text-white">WebPack</p>
        </div>

        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="tools-icon" src="./images/tools/visualstudio-plain.png"></img>
          <p className="text-white">VS Code</p>
        </div>
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="tools-icon figma" src="./images/tools/Figma-512.png"></img>
          <p className="text-white">Figma</p>
        </div>
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="tools-icon" src="./images/tools/photoshop-plain.png"></img>
          <p className="text-white">Photoshop</p>
        </div >
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="tools-icon" src="./images/tools/ubuntu-plain.png"></img>
          <p className="text-white">Ubuntu</p>
        </div>
        <div className="w-10 h-30 icon-box-dark mr-5 ml-5 p-3 d-flex align-items-center flex-column">
          <img className="tools-icon" src="./images/tools/slack-plain.png"></img>
          <p className="text-white">Slack</p>
        </div>
      </div>
    </div>);
}
