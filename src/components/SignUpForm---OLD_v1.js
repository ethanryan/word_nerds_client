import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

import * as api from '../api'

class SignUp extends React.Component {
  state = {
    email_address: '',
    name: '',
    password: ''
  }

  handleSignUp() {
    api.signUp(this.state.name, this.state.password)
      .then(res => {
        localStorage.setItem("jwt", res.token)
        this.props.history.push('/')
      })
  }

handleChange(prop, value) {
  this.setState({
    [prop]: value
  })
}

handleSubmit(e) {
  e.preventDefault()
  this.handleSignUp()
}

render() {
  return(
    <div className="LoginSignUp-divs">

    <Form onSubmit={ e => this.handleSubmit(e)} className="SignUpForm-blue">

      <h1 className="center-h1">New User - Sign Up Form</h1>

      <Form.Field>
        <label>Email Address</label>
        <input placeholder='Email Address' autoFocus
          value={this.state.email_address}
          onChange={ e => this.handleChange('email_address', e.target.value)}
        />
      </Form.Field>

      <Form.Field>
        <label>Username</label>
        <input placeholder='Username'
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

      <Form.Button content='Sign Up' color='green' type="submit" />

    </Form>
  </div>
  )
}
}

// SignUp.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default withRouter(SignUp)
