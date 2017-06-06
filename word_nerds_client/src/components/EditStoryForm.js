import React, { Component } from 'react'

class EditStoryForm extends Component {

  constructor(props) {
    //console.log('props from form', props);
    super() //inheritance
    this.state=({
      input: '',
      title: 'title here' //default title for stories
    })
  }

  handleInputChange(event) {
    //console.log('this: ', this);
    //console.log('event: ', event);
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event) {
    console.log('EditStoryForm submitted: ', this.state.input);
    event.preventDefault()
    this.props.onSubmit( this.state.input )
    this.setState({input: ''})
  }

  render() {
    return(
      <div>
        <h1>Edit Story</h1>
        <p>clicking Create Story above renders EditStory form</p>
        <p>users can add titles and edit stories before Saving (or deleting)</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Edit Story"/>
        </form>
      </div>
    )
  }
}

export default EditStoryForm
