import React, {Component} from 'react'

import NavBar from '../components/NavBar'

import LoginSignUp from '../container/LoginSignUp'

import { withRouter } from 'react-router-dom'

// import { Router, Route, Switch } from 'react-router'

import StoryPage from '../components/StoryPage'

class StoryContainer extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      story: '',
      title: 'title here',
      user: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stories', {
      method: 'GET',
    })
    .then( response => response.json() )

    .then( data => this.setState({
      stories: data
    }) )
  }


  createStory(content, characters) {
    console.log('content inside createStory: ', content)
    return fetch("http://localhost:3000/stories", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'Authorization': localStorage.getItem('jwt')
      },
      method: 'POST',
      body: JSON.stringify({story: {
        title: characters.hero.name + "'s story, v1",
        user_id: 1, //default for now

        characters: [
          {
            name: characters.hero.name,
            gender: characters.hero.gender,
            archetype: "hero"
          },

          {
            name: characters.shadow.name,
            gender: characters.shadow.gender,
            archetype: "shadow"
          },

          {
            name: characters.friend.name,
            gender: characters.friend.gender,
            archetype: "friend"
          },

          {
            name: characters.lover.name,
            gender: characters.lover.gender,
            archetype: "lover"
          },

          {
            name: characters.mentor.name,
            gender: characters.mentor.gender,
            archetype: "mentor"
          },
        ],
      },
    }),
  }).then( res => res.json() )
}


handleSubmit(story, characters) {
  this.createStory(story, characters) //calling function above, adding content to database
  // .then( story => console.log("STORYYYY", story) )
  .then( story => this.setState( prevState => ({ stories: [...prevState.stories, story] }
  ) )
)
// this.props.history.push(`/stories/${story.id}/edit`) //redirect to edit form
this.props.history.push(`/stories`) //redirect to all stories
// .catch(err => console.log(err))
}


updateStory(updatedStory) {
  return fetch(`http://localhost:3000/stories/${updatedStory.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': localStorage.getItem('jwt')
    },
    body: JSON.stringify( {story: {
      content: updatedStory.input,
      title: updatedStory.title,
      user_id: 1, //default for now
    }}
  ),
}).then( res => res.json() )
}


handleUpdateStory(updatedStory) {
  console.log('handleUpdateStory updatedStory and updateStory.id: ', updatedStory,  updatedStory.id)
  this.updateStory(updatedStory) //calling function above, updating story on database
  .then( (response) => this.setState({
    stories: response //nasty nas
  }) )
  this.setState({
    story: updatedStory.story,
    title: updatedStory.title,
  })
  this.props.history.push(`/stories/${updatedStory.id}`) //redirect to all stories page
}


deleteStory(id) {
  return fetch(`http://localhost:3000/stories/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': localStorage.getItem('jwt')
    },
  }).then( res => res.json() )
  .catch(err => console.log(err))
}


handleDeleteStory(id) {
  if (window.confirm("Are you sure you want to delete this story? 😱😱😱 ")) {
    this.deleteStory(id)
    .then( () => {
      this.setState( prevState => ({
        stories: prevState.stories.filter( story => story.id !== id )
      }) )
    })
  }
  this.props.history.push('/stories') //redirect to all stories
}

handleLogin(params) {
  // fetch("http://localhost:3000/api/v1/sign_in", {
  fetch("http://localhost:3000/sign_in", {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: 'POST',
  body: JSON.stringify(params)
  })
  .then( res => res.json() )
  .then( resp => { console.log('Log In Response: ', resp)
  localStorage.setItem("token", resp.token)
  this.setState({
    user: resp.user
  }),this.props.history.push('/')
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
  const { location } = this.props

  if(localStorage.getItem('token')) {

  return(
    <div>

      <div>You are now at {location.pathname}</div>

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

        //props for AllStories
        stories={this.state.stories}
      />

    </div>
  )
}
else {
  return(
    <div>
      <NavBar title="Word Nerds" color="yellow" />
      
      <LoginSignUp handleLogin={this.handleLogin.bind(this)} />
    </div>
  )

}

}
}

export default withRouter(StoryContainer)
