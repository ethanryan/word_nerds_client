import React, { Component } from 'react'

import HttpsRedirect from 'react-https-redirect'
import StoryContainer from './container/StoryContainer'

import './App.css'


class App extends Component {
  render() {
    return (
      <HttpsRedirect>
      <div className="App-body-purple">

        <StoryContainer className="App-content"/>

        <footer id="footer" className="App-sticky-footer">
          <span>WordNerds</span>
        </footer>

      </div>
    </HttpsRedirect>
    )
  }
}

export default App
