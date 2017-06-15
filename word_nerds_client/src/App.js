import React, { Component } from 'react'

import './App.css'

import NavBar from './components/NavBar'

import StoryContainer from './container/StoryContainer'

// import { Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar title="Word Nerds" color="yellow" className="App-purple"/>


        {/* <NavBar title="Dog and Student Lister" color="black" />
        <Switch>
          <Route path="/login" render={() => <LoginForm handleLogin={this.handleLogin}/>} />
          <Route path="/students" component={AuthedStudentsContainer} />
          <Route exact path="/about" render={() => <h1>This is an app about dogs and students</h1>}/>
        </Switch> */}



        <StoryContainer />
        <p>above is everything rendered from StoryContainer -- both forms</p>

        <p>This is the App.js page.</p>

    </div>
  )
}
}

export default App
