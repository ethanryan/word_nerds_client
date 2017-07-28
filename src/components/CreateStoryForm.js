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
      nerd: ''
    },
    shadow: {
      name: 'SHADOW',
      gender: '',
      nerd: ''
    },
    friend: {
      name: 'FRIEND',
      gender: '',
      nerd: ''
    },
    lover: {
      name: 'LOVER',
      gender: '',
      nerd: ''
    },
    mentor: {
      name: 'MENTOR',
      gender: '',
      nerd: ''
    },
    trickster: {
      name: 'TRICKSTER',
      gender: '',
      nerd: ''
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
      nerd: <span role="img" aria-label="emoji">😄</span>
    },
  })
}

handleHeroGenderChange(event) {
  const heroGender = event.target.value
  this.setState({
    hero: {
      name: this.state.hero.name,
      gender: heroGender,
      nerd: this.state.hero.nerd,
    },
  })
}


handleShadowNameChange(event) {
  const shadowName = event.target.value
  this.setState({
    shadow: {
      name: shadowName,
      gender: this.state.shadow.gender,
      nerd: <span role="img" aria-label="emoji">😨</span>
      // nerd: <span role="img" aria-label="emoji">😈</span>
    },
  })
}

handleShadowGenderChange(event) {
  const shadowGender = event.target.value
  this.setState({
    shadow: {
      name: this.state.shadow.name,
      gender: shadowGender,
      nerd: this.state.shadow.nerd,
    },
  })
}

handleFriendNameChange(event) {
  const friendName = event.target.value
  this.setState({
    friend: {
      name: friendName,
      gender: this.state.friend.gender,
      nerd: <span role="img" aria-label="emoji">😎</span>
    },
  })
}

handleFriendGenderChange(event) {
  const friendGender = event.target.value
  this.setState({
    friend: {
      name: this.state.friend.name,
      gender: friendGender,
      nerd: this.state.friend.nerd,
    },
  })
}

handleLoverNameChange(event) {
  const loverName = event.target.value
  this.setState({
    lover: {
      name: loverName,
      gender: this.state.lover.gender,
      nerd: <span role="img" aria-label="emoji">😘</span>
    },
  })
}

handleLoverGenderChange(event) {
  const loverGender = event.target.value
  this.setState({
    lover: {
      name: this.state.lover.name,
      gender: loverGender,
      nerd: this.state.lover.nerd,
    },
  })
}

handleMentorNameChange(event) {
  const mentorName = event.target.value
  this.setState({
    mentor: {
      name: mentorName,
      gender: this.state.mentor.gender,
      nerd: <span role="img" aria-label="emoji">🤓</span>
    },
  })
}

handleMentorGenderChange(event) {
  const mentorGender = event.target.value
  this.setState({
    mentor: {
      name: this.state.mentor.name,
      gender: mentorGender,
      nerd: this.state.mentor.nerd,
    },
  })
}

handleTricksterNameChange(event) {
  const tricksterName = event.target.value
  this.setState({
    trickster: {
      name: tricksterName,
      gender: this.state.trickster.gender,
      nerd: <span role="img" aria-label="emoji">😜</span>
    },
  })
}

