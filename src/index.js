import React from 'react';
import ReactDOM from 'react-dom';
// import HttpsRedirect from 'react-https-redirect';

import { BrowserRouter } from 'react-router-dom' //for routes

import App from './App';

// import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'; //for semantic-ui-css
import './index.css';

ReactDOM.render((
  // <HttpsRedirect>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </HttpsRedirect>
), document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
