import React from 'react'

import { Form } from 'semantic-ui-react'

import CreateCharactersFormFieldName from './CreateCharactersFormFieldName'
import CreateCharactersFormFieldGender from './CreateCharactersFormFieldGender'
import CreateCharactersFormFieldSummary from './CreateCharactersFormFieldSummary'

const CreateCharactersFormGroup = (props) => {
  // console.warn('CreateCharactersFormGroup, props is: ', props)
  return(
    <Form.Group>
      <CreateCharactersFormFieldName
        characterType={props.characterType}
        placeholder={props.placeholder}
        onChangeCharacterName={props.onChangeCharacterName}
      />

      <CreateCharactersFormFieldGender
        characterType={props.characterType}
        placeholder={props.placeholder}
        characterGender={props.characterGender}
        onChangeCharacterGender={props.onChangeCharacterGender}
      />

      <CreateCharactersFormFieldSummary
        placeholder={props.placeholder}
        characterName={props.characterName}
        characterEmoji={props.characterEmoji}
        characterGender={props.characterGender}
      />
    </Form.Group>
  )
}

export default CreateCharactersFormGroup
