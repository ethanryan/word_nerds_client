import React, { Component } from 'react'

import { Form, Header, Divider } from 'semantic-ui-react'

class CreateStoryFormCreateCharacters extends Component {
  constructor(props) {
    super(props)
    console.log('**** props from CreateStoryFormCreateCharacters:', props)
    // console.log('~~~~~~ props.characterProps from CreateStoryFormCreateCharacters:', props.characterProps)
    this.state=({
      hero: {
        name: 'HERO',
        gender: '',
        emoji: ''
      },
      shadow: {
        name: 'SHADOW',
        gender: '',
        emoji: ''
      },
      friend: {
        name: 'FRIEND',
        gender: '',
        emoji: ''
      },
      lover: {
        name: 'LOVER',
        gender: '',
        emoji: ''
      },
      mentor: {
        name: 'MENTOR',
        gender: '',
        emoji: ''
      },
      trickster: {
        name: 'TRICKSTER',
        gender: '',
        emoji: ''
      },
    })
  } //end of constructor


  handleHeroNameChange(event) {
    const heroName = event.target.value
    this.setState({
      hero: {
        name: heroName,
        gender: this.state.hero.gender,
        emoji: <span role="img" aria-label="emoji">😄</span>
      },
    })
    this.props.handleHeroNameChange( heroName ) //this will pass heroName up to state in StoryContainer
  }

  handleHeroGenderChange(event) {
    const heroGender = event.target.value
    this.setState({
      hero: {
        name: this.state.hero.name,
        gender: heroGender,
        emoji: this.state.hero.emoji,
      },
    })
    this.props.handleHeroGenderChange( heroGender ) //this will pass heroName up to state in StoryContainer
  }

  handleShadowNameChange(event) {
    const shadowName = event.target.value
    this.setState({
      shadow: {
        name: shadowName,
        gender: this.state.shadow.gender,
        emoji: <span role="img" aria-label="emoji">😨</span>
        // emoji: <span role="img" aria-label="emoji">😈</span>
      },
    })
    this.props.handleShadowNameChange( shadowName ) //this will pass shadowName up to state in StoryContainer
  }

  handleShadowGenderChange(event) {
    const shadowGender = event.target.value
    this.setState({
      shadow: {
        name: this.state.shadow.name,
        gender: shadowGender,
        emoji: this.state.shadow.emoji,
      },
    })
    this.props.handleShadowGenderChange( shadowGender ) //this will pass heroName up to state in StoryContainer
  }

  handleFriendNameChange(event) {
    const friendName = event.target.value
    this.setState({
      friend: {
        name: friendName,
        gender: this.state.friend.gender,
        emoji: <span role="img" aria-label="emoji">😎</span>
      },
    })
    this.props.handleFriendNameChange( friendName )
  }

  handleFriendGenderChange(event) {
    const friendGender = event.target.value
    this.setState({
      friend: {
        name: this.state.friend.name,
        gender: friendGender,
        emoji: this.state.friend.emoji,
      },
    })
    this.props.handleFriendGenderChange( friendGender )
  }

  handleLoverNameChange(event) {
    const loverName = event.target.value
    this.setState({
      lover: {
        name: loverName,
        gender: this.state.lover.gender,
        emoji: <span role="img" aria-label="emoji">😘</span>
      },
    })
    this.props.handleLoverNameChange( loverName )
  }

  handleLoverGenderChange(event) {
    const loverGender = event.target.value
    this.setState({
      lover: {
        name: this.state.lover.name,
        gender: loverGender,
        emoji: this.state.lover.emoji,
      },
    })
    this.props.handleLoverGenderChange( loverGender )
  }

  handleMentorNameChange(event) {
    const mentorName = event.target.value
    this.setState({
      mentor: {
        name: mentorName,
        gender: this.state.mentor.gender,
        emoji: <span role="img" aria-label="emoji">🤓</span>
      },
    })
    this.props.handleMentorNameChange( mentorName )
  }

  handleMentorGenderChange(event) {
    const mentorGender = event.target.value
    this.setState({
      mentor: {
        name: this.state.mentor.name,
        gender: mentorGender,
        emoji: this.state.mentor.emoji,
      },
    })
    this.props.handleMentorGenderChange( mentorGender )
  }

  handleTricksterNameChange(event) {
    const tricksterName = event.target.value
    this.setState({
      trickster: {
        name: tricksterName,
        gender: this.state.trickster.gender,
        emoji: <span role="img" aria-label="emoji">😜</span>
      },
    })
    this.props.handleTricksterNameChange( tricksterName )
  }

  handleTricksterGenderChange(event) {
    const tricksterGender = event.target.value
    this.setState({
      trickster: {
        name: this.state.trickster.name,
        gender: tricksterGender,
        emoji: this.state.trickster.emoji,
      },
    })
    this.props.handleTricksterGenderChange( tricksterGender )
  }


render() {
  console.log('!!!!! state from CreateStoryFormCreateCharacters:', this.state)
  // console.log('!!!!! this.state.hero from CreateStoryFormCreateCharacters:', this.state.hero)

  return(
    <div className="create-characters">
      <Header as='h2' textAlign='center'>
        Create Characters
      </Header>

      <Form.Group>
        <Form.Field label="Hero Name" placeholder="HERO"
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
                {(this.state.hero.name !== 'HERO') ? this.state.hero.emoji : null}
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
                    {(this.state.shadow.name !== 'SHADOW') ? this.state.shadow.emoji : null}
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
                        {(this.state.friend.name !== 'FRIEND') ? this.state.friend.emoji : null}
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
                            {(this.state.lover.name !== 'LOVER') ? this.state.lover.emoji : null}
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
                                {(this.state.mentor.name !== 'MENTOR') ? this.state.mentor.emoji : null}
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
                                    {(this.state.trickster.name !== 'TRICKSTER') ? this.state.trickster.emoji : null}
                                  </span>  Trickster Summary</label>

                                  name: {this.state.trickster.name}
                                  <br></br>
                                  gender: {this.state.trickster.gender}
                                </Form.Field>
                              </Form.Group>
    </div>
  )
}

}

export default CreateStoryFormCreateCharacters
