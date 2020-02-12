import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import NavBar from './nav-bar'

const element = (<>
        <Main />
        <NavBar />
        </>)

ReactDOM.render(
  element,
  document.querySelector('#root')
);
