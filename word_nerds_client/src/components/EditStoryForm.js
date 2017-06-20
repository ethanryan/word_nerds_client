import React, { Component } from 'react'

import { Form, Button } from 'semantic-ui-react'

// import Markov from './Markov'

class EditStoryForm extends Component {

  constructor(props) {
    console.log('props from EditStoryForm', props)
    super(props)

    this.state = {
      input: props.story.content,
      title: props.story.title
    }
    this.handleStoryChange = this.handleStoryChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  componentWillReceiveProps(props) { //need this lifecycle method to edit text in textarea
    this.setState({
      input: props.story.content,
      title: props.story.title
    })
  }

  handleTitleChange(event) {
    const title = event.target.value
    this.setState({
      title: title
    })
  }

  handleStoryChange(event) {
    const story = event.target.value
    this.setState({
      input: story
    })
  }

  handleEditStoryFormSubmit(event) {
    event.preventDefault()
    const updatedStory = {
      input: this.state.input,
      title: this.state.title,
      id: this.props.story.id
    }
    this.props.handleUpdateStory(updatedStory)
    this.setState({input: ''})
  }


  allCaps(str) {
    // str.toUpperCase()
    console.log('alphabet'.toUpperCase())
  }

  // allCaps = (event, { input }) => this.setState({ input: input.toUpperCase() })


  render() {

    console.log('render is called in EditStory');
    // console.log('from EditStoryForm, this.state.input: ', this.state.input);

    // debugger

    // let str = (this.state.input ? this.state.input : "whatever null stringface")

    let wordCount = (this.state.input ? this.state.input.split(' ').length : 0)
    // let wordCount = (this.state.input.split(' ').length)

    let paragraphs = (this.state.input ? this.state.input.split('-----').join('\n\n') : "paragraphs will go here")

    let genres = (this.props.story.genres ? this.props.story.genres.map((genre) => {return (genre.name) }).join(', ') : 0)

    return(

      <div>
        <div className="EditStoryForm-blue">

          <Form id="EditStoryForm" onSubmit={this.handleEditStoryFormSubmit.bind(this)}>
            <h3>Edit Story</h3>
            Title: <span className="EditStoryText-blue"> {this.state.title}</span>
            <br></br>
            <br></br>
            Story ID: <span className="EditStoryText-blue"> {this.props.story.id}</span>
            <br></br>
            <br></br>
            Word count: <span className="EditStoryText-blue"> {wordCount}</span>
            <br></br>
            <br></br>
            Genres: {genres}
            <br></br>
            <br></br>

            <Form.Field label='Title'
              placeholder="title here"
              control='input'
              width={15}
              value={this.state.title} //value of input field is state.title, coming from componentWillReceiveProps
              onChange={this.handleTitleChange}
            />


            <Form.Field label='Edit Story'
              className="EditStoryForm-linebreaks"
              placeholder="this is where the story content goes for editing"
              control='textarea' rows='15'
              width={15}
              // value={this.state.input} //value of textarea is state.input, coming from componentWillReceiveProps
              value={paragraphs}
              onChange={this.handleStoryChange}
            />

<div>
  <Button.Group floated='right'>
    <Button color='red'
      compact
      onClick={() => {this.props.handleDeleteStory(this.props.story.id)}}>Delete</Button>
    </Button.Group>
  <Button.Group>
    <Form.Button content='Save Story'
    type="submit" primary compact/>
  </Button.Group>

</div>

          </Form>
        </div>

      </div>
    )
  }
}

EditStoryForm.defaultProps = {
  story: 'story content here', //need this so props aren't null
  title: 'story title here',
  genres: 'genres here'
}

export default EditStoryForm
