import React, { Component } from 'react'

import { Form } from 'semantic-ui-react'

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

      <div className="LoginForm-red">

        <h1>Returning User</h1>

      <Form onSubmit={this.handleSubmit}>
        <Form.Field width={6}>
          <label>Username</label>
          <input placeholder='Username'
            value={this.state.name}
            onChange={ e => this.handleChange('name', e.target.value)}
          />
        </Form.Field>
        <Form.Field width={6}>
          <label>Password</label>
          <input placeholder='Password'
            value={this.state.password}
            onChange={ e => this.handleChange('password', e.target.value)}
          />
        </Form.Field>

        <Form.Button content='Log In' type="submit" primary />

      </Form>

    {/* <div>
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input type='text' value={this.state.name} onChange={ e => this.handleChange('name', e.target.value)}/>
        <label>Password</label>
        <input type='password' value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)} />
        <input type='submit' value='Log In' />
      </form>
    </div> */}

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
