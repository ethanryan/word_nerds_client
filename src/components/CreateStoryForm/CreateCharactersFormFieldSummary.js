import React, { Component } from 'react'

import { Form } from 'semantic-ui-react'

class CreateCharactersFormFieldSummary extends Component {

  render() {
    console.warn('CreateCharactersFormFieldSummary, this.props is: ', this.props)
    return(
      <Form.Field
        width={6}
        className="summaryField">
        <label>
          <span role="img" aria-label="emoji">
            {(this.props.characterName !== this.props.placeholder) ? this.props.characterEmoji : null}
            {/* NOTE: need to abstract HERO above... */}
          </span>
          {this.props.placeholder} Summary
        </label>
        {/* NOTE: abstract 'Hero' in Hero Summary above.... */}

        name: {this.props.characterName}
        <br></br>
        gender: {this.props.characterGender}
      </Form.Field>
    )
  }
}

export default CreateCharactersFormFieldSummary
