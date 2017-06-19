import React from 'react'

import axios from 'axios'

import {withRouter} from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: ''
    }
  }

  handleSignUp() {
    // axios.post('http://localhost:3000/api/v1/users', {
    axios.post('http://localhost:3000/users', {
      user: {
        name: this.state.name,
        password: this.state.password
      }
    }).then(res => { console.log('Sign Up Response: ', res )
    localStorage.setItem("token", res.data.token)
    this.props.history.push('/')
  }).catch( e => console.log('error from handleSignUp', e.response) )
}

handleChange(prop, value) {
  this.setState({
    [prop]: value
  })
}

handleSubmit(e) {
  e.preventDefault()
  this.handleSignUp()
}

render() {
  return(
    <div>
      <form onSubmit={ e => this.handleSubmit(e)}>

        <label>Name</label>
        <input type='text' value={this.state.name} onChange={ e => this.handleChange('name', e.target.value)}/>

        <label>Password</label>
        <input type='password' value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)}/>

        <input type='submit' value='Sign Up'/>
      </form>
      <br></br><br></br>
    </div>
  )
}
}

// SignUp.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default withRouter(SignUp)
