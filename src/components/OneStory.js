import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


const OneStory = (props) => {

  // debugger
  const eachStory = props.stories.map( (story) =>

      <div key={story.id} className="OneStory-orange">

        <h2>
          Title: {story.title ? story.title : "story title here"}
        </h2>

          Edit this story:
          <Link to={`/stories/${story.id}/edit`}
          > {story.title}</Link>
          <br></br>
          <br></br>

          Story ID: {story.id ? story.id : 0}
          <br></br>
          <br></br>

          Story Creator: {story.user.name ? story.user.name : "name goes here"}
          <br></br>
          <br></br>

          Word count: {story.content ? story.content.split(' ').length : 0}
          <br></br>
          <br></br>

          Genres: {story.content ? story.genres.map((genre) => {return (genre.name) }).join(', ') : 0}
          <br></br>
          <br></br>

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

          <br></br>
          <br></br>


          <strong>
            Story content:
          </strong>

          <br></br>
          <br></br>

          {story.content ? story.content.split('-----').map((paragraph) => {
            return (
            <div key={paragraph.id}>
            <span>
              {paragraph}
              <br/><br/>
            </span>
          </div>
          )
        }) : 0}

          Story ID: {story.id ? story.id : 0}
          <br></br>
          <br></br>

          <Link to={`/stories/${story.id}/edit`}>
            <Button color='green' compact>
              Edit Story
            </Button>
          </Link>
          {/* <Button.Group floated='right'> */}

            <Button color='red' compact
              floated='right'
              onClick={() => {props.handleDeleteStory(story.id)}}>
              Delete
            </Button>

            <br></br>
            <br></br>

      </div>
  )

  return(
    <div>
      <ul>{ eachStory.reverse() }</ul>

      <p>each story can be clicked, which renders it in the EditStoryForm</p>

    </div>
  )

}

export default OneStory
