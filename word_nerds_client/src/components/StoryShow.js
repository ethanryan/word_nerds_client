// import React from 'react'
// import { Link } from 'react-router-dom'
//
// export default function StudentShow(props){
//   if (!props.student) {
//     return null
//   }
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.student.name}</h1>
//       <button className='btn btn-danger' onClick={() => props.onDelete(props.student.id)}>Delete This Student</button>
//       <Link className='btn btn-primary' to={`/students/${props.student.id}/edit`}>Edit Student</Link>
//     </div>
//   )
// }


import React from 'react'
import { Link } from 'react-router-dom'


const StoryShow = (props) => {

  return(
    <div>

          <div className="StoryShow-red">

            <h2>
              Story Title: {props.story.title}
            </h2>

              This is the link: <Link to={`/stories/${props.story.id}/edit`} onClick={() => props.renderEditForm(props.story.id)}>{props.story.title}</Link>
              <br></br>
              <br></br>

              This is the href: <a href="#EditStoryForm" onClick={() => {props.renderEditForm(props.story.id)}}>{props.story.title}</a>
              <br></br>
              <br></br>

              Story ID: {props.story.id}
              <br></br>
              <br></br>


              Story length: {props.story.content.split(' ').length}
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




              {props.story.content.split('-----').map((paragraph) => {
                return (
                <span key={paragraph.id}>
                  {paragraph}
                  <br/><br/>
                </span>
              )
              })}

              Story ID: {props.story.id}
              <br></br>


              <div>
                <button
                  href="#delete"
                  onClick={() => {props.handleDeleteStory(props.story.id)}}>
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
  title: 'story title here'
}

export default StoryShow
