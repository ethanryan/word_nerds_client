import React from 'react'
import { Card } from 'semantic-ui-react'

const OneStoryForMetadata = (props) => {

  // debugger
  const eachStoryForMetadata = props.stories.map( (story) =>

  <div key={story.id ? story.id : "story.id here"} className="OneStory-forMetadata">

    <Card fluid>

      <Card.Content>
        <Card.Header>
          {story.title}
        </Card.Header>

        <Card.Meta>
          Story ID: {story.id ? story.id : 0}
        </Card.Meta>

        <div>
          Creator: {story.user ? story.user.name : "story.user.name here, from OneStoryForMetadata"}
        </div>

        <Card.Meta>
          Word Count: {story.content ? story.content.split(' ').length : 0}
        </Card.Meta>

        <div>
          Genres: {story.content ? story.genres.map((genre) => {return (genre.name) }).join(', ') : 0}
        </div>

        <div>
          Plots:  {story.content ? story.plots.map((plot) => {
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
        </div>

        <Card.Meta>
          Created: {story.created_at ? new Date(story.created_at).toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZoneName: 'short'
          }) : "story.created_at here, from OneStoryForMetadata"}
        </Card.Meta>

        <Card.Meta>
          Updated: {story.updated_at ? new Date(story.updated_at).toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZoneName: 'short'
          }) : "story.updated_at here, from OneStoryForMetadata"}
        </Card.Meta>

      </Card.Content>

    </Card>

  </div>

)

return(
  <div>
    <ul className="UL-no-padding center">{ eachStoryForMetadata.reverse() }</ul>

    <p>(metadata for every story in database)</p>

  </div>
)

}

export default OneStoryForMetadata
