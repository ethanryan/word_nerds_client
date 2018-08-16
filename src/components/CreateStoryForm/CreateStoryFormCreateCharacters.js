import React, { Component } from 'react'

import { Form, Header, Divider } from 'semantic-ui-react'

import CreateCharactersFormGroup from './CreateCharactersFormGroup'
// import CreateCharactersFormFieldName from './CreateCharactersFormFieldName'
// import CreateCharactersFormFieldGender from './CreateCharactersFormFieldGender'
// import CreateCharactersFormFieldSummary from './CreateCharactersFormFieldSummary'

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

  getEmojiForCharacterSummary(argument) {
    switch(argument) {
      case "hero": return <span role="img" aria-label="emoji">😄</span>;
      case "shadow": return <span role="img" aria-label="emoji">😨</span>;
      case "friend": return <span role="img" aria-label="emoji">😎</span>;
      case "lover": return <span role="img" aria-label="emoji">😘</span>;
      case "mentor": return <span role="img" aria-label="emoji">🤓</span>;
      case "trickster": return <span role="img" aria-label="emoji">😜</span>;
      default: console.error(`${argument} doesn't have a corresponding emoji...`);
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleCharacterNameChangeLocally(event) {
    console.warn('handleCharacterNameChangeLocally called, event is: ', event)
    const characterName = event.target.value
    const characterType = event.target.name
    this.setState({
      [characterType]: {
        name: characterName,
        gender: this.state[characterType].gender,
        emoji: this.getEmojiForCharacterSummary(characterType),
      },
    })
    this.props.handleCharacterNameChange(characterName, characterType) //this will pass characterName and characterType up to state in StoryContainer
  }

  handleCharacterGenderChangeLocally(event) {
    const characterGender = event.target.value
    const characterType = event.target.name
    this.setState({
      [characterType]: {
        name: this.state[characterType].name,
        gender: characterGender,
        emoji: this.state[characterType].emoji,
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


        {/* abstracting below Form.Group */}
        {/* <Form.Group> */}

          <CreateCharactersFormGroup
            characterEmoji={this.state["hero"].emoji}
            characterGender={this.state["hero"].gender}
            characterName={this.state["hero"].name}
            characterType={"hero"}
            onChangeCharacterGender={this.handleCharacterGenderChangeLocally.bind(this)}
            onChangeCharacterName={this.handleCharacterNameChangeLocally.bind(this)}
            placeholder={this.capitalizeFirstLetter("hero")}
          />

          {/* <CreateCharactersFormFieldName
            characterType={"hero"}
            placeholder={this.capitalizeFirstLetter("hero")}
            onChangeCharacterName={this.handleCharacterNameChangeLocally.bind(this)}
          />

          <CreateCharactersFormFieldGender
            characterType={"hero"}
            placeholder={this.capitalizeFirstLetter("hero")}
            characterGender={this.state["hero"].gender}
            onChangeCharacterGender={this.handleCharacterGenderChangeLocally.bind(this)}
          />

          <CreateCharactersFormFieldSummary
            placeholder={this.capitalizeFirstLetter("hero")}
            characterName={this.state["hero"].name}
            characterEmoji={this.state["hero"].emoji}
            characterGender={this.state["hero"].gender}
          /> */}

        {/* </Form.Group> */}
        {/* abstracting above Form.Group */}

        <Divider />

        <Form.Group>
          <Form.Field label="Shadow Name" placeholder="SHADOW" name="shadow"
            width={6}
            control="input" type="text" key="shadowName"
            onChange={this.handleCharacterNameChangeLocally.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">
              Shadow Gender
            </label>
            <Form.Field label="male" name="shadow"
              value="male"
              control="input" type="radio" className="genderRadio"
              checked={this.state.shadow.gender === "male"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
            />
            <Form.Field label="female" name="shadow"
              value="female"
              control="input" type="radio" className="genderRadio"
              checked={this.state.shadow.gender === "female"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
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
          <Form.Field label="Friend Name" placeholder="FRIEND" name="friend"
            width={6}
            control="input" type="text" key="friendName"
            onChange={this.handleCharacterNameChangeLocally.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">Friend Gender</label>
            <Form.Field label="male" name="friend"
              value="male"
              control="input" type="radio" className="genderRadio"
              checked={this.state.friend.gender === "male"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
            />
            <Form.Field label="female" name="friend"
              value="female"
              control="input" type="radio" className="genderRadio"
              checked={this.state.friend.gender === "female"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
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
          <Form.Field label="Lover Name" placeholder="LOVER" name="lover"
            width={6}
            control="input" type="text" key="loverName"
            onChange={this.handleCharacterNameChangeLocally.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">
              Lover Gender
            </label>
            <Form.Field label="male" name="lover"
              value="male"
              control="input" type="radio" className="genderRadio"
              checked={this.state.lover.gender === "male"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
            />
            <Form.Field label="female" name="lover"
              value="female"
              control="input" type="radio" className="genderRadio"
              checked={this.state.lover.gender === "female"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
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
          <Form.Field label="Mentor Name" placeholder="MENTOR" name="mentor"
            width={6}
            control="input" type="text" key="mentorName"
            onChange={this.handleCharacterNameChangeLocally.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">
              Mentor Gender
            </label>
            <Form.Field label="male" name="mentor"
              value="male"
              control="input" type="radio" className="genderRadio"
              checked={this.state.mentor.gender === "male"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
            />
            <Form.Field label="female" name="mentor"
              value="female"
              control="input" type="radio" className="genderRadio"
              checked={this.state.mentor.gender === "female"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
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
          <Form.Field label="Trickster Name" placeholder="TRICKSTER" name="trickster"
            width={6}
            control="input" type="text" key="TricksterName"
            onChange={this.handleCharacterNameChangeLocally.bind(this)}
          />

          <Form.Field width={4} className="genderField">
            <label className="gender-label">
              Trickster Gender
            </label>
            <Form.Field label="male" name="trickster"
              value="male"
              control="input" type="radio" className="genderRadio"
              checked={this.state.trickster.gender === "male"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
            />
            <Form.Field label="female" name="trickster"
              value="female"
              control="input" type="radio" className="genderRadio"
              checked={this.state.trickster.gender === "female"}
              onChange={this.handleCharacterGenderChangeLocally.bind(this)}
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
