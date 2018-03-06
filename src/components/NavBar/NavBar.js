import React, { Component } from 'react'

import { Menu, Icon } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


class NavBar extends Component {
  constructor(props) {
    super(props)
    var pathname = this.props.location.pathname
    if (this.props.location.pathname === "/" || this.props.location.pathname === "") {
      pathname = "home"
    } else {
      pathname = pathname.slice(1) //slicing off "/" from pathname
    }

    this.state = {
      // activeItem: 'home' //default
      activeItem: pathname //default
    }
  }

  componentWillReceiveProps(nextProps) { //need this lifecycle method to update navbar activeItem on refresh
    // console.log('NavBar nextProps is: ', nextProps)
    // console.log('NavBar nextProps.location.pathname is: ', nextProps.location.pathname)
    if (this.props.location.pathname !== nextProps.location.pathname) {
      var pathname = nextProps.location.pathname
      if (nextProps.location.pathname === "/" || nextProps.location.pathname === "") {
        pathname = "home"
      } else {
        pathname = pathname.slice(1) //slicing off "/" from pathname
      }
      this.setState({
        activeItem: pathname,
      })
    }
  }

  handleItemClick = (event, { name }) => this.setState({
    activeItem: name
  })

  render() {
    const { activeItem } = this.state

    // console.log('NavBar state: ', this.state);
    // console.log('NavBar props: ', this.props);
    // console.log('NavBar props.location.pathname: ', this.props.location.pathname);

    // let current_user = this.state.current_user

    return (

      <div>
        <Menu inverted>

          <Menu.Item
            as={Link} to="/"
            name='home'
            active={activeItem === 'home'}
            color={'yellow'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link} to="/stories"
            name='stories'
            active={activeItem === 'stories'}
            color={'yellow'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link} to="/metadata"
            name='metadata'
            active={activeItem === 'metadata'}
            color={'yellow'}
            onClick={this.handleItemClick}
          />


          <Menu.Menu position='right'>

            <Menu.Item>
              <Icon name='user circle' />
              { `${this.props.current_user ? this.props.current_user : "user"}`}
              {/* {`User: ${current_user}`} */}
            </Menu.Item>

            <Menu.Item
              as={Link} to="/"
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.props.logout}
            />

          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar
