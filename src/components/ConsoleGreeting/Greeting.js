import React from 'react'

function getFriendlyMessage(nameString) {
  let messages = [
    `Hello ${nameString}, it's good to see you.`,
    `sup ${nameString}`,
    `hi there ${nameString}, you look awesome today!`,
    `hi there ${nameString}, you spectacular human being you!`,
    `you look awesome today ${nameString}!`,
    `hellllooooooo ${nameString}!`,
    `Hey ${nameString}, you sexy beast!`,
    `Can you keep a secret, ${nameString}? You're my favorite!`,
    `Nothing to see here, ${nameString}.`,
    `Hey! Get your mind out of the gutter, ${nameString}!`,
    `My eyes are up here! jk ${nameString} i luv u`,
    `wtf are you lookin at, ${nameString}?!`,
    `welcome to my safe space, ${nameString}`,
    `have i told you lately that i love you, ${nameString}?`,
    `welcome to my world, ${nameString}...`,
  ]
  var randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return randomMessage
}


class Greeting extends React.PureComponent { //PureComponent only renders once...
  render() {
    // console.info("%cThis is green text on a yellow background.", "color:green; background-color:yellow");
    // console.info(`%chi there ${this.props.current_user}, you spectacular human being you!`, "color:yellow; background-color:purple")
    console.info( getFriendlyMessage(this.props.current_user) ) //not overwriting console.info...
    return null;
  }
}

export default Greeting
