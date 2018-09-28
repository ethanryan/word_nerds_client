import React from 'react'

class Greeting extends React.PureComponent { //PureComponent only renders once...
  render() {
    console.info(`Hi ${this.props.current_user} you sexy beast!`) //not overwriting console.info...
    // console.info("%cThis is green text on a yellow background.", "color:green; background-color:yellow");
    return null;
  }
}

export default Greeting
