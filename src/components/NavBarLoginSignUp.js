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

        <Link to="/">
          <Menu.Item
            name='Word Nerds'
            active={activeItem === 'Word Nerds'}
            color={'purple'}
            onClick={this.handleItemClick}
          />
        </Link>

        <Menu.Menu position='right'>

          <Link to={`/login`}>
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              color={'purple'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to={`/register`}>
            <Menu.Item
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              color={'purple'}
              onClick={this.handleItemClick}
            />
          </Link>

        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}

export default NavBar
