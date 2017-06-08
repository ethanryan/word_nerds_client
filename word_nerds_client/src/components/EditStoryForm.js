import React, { Component } from 'react'

class EditStoryForm extends Component {

  constructor(props) {
    console.log('props from EditStoryForm', props);
    super(props) //inheritance

    this.state= {
      input: ''
    }
    this.handleEditStoryFormSubmit = this.handleEditStoryFormSubmit.bind(this)
    this.handleStoryChange = this.handleStoryChange.bind(this)
  } //end of constructor

  componentWillReceiveProps(props) { //need this lifecycle method to edit text in textarea
    this.setState({input: props.story})
  }

  // editTheStory() { //passing in storyID as argument, this.props.storyID, but broke page
  //   if (this.props.editing === true) {
  //     return (
  //       <span>
  //         <p>Edit this story:</p>
  //       </span>
  //     )
  //   } else {
  //     return (
  //       <span>
  //         <p>Edit your story and save when you're done.</p>
  //       </span>
  //     )
  //   }
  // } //end of editTheStory()

  // handleStoryChange(event) {
  //   const story = event.target.value
  //   this.setState({
  //     story: story
  //   })
  // }

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

  // handleCreateStoryFormSubmit(event) {
  //   event.preventDefault()
  //   console.log('CreateStoryForm submitted: ', this.state.story)
  //   this.props.handleSubmit( this.state.story )
  //   this.setState({story: ''}) //why isn't this clearing form??
  // }

  handleEditStoryFormSubmit(event) {
    event.preventDefault()
    console.log('EditStoryForm submitted: this.props.story: ', this.props.story)
    console.log('EditStoryForm submitted: this.state:input: ', this.state.input)
    //this.props.handleSubmit( this.state.input )
    // this.props.handleUpdateStory( this.props.story )
    this.props.handleUpdateStory( this.state.input )
    this.setState({input: ''}) //this should clear the form
  }

  render() {
    console.log('render is called in EditStory');
    console.log('this.props.story:', this.props.story);
    return(
      <div
        className="EditStoryForm-green"
        id="EditStoryForm" >

        <h1>Edit Story</h1>
        Story to edit: {this.props.story}

        <h4>(Save, Edit, or Delete)</h4>
        <p>clicking Create Story above renders EditStory form</p>
        <p>users can add titles and edit stories before Saving (or deleting)</p>

        
        {/* { this.editTheStory.bind(this) } */}

        {/* <form onSubmit={this.handleUpdateStory(props.storyID).bind(this)}> */}
        <form onSubmit={this.handleEditStoryFormSubmit.bind(this)}>

          {/* <textarea id="translated" className="materialize-textarea" placeholder="Translated text appears here!" value={props.translatedContent} /> */}


          <textarea
            id="story-to-edit"
            rows="4" cols="50"
            type="textarea"
            // value={this.state.content}
            // value={props.translatedContent}
            value={this.state.input}
            placeholder="this is where the story content goes for editing"
            // onChange={this.props.handleChange}
            // onChange={this.props.handleChange}
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
