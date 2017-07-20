import React from 'react'

import axios from 'axios'

import { withRouter } from 'react-router-dom'

import { Form } from 'semantic-ui-react'

const baseUrl = 'https://word-nerds-api.herokuapp.com'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      email_address: '',
      name: '',
      password: ''
    }
  }

  handleSignUp() {
    // axios.post('http://localhost:3000/api/v1/users', { //for reference
    // axios.post('http://localhost:3000/users', { //for running locally
    axios.post(`${baseUrl}/users`, { //for running on heroku
      user: {
        email_address: this.state.email_address,
        name: this.state.name,
        password: this.state.password
      }
    }).then(res => { console.log('Sign Up Response: ', res )
    localStorage.setItem("token", res.data.token)
    this.props.history.push('/')
  }).catch( e => console.log('error from handleSignUp', e.response) )
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
