import React, { Component } from 'react'

class EditStoryForm extends Component {

  constructor(props) {
    // console.log('props from EditStoryForm', props)
    super(props) //inheritance

    this.state= {
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
    //same as in CreateStoryForm
    console.log('EditStoryForm event: ', event)
    const story = event.target.value
    console.log('story from handleStoryChange: ', story);
    ///commenting below out for now::::::
    this.setState({
      input: story //input instead of story for key
      //input: event.target.value //input instead of story for key
    })
  }


  handleEditStoryFormSubmit(event) {
    event.preventDefault()
    console.log('EditStoryForm submitted: this.props.story: ', this.props.story)
    console.log('EditStoryForm submitted: this.state.input: ', this.state.input)
    //this.props.handleSubmit( this.state.input )
    // this.props.handleUpdateStory( this.props.story )

    // this.props.handleUpdateStory( this.state.input )
    // this.props.handleUpdateStory( this.state.input ) ///may need to change
    this.props.handleUpdateStory( this.state.input ) ///may need to change

    // this.props.handleUpdateFormSubmit( this.state.input ) //state.input is getting story from componentWillReceiveProps
    // this.props.handleUpdateFormSubmit( this.props.storyID ) //passing storyID as a prop
    this.setState({input: ''}) //this should clear the form
  }

  render() {
    console.log('render is called in EditStory');
    return(
      <div
        className="EditStoryForm-green"
        id="EditStoryForm" >

        <h1>Edit Story</h1>
        Title: <span className="EditStoryText-blue">{this.props.title}</span>
        <br></br>
        Story to edit: <span className="EditStoryText-blue">{this.props.story}</span>

        <h4>(Save, Edit, or Delete)</h4>
        <p>clicking Create Story above renders EditStory form</p>
        <p>users can add titles and edit stories before Saving (or deleting)</p>

        <form onSubmit={this.handleEditStoryFormSubmit.bind(this)}>


          Title:
          <input
            type="text"
            placeholder="title here"
            value={this.state.title} //value of input field is state.title, coming from componentWillReceiveProps
            onChange={this.handleTitleChange}
          />

      <br></br>
      <br></br>

          Story:
          <br></br>

          <textarea
            id="story-to-edit"
            rows="4" cols="50"
            type="textarea"
            value={this.state.input} //value of textarea is state.input, coming from componentWillReceiveProps
            placeholder="this is where the story content goes for editing"
            onChange={this.handleStoryChange}
          />

          <br></br>

          <input type="submit" value="Edit Story"/>
        </form>
      </div>
    )
  }
}

export default EditStoryForm
