import React from 'react'

function getFriendlyMessage(nameString) {
  let messages = [
    `Hello ${nameString}, it's good to see you.`,
    `sup ${nameString}`,
    `hi there ${nameString}, you look awesome today!`,
    `hi there ${nameString}, you spectacular human being you!`,
    `you look awesome today ${nameString}!`,
    `hellllooooooo ${nameString}!`,
    `Hey ${nameString}, how's life?`,
    `Can you keep a secret, ${nameString}? You're my favorite!`,
    `Nothing to see here, ${nameString}.`,
    `Congratulations, ${nameString}! You've discovered the console ;)`,
    `have i told you lately that i love you, ${nameString}?`,
    `i knew you'd find this Easter egg eventually, ${nameString}...`,
  ]
  var randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return randomMessage
}


class Greeting extends React.PureComponent { //PureComponent only renders once...
  render() {
    console.info( getFriendlyMessage(this.props.current_user) )
    return null;
  }
}

export default Greeting
