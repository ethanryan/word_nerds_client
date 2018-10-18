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

  validateFormInputs(name, password) {
    // true means invalid
    //NOTE: fixing this, making it so if condition is met, input is INVALD
    // return {
    //   name: name.length === 0, //true if username is empty
    //   password: password.length === 0, //true if password is empty
    // }
    let nameIsInvalid = (name.length === 0) //TRUE if username is empty (AKA if name.length is zero, nameIsInValid is true...)
    let passwordIsInvalid = (password.length === 0) //TRUE if password is empty
    let errorObject = {
      name: nameIsInvalid, //true if username is empty
      password: passwordIsInvalid, //true if password is empty
    }
    console.log('validateFormInputs called, errorObject is: ', errorObject)
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
    console.log('handleSubmit called from LoginForm')
    e.preventDefault()
    if ( !this.canBeSubmitted() ) {
      return //if the form can't be submitted, return to the page
    }
    //NOTE: commenting out below to see result of canBeSubmitted in log....
    // this.props.handleLogin(this.state) //passing state as parms to handleLogin in StoryContainer
  }

  checkIfDisabled(errorsObject) {
    let trueOrFalse = Object.keys(errorsObject).some(eachKey => errorsObject[eachKey]) //true or false... true if any errors[key] equals true
    // console.warn('777777 >>>>>> checkIfDisabled, trueOrFalse is: ', trueOrFalse)
    return trueOrFalse
  }

  canBeSubmitted() {
    const errors = this.validateFormInputs(this.state.name, this.state.password)
    const isDisabled = Object.keys(errors).some(x => errors[x])
    return !isDisabled
  }

  render() {
    // console.log('LoginForm state: ', this.state)
    // console.log('LoginForm props: ', this.props)

    const errorsObject = this.validateFormInputs(this.state.name, this.state.password)
    // console.log('------>>>>>> render, errorsObject: ', errorsObject)
    // const isDisabled = Object.keys(errorsObject).some(x => errorsObject[x]) //true or false
    const isDisabled = this.checkIfDisabled(errorsObject)

    const shouldMarkError = (field) => {
      console.warn('000. shouldMarkError, field: ', field)
      const hasError = errorsObject[field]
      console.warn('shouldMarkError, hasError: ', hasError)
      const shouldShow = this.state.touched[field]
      console.warn('shouldMarkError, shouldShow: ', shouldShow)
      let result = hasError ? shouldShow : false
      console.log('shouldMarkError, field and result is: ', field, result)
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
            <div className={this.props.nameOrPasswordError === true ? 'nameOrPasswordError' : 'hidden'}>
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
