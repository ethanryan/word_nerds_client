import React from 'react'

import { Switch, Route } from 'react-router-dom'

import SignUpForm from '../components/LoginSignUpForms/SignUpForm'
import LoginForm from '../components/LoginSignUpForms/LoginForm'
import Sentence from '../components/Sentence/Sentence'
import nerdyMP4 from '../components/assets/nerdy.mp4'

import { Grid, Segment } from 'semantic-ui-react'

class LoginSignUp extends React.Component {
  render() {
    // console.log('LogInSignUp props', this.props)
    return (
      <div>
        <Grid stackable reversed="mobile" columns={2}>
          <Grid.Column width={8}>
            <div className="nerdy-login">
              <video autoPlay loop muted playsInline className="nerdy">
                <source src={nerdyMP4} type="video/mp4" />
              </video>

              <h1 className="hoverYellow pulse-grow">Word Nerds</h1>
            </div>

            <div className="aboutWordNerds">
              <Segment raised>
                <p>
                  Word Nerds is a short story generator that creates a unique,
                  500-word short story with the click of a button.
                </p>
                <p>
                  Like Mad Libs, or like an exquisite corpse, your story won't
                  always make logical sense, but it'll always be entertaining.
                  And it'll be a decent first draft, giving you plenty of text
                  to edit.
                </p>
                <p>Everyone has a story to tell. Start telling yours today!</p>
              </Segment>
            </div>
          </Grid.Column>

          <Grid.Column width={8}>
            <div className="login-signup-link-options">
              <Switch>
                <Route
                  exact
                  path="/register"
                  render={() => (
                    <SignUpForm
                      handleSignUp={this.props.handleSignUp}
                      usernameExistsError={this.props.usernameExistsError}
                    />
                  )}
                />

                <Route
                  path="/"
                  render={() => (
                    <LoginForm
                      handleLogin={this.props.handleLogin}
                      usernameOrPasswordError={
                        this.props.usernameOrPasswordError
                      }
                    />
                  )}
                />
              </Switch>
            </div>

            <div className="login-signup-sentence">
              <Sentence />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginSignUp
