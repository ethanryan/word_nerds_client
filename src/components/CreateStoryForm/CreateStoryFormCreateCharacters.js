import React, { Component } from 'react'

import { Header, Divider } from 'semantic-ui-react'

import CreateCharactersFormGroup from './CreateCharactersFormGroup'

class CreateStoryFormCreateCharacters extends Component {
  constructor(props) {
    super(props)
    console.log('CreateStoryFormCreateCharacters props:', props)
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
    this.handleCharacterGenderChangeLocally = this.handleCharacterGenderChangeLocally.bind(this);
    this.handleCharacterNameChangeLocally = this.handleCharacterNameChangeLocally.bind(this);
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

    let characterTypes = ["hero", "shadow", "friend", "lover", "mentor", "trickster"]

    return (
      <div className="create-characters">
        <Header as='h2' textAlign='center'>
          Create Characters
        </Header>
        {
          characterTypes.map(characterType => {
            return (
              <div key={characterType}>
                <CreateCharactersFormGroup
                  characterEmoji={this.state[characterType].emoji}
                  characterGender={this.state[characterType].gender}
                  characterName={this.state[characterType].name}
                  characterType={characterType}
                  onChangeCharacterGender={this.handleCharacterGenderChangeLocally}
                  onChangeCharacterName={this.handleCharacterNameChangeLocally}
                  placeholder={this.capitalizeFirstLetter(characterType)}
                />
                <Divider />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CreateStoryFormCreateCharacters
