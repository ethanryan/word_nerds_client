import React, { Component } from 'react'

import CreateStoryFormSelectGenre from './CreateStoryFormSelectGenre'
import CreateStoryFormCreateCharacters from './CreateStoryFormCreateCharacters'

import { Form, Header, Modal, Button } from 'semantic-ui-react'

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
    storyType: 'story', //adding storyType...
  })
  this.handleCreateStoryFormSubmit = this.handleCreateStoryFormSubmit.bind(this)
} //end of constructor


componentWillReceiveProps(nextProps) { //need this lifecycle method to update filteredPlotsByTitle
  console.log('CreateStoryFormModal nextProps::::', nextProps)
  if (this.props !== nextProps) {
    console.log("CreateStoryFormModal - props don't equal nextProps, so updating state with nextProps: ", nextProps)
    // console.log("CreateStoryFormModal - props don't equal nextProps -- updating state with nextProps.characterProps: ", nextProps.characterProps)
    this.setState({
      characters: nextProps.characterProps,
    })
  }
}


handleCreateStoryFormSubmit(event) {
  event.preventDefault()
  const genres = this.props.genreSelection
  const characters = this.state.characters
  const user_id = this.props.user_id
  const storyType = this.state.storyType //adding storyType...
  // console.log('CreateStoryFormModal submitted this.state: ', this.state)
  console.log('CreateStoryFormModal submitted:::: ', genres, characters, user_id, storyType)
  // console.log('user_id is: ', user_id)
  this.props.handleSubmit( genres, characters, user_id, storyType ) //adding storyType...
  this.props.handleClearForm()
}


render() {

  return(

    <div>
      <Modal
        className="CreateStoryFormModal-fix-for-now"
        trigger={
        <Button primary fluid>Create A Short Story</Button>
      }>

      <Modal.Header>
        <Header as='h1' textAlign='center'>
          Create a Short Story
        </Header>
      </Modal.Header>

      <Form onSubmit={this.handleCreateStoryFormSubmit} className="CreateStoryFormModal-red">

        <Modal.Content scrolling>

        {/* <h1>user_id: {this.props.user_id}</h1> */}

        <CreateStoryFormSelectGenre
          plots={this.props.plots}
          handleGenreChange={this.props.handleGenreChange}
        />

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

      </Modal.Content>
      {/* everything within modal.content scrolls... */}

      <Modal.Actions>
        <Form.Button content='Submit' type="submit" primary fluid/>
      </Modal.Actions>

      </Form>
    </Modal>
  </div>
)
}
}

export default CreateStoryFormModal
