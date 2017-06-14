import React, {Component} from 'react'

import { Grid } from 'semantic-ui-react'

import CreateStoryForm from '../components/CreateStoryForm'
import EditStoryForm from '../components/EditStoryForm'
import StoryList from '../components/StoryList'
// import Story from '../components/Story'

class StoryContainer extends Component {
  constructor() {
    super()
    this.state = {
      stories: [], //array of all the (user's) stories
      story: '', //one story's content

      characters: {  ///need all this, or could i just pass up an object?
        hero: {
          name: 'HERO', //default <<<<---- NEED container to receive this data from CreateStoryForm and pass it down to Story (this should replace all stories with new character names, but it's a start)
          gender: '', //default ...null gives a warning.
        },
        shadow: {
          name: 'SHADOW', //default
          gender: '', //default
        },
        friend: {
          name: 'FRIEND', //default
          gender: '', //default
        }
      },

      // story: [], //one story's content
      title: 'title here', //default title for stories
      storyID: 0, //default is zero
    }
    // this.updateCharacterNames = this.updateCharacterNames.bind(this)
    this.updateHero = this.updateHero.bind(this)
    this.updateShadow = this.updateShadow.bind(this)
    this.updateFriend = this.updateFriend.bind(this)

  } //end of constructor


componentDidMount() {
  fetch('http://localhost:3000/stories', {
    method: 'GET',
  })
  .then( response => response.json() )

  .then( data => this.setState({
    stories: data //setting stories to data
    //data is an array of objects... need .content from each object
  }) )
  //////use this to console.log data after commenting out above .then::::::
  // .then(function(data) { //will replace this with above
  //   console.log('data from API: ', data)
  //   console.log('data[0].content: ', data[0].content)
  // })
} //end of componentDidMount


createStory(content) {
  console.log('content inside createStory: ', content)
// createStory(characters) {
  return fetch("http://localhost:3000/stories", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': localStorage.getItem('jwt')
    },
    method: 'POST',
    body: JSON.stringify({story: {
      //content: content, //this has to be content, to match attributes on stories_controller on backend (same as below attributes)
      // title: "default TITLE here", //default for now
      title: this.state.characters.hero.name + "'s story, v1", //default for now
      user_id: 1, //this will be whatever the loggedin user's id is

      // characters: [this.state.characters], //this doesn't work
      // characters: this.state.characters, //this doesn't work
      characters: [
        {
        name: this.state.characters.hero.name,
        gender: "",
        archetype: "hero"
        },

        {
        name: this.state.characters.shadow.name,
        gender: "",
        archetype: "shadow"
        },

        {
        name: this.state.characters.friend.name,
        gender: "",
        archetype: "friend"
        },
      ],
    },
  }), ///////////
  }).then( res => res.json() )
}



handleSubmit(story, characters) {
// handleSubmit(characters) {
  this.createStory(story, characters) //this is calling function above, adding content to database
  // this.createStory(characters) //this is calling function above, adding content to database
//THEN doing the below, which adds student to page, along with other students.
    .then( story => this.setState( prevState => ({ stories: [...prevState.stories, story] }) ))

    .catch(err => console.log(err)) //putting this below above line

    //tried calling renderEditForm here, after/within handleSubmit...
    // .then( this.renderEditForm(this.state.storyID).bind(this) ) //then render the story in the edit form
    // this.renderEditForm(this.state.storyID).bind(this) //then render the story in the edit form
}


