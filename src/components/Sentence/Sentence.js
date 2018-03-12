import React from 'react'

import { Button, Segment } from 'semantic-ui-react'

let subjects = ["dog", "cat", "mouse", "lizard", "alien"]

let verbs = ["eats", "sleeps with", "fucks", "kills", "likes", "loves", "tolerates"]

let objects = ["the moon", "the house", "the sun", "the galaxy"]

function getRandomWord(wordsArray) {
  var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
  return randomWord
}

function replaceTargetWithRandomWord(target, randomWord) {
  // console.log('calling replaceTargetWithRandomWord with: ', target, randomWord)
  var clone = target.cloneNode(true)
  clone.textContent = randomWord
  target.replaceWith(clone)
}

function flipWord(string, array) {
  var target = document.getElementById(string) //reaching into the DOM here, replace this line with state / props...
  var randomWord = getRandomWord(array)
  replaceTargetWithRandomWord(target, randomWord)
}


const Sentence = (props) => {

  // console.log('hello from Sentence')
  return(

    <div key={props.id} className='center'>
      <Segment raised>

        The <span id="subject" className="blinkSubject">nerd</span> <span id="verb" className="blinkVerb">tells</span>  <span id="object" className="blinkObject">the story.</span>

        <br></br>
        <br></br>

        <div>
          <Button
            content='Flip Subject'
            basic
            mini
            color='red'
            onClick={() => { flipWord('subject', subjects) } }
          />
          <Button
            content='Flip Verb'
            basic
            mini
            color='yellow'
            onClick={() => { flipWord('verb', verbs) } }
          />
          <Button
            content='Flip Object'
            basic
            mini
            color='green'
            onClick={() => { flipWord('object', objects) } }
          />
        </div>

      </Segment>
    </div>
  )
}

export default Sentence
