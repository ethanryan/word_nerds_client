import React from 'react'

import { Button, Segment } from 'semantic-ui-react'

let subjects = ["dog", "cat", "mouse", "lizard", "alien"]

// function flipNoun() {
//   var target = document.getElementById('noun')
//   var noun = nouns[Math.floor(Math.random() * nouns.length)];
//   var clone = target.cloneNode(true)
//   clone.textContent = noun
//   target.replaceWith(clone)
// }

function getRandomSubject() {
  var randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  //console.log('randomSubject is: ', randomSubject)
  return randomSubject
}

function replaceTargetWithRandomWord(target, randomWord) {
  console.log('calling replaceTargetWithRandomWord with: ', target, randomWord)
  var clone = target.cloneNode(true)
  clone.textContent = randomWord
  target.replaceWith(clone)
}

function flipSubject() {
  console.log('flipSubject clicked!')
  var target = document.getElementById('subject') //reaching into the DOM here, replace this line with state / props...
  var randomSubject = getRandomSubject()
  replaceTargetWithRandomWord(target, randomSubject)
}
// function flipSubject() {
//   console.log('flipSubject clicked!')
//   var target = document.getElementById('subject') //reaching into the DOM here, replace this line with state / props...
//   var randomSubject = getRandomSubject()
//   var clone = target.cloneNode(true)
//   clone.textContent = randomSubject
//   target.replaceWith(clone)
// }

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
        />
        <Button
          content='Flip Object'
        />

  {/*
  <input type="button" class="flipButton flipVerb" data-target="verb" value="Flip Verb">
  <input type="button" class="flipButton flipNoun" data-target="noun" value="Flip Noun">
  <input type="button" class="flipButton flipPredicate" data-target="predicate" value="Flip Predicate"> */}


      </Segment>
    </div>
  )
}

export default Sentence
