import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

// if (process.env.NODE_ENV === 'development') { //testing this in development...
if (process.env.NODE_ENV === 'production') {
  console.log = function(){}; //overwriting console.logs with an empty function, so all console.logs now do nothing...
  console.warn = function(){};
  console.error = function(){};
}

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
), document.getElementById('root'))
