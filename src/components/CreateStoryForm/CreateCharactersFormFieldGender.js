import React from 'react'

import { Form } from 'semantic-ui-react'

const CreateCharactersFormFieldGender = (props) => {
  // console.warn('CreateCharactersFormFieldGender, props is: ', props)
  return(
    <Form.Field
      width={4}
      className="genderField">
      <label className="gender-label">
        {props.placeholder} Gender
      </label>
      <Form.Field
        label="male"
        name={props.characterType}
        value="male"
        control="input"
        type="radio"
        className="genderRadio"
        checked={props.characterGender === "male"}
        onChange={props.onChangeCharacterGender}
      />
      <Form.Field
        label="female"
        name={props.characterType}
        value="female"
        control="input"
        type="radio"
        className="genderRadio"
        checked={props.characterGender === "female"}
        onChange={props.onChangeCharacterGender}
      />
    </Form.Field>
  )
}

export default CreateCharactersFormFieldGender
