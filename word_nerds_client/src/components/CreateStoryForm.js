import React, { Component } from 'react'
import { Form, Grid } from 'semantic-ui-react'

class CreateStoryForm extends Component {

  constructor(props) {
    console.log('props from CreateStoryForm', props)
    super(props)
    this.state=({ //organizing this so it's not nested, but post request will be nested
    story: '',
    hero: {
      name: 'HERO',
      gender: '',
    },
    shadow: {
      name: 'SHADOW',
      gender: '',
    },
    friend: {
      name: 'FRIEND',
      gender: '',
    },
    lover: {
      name: 'LOVER',
      gender: '',
    },
    mentor: {
      name: 'MENTOR',
      gender: '',
    },
    trickster: {
      name: 'TRICKSTER',
      gender: '',
    },
    genres: ['random'],
    nerd: <span role="img" aria-label="emoji">🤓</span>
  })
  this.handleCreateStoryFormSubmit = this.handleCreateStoryFormSubmit.bind(this)
} //end of constructor

// componentWillReceiveProps(props) { //need this lifecycle method to edit text in textarea
//   this.setState({
//     story: props.story
//   })
// }

handleCharacterInputChange(event) {
  //abstract each character, so just one function
}


handleHeroNameChange(event) {
  const heroName = event.target.value
  this.setState({
    hero: {
      name: heroName,
      gender: this.state.hero.gender,
    },
    nerd: <span role="img" aria-label="emoji">😄</span>
  })
}

handleHeroGenderChange(event) {
  const heroGender = event.target.value
  this.setState({
    hero: {
      name: this.state.hero.name,
      gender: heroGender,
    },
    nerd: <span role="img" aria-label="emoji">😄</span>
  })
}


handleShadowNameChange(event) {
  const shadowName = event.target.value
  this.setState({
    shadow: {
      name: shadowName,
      gender: this.state.shadow.gender,
    },
    nerd: <span role="img" aria-label="emoji">😨</span>
  })
}

handleShadowGenderChange(event) {
  const shadowGender = event.target.value
  this.setState({
    shadow: {
      name: this.state.shadow.name,
      gender: shadowGender,
    },
    nerd: <span role="img" aria-label="emoji">😨</span>
  })
}

handleFriendNameChange(event) {
  const friendName = event.target.value
  this.setState({
    friend: {
      name: friendName,
      gender: this.state.friend.gender,
    },
    nerd: <span role="img" aria-label="emoji">😎</span>
  })
}

handleFriendGenderChange(event) {
  const friendGender = event.target.value
  this.setState({
    friend: {
      name: this.state.friend.name,
      gender: friendGender,
    },
    nerd: <span role="img" aria-label="emoji">😎</span>
  })
}

handleLoverNameChange(event) {
  const loverName = event.target.value
  this.setState({
    lover: {
      name: loverName,
      gender: this.state.lover.gender,
    },
    nerd: <span role="img" aria-label="emoji">😘</span>
  })
}

handleLoverGenderChange(event) {
  const loverGender = event.target.value
  this.setState({
    lover: {
      name: this.state.lover.name,
      gender: loverGender,
    },
    nerd: <span role="img" aria-label="emoji">😘</span>
  })
}

handleMentorNameChange(event) {
  const mentorName = event.target.value
  this.setState({
    mentor: {
      name: mentorName,
      gender: this.state.mentor.gender,
    },
    nerd: <span role="img" aria-label="emoji">🤓</span>
  })
}

handleMentorGenderChange(event) {
  const mentorGender = event.target.value
  this.setState({
    mentor: {
      name: this.state.mentor.name,
      gender: mentorGender,
    },
    nerd: <span role="img" aria-label="emoji">🤓</span>
  })
}

handleTricksterNameChange(event) {
  const tricksterName = event.target.value
  this.setState({
    trickster: {
      name: tricksterName,
      gender: this.state.trickster.gender,
    },
    nerd: <span role="img" aria-label="emoji">trickster emoji</span>
  })
}

handleTricksterGenderChange(event) {
  const tricksterGender = event.target.value
  this.setState({
    trickster: {
      name: this.state.trickster.name,
      gender: tricksterGender,
    },
    nerd: <span role="img" aria-label="emoji">trickster emoji</span>
  })
}


handleCreateStoryFormSubmit(event) {
  event.preventDefault()
  const characters = {
    hero: this.state.hero,
    shadow: this.state.shadow,
    friend: this.state.friend,
    lover: this.state.lover,
    mentor: this.state.mentor,
    trickster: this.state.trickster
  }
  console.log('CreateStoryForm submitted: ', this.state.story)
  this.props.handleSubmit( this.state.story, characters )
  this.setState({story: ''}) //this clears form onSubmit
}


render() {

  return(
    <div>
      <div className="CreateStoryForm-red">

        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>

              <h3>           Create A Story </h3>
              <h3>      Characters Names</h3>
              <Form onSubmit={this.handleCreateStoryFormSubmit} >
                  {/* <Form.Group grouped >
                  <h3>Choose genre: </h3>
                  <Form.Field label='Horror' control='input' type='checkbox' />
                  <Form.Field label='Comedy' control='input' type='checkbox' />
                  <Form.Field label='Random' control='input' type='radio' />
                </Form.Group> */}

                <Form.Group grouped class="inline fields" >

                  <br></br>

                  <Form.Field placeholder="HERO"
                    control='input' type="text" key="heroName" width={14}
                    onChange={this.handleHeroNameChange.bind(this)} />

                    <br></br>

                    <Form.Field placeholder="SHADOW"
                      control='input' type="text" key="shadowName" width={14}
                      onChange={this.handleShadowNameChange.bind(this)} />

                      <br></br>

                      <Form.Field placeholder="FRIEND"
                        control='input' type="text" key="friendName" width={14}
                        onChange={this.handleFriendNameChange.bind(this)} />

                        <br></br>

                      <Form.Field placeholder="LOVER"
                        control='input' type="text" key="loverName" width={14}
                        onChange={this.handleLoverNameChange.bind(this)} />

                        <br></br>

                      <Form.Field placeholder="MENTOR"
                        control='input' type="text" key="mentorName" width={14}
                        onChange={this.handleMentorNameChange.bind(this)} />

                        <br></br>
                        <br></br>

                        <Form.Field placeholder="TRICKSTER"
                          control='input' type="text" key="tricksterName" width={14}
                          onChange={this.handleTricksterNameChange.bind(this)} />

                          <br></br>
                          <br></br>

                        <Form.Button content='Submit' type="submit" primary/>

                    </Form.Group>
                  </Form>

                </Grid.Column>

                <Grid.Column width={3}>
                  <h3>    <span role="img" aria-label="emoji">♂️   ♀️</span> </h3>
                  <h3>Genders </h3>
                  <br></br>

                  <div onChange={this.handleHeroGenderChange.bind(this)}>
                  <Form.Field label='male' value="male" control='input' type='radio' />
                  <Form.Field label='female' value="female" control='input' type='radio' />
                  </div>

                  <br></br>
                  <br></br>

                  <div onChange={this.handleShadowGenderChange.bind(this)}>
                  <Form.Field label='male' value="male" control='input' type='radio' />
                  <Form.Field label='female' value="female" control='input' type='radio' />
                  </div>

                  <br></br>
                  <br></br>

                  <div onChange={this.handleFriendGenderChange.bind(this)}>
                  <Form.Field label='male' value="male" control='input' type='radio' />
                  <Form.Field label='female' value="female" control='input' type='radio' />
                </div>

                <br></br>
                <br></br>

                <div onChange={this.handleLoverGenderChange.bind(this)}>
                  <Form.Field label='male' value="male" control='input' type='radio' />
                  <Form.Field label='female' value="female" control='input' type='radio' />
              </div>

              <br></br>
              <br></br>

              <div onChange={this.handleMentorGenderChange.bind(this)}>
                <Form.Field label='male' value="male" control='input' type='radio' />
                <Form.Field label='female' value="female" control='input' type='radio' />
            </div>

            <br></br>
            <br></br>

            <div onChange={this.handleTricksterGenderChange.bind(this)}>
              <Form.Field label='male' value="male" control='input' type='radio' />
              <Form.Field label='female' value="female" control='input' type='radio' />
          </div>


                </Grid.Column>


                <Grid.Column width={7}>
                  <h3>            <span role="img" aria-label="emoji"> 📚 {this.state.nerd} 📚 </span></h3>
                  <h3>           Summary</h3>
                  <br></br>

                  {/* You chose: {this.state.genres}
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br> */}


                  The hero's name is: {this.state.hero.name}
                  <br></br>
                  The hero's gender is: {this.state.hero.gender}
                  <br></br>
                  <br></br>
                  <br></br>

                  The shadow's name is: {this.state.shadow.name}
                  <br></br>
                  The shadow's gender is: {this.state.shadow.gender}
                  <br></br>
                  <br></br>
                  <br></br>

                  The friend's name is: {this.state.friend.name}
                  <br></br>
                  The friend's gender is: {this.state.friend.gender}
                  <br></br>
                  <br></br>
                  <br></br>

                  The lover's name is: {this.state.lover.name}
                  <br></br>
                  The lover's gender is: {this.state.lover.gender}
                  <br></br>
                  <br></br>
                  <br></br>

                  The mentor's name is: {this.state.mentor.name}
                  <br></br>
                  The mentor's gender is: {this.state.mentor.gender}
                  <br></br>
                  <br></br>

                  The trickster's name is: {this.state.trickster.name}
                  <br></br>
                  The trickster's gender is: {this.state.trickster.gender}
                  <br></br>
                  <br></br>

                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

</div>
)
}
}

export default CreateStoryForm
