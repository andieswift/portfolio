import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import NavBar from './nav-bar';
import About from './about';
import Skills from './skills';
import Tools from './tools';
import Projects from './projects'

const element = (<>
        <Main />
        <NavBar />
        <About />
        <Skills />
        <Tools />
        <Projects />
        </>)

ReactDOM.render(
  element,
  document.querySelector('#root')
);
