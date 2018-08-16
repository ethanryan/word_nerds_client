import React from 'react'

import { Form } from 'semantic-ui-react'

const CreateCharactersFormFieldSummary = (props) => {
  // console.warn('CreateCharactersFormFieldSummary, props is: ', props)
  return(
    <Form.Field
      width={6}
      className="summaryField">
      <label>
        <span role="img" aria-label="emoji">
          {(props.characterName !== props.placeholder) ? props.characterEmoji : null}
        </span>
        {props.placeholder} Summary
      </label>
      <span>
        name: {props.characterName}
      </span>
      <br></br>
      <span>
        gender: {props.characterGender}
      </span>
    </Form.Field>
  )
}

export default CreateCharactersFormFieldSummary
