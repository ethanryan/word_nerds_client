import React, { Component } from 'react'

class CreateStoryForm extends Component {

  constructor(props) {
    // console.log('props from CreateStoryForm', props)
    super(props) //inheritance
    this.state=({
      story: '',
      characters: {
        hero: {
          name: 'HERO', //default
          gender: '', //default ...null gives a warning.
        },
        shadow: {
          name: 'SHADOW', //default
          gender: '', //default
        },
        friend: {
          name: 'FRIEND', //default
          gender: '', //default
        }
      },
      genres: ['random'], //make this an array to hold all selected genres??
    //   //default genre is 'random', all others are not selected when random is selected.
     })

     this.handleCreateStoryFormSubmit = this.handleCreateStoryFormSubmit.bind(this)
     this.handleStoryChange = this.handleStoryChange.bind(this)
  } //end of constructor

  //via Dan Abramov: https://codepen.io/gaearon/pen/wgedvV?editors=0010
  handleGenreInputChange(event) {
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;
    // this.setState({
    //   [name]: value ////redo this whole function
    // });
  }

  handleCharacterInputChange(event) {
    //code here
  }


  handleStoryChange(event) {
    const story = event.target.value
    this.setState({
      story: story
    })
  }

  handleCreateStoryFormSubmit(event) {
    event.preventDefault()
    console.log('CreateStoryForm submitted: ', this.state.story)
    this.props.handleSubmit( this.state.story )
    this.setState({story: ''}) //this clears form onSubmit
  }


  render() {
    return(
      <div className="CreateStoryForm-red">
        <h1>Create A Story</h1>
        <form onSubmit={this.handleCreateStoryFormSubmit}>
          <p>Choose genre: (select buttons here)</p>

          <label>
            Horror:
            <input
              name="horror"
              type="checkbox"
              //checked={this.state.genres}
              onChange={this.handleGenreInputChange}
            />
          </label>
          <br />

          <label>
            Comedy:
            <input
              name="comedy"
              type="checkbox"
              //value={this.state.genres}
              onChange={this.handleGenreInputChange}
            />
          </label>
          <br />

          <label>
            Random:
            <input
              value="random"
              type="radio" //radio instead of checkbox; random selected means all other genres are unselected.
              //value={this.state.genres}
              onChange={this.handleGenreInputChange}
            />
          </label>

          <p>Create characters: (input name fields and gender radio buttons here)</p>

          Hero:
          <input
            type="text"
            value={this.state.characters.hero.name}
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          Male:
          <input
            value={this.state.characters.hero.gender}
            type="radio"
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          Female:
          <input
            value={this.state.characters.hero.gender}
            type="radio"
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          <br/>
          <br/>

          Shadow:
          <input
            type="text"
            value={this.state.characters.shadow.name}
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          Male:
          <input
            value={this.state.characters.shadow.gender}
            type="radio"
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          Female:
          <input
            value={this.state.characters.shadow.gender}
            type="radio"
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          <br/>
          <br/>

          Friend:
          <input
            type="text"
            value={this.state.characters.friend.name}
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          Male:
          <input
            value={this.state.characters.friend.gender}
            type="radio"
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          Female:
          <input
            value={this.state.characters.friend.gender}
            type="radio"
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          <br></br>
          <br></br>

          Test Story, just a line of text for now:
          <input
            type="text"
            value={this.state.story} //this clears form but i get errors
            onChange={this.handleStoryChange}
            //above should be on form, form should control it's changes, and send data to container
          />


          <br></br>
          <br></br>
          {/* <a href="#EditStoryForm" onClick={() => {props.renderEditForm(story.id)}}>Edit</a> */}

          {/* <a href="#EditStoryForm" type="submit" onClick={() => {this.props.renderEditForm(this.state.story)}}>Create Story</a> */}

          {/* <button
            href="#EditStoryForm"
            type="submit" //this is the submit button
            value="Create Story" //submit button text
            // onClick={this.handlePollutionClick}

            // onClick={() => {props.renderEditForm(story.id)}}
            >
              Create Story
          </button> */}

          <input
            type="submit" //this is the submit button
            value="Create Story" //submit button text
            // onClick={() => {this.props.renderEditForm(this.props.storyID)}}
          />
        </form>
      </div>
    )
  }
}

export default CreateStoryForm
