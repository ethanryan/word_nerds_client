import React, { Component } from 'react'

class EditStoryForm extends Component {

  constructor(props) {
    console.log('props from EditStoryForm', props);
    super(props) //inheritance
    this.state=({
      input: '',
      // content: '',
      // title: 'title here', //default title for stories
      // storyID: 0, //default is zero
      // editing: false //default is false
    })
  }

  editTheStory() { //passing in storyID as argument, this.props.storyID, but broke page
    if (this.props.editing === true) {
      return (
        <span>
          <p>Edit this story:</p>
        </span>
      )
    } else {
      return (
        <span>
          <p>Edit your story and save when you're done.</p>
        </span>
      )
    }
  } //end of editTheStory()


  handleStoryChange(event) { //same as in CreateStoryForm
    console.log('EditStoryForm event: ', event)
    const story = event.target.value
    ///commenting below out for now::::::
    // this.setState({
    //   input: story //input instead of story for key
    // })
  }

  // handleCreateStoryFormSubmit(event) {
  //   event.preventDefault()
  //   console.log('CreateStoryForm submitted: ', this.state.story)
  //   this.props.handleSubmit( this.state.story )
  //   this.setState({story: ''}) //why isn't this clearing form??
  // }

  handleEditStoryFormSubmit(event) {
    event.preventDefault()
    console.log('EditStoryForm submitted: ', this.props.story)
    // this.props.handleSubmit( this.state.story )
    this.props.handleUpdateStory( this.props.story )
    this.setState({input: ''}) //this should clear the form
  }

  render() {
    return(
      <div
        className="EditStoryForm-green"
        id="EditStoryForm">

        <h1>Edit Story</h1>
        Story to edit: {this.props.story}

        <h4>(Save, Edit, or Delete)</h4>
        <p>clicking Create Story above renders EditStory form</p>
        <p>users can add titles and edit stories before Saving (or deleting)</p>

        {/* { this.editTheStory() } */}
        { this.editTheStory.bind(this) }
        {/* <form onSubmit={this.handleUpdateStory(props.storyID).bind(this)}> */}
        <form onSubmit={this.handleEditStoryFormSubmit.bind(this)}>

          {/* <textarea id="translated" className="materialize-textarea" placeholder="Translated text appears here!" value={props.translatedContent} /> */}


          <textarea
            id="story-to-edit"
            rows="4" cols="50"
            type="textarea"
            // value={this.state.content}
            // value={props.translatedContent}
            value={this.props.story}
            placeholder="this is where the story content goes for editing"
            onChange={this.handleStoryChange}
            // onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Edit Story"/>
        </form>
      </div>
    )
  }
}

export default EditStoryForm
