import React from 'react'

import { Link } from 'react-router-dom'

import { Form } from 'semantic-ui-react'


class LoginForm extends React.Component {
  constructor(props) {
    // console.log('LoginForm props: ', props);
    super(props)
    this.state = {
      name: '',
      password: '',

      touched: {
        name: false,
        password: false,
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validate(name, password) {
    // true means invalid, so our conditions got reversed
    return {
      name: name.length === 0, //true if username is empty
      password: password.length === 0, //true if password is empty
    }
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
    console.log('hangleSubmit called from LoginForm')
    e.preventDefault()
    this.props.handleLogin(this.state) //passing state as parms to handleLogin in StoryContainer
  }

  canBeSubmitted() {
    const errors = this.validate(this.state.name, this.state.password)
    const isDisabled = Object.keys(errors).some(x => errors[x])
    return !isDisabled
  }

  render() {
    // console.log('LoginForm state: ', this.state)
    // console.log('LoginForm props: ', this.props)

    const errors = this.validate(this.state.name, this.state.password)
    const isDisabled = Object.keys(errors).some(x => errors[x])

    const shouldMarkError = (field) => {
      const hasError = errors[field]
      const shouldShow = this.state.touched[field]
      return hasError ? shouldShow : false
    }

    return (
      <div className="LoginSignUp-divs">

        <Form onSubmit={this.handleSubmit} className="LoginForm-orange">

          <h1 className="center-h1">Log in to Word Nerds</h1>

          <p className="center">New to Word Nerds? <Link to={`/register`} className='hoverYellow'>Sign up now.</Link></p>

          <Form.Field>
            <div className={this.props.nameOrPasswordError === true ? 'nameOrPasswordError' : 'hidden'}
              >Incorrect Username or Password.</div>
            </Form.Field>

            <Form.Field>
              <label>Username</label>
              <input
                id='usernameInput'
                className={shouldMarkError('name') ? 'error' : ''}
                placeholder='Username'
                // autoFocus
                value={this.state.name}
                onChange={ e => this.handleChange('name', e.target.value)}
                onBlur={this.handleBlur('name')}
              />
              <span className={shouldMarkError('name') ? 'error' : 'hidden'}
                >invalid name</span>
              </Form.Field>


              <Form.Field>
                <label>Password</label>
                <input
                  id='passwordInput'
                  className={shouldMarkError('password') ? 'error' : ''}
                  placeholder='Password'
                  value={this.state.password}
                  onChange={ e => this.handleChange('password', e.target.value)}
                  onBlur={this.handleBlur('password')}
                />
                <span className={shouldMarkError('password') ? 'error' : 'hidden'}
                  >invalid password</span>
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
