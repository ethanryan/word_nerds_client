import React, { Component } from 'react'

import { Form, Grid } from 'semantic-ui-react'

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
    return(
      <div className="LoginForm-red">

      <Form onSubmit={this.handleSubmit}>

        <Grid columns={1} centered>
          <Grid.Column width={6}>

            <h1>Returning User - Login Form</h1>

        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' autoFocus
            value={this.state.name}
            onChange={ e => this.handleChange('name', e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input placeholder='Password'
            type='password'
            value={this.state.password}
            onChange={ e => this.handleChange('password', e.target.value)}
          />
        </Form.Field>

        <Form.Button content='Log In' type="submit" primary />

      </Grid.Column>
      </Grid>

      </Form>

    </div>
    )
  }
}

export default LoginForm
