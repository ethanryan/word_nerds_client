import React from 'react'

import { Link } from 'react-router-dom'

import StoryShow from '../StoryShow/StoryShow'
import EditStoryForm from '../EditStoryForm/EditStoryForm'

import replacePlotTitleWithEmoji from '../../helpers/replacePlotTitleWithEmoji'
import getDateTime from '../../helpers/getDateTime'

import { Segment, Card, Button, Modal } from 'semantic-ui-react'

const OneStoryMetadata = (props) => {

  return(
    <div>
      <Segment>
      <p>
        Story ID: <span className="EditStoryText-blue"> {props.story_id}</span>
      </p>

      <p>
        Word count: <span className="EditStoryText-blue"> {props.wordCount}</span>
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

export default OneStoryMetadata
