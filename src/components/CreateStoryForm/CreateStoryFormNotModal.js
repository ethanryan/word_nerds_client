import React, { Component } from 'react'

import CreateStoryFormSelectGenre from './CreateStoryFormSelectGenre'
import CreateStoryFormCreateCharacters from './CreateStoryFormCreateCharacters'

import scrollToTop from '../../helpers/scrollToTop'

// import { Form, Header, Modal, Button } from 'semantic-ui-react'
import { Form, Header } from 'semantic-ui-react'

class CreateStoryFormNotModal extends Component {

  constructor(props) {
    super(props)
    // console.log('**** props from CreateStoryFormNotModal:', props)
    // console.log('+++++ props.genreSelection from CreateStoryFormCreateCharacters:', props.genreSelection)
    // console.log('+++++ props.characterProps from CreateStoryFormCreateCharacters:', props.characterProps)
    this.state=({
      //organizing this so it's not nested, but post request will be nested
      // story: '',
      characters: this.props.characterProps,
      genreSelection: this.props.genreSelection, //chosen in CreateStoryFormSelectGenre, passed up to StoryContainer from there
      storyType: 'story', //adding storyType...
    })
    this.handleCreateStoryFormSubmit = this.handleCreateStoryFormSubmit.bind(this)
  } //end of constructor


  componentWillReceiveProps(nextProps) { //need this lifecycle method to update filteredPlotsByTitle
    // console.log('CreateStoryFormNotModal nextProps:', nextProps)
    if (this.props !== nextProps) {
      // console.log("CreateStoryFormNotModal - props don't equal nextProps, so updating state with nextProps: ", nextProps)
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
    const user_name = this.props.user_name
    const storyType = this.state.storyType //adding storyType...
    // console.log('CreateStoryFormNotModal submitted this.state: ', this.state)
    console.log('CreateStoryFormNotModal submitted:::: ', genres, characters, user_id, user_name, storyType)
    // console.log('user_id is: ', user_id)
    this.props.handleSubmit( genres, characters, user_id, user_name, storyType ) //adding storyType...
    this.props.handleClearForm()
    scrollToTop()
  }


  render() {

    return(

      <div>
        {/* <Modal
          className="CreateStoryFormNotModal-fix-for-now"
          trigger={
          <Button primary fluid>Create A Short Story</Button>
        }> */}

        {/* <Modal.Header> */}
        <Header as='h1' textAlign='center'>
          Create a Short Story
        </Header>
        {/* </Modal.Header> */}

        <Form onSubmit={this.handleCreateStoryFormSubmit} className="CreateStoryFormModal-red">

          {/* <Modal.Content scrolling> */}

          {/* <h1>user_id: {this.props.user_id}</h1> */}

          <CreateStoryFormSelectGenre
            plots={this.props.plots}
            handleGenreChange={this.props.handleGenreChange}
          />

          <CreateStoryFormCreateCharacters
            handleCharacterNameChange={this.props.handleCharacterNameChange}
            handleCharacterGenderChange={this.props.handleCharacterGenderChange}
          />

          {/* </Modal.Content> */}
          {/* everything within modal.content scrolls... */}

          {/* <Modal.Actions> */}
          <Form.Button content='Submit' type="submit" primary fluid/>
          {/* </Modal.Actions> */}

        </Form>
        {/* </Modal> */}
      </div>
    )
  }
}

export default CreateStoryFormNotModal
