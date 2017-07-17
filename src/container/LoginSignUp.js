import React from 'react'

import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

import { Switch, Route, Link } from 'react-router-dom'

class LoginSignUp extends React.Component {

  render() {
    console.log('LogInSignup props', this.props)

    return(
      <div>

        <Switch>

          <Route exact path='/register'
            render={() => <SignUpForm
              // handleSignUp={this.props.handleSignUp}
            />} />

          <Route path='/'
            render={() => <LoginForm
              handleLogin={this.props.handleLogin}
            />} />

        </Switch>

        <h1 className='login-signup-link-options'>
          <Link to={`/login`}>Login</Link>  |  <Link to={`/register`}>Sign Up</Link>
        </h1>

        <br></br>

      </div>
    )
  }
}

export default LoginSignUp
