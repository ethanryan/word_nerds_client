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
        <Menu.Item name='home' active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        {/* <Route path="/" component={StoryContainer}/> */}
        
          {/* Route path='/' render={() => <CreateStoryForm /> } */}

        {/* <Menu.Item name='create story' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='all stories' active={activeItem === 'friends'} onClick={this.handleItemClick} /> */}
        <Menu.Menu position='right' >
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}

export default NavBar



////

// import React from 'react'
//
// import { Menu } from 'semantic-ui-react'
//
// import { Link } from 'react-router-dom'
//
// const items = [
//   { key: 'editorials', active: true, name: 'Editorials' },
//   { key: 'review', name: 'Reviews' },
//   { key: 'events', name: 'Upcoming Events' },
// ]
//
// const NavBar = () => (
//   <Menu items={items} />
// )
//
// export default NavBar
//
// function NavBar(props) {
//
//     const colors = {
//       black: 'navbar-inverse',
//       white: 'navbar-default'
//     }
//
//   return (
//     // <div className="NavBar-yellow">
//     // <span>Word Nerds -- NavBar here, Login, Signup, etc.</span>
//     // </div>
//
//     <div class="ui three item menu">
//       <a class="active item">Editorials</a>
//       <a class="item">Reviews</a>
//       <a class="item">Upcoming Events</a>
//     </div>
//
//
//
//   )
// }
//
// export default NavBar



//////

// import React from 'react'
//
// import { Link } from 'react-router-dom'
//
// function NavBar(props){
//   const colors = {
//     black: 'navbar-inverse',
//     white: 'navbar-default'
//   }
//
//   return (
//     <nav className={`navbar ${colors[props.color]}`}>
//       <div className='container-fluid'>
//         <div className='navbar-header'>
//           <a className='navbar-brand'>
//             { props.title }
//           </a>
//         </div>
//
//         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//           <ul className="nav navbar-nav">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/login">Log In</Link></li>
//             <li><Link to="/students">Students</Link></li>
//             <li><Link to="/students/new">Add a Student</Link></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }
//
// export default NavBar
