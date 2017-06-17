import React from 'react'
import { Link } from 'react-router-dom'


const StoryShow = (props) => {

  return(
    <div>

          <div className="StoryShow-purple">

            <h2>
              Story Title: {props.title}
            </h2>


              This is the link to the EditStoryForm to edit this story:
              <Link className='btn btn-primary' to={`/stories/${props.id}/edit`} onClick={() => props.renderEditForm(props.id)}>{props.title}</Link>
              <br></br>
              <br></br>

              Story ID: {props.id}
              <br></br>
              <br></br>


              Story length: {props.story.split(' ').length}
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




              {props.story.split('-----').map((paragraph) => {
                return (
                <span key={paragraph.id}>
                  {paragraph}
                  <br/><br/>
                </span>
              )
              })}

              Story ID: {props.id}
              <br></br>


              <div>
                <button
                  href="#delete"
                  onClick={() => {props.handleDeleteStory(props.id)}}>
                  Delete
                </button>
              </div>

          </div>
      )

    </div>
  )

}

StoryShow.defaultProps = {
  story: 'story content here', //need this so props aren't null
  title: 'story title here',
  stories: [{title: 'title', 'content': 'words words ----- word words words'}]

}

export default StoryShow
