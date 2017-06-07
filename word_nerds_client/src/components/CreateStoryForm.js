import React, { Component } from 'react'

class CreateStoryForm extends Component {

  constructor(props) {
    console.log('props from CreateStoryForm', props);
    super(props) //inheritance
    this.state=({
      story: '',
      characters: {
        hero: {
          name: 'HERO', //default
          gender: '',
        },
        shadow: {
          name: 'SHADOW', //default
          gender: '',
        },
        friend: {
          name: 'FRIEND', //default
          gender: '',
        }
      },
    //   genres: ['random'], //make this an array to hold all selected genres??
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

  // handleTestChange(event) { //this is testing creating new stories and adding them to database
  //   //console.log('this: ', this);
  //   //console.log('event: ', event);
  //   this.setState({
  //     input: event.target.value
  //   })
  // }

  handleStoryChange(event) {
    const story = event.target.value
    this.setState({
      story: story
    })
  }

  handleCreateStoryFormSubmit(event) {
    event.preventDefault()
    console.log('CreateStoryForm submitted: ', this.state.story);
    this.props.handleSubmit( this.state.story )
    this.setState({story: ''})
  }



  render() {
    return(
      <div className="CreateStoryForm-red">
        <h1>Create A Story</h1>
        {/* <form onSubmit={props.handleCreateStory}> */}
        <form onSubmit={this.handleCreateStoryFormSubmit}>
          {/* moving handleSubmit to Container, and passing it down as props to form */}
        {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
          <p>Choose genre: (select buttons here)</p>

          <label>
            Horror:
            <input
              name="horror"
              type="checkbox"
              //checked={this.state.genres}
              //onChange={this.handleGenreInputChange}
            />
          </label>
          <br />

          <label>
            Comedy:
            <input
              name="comedy"
              type="checkbox"
              //value={this.state.genres}
              //onChange={this.handleGenreInputChange}
            />
          </label>
          <br />

          <label>
            Random:
            <input
              value="random"
              type="radio" //radio instead of checkbox; random selected means all other genres are unselected.
              //value={this.state.genres}
              //onChange={this.handleGenreInputChange}
            />
          </label>

          <p>Create characters: (input name fields and gender radio buttons here)</p>

          Hero:
          <input
            type="text"
            value={this.props.characters.hero.name}
            onChange={ (event) => this.handleCharacterInputChange(event, 'hero')}
          />
          Male:
          <input
            value={this.props.characters.hero.gender}
            type="radio"
          />
          Female:
          <input
            value={this.props.characters.hero.gender}
            type="radio"
          />
          <br/>
          <br/>

          Shadow:
          <input
            type="text"
            value={this.props.characters.shadow.name}
            onChange={this.handleCharacterInputChange.bind(this)}
          />
          Male:
          <input
            value={this.props.characters.shadow.gender}
            type="radio"
          />
          Female:
          <input
            value={this.props.characters.shadow.gender}
            type="radio"
          />
          <br/>
          <br/>

          Friend:
          <input
            type="text"
            value={this.props.characters.friend.name}
            onChange={this.handleCharacterInputChange.bind(this)}
          />
          Male:
          <input
            value={this.props.characters.friend.gender}
            type="radio"
            onChange={this.handleCharacterInputChange.bind(this)}
          />
          Female:
          <input
            value={this.props.characters.friend.gender}
            type="radio"
            onChange={this.handleCharacterInputChange.bind(this)}
          />

          <br></br>
          <br></br>

          Test Story, just a line of text for now:
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleStoryChange}

            // onChange={this.handleTestChange.bind(this)}
          />


          <br></br>
          <br></br>
          <input
            type="submit" //this is the submit button
            value="Create Story" //submit button text
          />
        </form>
      </div>
    )
  }
}

export default CreateStoryForm
