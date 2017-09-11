import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

// Word Nerds -- NavBar here, Login, Signup

// const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal']

class NavBar extends Component {
  constructor(props) {
    super(props)
  // state = { activeA: colorsA[0] }
  this.state = { activeItem: 'home' }
}


getInitialState() {
  return {
    bgColor: 'red'
  }
}

  // handleAClick = (event, { name }) => this.setState({ activeA: name })

  handleItemClick = (event, { name }) => this.setState({ activeItem: name, bgColor: 'blue' })

  render() {
    // const { activeA } = this.state
    const { activeItem } = this.state

    console.log('NavBar props: ', this.props);

    return (

    <div>

      <Menu inverted pointing secondary color={'purple'}>
        <Link to="/">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            // style={{backgroundColor:this.state.bgColor}}
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to="/stories">
          <Menu.Item
            name='stories'
            active={activeItem === 'stories'}
            // style={{backgroundColor:this.state.bgColor}}
            onClick={this.handleItemClick}
          />
        </Link>


        <Menu.Menu position='right'>


          <Menu.Item
            name='Username here'
          />

          {/* <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /> */}
          <Link to="/">
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              // style={{backgroundColor:this.state.bgColor}}
              onClick={this.props.logout}
            />
          </Link>

          {/* <Link to="/" onClick={this.props.logout}>Logout</Link> */}
        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}

export default NavBar
