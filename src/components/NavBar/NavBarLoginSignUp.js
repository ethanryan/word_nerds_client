import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


class NavBar extends Component {
  constructor(props) {
    super(props)
  this.state = { activeItem: 'Word Nerds' }
}

  handleItemClick = (event, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

    <div>
      <Menu inverted secondary pointing color='yellow'>

          <Menu.Item
            as={Link} to="/"
            name='Word Nerds'
            active={activeItem === 'Word Nerds'}
            color={'purple'}
            onClick={this.handleItemClick}
          />

        <Menu.Menu position='right'>

            <Menu.Item
              as={Link} to="/login"
              name='Login'
              active={activeItem === 'Login'}
              color={'purple'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={Link} to="/register"
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              color={'purple'}
              onClick={this.handleItemClick}
            />

        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}

export default NavBar
