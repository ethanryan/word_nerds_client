import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'



const OneStory = (props) => {

  const eachStory = props.stories.map( (story) =>

      <div key={story.id} className="OneStory-orange">

        <h2>
          Title: {story.title}
        </h2>

          Edit this story:
          <Link to={`/stories/${story.id}/edit`}
          > {story.title}</Link>
          <br></br>
          <br></br>

          Story ID: {story.id}
          <br></br>
          <br></br>


          Word count: {story.content ? story.content.split(' ').length : 0}

          <br></br>
          <br></br>

          <strong>
            Story content:
          </strong> (splitting and adding line breaks)

          <br></br>
          <br></br>

          {/* {paragraph.text} */}
          {/* {story.paragraphs.map((paragraph, key) => {
            return (
              <span key={key}>
                {replaceAll(paragraph.text, "HERO", story.characters[0] ? story.characters[0].name : 'Hero')}
                <br></br>
                <br></br>
              </span>
            )
          })} */}

          {/* now doing above, below is the old way: */}
          {/* old way is better way???: */}




          {story.content.split('-----').map((paragraph) => {
            return (
            <span key={paragraph.id}>
              {paragraph}
              <br/><br/>
            </span>
          )
          })}

          Story ID: {story.id}
          <br></br>
          <br></br>

          <Link to={`/stories/${story.id}/edit`}>
            <Button color='green' compact>Edit Story
            </Button>
          </Link>
          {/* <Button.Group floated='right'> */}

            <Button color='red' compact floated='right'
              onClick={() => {props.handleDeleteStory(story.id)}}>Delete
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
