import React, {Component} from 'react'

import { withRouter } from 'react-router-dom'

import * as api from '../api'

import NavBar from '../components/NavBar/NavBar'
import NavBarLoginSignUp from '../components/NavBar/NavBarLoginSignUp'
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
        })
      )
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


  //abstract below functions into one function???????
  //abstract below functions into one function???????
  //abstract below functions into one function???????
  //abstract below functions into one function???????

  //   hero: this.state.hero,
  //   shadow: this.state.shadow,
  //   friend: this.state.friend,
  //   lover: this.state.lover,
  //   mentor: this.state.mentor,
  //   trickster: this.state.trickster

  handleHeroNameChange(params) {
    let characters = {...this.state.characters}
    characters.hero.name = params
    this.setState({
      characters
    })
  }

  handleHeroGenderChange(params) {
    let characters = {...this.state.characters}
    characters.hero.gender = params
    this.setState({
      characters
    })
  }

  handleShadowNameChange(params) {
    let characters = {...this.state.characters}
    characters.shadow.name = params
    this.setState({
      characters
    })
  }

  handleShadowGenderChange(params) {
    let characters = {...this.state.characters}
    characters.shadow.gender = params
    this.setState({
      characters
    })
  }

  handleFriendNameChange(params) {
    let characters = {...this.state.characters}
    characters.friend.name = params
    this.setState({
      characters
    })
  }

  handleFriendGenderChange(params) {
    let characters = {...this.state.characters}
    characters.friend.gender = params
    this.setState({
      characters
    })
  }

  handleLoverNameChange(params) {
    let characters = {...this.state.characters}
    characters.lover.name = params
    this.setState({
      characters
    })
  }

  handleLoverGenderChange(params) {
    let characters = {...this.state.characters}
    characters.lover.gender = params
    this.setState({
      characters
    })
  }

  handleMentorNameChange(params) {
    let characters = {...this.state.characters}
    characters.mentor.name = params
    this.setState({
      characters
    })
  }

  handleMentorGenderChange(params) {
    let characters = {...this.state.characters}
    characters.mentor.gender = params
    this.setState({
      characters
    })
  }

  handleTricksterNameChange(params) {
    let characters = {...this.state.characters}
    characters.trickster.name = params
    this.setState({
      characters
    })
  }

  handleTricksterGenderChange(params) {
    let characters = {...this.state.characters}
    characters.trickster.gender = params
    this.setState({
      characters
    })
  }
  //abstract above functions into one function???????
  //abstract above functions into one function???????
  //abstract above functions into one function???????
  //abstract above functions into one function???????

  replacePlotTitleWithEmoji(string) {
    console.log('calling replacePlotTitlewithEmoji')
    console.log('plotTitle is: ', string)
    return (
      string
      .replace("Halloween", "🔪")
      .replace("Alien", "👽")
      .replace("The Matrix", "⏰")
      .replace("Star Wars", "🚀")
      .replace("E.T.", "📞")
      .replace("Terminator", "🤖")
      .replace("Die Hard", "🔫")
      .replace("Thelma and Louise", "🚘")
      .replace("The Last Unicorn - Wikipedia.rb", " //🤷🤷🤷// ")
      // .replace("Home Alone", "😂")
      .replace("Home Alone", " Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhh!!!!!! ")
      .replace("Frozen (2013 film) - Wikipedia.rb", " //🤷🤷🤷// ")
      .replace("Toy Story - Wikipedia.rb", " //🤷🤷🤷// ")
      .replace("Beauty and the Beast", "🦊")
      .replace("La Strada", "💔")
      .replace("The Piano", "💙")
    )
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
    console.log('0. state from StoryContainer (signed in): ', this.state)

    // console.log('0. console.table(this.state) is ----->>>>')
    // console.table(this.state)

    // console.log('0. StoryContainer state.characters: ', this.state.characters)
    // console.log('0. StoryContainer state.characters.hero: ', this.state.characters.hero)

    if(this.state.users.length === 0) {
      console.error('0. HEY YO! state.users.length 0 means NO INTERNET: ', this.state.users.length)
    } else {
      console.warn('1. HEY YO! state.users.length 0 means NO INTERNET: ', this.state.users.length)
    }
    return(
      <div>
        <NavBar
          title="Word Nerds"
          current_user={this.state.user ? this.state.user.name : "current_user here"}
          logout={this.logout.bind(this)}
          location={this.props.location}
        />
        <StoryPage
          scrollToTop={this.scrollToTop.bind(this)}
          //props for CreateStoryForm
          handleSubmit={this.handleSubmit.bind(this)}
          handleClearForm={this.handleClearForm.bind(this)}
          genreSelection={this.state.genreSelection}
          replacePlotTitleWithEmoji={this.replacePlotTitleWithEmoji.bind(this)}
          handleGenreChange={this.handleGenreChange.bind(this)} //this will be for CreateStoryFormSelectGenre
          ///above so CreateStoryFormSelectGenre can send up selectedGenre to here, StoryContainer

          //refactor below!!!! just needs to be one or two functions for all character names and genders...
          //   hero: this.state.hero,
          //   shadow: this.state.shadow,
          //   friend: this.state.friend,
          //   lover: this.state.lover,
          //   mentor: this.state.mentor,
          //   trickster: this.state.trickster
          handleHeroNameChange={this.handleHeroNameChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleShadowNameChange={this.handleShadowNameChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleFriendNameChange={this.handleFriendNameChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleLoverNameChange={this.handleLoverNameChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleMentorNameChange={this.handleMentorNameChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleTricksterNameChange={this.handleTricksterNameChange.bind(this)} //this will be for CreateStoryFormCreateCharacters

          handleHeroGenderChange={this.handleHeroGenderChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleShadowGenderChange={this.handleShadowGenderChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleFriendGenderChange={this.handleFriendGenderChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleLoverGenderChange={this.handleLoverGenderChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleMentorGenderChange={this.handleMentorGenderChange.bind(this)} //this will be for CreateStoryFormCreateCharacters
          handleTricksterGenderChange={this.handleTricksterGenderChange.bind(this)} //this will be for CreateStoryFormCreateCharacters

          characterProps={this.state.characters} //pass all characters in one prop...

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
          storyShowIsModal={this.state.storyShowIsModal}
          storyShowModalIsEditable={this.state.storyShowModalIsEditable}
          toggleStoryShowModalToEditable={this.toggleStoryShowModalToEditable.bind(this)}
          openModal={this.openModal.bind(this)}
          closeModal={this.closeModal.bind(this)}
          activeModalStoryId={this.state.activeModalStoryId}
          indexOfStoryModal={this.state.indexOfStoryModal}
        />
      </div>
    )
  }
  else {
    console.log('state from StoryContainer (not signed in): ', this.state)
    if(this.state.users.length === 0) {
      console.error('0. HEY YO! state.users.length 0 means NO INTERNET: ', this.state.users.length)
    } else {
      console.warn('1. HEY YO! state.users.length 0 means NO INTERNET: ', this.state.users.length)
    }
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
