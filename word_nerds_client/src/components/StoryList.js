import React from 'react'

import Story from './Story'

const StoryList = (props) => {

  return(
    <div className="StoryList-blue">
      {/* <Story /> */}
      <Story
        // passing StoryList props down to Story
        handleDeleteStory={props.handleDeleteStory}

        renderEditForm={props.renderEditForm}

        stories={props.stories}

        heroName={props.heroName}

      />
      <br></br>
      <br></br>

      <p>StoryList mounts and renders Story, which contains eachStory</p>
    </div>
  )

}

export default StoryList



//////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////

// import React from 'react'
//
// // import { Route, Link, Switch } from 'react-router-dom'
// // import { Link } from 'react-router-dom'
//
//
// // var body = '<div id="anid">some <a href="link">text</a></div> and some more text';
// // var temp = document.createElement("div");
// // temp.innerHTML = body;
// // var sanitized = temp.textContent || temp.innerText;
//
// // {this.props.text.split('\n').map((item, key) => {
// //   return <span key={key}>{item}<br/></span>
// // })}
//
//
// // {story.content.split('--------------------------').map((paragraph, key) => {
// //   return <span key={key}>{paragraph}<br/></span>
// // })
//
// /////try this::::
// // {this.props.section.text.split("\n").map(function(item) {
// //   return (
// //     <span>
// //       {item}
// //       <br/>
// //     </span>
// //   )
// // })}
//
//
// const StoryList = (props) => {
//   console.log('StoryList props: ', props)
//
//   //adding index below so i stop getting warning message in console.
//   const eachStory = props.storyList.map( (story, index) =>
//       <div key={index}>
//         <h1>
//           Story Title: {story.title}
//           {/* <Link to={`/stories/${story.id}`}>{story.content}</Link> */}
//         </h1>
//           {/* Story content: {story.paragraphs.map } */}
//           {/* below should be like above, not just a string of content, need more relational data persisting to database */}
//
//
//           {/* Story content: {story.content } */}
//           {/* Story content: {story.content.innerHTML } */}
//
//           Story content, split and line breaks added:
//           <br></br>
//           <br></br>
//           {story.content.split('--------------------------').map((paragraph, key) => {
//             return <span key={key}>{paragraph}<br/><br/></span>
//           })}
//
//
//           Story ID: {story.id}
//           <br></br>
//
//           <div>
//
//             <a href="#EditStoryForm" onClick={() => {props.renderEditForm(story.id)}}>Edit</a>
//             <span>   </span>
//             <button
//               href="#delete"
//               onClick={() => {props.handleDeleteStory(story.id)}}>
//               Delete
//             </button>
//           </div>
//
//       </div>
//   ).reverse() //so most recent story is on the top
//
//   // <Switch>
//   //   <Route path="/students/new" render={() => < StudentForm  onSubmit={ props.onSubmit }/>}/>
//   //   <Route exact path="/students/:id" render={ ({match}) => {
//   //     const student = props.students.find(student => student.id === parseInt(match.params.id))
//   //     return < StudentShow student={student} onDelete={ props.onDelete }/>
//   //   } }/>
//   //   <Route path="/students/:id/edit" render={({match}) => {
//   //     const student = props.students.find( s => s.id === parseInt(match.params.id))
//   //     return < StudentEdit student={student} onSubmit={ props.onUpdate } />
//   //   }} />
//   // </Switch>
//
//
//   return(
//     <div className="StoryList-blue">
//       <ul>{ eachStory }</ul>
//       <p>each story can be clicked, which renders it in the EditStoryForm</p>
//     </div>
//   )
//
// }
//
// export default StoryList
