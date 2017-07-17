import React, { Component } from 'react'

import './App.css'

import StoryContainer from './container/StoryContainer'


class App extends Component {
  render() {
    return (
      <div className="App-purple">

        <StoryContainer />
        {/* <p>above is everything rendered from StoryContainer -- both forms</p> */}

        {/* <p>This is the App.js page.</p> */}
        <div className="App-footer">WordNerds Story Generator</div>

    </div>
  )
}
}

export default App
