import React from 'react'

import { Button, Segment } from 'semantic-ui-react'

let subjects = ["dog", "cat", "mouse", "lizard", "alien"]

let verbs = ["eats", "sleeps with", "fucks", "kills", "likes", "loves", "tolerates"]

let objects = ["the moon", "the house", "the sun", "the galaxy"]

function getRandomSubject() {
  var randomSubject = subjects[Math.floor(Math.random() * subjects.length)]
  return randomSubject
}

function getRandomVerb() {
  var randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
  return randomVerb
}

function getRandomObject() {
  var randomObject = objects[Math.floor(Math.random() * objects.length)]
  return randomObject
}

function replaceTargetWithRandomWord(target, randomWord) {
  console.log('calling replaceTargetWithRandomWord with: ', target, randomWord)
  var clone = target.cloneNode(true)
  clone.textContent = randomWord
  target.replaceWith(clone)
}

function flipSubject() {
  var target = document.getElementById('subject') //reaching into the DOM here, replace this line with state / props...
  var randomSubject = getRandomSubject()
  replaceTargetWithRandomWord(target, randomSubject)
}

function flipVerb() {
  var target = document.getElementById('verb') //reaching into the DOM here, replace this line with state / props...
  var randomVerb = getRandomVerb()
  replaceTargetWithRandomWord(target, randomVerb)
}

function flipObject() {
  var target = document.getElementById('object') //reaching into the DOM here, replace this line with state / props...
  var randomObject = getRandomObject()
  replaceTargetWithRandomWord(target, randomObject)
}


const Sentence = (props) => {

  console.log('hello from Sentence')
  return(

    <div key={props.id}>
      <Segment>

        The <span id="subject" className="blinkSubject">nerd</span> <span id="verb" className="blinkVerb">tells</span>  <span id="object" className="blinkObject">the story.</span>

        <br></br>
        <br></br>

        <Button
          content='Flip Subject'
          basic
          color='red'
          onClick={() => { flipSubject() } }
        />
        <Button
          content='Flip Verb'
          basic
          color='yellow'
          onClick={() => { flipVerb() } }
        />
        <Button
          content='Flip Object'
          basic
          color='green'
          onClick={() => { flipObject() } }
        />

      </Segment>
    </div>
  )
}

export default Sentence
