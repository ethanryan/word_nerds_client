import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'


const OneStory = (props) => {

  // console.log(`OneStory props: `, props);

  //debugger
  const eachStory = props.stories.map( (story) =>

  <div key={story.id ? story.id : "story.id here"} className="OneStory-orange">

    <Card fluid>

      <Card.Content>
        <Card.Header>
          Story Title:
          <Link to={`/stories/${story.id}/edit`}> {story.title}</Link>

        </Card.Header>
      </Card.Content>

      <Card.Content>
        <Card.Meta>
          <div>
            Story ID: {story.id ? story.id : 0}
          </div>

          <div>
            Creator: {story.user ? story.user.name : "story.user.name here, from OneStory"}
          </div>

          <div>
            Created: {story.created_at ? new Date(story.created_at).toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZoneName: 'short'
            }) : "story.created_at here, from OneStory"}
          </div>

          <div>
            Updated: {story.updated_at ? new Date(story.updated_at).toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZoneName: 'short'
            }) : "story.updated_at here, from OneStory"}
          </div>

          Word Count: {story.content ? story.content.split(' ').length : 0}
        </Card.Meta>

      </Card.Content>

      <Card.Content>
        Genres: {story.content ? story.genres.map((genre) => {return (genre.name) }).join(', ') : 0}
      </Card.Content>

      <Card.Content>
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
      </Card.Content>

      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' as={Link} to={`/stories/${story.id}/edit`}
          >View</Button>

          <Button basic color='red' onClick={() => {props.handleDeleteStory(story.id)}}
            >Delete</Button>
          </div>
        </Card.Content>

      </Card>

    </div>


  )

  console.log('hello from OneStory')
  return(
    <div>

      <ul className="UL-no-padding center">{ eachStory.reverse() }</ul>

      <p>each story can be clicked, which renders it in the EditStoryForm</p>

    </div>
  )

}

export default OneStory
