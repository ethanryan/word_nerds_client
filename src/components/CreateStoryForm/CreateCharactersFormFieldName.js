import React from 'react'

import { Form } from 'semantic-ui-react'

const CreateCharactersFormFieldName = (props) => {
  // console.warn('CreateCharactersFormFieldName, props is: ', props)
  return(
    <Form.Field
      label={props.placeholder + " Name"}
      placeholder={props.placeholder.toUpperCase()}
      name={props.characterType}
      width={6}
      control="input"
      type="text"
      onChange={props.onChangeCharacterName}
    />
  )
}

export default CreateCharactersFormFieldName
