import React, { Component } from 'react'

import { Form } from 'semantic-ui-react'

class CreateCharactersFormFieldGender extends Component {

  render() {
    console.warn('CreateCharactersFormFieldGender, this.props is: ', this.props)
    return(
      <Form.Field
        width={4}
        className="genderField">
        <label className="gender-label">
          {this.props.placeholder} Gender
        </label>
        <Form.Field
          label="male"
          name={this.props.characterType}
          value="male"
          control="input"
          type="radio"
          className="genderRadio"
          checked={this.props.characterGender === "male"}
          onChange={this.props.onChangeCharacterGender}
        />
        <Form.Field
          label="female"
          name={this.props.characterType}
          value="female"
          control="input"
          type="radio"
          className="genderRadio"
          checked={this.props.characterGender === "female"}
          onChange={this.props.onChangeCharacterGender}
        />
      </Form.Field>
    )
  }
}

export default CreateCharactersFormFieldGender
