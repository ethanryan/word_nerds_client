import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

import StoryContainer from '../container/StoryContainer'

import { Route, Link, Switch } from 'react-router-dom'


// Word Nerds -- NavBar here, Login, Signup

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="NavBar-yellow">
      <Menu secondary color={'green'} >
        <Link to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>

        <Menu.Menu position='right' >
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}

export default NavBar
