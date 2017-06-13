import React, { Component } from 'react'

class EditStoryForm extends Component {

  constructor(props) {
    // console.log('props from EditStoryForm', props)
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
    // console.log('story from handleStoryChange: ', story);
    this.setState({
      input: story //input instead of story for key
    })
  }


  handleEditStoryFormSubmit(event) {
    event.preventDefault()
    console.log('EditStoryForm submitted: this.props.story: ', this.props.story)
    // console.log('EditStoryForm submitted: this.state.input: ', this.state.input)

    // this.props.handleUpdateStory( this.state.input, this.state.title ) ///may need to change
    this.props.handleUpdateStory( this.state.input ) ///may need to change
    this.props.handleUpdateTitle( this.state.title ) ///may need to change
//// **************will above line work, or break everything??????
/////do i need a whole new function for handleUpdateTitle???

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
        <br></br>
        Story ID: <span className="EditStoryText-blue">{this.props.storyID}</span>
        <br></br>
        <br></br>

        Story to edit: <span className="EditStoryText-blue">{this.props.story}</span>

        <h4>(Save, Edit, or Delete)</h4>
        <p>clicking Create Story above renders EditStory form</p>
        <p>users can add titles and edit stories before Saving (or deleting)</p>

        <form onSubmit={this.handleEditStoryFormSubmit.bind(this)}>

      <br></br>

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
          {/* {console.log('EditStoryForm this.state.input: ', this.state.input)} */}
          {console.log('EditStoryForm this.state.input.split...: ', this.state.input.split('-----').map((paragraph, key) => {return <span key={key}>{paragraph}<br/><br/></span>}))}

          <textarea
            id="story-to-edit"
            rows="20" cols="100"
            type="textarea"
            value={this.state.input} //value of textarea is state.input, coming from componentWillReceiveProps
            placeholder="this is where the story content goes for editing"
            onChange={this.handleStoryChange}
          />

          <br></br>

          <input type="submit" value="Save Story"/>
        </form>
      </div>
    )
  }
}

export default EditStoryForm
