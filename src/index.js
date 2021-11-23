import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './globalStyles';

ReactDOM.render(
  <HashRouter>
    <GlobalStyle/>
    <App/>
  </HashRouter>,
  document.getElementById('root')
);

