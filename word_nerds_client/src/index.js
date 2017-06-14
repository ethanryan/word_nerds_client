import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'; //for semantic-ui-css
import './index.css';
import { BrowserRouter } from 'react-router-dom' //for routes

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