handleTricksterGenderChange(event) {
  const tricksterGender = event.target.value
  this.setState({
    trickster: {
      name: this.state.trickster.name,
      gender: tricksterGender,
      nerd: this.state.trickster.nerd,
    },
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
  this.props.handleSubmit( characters )
  this.setState({story: ''}) //this clears form onSubmit
}


render() {

  return(
    <div>

      <div className="CreateStoryForm-red">
        <Form onSubmit={this.handleCreateStoryFormSubmit} >
          <Form.Group grouped class="inline fields">

<Grid
  // celled='internally'
  >

          <Grid.Row centered>
            <Grid.Column width={5}>
              <h3>Create A Story</h3>
              <h3>
                Characters
              </h3>
            </Grid.Column>

            <Grid.Column width={1}>
              <h3>{" "}</h3>
              <h3>{" "}</h3>
            </Grid.Column>

            <Grid.Column width={3}>
              <h3>
                <span role="img" aria-label="emoji">♂️   ♀️</span>
              </h3>
              <h3>
                Genders
              </h3>
            </Grid.Column>

            <Grid.Column width={7}>
              <h3>
                <span role="img" aria-label="emoji"> 📚 {this.state.nerd} 📚 </span>
              </h3>
              <h3>
                Summary
              </h3>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={5}>
                <Form.Field placeholder="HERO" autoFocus
                  control="input" type="text" key="heroName" width={16}
                  onChange={this.handleHeroNameChange.bind(this)} />
            </Grid.Column>

            <Grid.Column width={1}>
              {" "}
              {" "}
              <span role="img" aria-label="emoji">{(this.state.hero.name !== 'HERO') ? this.state.hero.nerd : null}</span>
            </Grid.Column>

            <Grid.Column width={3}>
                <div onChange={this.handleHeroGenderChange.bind(this)}>
                <Form.Field label="male" value="male" control="input" type="radio" name="alone1" />
                <Form.Field label="female" value="female" control="input" type="radio" name="alone1" />
                </div>
            </Grid.Column>

            <Grid.Column width={7}>
              The hero's name is: {this.state.hero.name}
              <br></br>
              <br></br>
              The hero's gender is: {this.state.hero.gender}
            </Grid.Column>
          </Grid.Row>



          <Grid.Row>
            <Grid.Column width={5}>
              <Form.Field placeholder="SHADOW"
                control="input" type="text" key="shadowName" width={16}
                onChange={this.handleShadowNameChange.bind(this)} />
            </Grid.Column>

            <Grid.Column width={1}>
              {" "}
              {" "}
              <span role="img" aria-label="emoji">{(this.state.shadow.name !== 'SHADOW') ? this.state.shadow.nerd : null}</span>
            </Grid.Column>

            <Grid.Column width={3}>
              <div onChange={this.handleShadowGenderChange.bind(this)}>
                <Form.Field label="male" value="male" control="input" type="radio" name="alone2" />
                <Form.Field label="female" value="female" control="input" type="radio" name="alone2" />
              </div>
            </Grid.Column>

            <Grid.Column width={7}>
              The shadow's name is: {this.state.shadow.name}
              <br></br>
              <br></br>
              The shadow's gender is: {this.state.shadow.gender}
            </Grid.Column>
          </Grid.Row>




          <Grid.Row>
            <Grid.Column width={5}>
              <Form.Field placeholder="FRIEND"
                control="input" type="text" key="friendName" width={16}
                onChange={this.handleFriendNameChange.bind(this)} />
            </Grid.Column>

            <Grid.Column width={1}>
              {" "}
              {" "}
              <span role="img" aria-label="emoji">{(this.state.friend.name !== 'FRIEND') ? this.state.friend.nerd : null}</span>
            </Grid.Column>

            <Grid.Column width={3}>
                <div onChange={this.handleFriendGenderChange.bind(this)}>
                <Form.Field label="male" value="male" control="input" type="radio" name="alone3" />
                <Form.Field label="female" value="female" control="input" type="radio" name="alone3" />
              </div>
            </Grid.Column>

            <Grid.Column width={7}>
                The friend's name is: {this.state.friend.name}
                <br></br>
                <br></br>
                The friend's gender is: {this.state.friend.gender}
            </Grid.Column>
          </Grid.Row>




          <Grid.Row>
            <Grid.Column width={5}>
              <Form.Field placeholder="LOVER"
                control="input" type="text" key="loverName" width={16}
                onChange={this.handleLoverNameChange.bind(this)} />
            </Grid.Column>

            <Grid.Column width={1}>
              {" "}
              {" "}
              <span role="img" aria-label="emoji">{(this.state.lover.name !== 'LOVER') ? this.state.lover.nerd : null}</span>
            </Grid.Column>

            <Grid.Column width={3}>
              <div onChange={this.handleLoverGenderChange.bind(this)}>
                <Form.Field label="male" value="male" control="input" type="radio" name="alone4" />
                <Form.Field label="female" value="female" control="input" type="radio" name="alone4" />
            </div>
            </Grid.Column>

            <Grid.Column width={7}>
              The lover's name is: {this.state.lover.name}
              <br></br>
              <br></br>
              The lover's gender is: {this.state.lover.gender}
            </Grid.Column>
          </Grid.Row>



          <Grid.Row>
            <Grid.Column width={5}>
              <Form.Field placeholder="MENTOR"
                control="input" type="text" key="mentorName" width={16}
                onChange={this.handleMentorNameChange.bind(this)} />
            </Grid.Column>

            <Grid.Column width={1}>
              {" "}
              {" "}
              <span role="img" aria-label="emoji">{(this.state.mentor.name !== 'MENTOR') ? this.state.mentor.nerd : null}</span>
            </Grid.Column>

            <Grid.Column width={3}>
              <div onChange={this.handleMentorGenderChange.bind(this)}>
                <Form.Field label="male" value="male" control="input" type="radio" name="alone5" />
                <Form.Field label="female" value="female" control="input" type="radio" name="alone5" />
              </div>
            </Grid.Column>

            <Grid.Column width={7}>
                The mentor's name is: {this.state.mentor.name}
                <br></br>
                <br></br>
                The mentor's gender is: {this.state.mentor.gender}
            </Grid.Column>
         </Grid.Row>




          <Grid.Row>
            <Grid.Column width={5}>
                <Form.Field placeholder="TRICKSTER"
                  control="input" type="text" key="tricksterName" width={16}
                  onChange={this.handleTricksterNameChange.bind(this)} />
            </Grid.Column>

            <Grid.Column width={1}>
              {" "}
              {" "}
              <span role="img" aria-label="emoji">{(this.state.trickster.name !== 'TRICKSTER') ? this.state.trickster.nerd : null}</span>
            </Grid.Column>

            <Grid.Column width={3}>
            <div onChange={this.handleTricksterGenderChange.bind(this)}>
              <Form.Field label="male" value="male" control="input" type="radio" name="alone6" />
              <Form.Field label="female" value="female" control="input" type="radio" name="alone6" />
            </div>
            </Grid.Column>

            <Grid.Column width={7}>
                The trickster's name is: {this.state.trickster.name}
                <br></br>
                <br></br>
                The trickster's gender is: {this.state.trickster.gender}
            </Grid.Column>
          </Grid.Row>

          {/* <Form.Button content='Submit' type="submit" primary/> */}
    {/* </Form> */}

            {/* <Grid.Column width={4}>
              <Form onSubmit={this.handleCreateStoryFormSubmit} > */}
                  {/* <Form.Group grouped >
                  <h3>Choose genre: </h3>
                  <Form.Field label='Horror' control="input" type='checkbox' />
                  <Form.Field label='Comedy' control="input" type='checkbox' />
                  <Form.Field label='Random' control="input" type='radio' />
                </Form.Group> */}

                  {/* You chose: {this.state.genres} */}
    </Grid>

    <Form.Button content='Submit' type="submit" primary/>

</Form.Group>
</Form>
  </div>
</div>
)
}
}

export default CreateStoryForm
