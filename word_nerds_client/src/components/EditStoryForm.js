import React, { Component } from 'react'

import { Form, Button } from 'semantic-ui-react'

// import Markov from './Markov'

// var randomNouns = ["dog", "cat", "mouse", "chair", "glass"]
// var randomVerbs = ["runs", "kills", "eats", "sleeps", "destroys"]

var randomNouns = [
  "The clock ", "The telephone ", "The sun ", "The light ", "The moon ", "The sky ", "The wind ", "The fool ", "The moment ", "The writing on the wall ", "The rope ", "The knife ", "The tension ", "A bird ", "A black cloud ", "A blank space ", "A chasm ", "A child ", "A cosmic force ", "A cruel, alien god ", "A dangerous thing ", "A dark room ", "A dog ", "A door ", "A dream ", "A fact ", "A floating pyramid ", "A great glowering eye ", "A great green shadow ", "A hammer ", "A haunting dream ", "A host of golden daffodils ", "A hurricane ", "A jewelry box ", "A jigsaw puzzle ", "A kid ", "A kinky whirligig of colors and light ", "A man ", "A mirror streaked with a luminous slime ", "A nascent language ", "A natural phenomenon ", "A nightmare ", "A palindrome ", "A party ", "A person ", "A pool of light ", "A question ", "A rabbit hole of language ", "A riddle ", "A rodent ", "A shallow puddle ", "A single leaf ", "A sinister sound ", "A stack of dusty books ", "A stone ", "A subtle shift in the atmosphere ", "A sweet smell ", "A weapon ", "An alarm clock ", "An apparition ", "An old book ", "Every molecule in the universe ", "Every second of every minute of every day ", "Flesh ", "Home ", "Incomprehensible music ", "Polka music ", "Rap music ", "Rock and roll ", "Jazz ", "Smooth jazz ", "The radio ", "Faraway music ", "A barking dog ", "A car siren ", "Nobody ", "Reality ", "Something beautiful ", "Something ", "The afternoon ", "The animal ", "The audience ", "The babbling brook ", "The baby ", "The bathtub ", "The bed ", "The blood on the floor ", "The blood on the wall ", "The blood stain ", "The brain ", "The broken mirror ", "The candlestick ", "The cat ", "The ceiling fan ", "The cellar door ", "The cereal bowl ", "The chessboard ", "The clock ", "The clouds overhead ", "The coffee table ", "The dining room table ", "The cold air ", "The cold side of the pillow ", "The computer ", "The couch ", "The crack in the ceiling ", "The darkening sky ", "The darkness ", "The day ", "The deck of cards ", "The dense fog ", "The dial tone ", "The dirty ground ", "The dog ", "The doppelgänger ", "The dusk ", "The dust in the air ", "The envelope ", "The essential thing ", "The evening gloom ", "The evening redness ", "The evening ", "The eye of the storm ", "The fireplace ", "The fish ", "The floor ", "The tile floor ", "The fool ", "The fortune cookie ", "The garden ", "The graffiti ", "The gun ", "The hand ", "The heart ", "The heat of the night ", "The heat ", "The house on the hill ", "The house ", "The room ", "The key ", "The keychain ", "The kitchen floor ", "The kitchen sink ", "The knife ", "The lake ", "The lamp ", "The landscape painting ", "The abstract painting ", "The portrait on the wall ", "The lead pipe ", "The light ", "The magic moment ", "The map of the world ", "The midnight hour ", "The mirror ", "The broken mirror ", "The mob ", "The moment ", "The quiet moment ", "The moon ", "The full moon ", "The moonlight ", "The morning ", "The muck and the mire ", "The mud ", "The murmuring cosmos ", "The music ", "The napkin ", "The neighborhood ", "The new moon ", "The night ", "The omen ", "The ordinary world ", "The overhead light ", "The painting on the wall ", "The phone ", "The problem ", "The rain ", "The raw afternoon ", "The razorblade on the sink ", "The reflection in the window ", "The refrigerator ", "The revolver ", "The rising sun ", "The room ", "The rope ", "The rug ", "The sacred river ", "The setting sun ", "The shadows ", "The sidewalk ", "The sight ", "The silence ", "The situation ", "The smell of burnt hair ", "The smell of rot ", "The sofa ", "The sound ", "The stink ", "The storm ", "The sun ", "The sunlight ", "The surround air ", "The teaspoon ", "The telephone ", "The television screen ", "The tension ", "The throne ", "The tip of the tongue ", "The toilet ", "The tree branch ", "The truth ", "The unforgiving minute ", "The universe ", "The voice ", "The walls ", "The wind ", "The window ", "The broken window ", "The eye witness ", "The world ", "The wrench ", "The writing on the wall ", "The zombie ", "This round and wet and crowded planet ", "This time ", "The city ", "The town ", "Nature ", "The forest ", "The sky ", "Time ", "Wealth ", "What is strange "
];
var randomVerbs = [
  "ridicules ", "eyeballs ", "enhances ", "celebrates ", "flings ", "heaps scorn upon ", "dumbfounds ", "reflects ", "speaks ", "screams ", "bleeds ", "kills ", "squeezes ", "silences ", "summons ", "rises ", "says ", "has ", "does ", "goes ", "gets ", "makes ", "knows ", "thinks ", "takes ", "sees ", "comes ", "wants ", "uses ", "finds ", "gives ", "tells ", "works ", "calls ", "tries ", "asks for ", "needs ", "feels ", "becomes ", "leaves ", "tastes ", "tells a story to ", "loves ", "hides ", "is not ", "stretches its double strand around ", "envelopes ", "gleams ", "sleeps ", "sinks ", "dreams ", "listens ", "puts ", "means ", "keeps ", "lets us be ", "begins ", "seems ", "helps ", "shows ", "hears ", "plays ", "runs ", "moves ", "lives ", "believes ", "brings ", "happens to ", "writes ", "sits ", "stands ", "loses ", "pays ", "meets ", "includes ", "continues ", "learns ", "changes ", "leads ", "understands ", "watches ", "follows ", "stops ", "creates ", "speaks ", "reads ", "spends ", "grows ", "opens ", "walks ", "wins ", "teaches ", "offers ", "remembers ", "considers ", "appears ", "buys ", "serves ", "dies ", "sends ", "builds ", "stays ", "falls ", "cuts ", "reaches ", "kills ", "raises ", "passes ", "sells ", "decides ", "returns ", "explains ", "hopes ", "develops ", "carries ", "breaks ", "receives ", "agrees with ", "supports ", "hits ", "produces ", "eats ", "covers ", "catches ", "draws ", "chooses ", "can't stop ", "festers ", "embraces ", "digests ", "consumes ", "creates and destroys and creates once again ", "tickles ", "stirs ", "fails ", "licks ", "graces ", "touches ", "shoots ", "stabs ", "succumbs ", "spins ", "reveals ", "cakes ", "summons ", "births ", "traps ", "ensnares ", "tortures ", "ties up ", "chills ", "burns ", "mutters ", "whispers ", "bleeds ", "leaks ", "marries ", "will become ", "eats ", "prays for ", "seduces and abandons ", "begs for ", "flirts with ", "desires ", "craves ", "secretly hates ", "resents ", "reluctantly respects ", "wants above all else "
];
var randomObjects = [
  "the flowerpot.", "the monkeywrench.", "a map of Croatia.", "the police box.", "the subconscious.", "the plinth.", "a meta-analysis.", "the side whiskers.", "the birthday cake.", "the stilts.", "the wandering eye.", "the popcorn.", "the bicycle.", "a shaman for an increasingly secular world.", "a sharp pencil.", "a sonnet written in blood.", "a story.", "a student.", "a switchblade.", "a teacher.", "a trance-like state.", "a vague, nameless horror.", "a visceral realist.", "a warning label.", "a wish.", "a woman in love.", "a woman.", "a year.", "abstraction.", "air.", "all of existence as one great unity.", "all the stress.", "an elegant string of code.", "an emblem of the enterprise.", "an experimental film.", "an ice storm.", "an irrational number.", "an old book on a dusty shelf.", "an old cigar box, containing all hopes and dreams.", "an old notebook.", "anger.", "a map of Antarctica.", "art.", "beauty.", "beer.", "the presence of greatness.", "sadness.", "a lonely planet.", "bliss.", "boredom.", "breakfast cereal.", "business.", "candy.", "celery.", "change.", "a game of chess.", "clarity.", "dark matter.", "death in the afternoon.", "death.", "a hole in a tree, full of secrets.", "dusk.", "elegant strings of code.", "chaos.", "envy.", "eternal sunshine.", "every atom.", "every book in the library.", "every cell in the body.", "every evil thing.", "a face in a crowd.", "every item in the refrigerator.", "every sin.", "every snowflake.", "every word.", "everybody.", "everyone.", "everything leading up to this moment.", "everything ravaged, everything burned.", "everything.", "fall.", "fear.", "food.", "forever.", "fortune.", "game theory.", "global warming.", "grammar.", "gravity.", "greed.", "guilt.", "happiness.", "the wasteland.", "the heavy crown.", "honesty.", "the thing with feathers.", "hope.", "ignorance.", "bliss.", "the opening scene.", "the penultimate scene.", "information.", "insanity.", "ecstasy.", "freedom.", "joy.", "the lingering anxiety dream.", "laughter.", "life.", "the living.", "love.", "lust.", "madness.", "meaninglessness.", "midnight.", "money.", "the attention.", "the bad habit.", "the bed.", "the body.", "the boss.", "the brain.", "the broken face.", "the crystal ball.", "the cult leader.", "the drug of choice.", "the eye.", "the face.", "the family.", "the favorite game.", "the friend.", "the ghost.", "the gut.", "the knife, sharp and sweet.", "the love.", "the mask.", "the milkshake.", "the mirror.", "the mouth.", "the pretty little hate machine.", "a new religion.", "the third eye.", "the toilet.", "death.", "night, fresh and quiet.", "night.", "nightmare fuel.", "nirvana.", "nobody.", "nonsense.", "noon.", "nothing new under the sun.", "nothing.", "peace.", "peanut butter.", "pink snow.", "poetry.", "life.", "rain.", "sadness.", "sex.", "silence.", "skin.", "sleep.", "smiling.", "snow.", "spring.", "summer.", "summertime sadness.", "the knife.", "technological change.", "text without context.", "text.", "that which is ineluctable.", "that which yields.", "that which you most value.", "that's true too.", "the absurd.", "the answer to the question.", "the apocalypse.", "the authentic self.", "the awful daring of surrender.", "the basement.", "the best thing.", "the bloody end of the skein that unraveled the marriage.", "the bogeyman.", "the bold and the beautiful.", "the book thief.", "the box under the bed.", "the butterfly effect.", "the cage.", "the children of night.", "the color purple.", "the creature inside you.", "the curl of the lips.", "the dance.", "the dancing elephant.", "the day after tomorrow.", "the dead weather.", "the demon that lives inside you.", "the door in the floor.", "the drunken monkey.", "the dust in the pocket.", "the end.", "the exact time and place of the birth.", "the figure of the fictional detective.", "the fire.", "the fortune cookie.", "the functional alcoholic.", "the garden of good and evil.", "the gift of laughter.", "the girl with kaleidoscope eyes.", "the goblin.", "the greatest thing in the world.", "the unrelenting horror.", "the hush of the glinting and sparkling cosmos.", "the idealist.", "the imagination.", "the information coming at you.", "the internet.", "the invisible hand.", "the invisible tattoo ink.", "the lower back tattoo.", "the itsy bitsy spider.", "the jabberwocky.", "the janitor.", "the key that memory drops.", "the landscape.", "the last page of the memoir.", "a new sentence.", "the literature of negation.", "the long limbed god, dancing on the dwarf of ignorance,.", "the burnt love letter, now a pile of ashes,.", "the mage.", "the man hiding in the basement.", "the man with the gun over there.", "the martian in the flying saucer.", "the meek.", "the merest nuance of speech.", "the mirror.", "the monster.", "the moon.", "mother earth.", "the music of the spheres.", "the mute television.", "the nest of robins in the tree.", "the new normal.", "the nihilist.", "the north pole.", "the numbness.", "the ocean.", "the only thing which the mind can never exhaust.", "torture.", "the perfect lover.", "the phone in the hand.", "the prince of darkness.", "the purest form of spirit.", "the car radio.", "the raw physicality of existence.", "the reluctant cannibal.", "the retiring fog.", "the right tool.", "the school.", "the seventh son of the seventh son of the seventh son.", "the shadow.", "the silence of the earth.", "the space between.", "the spiderweb under the bed.", "the state or fact of existing.", "the state.", "the still-dim Milky Way.", "strength.", "typos.", "the surrealist.", "a swamp witch.", "the tightrope to the sun.", "the tunnel.", "the voice on the phone.", "the void.", "the wasteland.", "the way.", "the wheel of fortune.", "the wild rumpus.", "the will to meaning.", "the witch.", "the wolf at the door.", "the woman in the attic.", "the world.", "the writing on the wall.", "fine company.", "no country.", "no other place.", "this dimension.", "a new game.", "a big group.", "an apt metaphor.", "this moment.", "this place.", "a symbol.", "a stiletto.", "a hot knife.", "a warm gun.", "something new.", "work.", "time.", "trouble.", "war.", "water.", "a river of ice.", "a frozen waterfall.", "wealth.", "whatever souls are made of.", "the hard winter.", "the loveless land.", "winter.", "wisdom.", "words.", "worlds of words.", "yesterday.", "the mouth.", "a muse.", "the once and future king.", "the past.", "the poetry.", "the pretty skeleton.", "the proud head.", "the reflection.", "the secret admirer.", "the shadow.", "the shyness.", "the sixth sense.", "the skeleton.", "the skin.", "the soul.", "the spirit animal.", "the tongue.", "the toothbrush.", "the words.", "the bellybutton lint.", "the bellybutton.", "the body.", "the boss.", "the broken time machine.", "the childhood home.", "the clone.", "the crooked mouth.", "the doctor.", "the dream diary.", "the evil twin.", "the eye.", "the face in the mirror.", "the face.", "the family.", "the flesh.", "the friend.", "the future ghost.", "the gaze.", "the ghost.", "the grave.", "the grief.", "the guilt, the lust, the rage.", "the gut bacteria.", "the heart of hearts.", "the holy flesh.", "the inner child.", "the life of a poem.", "the light.", "the lizard brain.", "the mind.", "the mother.", "youth."
];

