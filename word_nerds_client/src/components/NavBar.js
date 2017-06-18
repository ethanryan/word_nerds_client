import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

// Word Nerds -- NavBar here, Login, Signup

// const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal']

class NavBar extends Component {
  // state = { activeA: colorsA[0] }
  state = { activeItem: 'home' }

  // handleAClick = (event, { name }) => this.setState({ activeA: name })

  handleItemClick = (event, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeA } = this.state
    const { activeItem } = this.state

    return (
      <div>

      {/* <div>
        <Menu inverted>
        {colorsA.map(c => (
          <Menu.Item key={c} name={c} active={activeA === c} color={c} onClick={this.handleAClick} />
        ))}
      </Menu>
    </div> */}

    <div>

      <Menu
        // secondary color={'yellow'}
        inverted>

        <Link to="/">
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
      </Link>

        <Link to="/stories"><Menu.Item name='stories' active={activeItem === 'stories'} onClick={this.handleItemClick} /></Link>


        <Menu.Menu position='right' >
          {/* <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /> */}
          <Link to="/"><Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.props.logout} /></Link>

          {/* <Link to="/" onClick={this.props.logout}>Logout</Link> */}
        </Menu.Menu>
      </Menu>
    </div>

  </div>
    )
  }
}

export default NavBar
