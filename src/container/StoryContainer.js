import React, {Component} from 'react'

import { withRouter } from 'react-router-dom'

import * as api from '../api'

import NavBar from '../components/NavBar/NavBar'
import NavBarLoginSignUp from '../components/NavBar/NavBarLoginSignUp'
import HomePageAndRoutes from '../components/HomePageAndRoutes/HomePageAndRoutes'

import Greeting from '../components/ConsoleGreeting/Greeting'

import LoginSignUp from '../container/LoginSignUp'

import MassiveLoader from '../components/Loaders/MassiveLoader'

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
      dataLoaded: false, //default value, set to true in componentDidMount, api.getCurrentUser
      story: 'cool story here',
      title: 'cool story title here',
      user: {
        id: 'user_id here',
        name: 'user'
      },
      characters: {
        hero: {
          name: 'HERO', //default name...
          gender: '',
        },
        shadow: {
          name: 'SHADOW', //default name...
          gender: '',
        },
        friend: {
          name: 'FRIEND', //default name...
          gender: '',
        },
        lover: {
          name: 'LOVER', //default name...
          gender: '',
        },
        mentor: {
          name: 'MENTOR', //default name...
          gender: '',
        },
        trickster: {
          name: 'TRICKSTER', //default name...
          gender: '',
        },
      },
      //updated from CreateStoryFormCreateCharacters...

      storyShowIsModal: false,
      activeModalStoryId: null, //this will be a number...
      indexOfStoryModal: null, //this will be a number...
      storyShowModalIsEditable: false,

      image: '',
      plots: [],
      genres: [],
      genreSelection: 'random', //updated from CreateStoryFormSelectGenre... random is default...
      users: [],
      nameOrPasswordError: false,
      usernameExistsError: false,
    }
    this.logout = this.logout.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleCharacterNameChange = this.handleCharacterNameChange.bind(this);
    this.handleCharacterGenderChange = this.handleCharacterGenderChange.bind(this);
    this.handleDeleteStory = this.handleDeleteStory.bind(this);
    this.handleUpdateStory = this.handleUpdateStory.bind(this);
    this.toggleStoryShowModalToEditable = this.toggleStoryShowModalToEditable.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }


  componentDidMount() {
    api.getStories()
    .then(data => this.sortStoriesByUpdatedAt(data)) //sorting stories by updated_at, calling function below
    .then(data => this.setState({
      stories: data
    }) )

    api.getPlots()
    .then(data => this.setState({
      plots: data
    }) )

    api.getUsers()
    .then(users => this.setState({
      users: users
    }) )

    api.getCurrentUser()
    .then(user => this.setState({
      user: user.user,
      dataLoaded: true
    }) )
  }

  scrollToTop() {
    console.log('scrollToTop called...')
    window.scrollTo(0, 0)
  }

  openModal(event, index, id) {
    // console.log('StoryContainer ---- openModal, params are:::', event, index, id)
    this.setState({
      storyShowIsModal: true,
      activeModalStoryId: id,
      indexOfStoryModal: index,
    })
  }

  closeModal() {
    this.setState({
      storyShowIsModal: false,
      activeModalStoryId: null, //reset this to null...
      indexOfStoryModal: null, //reset this to null...
      storyShowModalIsEditable: false,
    })
  }

  toggleStoryShowModalToEditable() {
    this.setState({ storyShowModalIsEditable: true })
  }

  handleSubmit(genres, characters, user_id, storyType) { //adding genre as argument -- ER Jan 2018
    api.createStory(genres, characters, user_id, storyType) //adding user_id as argument -- ER Nov 2017
    .then( story => this.setState(
      prevState => ({
        stories: [...prevState.stories, story]
      }) )
    )
    this.props.history.push(`/stories`) //redirect to all stories
  }

  handleClearForm() {
    this.setState({
      characters: {
        hero: {
          name: 'HERO', //default name...
          gender: '',
        },
        shadow: {
          name: 'SHADOW', //default name...
          gender: '',
        },
        friend: {
          name: 'FRIEND', //default name...
          gender: '',
        },
        lover: {
          name: 'LOVER', //default name...
          gender: '',
        },
        mentor: {
          name: 'MENTOR', //default name...
          gender: '',
        },
        trickster: {
          name: 'TRICKSTER', //default name...
          gender: '',
        },
      },
      genreSelection: 'random', //updated from CreateStoryFormSelectGenre... random is default...
    })
  }

  handleUpdateStory(updatedStory) {
    api.updateStory(updatedStory)
    .then( data => this.sortStoriesByUpdatedAt(data) ) //sorting stories by updated_at, with function below
    .then( data => this.setState({
      stories: data
    }) )
    this.setState({
      story: updatedStory.story,
      title: updatedStory.title,
      storyShowModalIsEditable: false,
    })
    // if (this.state.storyShowIsModal === true) {
    //   this.props.history.push(`/stories`) //redirect to stories page, which should show the modal...
    // }
    if (this.state.storyShowIsModal === false) {
      this.props.history.push(`/stories/${updatedStory.id}`) //redirect to StoryShow page
    }
  }

  handleDeleteStory(id) {
    if (window.confirm("Are you sure you want to delete this story? 😱😱😱 ")) {
      api.deleteStory(id)
      .then( () => {
        this.setState( prevState => ({
          stories: prevState.stories.filter( story => story.id !== id ),
        }) )
        // this.setState({
        // storyShowIsModal: false,
        // storyShowModalIsEditable: false
        // }) //make sure modal is closed... --- adding this breaks app...
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
      if(response.user == null && response.error != null) {
        //if user doesn't exist, or if there is an error...
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


  handleCharacterNameChange(characterName, characterType) {
    console.warn('handleCharacterNameChange -> characterName is: ', characterName)
    console.warn('handleCharacterNameChange -> characterType is: ', characterType)
    let characters = {...this.state.characters}
    characters[characterType].name = characterName
    this.setState({
      characters
    })
  }

  handleCharacterGenderChange(characterGender, characterType) {
    console.warn('handleCharacterNameChange -> characterGender is: ', characterGender)
    console.warn('handleCharacterNameChange -> characterType is: ', characterType)
    let characters = {...this.state.characters}
    characters[characterType].gender = characterGender
    this.setState({
      characters
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
      // console.log('0. console.table(this.state) is ----->>>>')

      if(this.state.users.length === 0) {
        console.error('0. state.users.length is 0, no user data yet: ', this.state.users.length)
      } else {
        console.warn('1. HEY YO! state.users.length 0 means NO INTERNET: ', this.state.users.length)
        console.warn('1. StoryContainer - (signed in) - this.state: ', this.state)
      }
      return(
        <div>
          {
            this.state.dataLoaded === true ?
            <div>

              <NavBar
                title="Word Nerds"
                current_user={this.state.user.name}
                logout={this.logout}
                location={this.props.location}
              />

              <Greeting
                current_user={this.state.user.name}
              />

              <HomePageAndRoutes
                scrollToTop={this.scrollToTop}
                //props for CreateStoryForm
                handleSubmit={this.handleSubmit}
                handleClearForm={this.handleClearForm}
                genreSelection={this.state.genreSelection}
                handleGenreChange={this.handleGenreChange} //this will be for CreateStoryFormSelectGenre
                handleCharacterNameChange={this.handleCharacterNameChange}
                handleCharacterGenderChange={this.handleCharacterGenderChange}
                characterProps={this.state.characters} //pass all characters in one prop...

                //props for EditStoryForm
                handleDeleteStory={this.handleDeleteStory}
                handleUpdateStory={this.handleUpdateStory}
                story={this.state.story}
                title={this.state.title}
                image={this.state.image}
                user={this.state.user}

                //props for AllStories
                stories={this.state.stories}
                plots={this.state.plots}
                users={this.state.users}
                storyShowIsModal={this.state.storyShowIsModal}
                storyShowModalIsEditable={this.state.storyShowModalIsEditable}
                toggleStoryShowModalToEditable={this.toggleStoryShowModalToEditable}
                openModal={this.openModal}
                closeModal={this.closeModal}
                activeModalStoryId={this.state.activeModalStoryId}
                indexOfStoryModal={this.state.indexOfStoryModal}
              />
            </div>
            :
            <MassiveLoader />
          }
          </div>
      )
    }
    else {
      console.log('state from StoryContainer (not signed in): ', this.state)
      if(this.state.users.length === 0) {
        console.error('0. state.users.length is 0, no user data yet: ', this.state.users.length)
      } else {
        console.warn('1. HEY YO! state.users.length 0 means NO INTERNET: ', this.state.users.length)
      }
      return(
          <div>
            <NavBarLoginSignUp />

            {
              (this.state.users.length === 0) ?
              <MassiveLoader />
              :
              <LoginSignUp
                handleLogin={this.handleLogin}
                handleSignUp={this.handleSignUp}
                nameOrPasswordError={this.state.nameOrPasswordError}
                usernameExistsError={this.state.usernameExistsError}
                users={this.state.users}
              />
            }

          </div>
      )
    }
  } //render
} //class

export default withRouter(StoryContainer)
