import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import NavBar from './nav-bar';
import About from './about';

const element = (<>
        <Main />
        <NavBar />
        <About />
        </>)

ReactDOM.render(
  element,
  document.querySelector('#root')
);