// updateStory(story, title) {
updateStory(story) {
  return fetch(`http://localhost:3000/stories/${this.state.storyID}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': localStorage.getItem('jwt')
    },
    body: JSON.stringify( {story: {
        content: story, ///story! same as argument... from EditStoryForm, this is: 'this.state.input'
        title: this.state.title,
        // title: title,
        user_id: 1, //default for now
      }}
    ),
  }).then( res => res.json() )
}


handleUpdateStory(story) { //should this be storyID (or id) instead?
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
///////need all this just to update title????
///////need all this just to update title????
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
////////this can't be right....
////////this can't be right....
////////this can't be right....


//below is 'id', no matter what you call it...
renderEditForm(id) {
  let editStory = this.state.stories.find(story => story.id === id)
  console.log('editing story with id: ', id)
  // console.log('editing editStory.content: ', editStory.content)

  this.setState({
    stories: this.state.stories, //this doesn't change
    // story: editStory.content, //CHANGE story TO content!!!!! (attribute in API)
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




///////////need to make this one function, for updating all the characters:::
updateCharacterNames(characterNames) {
  console.log('updateCharacterNames is getting called, characterNames: ', characterNames);
  const heroName = characterNames.hero.name
  const shadowName = characterNames.shadow.name
  const friendName = characterNames.friend.name
  const currentState = this.state
  this.setState({
    characters: {
      hero: {
        name: heroName, //default
        gender: '', //default ...null gives a warning.
      },
      shadow: {
        name: shadowName, //default
        gender: '', //default
      },
      friend: {
        name: friendName, //default
        gender: '', //default
      }
    },
  })
}


///////make the three functions below one function, or get rid of them entirely by passing characterNames to container
updateHero(characterNames) {
  console.log('calling updateHero');

  const heroName = characterNames
  const currentState = this.state
  this.setState({
    characters: {
      hero: {
        name: heroName, //default
        gender: '', //default ...null gives a warning.
      },
      shadow: {
        name: currentState.characters.shadow.name, //default
        gender: '', //default
      },
      friend: {
        name: currentState.characters.friend.name, //default
        gender: '', //default
      }
    },
  })
}

updateShadow(characterNames) {
  console.log('calling updateShadow');

  const shadowName = characterNames
  const currentState = this.state
  this.setState({
    characters: {
      hero: {
        name: currentState.characters.hero.name, //default
        gender: '', //default ...null gives a warning.
      },
      shadow: {
        name: shadowName, //default
        gender: '', //default
      },
      friend: {
        name: currentState.characters.friend.name, //default
        gender: '', //default
      }
    },
  })
}

updateFriend(characterNames) {
  console.log('calling updateShadow');

  const friendName = characterNames
  const currentState = this.state
  this.setState({
    characters: {
      hero: {
        name: currentState.characters.hero.name, //default
        gender: '', //default ...null gives a warning.
      },
      shadow: {
        name: currentState.characters.shadow.name, //default
        gender: '', //default
      },
      friend: {
        name: friendName, //default
        gender: '', //default
      }
    },
  })
}



  render() {
    return(
      <div>


                {/* put below forms within Switch ?? */}


        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <CreateStoryForm
                handleSubmit={this.handleSubmit.bind(this)}

                renderEditForm={this.renderEditForm.bind(this)}

                updateCharacterNames={this.updateCharacterNames.bind(this)}
                updateHero={this.updateHero.bind(this)}
                updateShadow={this.updateShadow.bind(this)}
                updateFriend={this.updateFriend.bind(this)}

                story={this.state.story}

                storyID={this.state.storyID}
              />

              <EditStoryForm
                handleDeleteStory={this.handleDeleteStory.bind(this)}

                handleUpdateStory={this.handleUpdateStory.bind(this)}

                handleUpdateTitle={this.handleUpdateTitle.bind(this)}

                // passing all state as props to EditStoryForm
                stories={this.state.stories}
                story={this.state.story}

                title={this.state.title}
                storyID={this.state.storyID}
              />
            </Grid.Column>


            <Grid.Column width={6}>
              <StoryList
                handleDeleteStory={this.handleDeleteStory.bind(this)}

                renderEditForm={this.renderEditForm.bind(this)}

                stories={this.state.stories}

                heroName={this.state.characters.hero.name}
              />
            </Grid.Column>
          </Grid.Row>



          <Grid.Row>
            <Grid.Column width={8}>

            </Grid.Column>



            <Grid.Column width={8}>

            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

export default StoryContainer
