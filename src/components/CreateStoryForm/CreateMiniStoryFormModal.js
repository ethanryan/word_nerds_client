import React, { Component } from 'react'

import CreateStoryFormSelectGenre from './CreateStoryFormSelectGenre'
import CreateStoryFormCreateCharacters from './CreateStoryFormCreateCharacters'

import { Form, Header, Divider, Modal, Button } from 'semantic-ui-react'

class CreateStoryFormModal extends Component {

  constructor(props) {
    super(props)
    // console.log('**** props from CreateStoryFormModal:', props)
    // console.log('+++++ props.genreSelection from CreateStoryFormCreateCharacters:', props.genreSelection)
    // console.log('+++++ props.characterProps from CreateStoryFormCreateCharacters:', props.characterProps)
    this.state=({ //organizing this so it's not nested, but post request will be nested
    // story: '',
    characters: this.props.characterProps,
    genreSelection: this.props.genreSelection, //chosen in CreateStoryFormSelectGenre, passed up to StoryContainer from there
    storyType: 'miniStory', //adding storyType...
  })
  this.handleCreateMiniStoryFormSubmit = this.handleCreateMiniStoryFormSubmit.bind(this)
} //end of constructor


componentWillReceiveProps(nextProps) { //need this lifecycle method to update filteredPlotsByTitle
  // console.log('CreateStoryFormModal nextProps::::', nextProps)
  if (this.props !== nextProps) {
    console.log("CreateStoryFormModal - props don't equal nextProps, so updating state with nextProps: ", nextProps)
    // console.log("CreateStoryFormModal - props don't equal nextProps -- updating state with nextProps.characterProps: ", nextProps.characterProps)
    this.setState({
      characters: nextProps.characterProps,
    })
  }
}


handleCreateMiniStoryFormSubmit(event) {
  event.preventDefault()
  const genres = this.props.genreSelection
  const characters = this.state.characters
  const user_id = this.props.user_id
  const storyType = this.state.storyType
  console.log('CreateStoryFormModal submitted this.state: ', this.state)
  // console.log('user_id is: ', user_id)
  this.props.handleSubmit( genres, characters, user_id, storyType ) //adding storyType
  this.setState({story: ''}) //this clears form onSubmit
}


render() {

  return(

    <div>
      <Modal trigger={
        <Button color='teal' fluid>Create A Mini Story</Button>
      }>

      <Form onSubmit={this.handleCreateMiniStoryFormSubmit} className="CreateStoryFormModal-red">

        <Header as='h1' textAlign='center'>
          Create a Mini Story
        </Header>

        {/* <h1>user_id: {this.props.user_id}</h1> */}

        <CreateStoryFormSelectGenre
          plots={this.props.plots}
          handleGenreChange={this.props.handleGenreChange}
        />

        <Divider />

        <CreateStoryFormCreateCharacters
          //refactor below!!! don't need all these functions, just one or two...
          handleHeroNameChange={this.props.handleHeroNameChange}
          handleShadowNameChange={this.props.handleShadowNameChange}
          handleFriendNameChange={this.props.handleFriendNameChange}
          handleLoverNameChange={this.props.handleLoverNameChange}
          handleMentorNameChange={this.props.handleMentorNameChange}
          handleTricksterNameChange={this.props.handleTricksterNameChange}
          //refactor below!!! don't need all these functions, just one or two...
          handleHeroGenderChange={this.props.handleHeroGenderChange}
          handleShadowGenderChange={this.props.handleShadowGenderChange}
          handleFriendGenderChange={this.props.handleFriendGenderChange}
          handleLoverGenderChange={this.props.handleLoverGenderChange}
          handleMentorGenderChange={this.props.handleMentorGenderChange}
          handleTricksterGenderChange={this.props.handleTricksterGenderChange}
        />

        <Form.Button content='Submit' type="submit" primary fluid/>

      </Form>
    </Modal>
  </div>
)
}
}

export default CreateStoryFormModal