class EditStoryForm extends Component {

  constructor(props) {
    console.log('props from EditStoryForm', props)
    super(props)

    this.state = {
      input: props.story.content,
      title: props.story.title
    }
    this.handleStoryChange = this.handleStoryChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  componentWillReceiveProps(props) { //need this lifecycle method to edit text in textarea
    this.setState({
      input: props.story.content,
      title: props.story.title
    })
  }

  handleTitleChange(event) {
    const title = event.target.value
    this.setState({
      title: title
    })
  }

  handleStoryChange(event) {
    const story = event.target.value
    this.setState({
      input: story
    })
  }

  handleEditStoryFormSubmit(event) {
    event.preventDefault()
    const updatedStory = {
      input: this.state.input,
      title: this.state.title,
      id: this.props.story.id
    }
    this.props.handleUpdateStory(updatedStory)
    this.setState({input: ''})
  }

/////////////////////////////////////////

handleRandomFirstSentence() {
  let oneNoun = randomNouns[Math.floor(Math.random() * randomNouns.length)]
  let oneVerb = randomVerbs[Math.floor(Math.random() * randomVerbs.length)]
  let oneObject = randomObjects[Math.floor(Math.random() * randomObjects.length)]
  let randomSentence = oneNoun + oneVerb + oneObject
  // console.log('random noun: ', oneNoun)  //.concat to input
  this.setState({input: randomSentence + " " + this.props.story.content + '\n\n'})
}

handleRandomLastSentence() {
  let oneNoun = randomNouns[Math.floor(Math.random() * randomNouns.length)]
  let oneVerb = randomVerbs[Math.floor(Math.random() * randomVerbs.length)]
  let oneObject = randomObjects[Math.floor(Math.random() * randomObjects.length)]
  let randomSentence = oneNoun + oneVerb + oneObject
  // console.log('random noun: ', oneNoun)  //.concat to input
  this.setState({input: this.props.story.content + " " + randomSentence})
}

handleRandomProse(event) {
  this.handleRandomFirstSentence()
  this.handleRandomLastSentence()
}
////////////////////////////////



  //Search for images via Flickr
// function searchFlickr()	{
//     $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
//     {
//       tags: this.state.title,
//       tagmode: "any",
//       format: "json",
//       per_page: 1
//     },
//
//     function(data) {
//       $.each(data.items, function(i, item) {
//
//         //remove the last img from results, before prepending new image
//         $("#results img:last-child").remove();
//
//         //prepend new image
//         $("<img/>").empty().attr("src", item.media.m).prependTo("#results");
//         if ( i == 0 ) return false;
//        })
//     })
//   }
// searchFlickr() //calls function, searchFlickr

  render() {

    console.log('render is called in EditStory');
    // console.log('from EditStoryForm, this.state.input: ', this.state.input);

    // debugger

    // let str = (this.state.input ? this.state.input : "whatever null stringface")

    let wordCount = (this.state.input ? this.state.input.split(' ').length : 0)
    // let wordCount = (this.state.input.split(' ').length)

    let paragraphs = (this.state.input ? this.state.input.split('-----').join('\n\n') : "paragraphs will go here")

    let genres = (this.props.story.genres ? this.props.story.genres.map((genre) => {return (genre.name) }).join(', ') : 0)

    return(

    <div>
        <div className="EditStoryForm-blue">

          <Form id="EditStoryForm" onSubmit={this.handleEditStoryFormSubmit.bind(this)}>
            <h3>Edit Story</h3>
            Title: <span className="EditStoryText-blue"> {this.state.title}</span>
            <br></br>
            <br></br>
            Story ID: <span className="EditStoryText-blue"> {this.props.story.id}</span>
            <br></br>
            <br></br>
            Word count: <span className="EditStoryText-blue"> {wordCount}</span>
            <br></br>
            <br></br>
            Genres: {genres}
            <br></br>
            <br></br>

            Plots:  {this.props.story.plots ? this.props.story.plots.map((plot) => {
                    let plotTitle = plot.title
                    return (plotTitle
                      .replace("Halloween", "🔪")
                      .replace("Alien", "👽")
                      .replace("The Matrix", "⏰")
                      .replace("Star Wars", "🚀")
                      .replace("E.T.", "📞")
                      .replace("Terminator", "🤖")
                      .replace("Die Hard", "🔫")
                      .replace("Thelma and Louise", "🚘")
                      .replace("Home Alone", "😂")
                      .replace("Beauty and the Beast", "🦊")
                      .replace("La Strada", "💔")
                      .replace("The Piano", "💙")
                  )
                }).join('   ') : 0}

            <br></br>
            <br></br>

            <Form.Field label='Title'
              placeholder="title here"
              control='input'
              width={15}
              value={this.state.title} //value of input field is state.title, coming from componentWillReceiveProps
              onChange={this.handleTitleChange}
            />


            <Form.Field label='Edit Story'
              className="EditStoryForm-linebreaks"
              placeholder="this is where the story content goes for editing"
              control='textarea' rows='15'
              width={15}
              // value={this.state.input} //value of textarea is state.input, coming from componentWillReceiveProps
              value={paragraphs}
              onChange={this.handleStoryChange}
            />

            <div>
              <Button.Group floated='right'>
                <Button color='red'
                  compact
                  onClick={() => {this.props.handleDeleteStory(this.props.story.id)}}>Delete</Button>
                </Button.Group>

              <Button.Group>
                <Form.Button content='Save Story'
                type="submit" primary compact/>
              </Button.Group>


            </div>
          </Form>

          <Button color='purple'
            compact
            onClick={() => {this.handleRandomProse()}}>Random</Button>
            {/* // onClick={(event) => {this.handleRandomFirstSentence(); this.handleRandomLastSentence()}}>Random</Button> */}
        </div>

      </div>

    )
  }
}

EditStoryForm.defaultProps = {
  story: 'story content here', //need this so props aren't null
  title: 'story title here'
}

export default EditStoryForm
