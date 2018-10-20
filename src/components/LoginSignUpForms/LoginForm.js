import React from 'react'

import { Link } from 'react-router-dom'

import { Form } from 'semantic-ui-react'


class LoginForm extends React.Component {
  constructor(props) {
    // console.log('LoginForm props: ', props);
    super(props)
    this.state = {
      name: '', //default
      password: '', //default

      touched: {
        name: false,
        password: false,
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

//NOTE: update SignUpForm with same refactors as in LoginForm, and add pattern and title attributes to username input field!
  validateFormInputs(name, password) {
    //NOTE: if conditions below are met, input is INVALD
    let nameIsInvalid = (name.length < 3 || name.length > 15) //TRUE if username is empty OR greater than 15 characters (AKA if name.length is zero, nameIsInValid is true...)
    let passwordIsInvalid = (password.length === 0) //TRUE if password is empty
    let errorObject = {
      name: nameIsInvalid, //true if invalid
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
    const errorsObject = this.validateFormInputs(this.state.name, this.state.password)
    // const isDisabled = Object.keys(errors).some(x => errors[x])
    const isDisabled = this.checkIfDisabled(errorsObject)
    return !isDisabled
  }

  render() {
    // console.log('LoginForm state: ', this.state)
    // console.log('LoginForm props: ', this.props)
    const errorsObject = this.validateFormInputs(this.state.name, this.state.password)
    const isDisabled = this.checkIfDisabled(errorsObject)

    const shouldMarkError = (field) => {
      // console.warn('000. shouldMarkError, field: ', field)
      const hasError = errorsObject[field]
      // console.warn('shouldMarkError, hasError: ', hasError)
      const shouldShow = this.state.touched[field]
      // console.warn('shouldMarkError, shouldShow: ', shouldShow)
      let result = hasError ? shouldShow : false
      // console.log('shouldMarkError, field and result is: ', field, result)
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

          <p className="center">
            New to Word Nerds?{` `}
            <Link
              to={`/register`}
              className='hoverYellow'>
               Sign up now.
            </Link>
          </p>

          <Form.Field>
            <div className={(this.props.nameOrPasswordError === true) ? 'nameOrPasswordError' : 'hidden'}>
              Incorrect Username or Password.
            </div>
          </Form.Field>

          <Form.Field>
            <label>
              Username
            </label>
            <input
              id='usernameInput'
              className={shouldMarkError('name') ? 'error' : ''}
              placeholder='Username'
              // autoFocus
              value={this.state.name}
              onChange={ e => this.handleChange('name', e.target.value)}
              onBlur={this.handleBlur('name')}
              pattern="[a-zA-Z][a-zA-Z0-9-_]+" //NOTE: need + sign at the end of pattern!
              //Only letters (either case), numbers, and the underscore.
              title="A username can only contain letters (upper and lowercase), numbers, and the underscore. Username must start with a letter and must be between 3 and 15 characters long."
            />
            <span className={shouldMarkError('name') ? 'error' : 'hidden'}>
              invalid name
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
