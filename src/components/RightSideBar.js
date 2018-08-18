import React from 'react'

import nerdy from '../components/assets/nerdy.gif'

import Sentence from '../components/Sentence/Sentence'

const RightSideBar = (props) => {

  return(
    <div>

      <div className="nerdy-storypage">
        <img src={nerdy}
          className="nerdy"
          alt="nerdy gif"
        />

        <h1 className="hoverYellow pulse-grow">
          Word Nerds
        </h1>
      </div>

      <div className="storypage-sentence">
        <Sentence />
      </div>

    </div>
  )
}

export default RightSideBar
