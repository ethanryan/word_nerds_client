import React, { Component } from 'react'

import HttpsRedirect from 'react-https-redirect';

import './App.css'

import StoryContainer from './container/StoryContainer'


class App extends Component {
  render() {
    return (
      <HttpsRedirect>

      <div className="App-body-purple">

        <StoryContainer className="App-content"/>
        {/* <p>above is everything rendered from StoryContainer -- both forms</p> */}

        {/* <p>This is the App.js page.</p> */}

        <footer id="footer" className="App-sticky-footer">
          <span>WordNerds</span>
        </footer>

      </div>
    </HttpsRedirect>

    )
  }
}

export default App
