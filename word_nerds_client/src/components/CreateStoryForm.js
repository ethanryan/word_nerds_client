import React, { Component } from 'react'

import { Form } from 'semantic-ui-react'

import { Grid } from 'semantic-ui-react'


class CreateStoryForm extends Component {

  constructor(props) {
    console.log('props from CreateStoryForm', props)
    super(props)
    this.state=({ //organizing this so it's not nested, but post request will be nested
    story: '',
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
    },
    genres: ['random'], //make this an array to hold all selected genres??
    //   //default genre is 'random', all others are not selected when random is selected.
  })

  this.handleCreateStoryFormSubmit = this.handleCreateStoryFormSubmit.bind(this)
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



handleHeroNameChange(event) {
  const heroName = event.target.value
  this.setState({
    hero: {
      name: heroName,
      gender: this.state.hero.gender,
    }
  })
}

handleHeroGenderChange(event) {
  const heroGender = event.target.value
  this.setState({
    hero: {
      name: this.state.hero.name,
      gender: heroGender,
    }
  })
}



handleShadowNameChange(event) {
  const shadowName = event.target.value
  this.setState({
    shadow: {
      name: shadowName, //default
      gender: '', //default
    }
  })
}

handleFriendNameChange(event) {
  const friendName = event.target.value
  this.setState({
    friend: {
      name: friendName, //default
      gender: '', //default
    }
  })
}



handleCreateStoryFormSubmit(event) {
  event.preventDefault()
  const characters = {
    hero: this.state.hero,
    shadow: this.state.shadow,
    friend: this.state.friend
  }

  // this.props.updateCharacterNames(characters) //sending this.state.characters to container as argument

  console.log('CreateStoryForm submitted: ', this.state.story)

  // this.props.handleSubmit( this.state.characters )
  this.props.handleSubmit( this.state.story, characters )

  this.setState({story: ''}) //this clears form onSubmit

  // console.log('this.state.characters.hero.name: ', this.state.characters.hero.name)
  // console.log('this.state.characters.shadow.name: ', this.state.characters.shadow.name)
  // console.log('this.state.characters.friend.name: ', this.state.characters.friend.name)
}


render() {
  // let heroName=this.state.characters.hero.name
  return(

    /////
    <div>
      <div className="CreateStoryForm-red">

        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>

              <Form onSubmit={this.handleCreateStoryFormSubmit} >
                  <h3>Create A Story</h3>
                  <Form.Group grouped >
                  <h3>Choose genre: </h3>
                  <Form.Field label='Horror' control='input' type='checkbox' />
                  <Form.Field label='Comedy' control='input' type='checkbox' />
                  <Form.Field label='Random' control='input' type='radio' />
                </Form.Group>

                <Form.Group grouped class="inline fields" >
                  <h3>Create characters: </h3>
                  <Form.Field placeholder="HERO"
                    control='input' type="text" key="heroName" width={14}
                    onChange={this.handleHeroNameChange.bind(this)} />

                    <div onChange={this.handleHeroGenderChange.bind(this)}>
                    <Form.Field label='male' value="he" control='input' type='radio' />
                    <Form.Field label='female' value="she" control='input' type='radio' />
                  </div>

                    <Form.Field placeholder="SHADOW"
                      control='input' type="text" key="shadowName" width={14}
                      onChange={this.handleShadowNameChange.bind(this)} />
                      <Form.Field label='male' control='input' type='radio' />
                      <Form.Field label='female' control='input' type='radio' />

                      <Form.Field placeholder="FRIEND"
                        control='input' type="text" key="friendName" width={14}
                        onChange={this.handleFriendNameChange.bind(this)} />
                        <Form.Field label='male' control='input' type='radio' />
                        <Form.Field label='female' control='input' type='radio' />


                        <Form.Button content='Submit' type="submit" primary/>
                        {/* <Button primary>Primary</Button> */}

                        {/* <Form.Field color="green"
                        // type="button"
                        type='submit'
                        control='button'>
                        Create Story
                      </Form.Field> */}
                    </Form.Group>
                  </Form>


                </Grid.Column>


                <Grid.Column width={10}>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  You chose: {this.state.genres}
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  The hero's name is: {this.state.hero.name}
                  <br></br>
                  The hero's gender is: {this.state.hero.gender}
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  The shadow's name is: {this.state.shadow.name}
                  <br></br>
                  The shadow's gender is: {this.state.shadow.gender}
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  The friend's name is: {this.state.friend.name}
                  <br></br>
                  The friend's gender is: {this.state.friend.gender}

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>


          {/* <div className="CreateStoryForm-red">
          <h1>Create A Story</h1>
          <form onSubmit={this.handleCreateStoryFormSubmit} >

          <p>Choose genre: (select buttons here)</p>

          <label>
          Horror:
          <input
          name="horror" type="checkbox"
          //checked={this.state.genres}
          onChange={this.handleGenreInputChange}
        />
      </label>
      <br />

      <label>
      Comedy:
      <input
      name="comedy" type="checkbox"
      //value={this.state.genres}
      onChange={this.handleGenreInputChange}
    />
  </label>
  <br />

  <label>
  Random:
  <input
  value="random" type="radio" //radio instead of checkbox; random selected means all other genres are unselected.
  //value={this.state.genres}
  onChange={this.handleGenreInputChange}
/>
</label>

<p>Create characters: (input name fields and gender radio buttons here)</p>

Hero:
<input
type="text"
key="heroName"
placeholder="HERO"
// value={this.state.characters.hero.name}
onChange={this.handleHeroNameChange.bind(this)}
/>

Male:
<input value={this.state.characters.hero.gender} type="radio" onChange={this.handleCharacterInputChange.bind(this)} />

Female:
<input value={this.state.characters.hero.gender} type="radio" onChange={this.handleCharacterInputChange.bind(this)} />

<br/>
<br/>

Shadow:
<input
type="text"
name="shadowName"
placeholder="SHADOW"
// value={this.state.characters.shadow.name}
onChange={this.handleShadowInputChange.bind(this)}
/>

Male:
<input value={this.state.characters.shadow.gender} type="radio" onChange={this.handleCharacterInputChange.bind(this)} />

Female:
<input value={this.state.characters.shadow.gender} type="radio" onChange={this.handleCharacterInputChange.bind(this)} />

<br/>
<br/>

Friend:
<input
type="text" name="friendName" placeholder="FRIEND"
// value={this.state.characters.friend.name}
onChange={this.handleFriendInputChange.bind(this)}
/>

Male:
<input value={this.state.characters.friend.gender} type="radio" onChange={this.handleCharacterInputChange.bind(this)} />

Female:
<input value={this.state.characters.friend.gender} type="radio" onChange={this.handleCharacterInputChange.bind(this)} />

<br></br>
<br></br>
The hero's name is: {this.state.characters.hero.name}
<br></br>
The shadow's name is: {this.state.characters.shadow.name}
<br></br>
The friend's name is: {this.state.characters.friend.name}

<br></br>
<br></br>

<input
type="submit" //this is the submit button
value="Create Story" //submit button text
/>

</form>
</div> */}
</div>
)
}
}

export default CreateStoryForm
