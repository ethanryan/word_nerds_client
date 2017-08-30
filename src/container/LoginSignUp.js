import React from 'react'

import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'
import nerdy from '../components/nerdy.gif'

import { Grid } from 'semantic-ui-react'

import { Switch, Route, Link } from 'react-router-dom'

class LoginSignUp extends React.Component {

  render() {
    console.log('LogInSignup props', this.props)

    return(
      <div>

      <Grid>
        <Grid.Row>


          <Grid.Column width={8}>
          <br></br>
          <br></br>
          <br></br>
            <div className="nerdy">
              <img src={nerdy} className="nerdy" alt="nerdy gif"/>

              <h1 className="hoverYellow pulse-grow">Word Nerds</h1>
            </div>

          </Grid.Column>

          <Grid.Column width={8}>

          <h1 className='login-signup-link-options'>
          <Link to={`/login`} className='hoverYellow'>Login</Link>  |  <Link to={`/register`} className='hoverYellow'>Sign Up</Link>
          </h1>

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
          </Grid.Column>
        </Grid.Row>
      </Grid>

      </div>
    )
  }
}

export default LoginSignUp
