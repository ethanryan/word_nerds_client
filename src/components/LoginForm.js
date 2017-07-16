import React, { Component } from 'react'

import { Button, Checkbox, Form } from 'semantic-ui-react'

class LoginForm extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <div>



      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>



    </div>
    )
  }
}

export default LoginForm


///////


// import React from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'
//
// const FormExampleForm = () => (
//   <Form>
//     <Form.Field>
//       <label>First Name</label>
//       <input placeholder='First Name' />
//     </Form.Field>
//     <Form.Field>
//       <label>Last Name</label>
//       <input placeholder='Last Name' />
//     </Form.Field>
//
//     <Button type='submit'>Submit</Button>
//   </Form>
// )
//
// export default FormExampleForm
