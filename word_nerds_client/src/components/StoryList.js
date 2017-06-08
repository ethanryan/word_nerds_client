import React from 'react'

// import { Route, Link, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'


const StoryList = (props) => {
  console.log('StoryList props: ', props)

  //props.storyList below === an array of story Objects from my API
  //need .content key/value within each 'story' object

  // const nameEls = props.students.map( (student, i) =>
  //   <li key={i}>
  //     <Link to={`/students/${student.id}`}>{student.name}</Link>
  //   </li>
  // )

  //adding index below so i stop getting warning message in console.
  const eachStory = props.storyList.map( (story, index) =>
      <div key={index}>
        <h1>
          Story Title: {story.title}
          {/* <Link to={`/stories/${story.id}`}>{story.content}</Link> */}
        </h1>
          Story content: {story.content}
          <br></br>
          Story ID: {story.id}
          <br></br>

          <div>
            {/* <a href="#translatorBox" onClick={function(){props.edit(story.id)}}> Edit </a> */}
            <a href="#edit" onClick={() => {props.edit(story.id)}}>Edit</a>
            <span>   </span>
            <a href="#delete" onClick={() => {props.handleDeleteStory(story.id)}}>Delete</a>
          </div>

      </div>
  ).reverse() //so most recent story is on the top

  // <Switch>
  //   <Route path="/students/new" render={() => < StudentForm  onSubmit={ props.onSubmit }/>}/>
  //   <Route exact path="/students/:id" render={ ({match}) => {
  //     const student = props.students.find(student => student.id === parseInt(match.params.id))
  //     return < StudentShow student={student} onDelete={ props.onDelete }/>
  //   } }/>
  //   <Route path="/students/:id/edit" render={({match}) => {
  //     const student = props.students.find( s => s.id === parseInt(match.params.id))
  //     return < StudentEdit student={student} onSubmit={ props.onUpdate } />
  //   }} />
  // </Switch>


  return(
    <div className="StoryList-blue">
      <ul>{ eachStory }</ul>
      <p>each story can be clicked, which renders it in the EditStoryForm</p>
    </div>
  )

}

export default StoryList
