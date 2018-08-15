import React, { Component } from 'react'

import { Form, Header, Divider } from 'semantic-ui-react'

class CreateStoryFormCreateCharacters extends Component {
  constructor(props) {
    super(props)
    console.log('CreateStoryFormCreateCharacters props:', props)
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
    const characterName = event.target.value
    const characterType = "hero"
    this.setState({
      hero: {
        name: characterName,
        gender: this.state.hero.gender,
        emoji: <span role="img" aria-label="emoji">😄</span>
      },
    })
    this.props.handleCharacterNameChange(characterName, characterType) //this will pass characterName and characterType up to state in StoryContainer
  }

  handleHeroGenderChange(event) {
    const characterGender = event.target.value
    const characterType = "hero"
    this.setState({
      hero: {
        name: this.state.hero.name,
        gender: characterGender,
        emoji: this.state.hero.emoji,
      },
    })
    this.props.handleCharacterGenderChange(characterGender, characterType) //this will pass heroName up to state in StoryContainer
  }

  handleShadowNameChange(event) {
    const characterName = event.target.value
    const characterType = "shadow"
    this.setState({
      shadow: {
        name: characterName,
        gender: this.state.shadow.gender,
        emoji: <span role="img" aria-label="emoji">😨</span>
        // emoji: <span role="img" aria-label="emoji">😈</span>
      },
    })
    this.props.handleCharacterNameChange(characterName, characterType) //this will pass characterName and characterType up to state in StoryContainer
  }

  handleShadowGenderChange(event) {
    const characterGender = event.target.value
    const characterType = "shadow"
    this.setState({
      shadow: {
        name: this.state.shadow.name,
        gender: characterGender,
        emoji: this.state.shadow.emoji,
      },
    })
    this.props.handleCharacterGenderChange(characterGender, characterType) //this will pass heroName up to state in StoryContainer
  }

  handleFriendNameChange(event) {
    const characterName = event.target.value
    const characterType = "friend"
    this.setState({
      friend: {
        name: characterName,
        gender: this.state.friend.gender,
        emoji: <span role="img" aria-label="emoji">😎</span>
      },
    })
    this.props.handleCharacterNameChange(characterName, characterType) //this will pass characterName and characterType up to state in StoryContainer
  }

  handleFriendGenderChange(event) {
    const characterGender = event.target.value
    const characterType = "friend"
    this.setState({
      friend: {
        name: this.state.friend.name,
        gender: characterGender,
        emoji: this.state.friend.emoji,
      },
    })
    this.props.handleCharacterGenderChange(characterGender, characterType) //this will pass heroName up to state in StoryContainer
  }

  handleLoverNameChange(event) {
    const characterName = event.target.value
    const characterType = "lover"
    this.setState({
      lover: {
        name: characterName,
        gender: this.state.lover.gender,
        emoji: <span role="img" aria-label="emoji">😘</span>
      },
    })
    this.props.handleCharacterNameChange(characterName, characterType) //this will pass characterName and characterType up to state in StoryContainer
  }

  handleLoverGenderChange(event) {
    const characterGender = event.target.value
    const characterType = "lover"
    this.setState({
      lover: {
        name: this.state.lover.name,
        gender: characterGender,
        emoji: this.state.lover.emoji,
      },
    })
    this.props.handleCharacterGenderChange(characterGender, characterType) //this will pass heroName up to state in StoryContainer
  }

  handleMentorNameChange(event) {
    const characterName = event.target.value
    const characterType = "mentor"
    this.setState({
      mentor: {
        name: characterName,
        gender: this.state.mentor.gender,
        emoji: <span role="img" aria-label="emoji">🤓</span>
      },
    })
    this.props.handleCharacterNameChange(characterName, characterType) //this will pass characterName and characterType up to state in StoryContainer
  }

  handleMentorGenderChange(event) {
    const characterGender = event.target.value
    const characterType = "mentor"
    this.setState({
      mentor: {
        name: this.state.mentor.name,
        gender: characterGender,
        emoji: this.state.mentor.emoji,
      },
    })
    this.props.handleCharacterGenderChange(characterGender, characterType) //this will pass heroName up to state in StoryContainer
  }

  handleTricksterNameChange(event) {
    const characterName = event.target.value
    const characterType = "trickster"
    this.setState({
      trickster: {
        name: characterName,
        gender: this.state.trickster.gender,
        emoji: <span role="img" aria-label="emoji">😜</span>
      },
    })
    this.props.handleCharacterNameChange(characterName, characterType) //this will pass characterName and characterType up to state in StoryContainer
  }

  handleTricksterGenderChange(event) {
    const characterGender = event.target.value
    const characterType = "trickster"
    this.setState({
      trickster: {
        name: this.state.trickster.name,
        gender: characterGender,
        emoji: this.state.trickster.emoji,
      },
    })
    this.props.handleCharacterGenderChange(characterGender, characterType) //this will pass heroName up to state in StoryContainer
  }

  render() {
    console.log('CreateStoryFormCreateCharacters, this.state:', this.state)

    return (
      <div className="create-characters">
        <Header as='h2' textAlign='center'>
          Create Characters
        </Header>

        <Form.Group>
          <Form.Field label="Hero Name" placeholder="HERO"
            width={6}
            control="input" type="text" key="heroName"
            onChange={this.handleHeroNameChange.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">
              Hero Gender
            </label>
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
              </span>
              Hero Summary
            </label>

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
            onChange={this.handleShadowNameChange.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">
              Shadow Gender
            </label>
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
              </span>
              Shadow Summary
            </label>
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
            onChange={this.handleFriendNameChange.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">Friend Gender</label>
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

          <Form.Field width={6} className="summaryField">
            <label>
              <span role="img" aria-label="emoji">
                {(this.state.friend.name !== 'FRIEND') ? this.state.friend.emoji : null}
              </span>
              Friend Summary
            </label>

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
            onChange={this.handleLoverNameChange.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">
              Lover Gender
            </label>
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
              </span>
              Lover Summary
            </label>

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
            onChange={this.handleMentorNameChange.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">
              Mentor Gender
            </label>
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
              </span>  Mentor Summary
            </label>

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
            onChange={this.handleTricksterNameChange.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">
              Trickster Gender
            </label>
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
              </span>  Trickster Summary
            </label>

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
