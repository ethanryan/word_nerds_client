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
      plots: [],
      genres: [],
      genreSelection: 'random', //updated from CreateStoryFormSelectGenre... random is default...
      users: [],
      nameOrPasswordError: false,
      usernameExistsError: false,
    }
  }


  componentDidMount() {
    api.getStories()
    .then( data => this.sortStoriesByUpdatedAt(data) ) //sorting stories by updated_at, calling function below
    .then( data => this.setState({
      stories: data
    }) )

    api.getPlots()
    .then( data => this.setState({
      plots: data
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


  handleSubmit(genres, characters, user_id) { //adding genre as argument -- ER Jan 2018
    api.createStory(genres, characters, user_id) //adding user_id as argument -- ER Nov 2017
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
    .then( data => this.sortStoriesByUpdatedAt(data) ) //sorting stories by updated_at, with function below
    .then( data => this.setState({
      stories: data //nasty nas
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
    .then(response => {
      if(response.error != null) { //if user already exists, or if there is an error...
        this.setState({usernameExistsError: true})
        console.log("response error from handleSignUp")
        console.log("response.error from handleSignUp: ", response.error)
        return
      }
      localStorage.setItem('jwt', response.token)
      this.setState({
        user: response.user
      })
      this.props.history.push('/')
    })
  }


  handleLogin(params) {
    // if (window.confirm(`Are you sure you want to login??? params are: name: ${params.name}, password: ${params.password}`))
      this.setState({nameOrPasswordError: false}) //resetting the state
      api.logIn(params) //calling logIn function in api/index.js
      .then(response => {
        if(response.user == null && response.error != null) { //if user doesn't exist, or if there is an error...
        this.setState({nameOrPasswordError: true}) //need to pass this down to LoginForm
        console.log("response error")
        return
      }
      localStorage.setItem("jwt", response.token)
      this.setState({
        user: response.user //this needs to be in StoryContainer
      })
      this.props.history.push('/')
    })
  }


  handleGenreChange(params) {
    // console.log('StoryContainer ~~~ handleGenreChange called with params: ', params)
    this.setState({
      genreSelection: params
    })
  }


  sortStoriesByUpdatedAt(storiesArray) {
    // console.log('0. container - storiesArray: ', storiesArray)
    var newArray = storiesArray.slice(0) //clone, cuz sort mutates
    var sortedStories = newArray.sort(function(a, b) {
      var dateA = new Date(a.updated_at)
      var dateB = new Date(b.updated_at)
      return dateA - dateB //sort stories by updated_at, first to last
    });
    // console.log('1. container - result sorted by updated_at: ', sortedStories)
    return sortedStories
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
    console.log('state.users.length 0 means NO INTERNET: ', this.state.users.length)
    return(
      <div>
        <NavBar
          title="Word Nerds"
          current_user={this.state.user ? this.state.user.name : "current_user here"}
          logout={this.logout.bind(this)}
          location={this.props.location}
        />
        <StoryPage
          //props for CreateStoryForm
          handleSubmit={this.handleSubmit.bind(this)}
          genreSelection={this.state.genreSelection}
          handleGenreChange={this.handleGenreChange.bind(this)} //this will be for CreateStoryFormSelectGenre
          ///above so CreateStoryFormSelectGenre can send up selectedGenre to here, StoryContainer

          //props for EditStoryForm
          handleDeleteStory={this.handleDeleteStory.bind(this)}
          handleUpdateStory={this.handleUpdateStory.bind(this)}
          story={this.state.story}
          title={this.state.title}
          image={this.state.image}
          user={this.state.user}

          //props for AllStories
          stories={this.state.stories}
          plots={this.state.plots}
          users={this.state.users}
        />
      </div>
    )
  }
  else {
    console.log('state from StoryContainer: ', this.state)
    console.log('state.users.length 0 means NO INTERNET: ', this.state.users.length)
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
