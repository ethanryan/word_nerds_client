import React from 'react'

import { Link } from 'react-router-dom'

import { Form } from 'semantic-ui-react'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      touched: {
        email: false,
        username: false,
        password: false,
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validateFormInputs(email, username, password) {
    //NOTE: if conditions below are met, input is INVALD
    let emailIsInvalid = email.length === 0
    let usernameIsInvalid = username.length < 3 || username.length > 15 //TRUE if username is empty OR greater than 15 characters (AKA if username.length is zero, usernameIsInValid is true...)
    let passwordIsInvalid = password.length === 0 //TRUE if password is empty
    let errorObject = {
      email: emailIsInvalid, //true if invalid
      username: usernameIsInvalid, //true if invalid
      password: passwordIsInvalid, //true if invalid
    }
    console.log('validateFormInputs called, errorObject is: ', errorObject)
    return errorObject
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value,
    })
  }

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    })
  }

  handleSubmit(e) {
    // console.log('handleSubmit called from SignUpForm')
    e.preventDefault()
    if (!this.canBeSubmitted()) {
      return //if the form can't be submitted, return to the page
    }
    this.props.handleSignUp(this.state) //passing state as parms to handleSignUp in StoryContainer
  }

  checkIfDisabled(errorsObject) {
    let trueOrFalse = Object.keys(errorsObject).some(
      eachKey => errorsObject[eachKey]
    ) //true or false... true if any errors[key] equals true
    return trueOrFalse
  }

  canBeSubmitted() {
    const errorsObject = this.validateFormInputs(
      this.state.email,
      this.state.username,
      this.state.password
    )
    const isDisabled = this.checkIfDisabled(errorsObject)
    return !isDisabled
  }

  render() {
    // console.log('props from SignUpForm: ', this.props)
    // console.log('state from SignUpForm: ', this.state)
    const errorsObject = this.validateFormInputs(
      this.state.email,
      this.state.username,
      this.state.password
    )
    const isDisabled = this.checkIfDisabled(errorsObject)

    const shouldMarkError = field => {
      const hasError = errorsObject[field]
      const shouldShow = this.state.touched[field]
      let result = hasError ? shouldShow : false
      return result
    }

    return (
      <div className="LoginSignUp-divs">
        <Form onSubmit={this.handleSubmit} className="SignUpForm-blue">
          <h1 className="center-h1">Join Word Nerds today.</h1>

          <p className="center call-to-action">
            Already use Word Nerds?{` `}
            <Link to={`/login`} className="hoverYellow">
              Log in.
            </Link>
          </p>

          <Form.Field>
            <div
              className={
                this.props.usernameExistsError === true
                  ? 'usernameExistsError'
                  : 'hidden'
              }
            >
              Username already taken. Must have unique username.
            </div>
          </Form.Field>

          <Form.Field>
            <label>Email Address</label>
            <input
              id="emailAddressInput"
              type="email"
              required
              className={shouldMarkError('email') ? 'error' : ''}
              placeholder="Email Address"
              autoFocus
              value={this.state.email}
              onChange={e => this.handleChange('email', e.target.value)}
              onBlur={this.handleBlur('email')}
            />
            <span className={shouldMarkError('email') ? 'error' : 'hidden'}>
              invalid email
            </span>
          </Form.Field>

          <Form.Field>
            <label id="username">Username</label>
            <input
              id="usernameInput"
              aria-labelledby="username"
              className={shouldMarkError('username') ? 'error' : ''}
              placeholder="Username"
              value={this.state.username}
              onChange={e => this.handleChange('username', e.target.value)}
              onBlur={this.handleBlur('username')}
              pattern="[a-zA-Z][a-zA-Z0-9-_]+" //NOTE: need + sign at the end of pattern! Only letters (either case), numbers, and the underscore.
              title="A username can only contain letters (upper and lowercase), numbers, and the underscore. Username must start with a letter and must be between 3 and 15 characters long."
            />
            <span className={shouldMarkError('username') ? 'error' : 'hidden'}>
              invalid username
            </span>
          </Form.Field>

          <Form.Field>
            <label id="password">Password</label>
            <input
              id="passwordInput"
              aria-labelledby="password"
              type="password"
              className={shouldMarkError('password') ? 'error' : ''}
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.handleChange('password', e.target.value)}
              onBlur={this.handleBlur('password')}
            />
            <span className={shouldMarkError('password') ? 'error' : 'hidden'}>
              invalid password
            </span>
          </Form.Field>

          <Form.Button
            content="Sign Up"
            color="green"
            type="submit"
            fluid
            disabled={isDisabled}
          />
        </Form>
      </div>
    )
  }
}

export default SignUp
