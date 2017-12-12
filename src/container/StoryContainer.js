import React, {Component} from 'react'

import { withRouter } from 'react-router-dom'

import * as api from '../api'

import NavBar from '../components/NavBar'
import NavBarLoginSignUp from '../components/NavBarLoginSignUp'
import StoryPage from '../components/StoryPage'

import LoginSignUp from '../container/LoginSignUp'


class StoryContainer extends Component {
  constructor() {
    super()
    this.state = {
      stories: [
        {
          characters: 'story characters here',
          content: 'words words ----- word words words',
          genres: [{one_genre: 'story genres here'}],
          id: 'story ID here',
          paragraphs: 'story paragraphs here',
          plots: [{title: 'Halloween'}],
          title: 'title here',
          user: 'user here'
        }
      ],
      story: 'cool story here',
      title: 'cool story title here',
      user: {
        id: 'user_id here',
        name: 'user_name here'
      },
      image: '',
      genres: [],
      users: [],
      nameOrPasswordError: false,
      usernameExistsError: false,
    }
  }


  componentDidMount() {
    api.getStories()
    .then( data => this.setState({
      stories: data
    }) )

    api.getUsers()
    .then (user => this.setState({
      users: user
    }) )

    api.getCurrentUser()
    .then (user => this.setState({
      user: user.user
    }) )
  }


  handleSubmit(characters, user_id) { //adding user_id as argument -- ER Nov 2017
    api.createStory(characters, user_id) //adding user_id as argument -- ER Nov 2017
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


handleSignUp(params) {
  console.log('handleSignUp called with params: ', params)
  api.signUp(params)
  .then(resp => {
    if(resp.error != null) { //if user already exists, or if there is an error...
      this.setState({usernameExistsError: true})
      console.log("response error from handleSignUp")
      console.log("resp.error from handleSignUp: ", resp.error)
      return
    }
    localStorage.setItem('jwt', resp.token)
    this.setState({
      user: resp.user
    })
    this.props.history.push('/')
  })
}


handleLogin(params) {
  // if (window.confirm(`Are you sure you want to login??? params are: name: ${params.name}, password: ${params.password}`))
  this.setState({nameOrPasswordError: false}) //resetting the state
  api.logIn(params) //calling logIn function in api/index.js
  .then( resp => {
    if(resp.user == null && resp.error != null) { //if user doesn't exist, or if there is an error...
    this.setState({nameOrPasswordError: true}) //need to pass this down to LoginForm
    console.log("response error")
    return
  }
  localStorage.setItem("jwt", resp.token)
  this.setState({
    user: resp.user //this needs to be in StoryContainer
  })
  this.props.history.push('/')
})
}




logout() {
  this.setState({
    user: null
  })
  localStorage.clear()
  // console.log('logout', this.state.current_user)
}


render() {
  if(localStorage.getItem('jwt')) {
    // console.log('jwt: ', this.jwt)
    // console.log('props from StoryContainer: ', this.props)
    console.log('state from StoryContainer: ', this.state)
    // console.log('state.users.length 0 means NO INTERNET: ', this.state.users.length)
    return(
      <div>
        <NavBar
          title="Word Nerds"
          current_user={this.state.user ? this.state.user.name : "current_user here"}
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
          user={this.state.user}

          //props for AllStories
          stories={this.state.stories}
          users={this.state.users}
        />
      </div>
    )
  }
  else {
    console.log('state from StoryContainer: ', this.state)
    // console.log('state.users.length 0 means NO INTERNET: ', this.state.users.length)
    return(
      <div>
        <NavBarLoginSignUp />

        <LoginSignUp
          handleLogin={this.handleLogin.bind(this)}
          handleSignUp={this.handleSignUp.bind(this)}
          nameOrPasswordError={this.state.nameOrPasswordError}
          usernameExistsError={this.state.usernameExistsError}
          users={this.state.users}
        />
      </div>
    )
  }
}
}

export default withRouter(StoryContainer)
