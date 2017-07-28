import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

import * as api from '../api'
import NavBar from '../components/NavBar'
import LoginSignUp from '../container/LoginSignUp'
import StoryPage from '../components/StoryPage'


// import { Router, Route, Switch } from 'react-router'

class StoryContainer extends Component {
  constructor() {
    super()
    console.log('StoryContainer props: ', this.props);
    this.state = {
      stories: [],
      story: '',
      title: 'cool story title here',
      user: '',
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
    return(
      <div>
        <NavBar
          title="Word Nerds"
          color="yellow"
          logout={this.logout.bind(this)}
        />
        <StoryPage
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
        <NavBar />

        <LoginSignUp handleLogin={this.handleLogin.bind(this)} />
      </div>
    )

  }

}
}

export default withRouter(StoryContainer)
