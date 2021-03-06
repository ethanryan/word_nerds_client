import React from 'react'

import { Segment } from 'semantic-ui-react'

const StoryShowSummary = (props) => {

  return(
    <div>
      <Segment>
      <p>
        Story ID: <span> {props.story_id}</span>
      </p>

      <p>
        Story Creator: <span>{props.storyCreator}</span>
      </p>

      <p>
        Word count: <span> {props.wordCount}</span>
      </p>

      <p>
        Genres: {props.genres}
      </p>

      <p>
        Plots: {props.plots}
      </p>
    </Segment>
    </div>
  )
}

export default StoryShowSummary
