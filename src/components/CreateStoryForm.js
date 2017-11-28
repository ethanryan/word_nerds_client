import React, { Component } from 'react'

import { Form, Header, Divider } from 'semantic-ui-react'
// import { Radio } from 'semantic-ui-react'

class CreateStoryForm extends Component {

  constructor(props) {
    console.log('**** props from CreateStoryForm 1:', props)
    super(props)
    console.log('**** props from CreateStoryForm 2:', props)
    this.state=({ //organizing this so it's not nested, but post request will be nested
    story: '',
    //user_id: this.props.user_id, //need to set user_id here??? keep losing user_id on page reload
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
  const user_id = this.props.user_id
  
  console.log('CreateStoryForm submitted: ', this.state)
  console.log(`user_id is:`, user_id)
  this.props.handleSubmit( characters, user_id )
  this.setState({story: ''}) //this clears form onSubmit
}


render() {

  return(

    <div className="CreateStoryForm-red">

      <Form onSubmit={this.handleCreateStoryFormSubmit}>

        <Header as='h3' textAlign='center'>
          Create a Story
        </Header>

        <h1>user_id: {this.props.user_id}</h1>

        <Form.Group>
          <Form.Field label="Hero Name" placeholder="HERO"
            autoFocus
            width={6}
            control="input" type="text" key="heroName"
            onChange={this.handleHeroNameChange.bind(this)} />

            <Form.Field width={4} className="genderField">
              <label>Hero Gender</label>
              <div onChange={this.handleHeroGenderChange.bind(this)}>
                <Form.Field label="male" value="male" control="input" className="genderRadio" type="radio" name="alone1" />
                <Form.Field label="female" value="female" control="input" className="genderRadio" type="radio" name="alone1" />
              </div>
            </Form.Field>

            <Form.Field width={6} className="summaryField">
              <label>
                <span role="img" aria-label="emoji">
                  {(this.state.hero.name !== 'HERO') ? this.state.hero.nerd : null}
                </span>  Hero Summary</label>

                name: {this.state.hero.name}
                <br></br>
                gender: {this.state.hero.gender}
              </Form.Field>
            </Form.Group>


            <Divider />


            <Form.Group>
              <Form.Field label="Shadow Name" placeholder="SHADOW"
                width={6}
                control="input" type="text" key="shadowName"
                onChange={this.handleShadowNameChange.bind(this)} />

                <Form.Field
                  width={4}>
                  <label>Shadow Gender</label>
                  <div onChange={this.handleShadowGenderChange.bind(this)}>
                    <Form.Field label="male" value="male" control="input" className="genderRadio" type="radio" name="alone1" />
                    <Form.Field label="female" value="female" control="input" className="genderRadio" type="radio" name="alone1" />
                  </div>
                </Form.Field>

                <Form.Field
                  width={6} className="summaryField">
                  <label>
                    <span role="img" aria-label="emoji">
                      {(this.state.shadow.name !== 'SHADOW') ? this.state.shadow.nerd : null}
                    </span>  Shadow Summary</label>

                    name: {this.state.shadow.name}
                    <br></br>
                    gender: {this.state.shadow.gender}
                  </Form.Field>
                </Form.Group>

                <Divider />

                <Form.Group>
                  <Form.Field label="Friend Name" placeholder="FRIEND"
                    width={6}
                    control="input" type="text" key="friendName"
                    onChange={this.handleFriendNameChange.bind(this)} />

                    <Form.Field
                      width={4}>
                      <label>Friend Gender</label>
                      <div onChange={this.handleFriendGenderChange.bind(this)}>
                        <Form.Field label="male" value="male" control="input" className="genderRadio" type="radio" name="alone1" />
                        <Form.Field label="female" value="female" control="input" className="genderRadio" type="radio" name="alone1" />
                      </div>
                    </Form.Field>

                    <Form.Field
                      width={6} className="summaryField">
                      <label>
                        <span role="img" aria-label="emoji">
                          {(this.state.friend.name !== 'FRIEND') ? this.state.friend.nerd : null}
                        </span>  Friend Summary</label>

                        name: {this.state.friend.name}
                        <br></br>
                        gender: {this.state.friend.gender}
                      </Form.Field>
                    </Form.Group>

                    <Divider />

                    <Form.Group>
                      <Form.Field label="Lover Name" placeholder="LOVER"
                        width={6}
                        control="input" type="text" key="loverName"
                        onChange={this.handleLoverNameChange.bind(this)} />

                        <Form.Field
                          width={4}>
                          <label>Lover Gender</label>
                          <div onChange={this.handleLoverGenderChange.bind(this)}>
                            <Form.Field label="male" value="male" control="input" className="genderRadio" type="radio" name="alone1" />
                            <Form.Field label="female" value="female" control="input" className="genderRadio" type="radio" name="alone1" />
                          </div>
                        </Form.Field>

                        <Form.Field
                          width={6} className="summaryField">
                          <label>
                            <span role="img" aria-label="emoji">
                              {(this.state.lover.name !== 'LOVER') ? this.state.lover.nerd : null}
                            </span>  Lover Summary</label>

                            name: {this.state.lover.name}
                            <br></br>
                            gender: {this.state.lover.gender}
                          </Form.Field>
                        </Form.Group>

                        <Divider />

                        <Form.Group>
                          <Form.Field label="Mentor Name" placeholder="MENTOR"
                            width={6}
                            control="input" type="text" key="mentorName"
                            onChange={this.handleMentorNameChange.bind(this)} />

                            <Form.Field
                              width={4}>
                              <label>Mentor Gender</label>
                              <div onChange={this.handleMentorGenderChange.bind(this)}>
                                <Form.Field label="male" value="male" control="input" className="genderRadio" type="radio" name="alone1" />
                                <Form.Field label="female" value="female" control="input" className="genderRadio" type="radio" name="alone1" />
                              </div>
                            </Form.Field>

                            <Form.Field
                              width={6} className="summaryField">
                              <label>
                                <span role="img" aria-label="emoji">
                                  {(this.state.mentor.name !== 'MENTOR') ? this.state.mentor.nerd : null}
                                </span>  Mentor Summary</label>

                                name: {this.state.mentor.name}
                                <br></br>
                                gender: {this.state.mentor.gender}
                              </Form.Field>
                            </Form.Group>

                            <Divider />

                            <Form.Group>
                              <Form.Field label="Trickster Name" placeholder="TRICKSTER"
                                width={6}
                                control="input" type="text" key="TricksterName"
                                onChange={this.handleTricksterNameChange.bind(this)} />

                                <Form.Field
                                  width={4}>
                                  <label>Trickster Gender</label>
                                  <div onChange={this.handleTricksterGenderChange.bind(this)}>
                                    <Form.Field label="male" value="male" control="input" className="genderRadio" type="radio" name="alone1" />
                                    <Form.Field label="female" value="female" control="input" className="genderRadio" type="radio" name="alone1" />
                                  </div>
                                </Form.Field>

                                <Form.Field
                                  width={6} className="summaryField">
                                  <label>
                                    <span role="img" aria-label="emoji">
                                      {(this.state.trickster.name !== 'TRICKSTER') ? this.state.trickster.nerd : null}
                                    </span>  Trickster Summary</label>

                                    name: {this.state.trickster.name}
                                    <br></br>
                                    gender: {this.state.trickster.gender}
                                  </Form.Field>
                                </Form.Group>


                                <Divider />

                                <Form.Button content='Submit' type="submit" primary/>

                              </Form>

                            </div>
                          )
                        }
                      }

                      export default CreateStoryForm
