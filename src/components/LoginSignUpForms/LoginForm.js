import React from 'react'

import { Link } from 'react-router-dom'

import { Form } from 'semantic-ui-react'


class LoginForm extends React.Component {
  constructor(props) {
    // console.log('LoginForm props: ', props);
    super(props)
    this.state = {
      username: '', //default
      password: '', //default
      touched: {
        username: false,
        password: false,
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validateFormInputs(username, password) {
    //NOTE: if conditions below are met, input is INVALD
    let usernameIsInvalid = (username.length < 3 || username.length > 15) //TRUE if username is empty OR greater than 15 characters (AKA if username.length is zero, usernameIsInValid is true...)
    let passwordIsInvalid = (password.length === 0) //TRUE if password is empty
    let errorObject = {
      username: usernameIsInvalid, //true if invalid
      password: passwordIsInvalid, //true if invalid
    }
    // console.log('validateFormInputs called, errorObject is: ', errorObject)
    return errorObject
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    })
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if ( !this.canBeSubmitted() ) {
      return //if the form can't be submitted, return to the page
    }
    this.props.handleLogin(this.state) //passing state as parms to handleLogin in StoryContainer
  }

  checkIfDisabled(errorsObject) {
    let trueOrFalse = Object.keys(errorsObject).some(eachKey => errorsObject[eachKey]) //true or false... true if any errors[key] equals true
    return trueOrFalse
  }

  canBeSubmitted() {
    const errorsObject = this.validateFormInputs(this.state.username, this.state.password)
    const isDisabled = this.checkIfDisabled(errorsObject)
    return !isDisabled
  }

  render() {
    // console.log('LoginForm state: ', this.state)
    // console.log('LoginForm props: ', this.props)
    const errorsObject = this.validateFormInputs(this.state.username, this.state.password)
    const isDisabled = this.checkIfDisabled(errorsObject)

    const shouldMarkError = (field) => {
      const hasError = errorsObject[field]
      const shouldShow = this.state.touched[field]
      let result = hasError ? shouldShow : false
      return result
    }

    return (
      <div className="LoginSignUp-divs">

        <Form
          onSubmit={this.handleSubmit}
          className="LoginForm-orange">

          <h1 className="center-h1">
            Log in to Word Nerds
          </h1>

          <p className="center call-to-action">
            New to Word Nerds?{` `}
            <Link
              to={`/register`}
              className='hoverYellow'>
               Sign up now.
            </Link>
          </p>

          <Form.Field>
            <div className={(this.props.usernameOrPasswordError === true) ? 'usernameOrPasswordError' : 'hidden'}>
              Incorrect Username or Password.
            </div>
          </Form.Field>

          <Form.Field>
            <label>
              Username
            </label>
            <input
              id='usernameInput'
              className={shouldMarkError('username') ? 'error' : ''}
              placeholder='Username'
              // autoFocus
              value={this.state.username}
              onChange={(e) => this.handleChange('username', e.target.value)}
              onBlur={this.handleBlur('username')}
              pattern="[a-zA-Z][a-zA-Z0-9-_]+" //NOTE: need + sign at the end of pattern! Only letters (either case), numbers, and the underscore.
              title="A username can only contain letters (upper and lowercase), numbers, and the underscore. Username must start with a letter and must be between 3 and 15 characters long."
            />
            <span className={shouldMarkError('username') ? 'error' : 'hidden'}>
              invalid username
            </span>
          </Form.Field>


          <Form.Field>
            <label>Password</label>
            <input
              id='passwordInput'
              type='password'
              className={shouldMarkError('password') ? 'error' : ''}
              placeholder='Password'
              value={this.state.password}
              onChange={ e => this.handleChange('password', e.target.value)}
              onBlur={this.handleBlur('password')}
            />
            <span className={shouldMarkError('password') ? 'error' : 'hidden'}>
              invalid password
            </span>
          </Form.Field>

          <Form.Button
            content='Log In'
            type='submit'
            primary
            fluid
            disabled={isDisabled}
          />

        </Form>
      </div>
    )
  }
}

export default LoginForm
