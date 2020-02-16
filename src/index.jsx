import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import NavBar from './nav-bar';
import About from './about';
import Skills from './skills';

const element = (<>
        <Main />
        <NavBar />
        <About />
        <Skills />
        </>)

ReactDOM.render(
  element,
  document.querySelector('#root')
);
