import React from 'react'

import { Link } from 'react-router-dom'

import replacePlotTitleWithEmoji from '../../helpers/replacePlotTitleWithEmoji'
import getDateTime from '../../helpers/getDateTime'
import scrollToTop from '../../helpers/scrollToTop'

import { Card } from 'semantic-ui-react'

const OneStorySummary = (props) => {

  return (
    <div>
      <Card fluid style={{boxShadow: "none"}}>
        <Card.Content>
          <Card.Header>
            Story Title:&nbsp;
            <Link
              to={`/stories/${props.story.id}`}
              onClick={scrollToTop}>
              {props.story.title}
            </Link>
          </Card.Header>
          <Card.Meta>
            Creator:&nbsp;
            {
              props.story.user_name ?
              props.story.user_name
              :
              "story.user_name here, from OneStorySummary"
            }
          </Card.Meta>
        </Card.Content>

        <Card.Content>
          <Card.Meta>
            <div className="floatRight">
              <p>
                Story ID:&nbsp;
                {
                  props.story.id ?
                  props.story.id
                  :
                  0
                }
              </p>
              <p>
                Word Count:&nbsp;
                {
                  props.story.content ?
                  props.story.content.split(' ').length
                  :
                  0
                }
              </p>
            </div>

            <div className="floatLeft">
              <p>
                Created:&nbsp;
                {
                  props.story.created_at ?
                  getDateTime(props.story.created_at)
                  :
                  "props.story.created_at here"
                }
              </p>
              <p>
                Updated:&nbsp;
                {
                  props.story.updated_at ?
                  getDateTime(props.story.updated_at)
                  :
                  "props.story.updated_at here"
                }
              </p>
            </div>
          </Card.Meta>
        </Card.Content>

        <Card.Content>
          Genres:&nbsp;
          {
            props.story.story_genre_names ?
            props.story.story_genre_names
            :
            0
          }
        </Card.Content>

        <Card.Content>
          Plots:&nbsp;
          {
            props.story.story_plot_titles ?
            props.story.story_plot_titles.split(", ").map((plotTitle) => {
              return (
                replacePlotTitleWithEmoji(plotTitle)
              )
            }).join('   ') : 0
          }
        </Card.Content>
      </Card>
    </div>
  )
}

export default OneStorySummary
