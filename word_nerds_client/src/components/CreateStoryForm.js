import React, { Component } from 'react'

class CreateStoryForm extends Component {

  constructor(props) {
    console.log('props from CreateStoryForm', props);
    super() //inheritance
    this.state=({
      input: '',
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
      genres: ['random'], //make this an array to hold all selected genres??
      //default genre is 'random', all others are not selected when random is selected.
    })
  }

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

  handleSubmit(event) {
    console.log('CreateStoryForm submitted: ', this.state.input);
    event.preventDefault()
    this.props.onSubmit( this.state.input )
    this.setState({input: ''})
  }

  render() {
    return(
      <div>
        <h1>Create A Story</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
            value={this.state.characters.hero.name}
            onChange={this.handleCharacterInputChange.bind(this)}
          />
          Male:
          <input
            value={this.state.characters.hero.gender}
            type="radio"
          />
          Female:
          <input
            value={this.state.characters.hero.gender}
            type="radio"
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
          />
          Female:
          <input
            value={this.state.characters.shadow.gender}
            type="radio"
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
          />
          Female:
          <input
            value={this.state.characters.friend.gender}
            type="radio"
          />
          <br/>
          <br/>


          <br/>
          <br/>
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
