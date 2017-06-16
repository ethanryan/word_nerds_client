import React, {Component} from 'react'

import { Grid } from 'semantic-ui-react'

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
    .then( story => this.setState( prevState => ({ stories: [...prevState.stories, story] }) ))
    .catch(err => console.log(err))
}


updateStory(story) {
  return fetch(`http://localhost:3000/stories/${this.state.storyID}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': localStorage.getItem('jwt')
    },
    body: JSON.stringify( {story: {
        content: story,
        title: this.state.title,
        user_id: 1, //default for now
      }}
    ),
  }).then( res => res.json() )
}


handleUpdateStory(story) {
console.log('handleUpdateStory story: ', story)

  this.updateStory(story) //calling function above, updating story on database
  .then( (response) => this.setState({
      stories: response //nasty nas
    }) )
    this.setState({
      story: '',
      title: '',
    })
}


///////need all this just to update title????
updateTitle(title) {
  return fetch(`http://localhost:3000/stories/${this.state.storyID}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': localStorage.getItem('jwt')
    },
    body: JSON.stringify( {story: {
        content: this.state.story, ///story! same as argument... from EditStoryForm, this is: 'this.state.input'
        title: title,
        user_id: 1, //default for now
      }}
    ),
  }).then( res => res.json() )
}


handleUpdateTitle(title) { //should this be storyID (or id) instead?
console.log('handleUpdateTitle title: ', title)

  this.updateTitle(title) //calling function above, updating story on database
  .then( (response) => this.setState({
      stories: response //nasty nas
    }) )
    this.setState({
      story: '',
      title: '',
    })
}
////////this can't be right....


//below is 'id', no matter what you call it...
renderEditForm(id) {
  let editStory = this.state.stories.find(story => story.id === id)
  console.log('editing story with id: ', id)
  this.setState({
    story: editStory.content, //CHANGE story TO content!!!!! (attribute in API)
    title: editStory.title, //default title for stories
    storyID: editStory.id,
  })
} //end of renderEditForm


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

    this.deleteStory(id) //calling function above

    .then( () => {
      this.setState( prevState => ({
        stories: prevState.stories.filter( story => story.id !== id )
      }) )
    })
  }//end if statement
}


////////////////trying this for visualizing text
// const displacy = new displaCyENT('http://localhost:8000', {
//     container: '#displacy',
//     defaultText: 'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously.',
//     defaultEnts: ['person', 'org', 'date']
// });
// //////////

  render() {
    return(
      <div>
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
                handleUpdateTitle={this.handleUpdateTitle.bind(this)}
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

export default StoryContainer
