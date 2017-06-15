import React, { Component } from 'react'

import { Form } from 'semantic-ui-react'

class EditStoryForm extends Component {

  constructor(props) {
    console.log('props from EditStoryForm', props)
    super(props) //inheritance

    this.state = {
      input: '',
      title: ''
    }
    // this.handleEditStoryFormSubmit = this.handleEditStoryFormSubmit.bind(this)
    this.handleStoryChange = this.handleStoryChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  } //end of constructor

  componentWillReceiveProps(props) { //need this lifecycle method to edit text in textarea
    this.setState({
      input: props.story,
      title: props.title
    })
  }

  handleTitleChange(event) {
    const title = event.target.value
    this.setState({
      title: title
    })
  }

  handleStoryChange(event) {
    console.log('EditStoryForm event: ', event)
    const story = event.target.value
    this.setState({
      input: story //input instead of story for key
    })
  }


  handleEditStoryFormSubmit(event) {
    event.preventDefault()
    console.log('EditStoryForm submitted: this.props.story: ', this.props.story)
    this.props.handleUpdateStory( this.state.input ) ///may need to change
    this.props.handleUpdateTitle( this.state.title ) ///may need to change
    /////do i need a whole new function for handleUpdateTitle???
    this.setState({input: ''}) //this should clear the form
  }

  render() {
    console.log('render is called in EditStory');
    return(


      <div>
        <div className="EditStoryForm-green">

          <Form id="EditStoryForm" onSubmit={this.handleEditStoryFormSubmit.bind(this)}>
            <h3>Edit Story</h3>
            <h1>Edit Story</h1>
            Title: <span className="EditStoryText-blue"> {this.props.title}</span>
            <br></br>
            <br></br>
            Story ID: <span className="EditStoryText-blue"> {this.props.storyID}</span>
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
              placeholder="this is where the story content goes for editing"
              control='textarea' rows='30'
              width={15}
              value={this.state.input} //value of textarea is state.input, coming from componentWillReceiveProps
              // value={this.props.story.split('-----').map((paragraph, key) => {
              //             return (
              //             <span key={key}>
              //               {paragraph}
              //               <br/><br/>
              //             </span>
              //           )
              //           })} //value of textarea is state.input, coming from componentWillReceiveProps
              onChange={this.handleStoryChange}
            />

            <Form.Button content='Save Story' type="submit" primary/>

          </Form>
        </div>

      </div>
    )
  }
}

export default EditStoryForm
