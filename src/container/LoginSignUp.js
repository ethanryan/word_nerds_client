import React from 'react'

import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'
import nerdy from '../components/nerdy.gif'

import { Grid, Segment } from 'semantic-ui-react'

import { Switch, Route, Link } from 'react-router-dom'

class LoginSignUp extends React.Component {

  render() {
    // console.log('LogInSignUp props', this.props)

    return(
      <div>

        <Grid>
          <Grid.Row>

            <Grid.Column width={8}>

              <div className="nerdy">
                <img src={nerdy} className="nerdy" alt="nerdy gif"/>

                <h1 className="hoverYellow pulse-grow">Word Nerds</h1>
              </div>


              <div className="aboutWordNerds">
                <Segment>
                  <p>
                    Word Nerds is a short story generator that creates a unique, 500-word short story with the click of a button.
                  </p>
                  <p>
                    Like Mad Libs, or like an exquisite corpse, your story won't always make logical sense, but it'll always be entertaining.
                    And it'll be a decent first draft, giving you plenty of text to edit.
                  </p>
                  <p>
                    Everyone has a story to tell. Start telling yours today!
                  </p>
                </Segment>
              </div>

            </Grid.Column>


            <Grid.Column width={8}>

              <h1 className='login-signup-link-options'>
                <Link to={`/login`} className='hoverYellow'>Login</Link>  |  <Link to={`/register`} className='hoverYellow'>Sign Up</Link>
              </h1>


              <Switch>

                <Route exact path='/register'
                render={() => <SignUpForm
                  users={this.props.users} //delete this after improving newUsername validation...

                  handleSignUp={this.props.handleSignUp}
                  usernameExistsError={this.props.usernameExistsError}
                />} />

                <Route path='/'
                render={() => <LoginForm
                  handleLogin={this.props.handleLogin}
                  nameOrPasswordError={this.props.nameOrPasswordError}
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
