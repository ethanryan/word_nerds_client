import React, { Component } from 'react'

import './App.css'

import StoryContainer from './container/StoryContainer'

// import { Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App-purple">

        <StoryContainer />
        <p>above is everything rendered from StoryContainer -- both forms</p>

        <p>This is the App.js page.</p>

    </div>
  )
}
}

export default App
