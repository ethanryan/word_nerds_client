import React from 'react'

import axios from 'axios'

import { withRouter } from 'react-router-dom'

import { Form } from 'semantic-ui-react'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: '',
      baseUrl: 'https://word-nerds-api.herokuapp.com'
    }
  }

  handleSignUp() {
    // axios.post('http://localhost:3000/api/v1/users', { //for reference
    // axios.post('http://localhost:3000/users', { //for running locally
    axios.post(`${this.state.baseUrl}/users`, { //for running on heroku
      user: {
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
    <div className="SignUpForm-blue">

    <h1>New User - Sign Up Form</h1>

    <Form onSubmit={ e => this.handleSubmit(e)}>
      <Form.Field width={6}>
        <label>Username</label>
        <input placeholder='Username' autoFocus
          value={this.state.name}
          onChange={ e => this.handleChange('name', e.target.value)}
        />
      </Form.Field>
      <Form.Field width={6}>
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
