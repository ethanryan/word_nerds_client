import React, { Component } from 'react'

import { Form } from 'semantic-ui-react'

import CreateCharactersFormFieldName from './CreateCharactersFormFieldName'
import CreateCharactersFormFieldGender from './CreateCharactersFormFieldGender'
import CreateCharactersFormFieldSummary from './CreateCharactersFormFieldSummary'

class CreateCharactersFormGroup extends Component {

  render() {
    console.warn('CreateCharactersFormGroup, this.props is: ', this.props)
    return(
      <Form.Group>
        <CreateCharactersFormFieldName
          characterType={this.props.characterType}
          placeholder={this.props.placeholder}
          onChangeCharacterName={this.props.onChangeCharacterName}
        />

        <CreateCharactersFormFieldGender
          characterType={this.props.characterType}
          placeholder={this.props.placeholder}
          characterGender={this.props.characterGender}
          onChangeCharacterGender={this.props.onChangeCharacterGender}
        />

        <CreateCharactersFormFieldSummary
          placeholder={this.props.placeholder}
          characterName={this.props.characterName}
          characterEmoji={this.props.characterEmoji}
          characterGender={this.props.characterGender}
        />
      </Form.Group>
    )
  }
}

export default CreateCharactersFormGroup
