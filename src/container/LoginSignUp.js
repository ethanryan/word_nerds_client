import React from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

class LoginSignUp extends React.Component {

  render() {
    console.log('LogInSignup props', this.props)

    return(
      <div>
        <SignUpForm
          // handleSignUp={this.props.handleSignUp}
        />
        <LoginForm handleLogin={this.props.handleLogin} />
        login as 'bob', password 'bob'
        signup form not working at the moment.
      </div>
    )
  }
}

export default LoginSignUp
