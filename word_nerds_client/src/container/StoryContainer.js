import React, {Component} from 'react'

import { Grid } from 'semantic-ui-react'

import { withRouter } from 'react-router-dom'

// import { withRouter } from 'react-router'

// import { Router, Route, Switch } from 'react-router'

import StoryList from '../components/StoryList'
import StoryPage from '../components/StoryPage'

class StoryContainer extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      story: '',
      title: 'title here',
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
   this.props.history.push('/stories') //redirect to all stories
    // .catch(err => console.log(err))
}


updateStory(updatedStory) {
  return fetch(`http://localhost:3000/stories/${this.state.storyID}`, {
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
console.log('handleUpdateStory story: ', updatedStory)
  this.updateStory(updatedStory) //calling function above, updating story on database
  .then( (response) => this.setState({
      stories: response //nasty nas
    }) )
    this.setState({
      story: updatedStory.story,
      title: updatedStory.title,
    })
    this.props.history.push('/stories') //redirect to all stories page
}


renderEditForm(id) {
  let editStory = this.state.stories.find(story => story.id === id)
  console.log('editing story with id: ', id)
  this.setState({
    story: editStory.content,
    title: editStory.title,
    storyID: editStory.id,
  })
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


  render() {
    const { match, location, history } = this.props
    const { redirect } = this.state
    return(
      <div>

        <div>You are now at {location.pathname}</div>
        <Grid>
          <Grid.Row>

            <Grid.Column width={10}>
              <StoryPage
                //props for CreateStoryForm
                handleSubmit={this.handleSubmit.bind(this)}
                renderEditForm={this.renderEditForm.bind(this)}

                //props for EditStoryForm
                handleDeleteStory={this.handleDeleteStory.bind(this)}
                handleUpdateStory={this.handleUpdateStory.bind(this)}
                story={this.state.story}
                title={this.state.title}

                //props for AllStories
                stories={this.state.stories}
              />
            </Grid.Column>


            <Grid.Column width={6}>
              <StoryList
                handleDeleteStory={this.handleDeleteStory.bind(this)}
                renderEditForm={this.renderEditForm.bind(this)}
                stories={this.state.stories}
              />
            </Grid.Column>

          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

export default withRouter(StoryContainer)
