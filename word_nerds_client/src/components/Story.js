import React from 'react'

import { Link } from 'react-router-dom'


const Story = (props) => {
  // console.log('Story props: ', props)

  const eachStory = props.stories.map( (story, index) =>

  <div>

{/* delete below console log once editing with line breaks is working */}
  <div>
    {  console.log('log inside eachStory: ', story.content)}
  </div>

      <div key={index} className="Story-orange">

        <h2>
          Story Title: {story.title}
        </h2>

          This is the link: <Link to={`/stories/${story.id}/edit`} onClick={() => props.renderEditForm(story.id)}>{story.title}</Link>
          <br></br>

          <br></br>

          This is the href: <a href="#EditStoryForm" onClick={() => {props.renderEditForm(story.id)}}>{story.title}</a>

          <br></br>
          <br></br>

          Story ID: {story.id}
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
          {story.content.split('-----').map((paragraph, key) => {
            return (
            <span key={key}>
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
        </div>
  )

  return(
    <div>
      <ul>{ eachStory.reverse() }</ul>

      <p>each story can be clicked, which renders it in the EditStoryForm</p>
    </div>
  )

} //end of const Story

export default Story
