import React from 'react'
import { Link } from 'react-router-dom'


const OneStory = (props) => {

  const eachStory = props.stories.map( (story) =>

      <div key={story.id} className="OneStory-orange">

        <h2>
          Story Title: {story.title}
        </h2>

          Edit this story:
          <Link className='btn btn-primary' to={`/stories/${story.id}/edit`}
          > {story.title}</Link>
          <br></br>
          <br></br>

          Story ID: {story.id}
          <br></br>
          <br></br>


          Story length: {story.content.split(' ').length}
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


          <div>
            <button
              href="#delete"
              onClick={() => {props.handleDeleteStory(story.id)}}>
              Delete
            </button>
          </div>

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
