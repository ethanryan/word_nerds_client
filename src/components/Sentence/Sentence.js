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

function flipSubject() {
  console.log('flipSubject clicked!')
  var target = document.getElementById('noun') //reaching into the DOM here, replace this line with state / props...
  var subject = subjects[Math.floor(Math.random() * subjects.length)];
  var clone = target.cloneNode(true)
  clone.textContent = subject
  target.replaceWith(clone)
}

const Sentence = (props) => {

  console.log('hello from Sentence')
  return(

    <div key={props.id}>
      <Segment>

        The <span id="noun" className="blinkSubject">nerd</span> <span id="verb" className="blinkVerb">tells</span>  <span id="predicate" className="blinkObject">the story.</span>

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
