import React, {Component} from 'react'

import { withRouter } from 'react-router-dom'

import * as api from '../api'

import NavBar from '../components/NavBar'
import NavBarLoginSignUp from '../components/NavBarLoginSignUp'
import StoryPage from '../components/StoryPage'

import LoginSignUp from '../container/LoginSignUp'


// import { Router, Route, Switch } from 'react-router'

class StoryContainer extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      // stories: [{title: 'title here', 'content': 'words words ----- word words words', genres: 'story genres here', plots: 'story plots here', user: 'user here'}],
      story: 'cool story here',
      title: 'cool story title here',
      user: 'user here',
      // current_user: 'current_user here',
      image: '',
      genres: []
    }
  }


  componentDidMount() {
    api.getStories()
      .then( data => this.setState({
        stories: data
      }) )

    api.getUsers()
      .then (user => this.setState({
        user: user
      }) )

    // api.getCurrentUser()
    //   .then (current_user => this.setState({
    //     current_user: current_user
    //   }) )
  }

  handleSubmit(characters) {
    api.createStory(characters)
      .then( story => this.setState(
          prevState => ({
            stories: [...prevState.stories, story]
          })
        )
      )

    this.props.history.push(`/stories`) //redirect to all stories
  }

  handleUpdateStory(updatedStory) {
    api.updateStory(updatedStory)
      .then( response => this.setState({
        stories: response //nasty nas
      }) )

    this.setState({
      story: updatedStory.story,
      title: updatedStory.title,
    })
    this.props.history.push(`/stories/${updatedStory.id}`) //redirect to all stories page
  }

  handleDeleteStory(id) {
    if (window.confirm("Are you sure you want to delete this story? 😱😱😱 ")) {
      api.deleteStory(id)
        .then( () => {
          this.setState( prevState => ({
            stories: prevState.stories.filter( story => story.id !== id )
          }) )
        })
    }
    this.props.history.push('/stories') //redirect to all stories
  }

  handleLogin(params) {
    api.logIn(params)
      .then( resp => {
        localStorage.setItem("jwt", resp.token)
        this.setState({
          user: resp.user
        })
        this.props.history.push('/')
      })
  }

  logout() {
    this.setState({
      user: null
    })
    localStorage.clear()
    // console.log('logout', this.state.current_user);
  }


render() {
  if(localStorage.getItem('jwt')) {
    // console.log('jwt: ', this.jwt);
    // console.log('props from StoryContainer: ', this.props);
    console.log('state from StoryContainer: ', this.state);
    return(
      <div>
        <NavBar
          title="Word Nerds"
          current_user={this.state.user.name}
          logout={this.logout.bind(this)}
        />
        <StoryPage
          //props for welcome
          current_user={this.state.user.name}

          //props for CreateStoryForm
          handleSubmit={this.handleSubmit.bind(this)}

          //props for EditStoryForm
          handleDeleteStory={this.handleDeleteStory.bind(this)}
          handleUpdateStory={this.handleUpdateStory.bind(this)}
          story={this.state.story}
          title={this.state.title}
          image={this.state.image}

          //props for AllStories
          stories={this.state.stories}
        />
      </div>
    )
  }
  else {
    return(
      <div>
        <NavBarLoginSignUp />

        <LoginSignUp handleLogin={this.handleLogin.bind(this)} />
      </div>
    )

  }

}
}

export default withRouter(StoryContainer)
