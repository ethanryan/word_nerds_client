import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

import * as api from '../api'

function validate(email, username, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0, //true if email is empty
    username: username.length === 0, //true if username is empty
    password: password.length === 0, //true if password is empty
  };
}

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',

      touched: {
        email: false,
        username: false,
        password: false,
      },
    };
  }

  handleSignUp() {
    api.signUp(this.state.email, this.state.username, this.state.password) //add email here!!!!! <<<<<<-----!!!!
      .then(res => {
        localStorage.setItem('jwt', res.token)
        this.props.history.push('/')
      })
  }

handleChange(prop, value) {
  this.setState({
    [prop]: value
  })
}


  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    if ( !this.canBeSubmitted() ) {
      return //if the form can't be sumitted, return to the page
    }
    this.handleSignUp()
  }

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.username, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.email, this.state.username, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <div className='LoginSignUp-divs'>

      <Form onSubmit={ e => this.handleSubmit(e)} className='SignUpForm-blue'>

        <h1 className='center-h1'>New User - Sign Up Form</h1>

      <Form.Field>
        <label>Email Address</label>
        <input
          className={shouldMarkError('email') ? 'error' : ''}
          placeholder='Email Address'
          autoFocus
          value={this.state.email}
          onChange={ e => this.handleChange('email', e.target.value)}
          onBlur={this.handleBlur('email')}
        />
        <span className={shouldMarkError('email') ? 'error' : 'hidden'}
          >invalid email</span>
      </Form.Field>

        <Form.Field>
          <label>Username</label>
          <input
            className={shouldMarkError('username') ? 'error' : ''}
            placeholder='Username'
            value={this.state.username}
            onChange={ e => this.handleChange('username', e.target.value)}
            onBlur={this.handleBlur('username')}
          />
          <span className={shouldMarkError('username') ? 'error' : 'hidden'}
            >invalid username</span>
        </Form.Field>


        <Form.Field>
          <label>Password</label>
          <input
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
          content='Sign Up'
          color='green'
          type='submit'
          disabled={isDisabled} />

    </Form>
    </div>
    )
  }
}


export default withRouter(SignUp)
