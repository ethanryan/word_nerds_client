import React, { Component } from 'react'

import './App.css'

import NavBar from './components/NavBar'

import StoryContainer from './container/StoryContainer'

class App extends Component {
  render() {
    return (

      <div className="App-purple">
        <NavBar />

        <StoryContainer />
        <p>above is everything rendered from StoryContainer -- both forms</p>

        <p>This is the App.js page.</p>
      </div>
    )
  }
}

export default App
