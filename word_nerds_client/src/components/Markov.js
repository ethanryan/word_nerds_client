import React from 'react'

import { Button } from 'semantic-ui-react'



const Markov = (props) => {

var titles = [

     "The following day, Halloween, 21-year-old SHADOW, now dressed in a blue jumpsuit and a white mask, returns to shadow_his/her hometown and begins stalking high school student HERO. HERO informs FRIEND that someone is following hero_him/her, but FRIEND dismisses hero_his/her concerns. Later, at hero_his/her house, HERO is startled to see SHADOW outside in the yard, staring into hero_his/her room. SHADOW's psychiatrist, MENTOR, having anticipated SHADOW's return home, goes to the local cemetery only to discover that SHADOW's sister's headstone is missing. MENTOR meets with the sheriff, and the two of them search for SHADOW.",

  "That night, HERO babysits, while FRIEND babysits across the street. When FRIEND gets a call from friend_his/her boyfriend asking friend_him/her to pick him up, friend_he/she drops LOVER off at the house. FRIEND gets in friend_his/her car. SHADOW, who was hiding in the backseat, strangles friend_him/her before slitting friend_his/her throat. While playing hide-and-seek, the kid spots SHADOW carrying FRIEND's corpse and tries to tell HERO, who says hero_he/she doesn't believe in any 'bogeyman'.",

  "Feeling unsettled, HERO puts the kids to bed and goes across the street, where hero_he/she discovers the corpses of FRIEND and friend_him/her boyfriend. HERO is suddenly attacked by SHADOW. HERO falls down the staircase, but quickly recovers. Fleeing, hero_he/she screams for help, to no avail. Running back to the house, hero_he/she realizes hero_he/she lost the keys. SHADOW approaches. HERO panics and screams. Luckily, the kids open the door in time. HERO instructs the kids to hide. The phone line is dead. As hero_he/she sits down in horror next to the couch, SHADOW appears and tries to stab hero_him/her, but hero_he/she stabs shadow_him/her in the side of shadow_his/her neck with a knitting needle and shadow_he/she collapses.",
];

var terminals = {};
var startwords = [];
var wordstats = {};

for (var i = 0; i < titles.length; i++) {
    var words = titles[i].split(' ');
    terminals[words[words.length-1]] = true;
    startwords.push(words[0]);
    for (var j = 0; j < words.length - 1; j++) {
        if (wordstats.hasOwnProperty(words[j])) {
            wordstats[words[j]].push(words[j+1]);
        } else {
            wordstats[words[j]] = [words[j+1]];
        }
    }
}

var choice = function (a) {
    var i = Math.floor(a.length * Math.random());
    return a[i];
};

let min_length = (3 + Math.floor(3 * Math.random()) )


var make_title = function(min_length) {
    let word = choice(startwords); //added let before word
    var title = [word];
    while (wordstats.hasOwnProperty(word)) {
        var next_words = wordstats[word];
        word = choice(next_words);
        title.push(word);
        if (title.length > min_length && terminals.hasOwnProperty(word)) break;
    }
    if (title.length < min_length) return make_title(min_length);
    return title.join(' ');
};

// $('#generate').on('click', function () {
//     var title = make_title(3 + Math.floor(3 * Math.random()));
//     $('#generated_title').html(title);
// });


// () => {make_title(3 + Math.floor(3 * Math.random())) }

  return(
      <div>
        <Button
          secondary
          make_title={this.make_title.bind(this)}
          >Markov</Button>
        <p>Markov button to scramble up text</p>
      </div>
  )

}

export default Markov
