import React, { Component } from 'react'

import { Form } from 'semantic-ui-react'

class CreateCharactersFormFieldName extends Component {

  render() {
    console.warn('CreateCharactersFormFieldName, this.props is: ', this.props)
    return(
      <Form.Field
        label={this.props.placeholder + " Name"}
        placeholder={this.props.placeholder.toUpperCase()}
        name={this.props.characterType}
        width={6}
        control="input"
        type="text"
        onChange={this.props.onChangeCharacterName}
      />
    )
  }
}

export default CreateCharactersFormFieldName
