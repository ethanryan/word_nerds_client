import React, { Component } from 'react'

class CreateStoryForm extends Component {

  constructor(props) {
    console.log('props from CreateStoryForm', props)
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
     this.replaceAll = this.replaceAll.bind(this)
  } //end of constructor

  componentWillReceiveProps(props) { //need this lifecycle method to edit text in textarea
    this.setState({
      story: props.story
      // title: props.title
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
    //abstract each character, so just one function
    // const shadowName = event.target.value
    //
    // this.setState({
    //    [event.target.name]: event.target.value })
  }



/////////not working....., setState line...
  // changeHeroName = (event) => {
  //   const { characters } = this.state;
  //   const newCharacterName = {
  //     ...characters.hero,
  //     name: event.target.value
  //   };
  //   this.setState({ characters: newCharacterName });
  // }



  /////simple way, from here: https://stackoverflow.com/questions/35965275/how-do-i-edit-multiple-input-controlled-components-in-react


  // changeFirstName = (event) => {
  //   const { contact } = this.state;
  //   const newContact = {
  //     ...contact,
  //     firstName: event.taret.value
  //   };
  //   this.setState({ contact: newContact });
  // }
  // changeLastName = (event) => {
  //   const { contact } = this.state;
  //   const newContact = {
  //     ...contact,
  //     lastName: event.taret.value
  //   };
  //   this.setState({ contact: newContact });
  // }
  // changePhone = (event) => {
  //   const { contact } = this.state;
  //   const newContact = {
  //     ...contact,
  //     phone: event.taret.value
  //   };
  //   this.setState({ contact: newContact });
  // }
  //
  // render() {
  //   return (
  //     <div>
  //       <input type="text" onChange={this.changeFirstName} value={this.state.contact.firstName}/>
  //       <input type="text" onChange={this.changeLastName} value={this.state.contact.lastName}/>
  //       <input type="text" onChange={this.changePhone} value={this.state.contact.phone}/>
  //     </div>
  //   );
  // }


/////////////////////,,,,,,,,,,,,,,,,,,,
  // handleChangeFor = (characterName) = (event) => {
  //   const { characters } = this.state
  //   const newCharacterName = {
  //       ...characters,
  //       [characterName]: event.target.value
  //     }
  //     this.setState({ characters: newCharacterName })
  //   }
  ////keep working on thiss..........<<<<<<<--------------------


//   handleChangeFor = (propertyName) = (event) => {
//     const { contact } = this.state;
//     const newContact = {
//       ...contact,
//       [propertyName]: event.taret.value
//     };
//     this.setState({ contact: newContact });
//   }
//
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.handleChangeFor('firstName')} value={this.state.contact.firstName}/>
//         <input type="text" onChange={this.handleChangeFor('lastName')} value={this.state.contact.lastName}/>
//         <input type="text" onChange={this.handleChangeFor('phone')} value={this.state.contact.lastName}/>
//       </div>
//     );
//   }
// }


  handleHeroInputChange(event) {
    const heroName = event.target.value
    const currentState = this.state
    this.setState({
      characters: {
        hero: {
          name: heroName, //default
          gender: '', //default ...null gives a warning.
        },
        shadow: {
          name: currentState.characters.shadow.name, //default
          gender: '', //default
        },
        friend: {
          name: currentState.characters.friend.name, //default
          gender: '', //default
        }
      },
    })
  }



    handleShadowInputChange(event) {
      const shadowName = event.target.value
      const currentState = this.state
      this.setState({
        characters: {
          hero: {
            name: currentState.characters.hero.name, //default
            gender: '', //default ...null gives a warning.
          },
          shadow: {
            name: shadowName, //default
            gender: '', //default
          },
          friend: {
            name: currentState.characters.friend.name, //default
            gender: '', //default
          }
        },
      })
    }

    handleFriendInputChange(event) {
      const friendName = event.target.value
      const currentState = this.state
      this.setState({
        characters: {
          hero: {
            name: currentState.characters.hero.name, //default
            gender: '', //default ...null gives a warning.
          },
          shadow: {
            name: currentState.characters.shadow.name, //default
            gender: '', //default
          },
          friend: {
            name: friendName, //default
            gender: '', //default
          }
        },
      })
    }


        // handleShadowInputChange(event) {
        //   const shadowName = event.target.value
        //   this.setState({
        //     characters: {
        //
        //       shadow: {
        //         name: shadowName, //default
        //         gender: '', //default
        //       },
        //
        //     },
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
    console.log('CreateStoryForm submitted: ', this.state.story)

    //below line not working, cuz no story exists yet to replace words in
    this.replaceAll(this.state.story, "HERO", this.state.characters.hero.name )

    this.props.handleSubmit( this.state.story, this.state.characters )

    // this.props.handleSubmit( this.state.story )
    this.setState({story: ''}) //this clears form onSubmit

    console.log('this.state.characters.hero.name: ', this.state.characters.hero.name)

  }

  replaceAll(string, find, replace) {
    // return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    return string.replace(new RegExp(find, 'g'), replace);
  }



  render() {
    // let heroName=this.state.characters.hero.name
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


          {/* <input key="email_1" type="text" onChange={ (e) => { this.setState({ email_1: e.currentTarget.value }); } } /> */}


          Hero:
          <input
            type="text"
            key="heroName"
            value={this.state.characters.hero.name}
            onChange={this.handleHeroInputChange.bind(this)}

            // hero: {
            //   name: 'HERO', //default
            //   gender: '', //default ...null gives a warning.
            // },
            // onChange={ (e) => {   this.setState({ this.state.characters.hero.name = e.currentTarget.value }) } }
            // onChange={ (e) => this.setState({ characters[hero]name: e.target.value }) }
            // onChange={ (e) => { debugger } }
            // onChange={this.handleCharacterInputChange.bind(this)}
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
            name="shadowName"
            value={this.state.characters.shadow.name}
            onChange={this.handleShadowInputChange.bind(this)}
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
            name="friendName"
            value={this.state.characters.friend.name}
            onChange={this.handleFriendInputChange.bind(this)}
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


          <br></br>
          <br></br>
          The hero's name is: {this.state.characters.hero.name}
          <br></br>
          The shadow's name is: {this.state.characters.shadow.name}
          <br></br>
          The friend's name is: {this.state.characters.friend.name}

          {/* Test Story, just a line of text for now:
          <input
            type="text"
            value={this.state.story} //this clears form but i get errors
            onChange={this.handleStoryChange}
            //above should be on form, form should control it's changes, and send data to container
          /> */}


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

          {/* <a
            type="submit"
            href="#EditStoryForm"
            onClick={() => {this.props.renderEditForm(1)}}>
            Create Story
          </a> */}
        </form>
      </div>
    )
  }
}

export default CreateStoryForm
