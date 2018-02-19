import React, { Component } from 'react'

import CreateStoryFormSelectGenre from './CreateStoryFormSelectGenre'

import { Form, Header, Divider, Modal, Button } from 'semantic-ui-react'

class CreateStoryForm extends Component {

  constructor(props) {
    // console.log('**** props from CreateStoryForm:', props)
    super(props)
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
    genreSelection: this.props.genreSelection, //chosen in CreateStoryFormSelectGenre, passed up to StoryContainer from there
  })
  this.handleCreateStoryFormSubmit = this.handleCreateStoryFormSubmit.bind(this)
} //end of constructor



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
  // const genres = this.state.genreSelection
  const genres = this.props.genreSelection

  console.log('CreateStoryForm submitted: ', this.state)
  console.log('user_id is: ', user_id)
  this.props.handleSubmit( genres, characters, user_id )
  this.setState({story: ''}) //this clears form onSubmit
}



render() {

  return(

    <div className="CreateStoryForm-red">

      <Modal trigger={<Button>Create A Story</Button>}>

      <Form onSubmit={this.handleCreateStoryFormSubmit}>

        <Header as='h1' textAlign='center'>
          Create a Story
        </Header>

        {/* <h1>user_id: {this.props.user_id}</h1> */}

        <Divider />
        <Divider />

        <CreateStoryFormSelectGenre
          plots={this.props.plots}
          handleGenreChange={this.props.handleGenreChange}
        />


        <Divider />
        <Divider />


        <Header as='h2' textAlign='center'>
          Create Characters
        </Header>

        <Form.Group>
          <Form.Field label="Hero Name" placeholder="HERO"
            // autoFocus
            width={6}
            control="input" type="text" key="heroName"
            onChange={this.handleHeroNameChange.bind(this)} />

            <Form.Field width={4} className="genderField">
              <label>Hero Gender</label>
              <Form.Field label="male"
                value="male"
                control="input" type="radio" className="genderRadio"
                checked={this.state.hero.gender === "male"}
                onChange={this.handleHeroGenderChange.bind(this)}
              />
              <Form.Field label="female"
                value="female"
                control="input" type="radio" className="genderRadio"
                checked={this.state.hero.gender === "female"}
                onChange={this.handleHeroGenderChange.bind(this)}
              />
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

                <Form.Field width={4} className="genderField">
                  <label>Shadow Gender</label>
                  <Form.Field label="male"
                    value="male"
                    control="input" type="radio" className="genderRadio"
                    checked={this.state.shadow.gender === "male"}
                    onChange={this.handleShadowGenderChange.bind(this)}
                  />
                  <Form.Field label="female"
                    value="female"
                    control="input" type="radio" className="genderRadio"
                    checked={this.state.shadow.gender === "female"}
                    onChange={this.handleShadowGenderChange.bind(this)}
                  />
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

                    <Form.Field width={4} className="genderField">
                      <label>Friend Gender</label>
                      <Form.Field label="male"
                        value="male"
                        control="input" type="radio" className="genderRadio"
                        checked={this.state.friend.gender === "male"}
                        onChange={this.handleFriendGenderChange.bind(this)}
                      />
                      <Form.Field label="female"
                        value="female"
                        control="input" type="radio" className="genderRadio"
                        checked={this.state.friend.gender === "female"}
                        onChange={this.handleFriendGenderChange.bind(this)}
                      />
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

                        <Form.Field width={4} className="genderField">
                          <label>Lover Gender</label>
                          <Form.Field label="male"
                            value="male"
                            control="input" type="radio" className="genderRadio"
                            checked={this.state.lover.gender === "male"}
                            onChange={this.handleLoverGenderChange.bind(this)}
                          />
                          <Form.Field label="female"
                            value="female"
                            control="input" type="radio" className="genderRadio"
                            checked={this.state.lover.gender === "female"}
                            onChange={this.handleLoverGenderChange.bind(this)}
                          />
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

                            <Form.Field width={4} className="genderField">
                              <label>Mentor Gender</label>
                              <Form.Field label="male"
                                value="male"
                                control="input" type="radio" className="genderRadio"
                                checked={this.state.mentor.gender === "male"}
                                onChange={this.handleMentorGenderChange.bind(this)}
                              />
                              <Form.Field label="female"
                                value="female"
                                control="input" type="radio" className="genderRadio"
                                checked={this.state.mentor.gender === "female"}
                                onChange={this.handleMentorGenderChange.bind(this)}
                              />
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

                                <Form.Field width={4} className="genderField">
                                  <label>Trickster Gender</label>
                                  <Form.Field label="male"
                                    value="male"
                                    control="input" type="radio" className="genderRadio"
                                    checked={this.state.trickster.gender === "male"}
                                    onChange={this.handleTricksterGenderChange.bind(this)}
                                  />
                                  <Form.Field label="female"
                                    value="female"
                                    control="input" type="radio" className="genderRadio"
                                    checked={this.state.trickster.gender === "female"}
                                    onChange={this.handleTricksterGenderChange.bind(this)}
                                  />
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

                            </Modal>

                            </div>
                          )
                        }
                      }

                      export default CreateStoryForm
