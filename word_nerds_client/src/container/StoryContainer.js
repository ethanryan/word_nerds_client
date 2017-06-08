import React, {Component} from 'react'

import CreateStoryForm from '../components/CreateStoryForm'
import EditStoryForm from '../components/EditStoryForm'
import StoryList from '../components/StoryList'

class StoryContainer extends Component {
  constructor() {
    super()
    this.state = {
      stories: [], //array of all the (user's) stories

      story: '', //one story's content <<<need this???
    }
  } //end of constructor


  ///from last app::
componentDidMount() {
  fetch('http://localhost:3000/stories', {
    method: 'GET',
  })
  .then( response => response.json() )

  .then( data => this.setState({
    stories: data //setting stories to data
    //data is an array of objects... need .content from each object
  }) )
  //////use this to console.log data after commenting out above .then::::::
  // .then(function(data) { //will replace this with above
  //   console.log('data from API: ', data)
  //   console.log('data[0].content: ', data[0].content)
  // })
} //end of componentDidMount



  //create story form function:
  // handleCreateStory(event) {
  // handleSubmit(event) {  //change this name back to handleCreateStory
  //   // fetch('http://localhost:3000/stories', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Accept': 'application/json',
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   //   body: JSON.stringify({
  //   //     firstParam: 'yourValue',
  //   //     secondParam: 'yourOtherValue',
  //   //   })
  //   // })
  //   console.log('CreateStoryForm submitted: ', this.state.userInput)
  //   event.preventDefault()
  //   //this.handleSubmit( this.state.input ) //FIX THIS
  //
  //   this.setState({userInput: this.state.userInput})
  //   //this.setState({userInput: ''}) //unset the form value
  //
  //   // this.setState( prevState => {
  //   //   return {stories: [...prevState.stories, story]}
  //   // })
  // }  ///end of handleCreateStory

handleChange(event) {
  this.setState({userInput: event.target.value});
}

  /////from React docs::
  // fetch('https://mywebsite.com/endpoint/', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     firstParam: 'yourValue',
  //     secondParam: 'yourOtherValue',
  //   })
  // })

  //edit story form function:
  // handleEditStory(story) { //now same as create story...
  //   this.setState( prevState => {
  //     return {
  //       stories: [...prevState.stories, story]
  //     }
  //   })
  // }

  ////from student list lecture:

// createStudent(name){
//   return fetch("http://localhost:3000/api/v1/students", {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       //'Authorization': localStorage.getItem('jwt')
//     },
//     method: 'POST',
//     body: JSON.stringify( {student: {name: name}} )
//   }).then( res => res.json() )
// }
//
// handleAddStudent(name){
// createStudent(name) //this is calling function above, adding student to database
// //THEN doing the below, which adds student to page, along with other students.
//     .then( student => this.setState( prevState =>  ({ students: [...prevState.students, student] }) ))
//     .catch(err => console.log(err))
// }

createStory(content) {
  return fetch("http://localhost:3000/stories", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': localStorage.getItem('jwt')
    },
    method: 'POST',
    //body: JSON.stringify( {student: {name: name}} )
    body: JSON.stringify( {story: {
      content: content,
      title: "HARDCODED TITLE", //default for now
      user_id: 1 //this will be whatever the loggedin user's id is
    }} )
  }).then( res => res.json() )
}

// .then( data => this.setState({
//   stories: data //setting stories to data

handleSubmit(content) {
  this.createStory(content) //this is calling function above, adding student to database

//THEN doing the below, which adds student to page, along with other students.
    .then( story => this.setState( prevState =>  ({ stories: [...prevState.stories, story] }) ))
    .catch(err => console.log(err))
}


// handleSubmit(id) {
//   return event => {
//     event.preventDefault()
//     console.log("story id: ", id)
//     const entry = this
//     if (this.state.stories.find(story => story.id === id)) {
//       fetch(`http://localhost:3000/stories/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({story: {
//           // original_content: this.state.originalContent,
//           // title: this.state.title,
//           story: this.state.story, //????
//           // translated_content: this.state.translatedContent
//         }})
//       })
//       .then( res => res.json() )
//       .then(function(data){
//         entry.setState({
//           // stories: data,
//           stories: data,
//           // storyID: 0,
//           // originalContent: "",
//           // translatedContent: "",
//           // title: "",
//           // editing: false
//         })
//       })
//
//
//     } else {
        //console.log('ERROR ERROR ERROR')
//     } //end of else
//   }
// } //end of handleSubmit


// handleEdit(id) {
//   //let editStory = this.state.stories.find(story => story.id === id)
//   this.setState({
//     // originalContent: editStory.original_content,
//     // translatedContent: editStory.translated_content,
//     // title: editStory.title,
//     // storyID: editStory.id,
//     // editing: true
//   })
// } //end of handleEdit

deleteStory(id) {
  return fetch(`http://localhost:3000/stories/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': localStorage.getItem('jwt')
    },
  }).then( res => res.json() )
}

// handleSubmit(content) {
//   this.createStory(content) //this is calling function above, adding student to database
//
// //THEN doing the below, which adds student to page, along with other students.
//     .then( story => this.setState( prevState =>  ({ stories: [...prevState.stories, story] }) ))
//     .catch(err => console.log(err))
// }

// handleDelete(id){
//   if (window.confirm("😱 You really want to delete this story?!")) {
//     fetch(`http://localhost:3000/stories/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then(res => res.json())
//     .then(data => this.setState({ stories: data }) )
//   }
// }

handleDeleteStory(id) {
  this.deleteStory(id) //calling function above

    .then( () => {
      this.setState( prevState => ({
        stories: prevState.stories.filter( story => story.id !== id )
      })
    )
  //  this.props.history.push('/stories')
  })
}


  render() {
    return(
      <div>
        {/* put below forms within Switch ?? */}
        <CreateStoryForm
          // onSubmit={this.handleCreateStory.bind(this)}
          // handleSubmit={this.handleCreateStory.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
        <br></br>
        <EditStoryForm
          handleDeleteStory={this.handleDeleteStory.bind(this)}
          // onSubmit={this.handleEditStory.bind(this)}
          // onSubmit={this.handleEdit.bind(this)}
        />
        <p>Below are all the stories from API, via StoryList component:</p>
        <StoryList
          handleDeleteStory={this.handleDeleteStory.bind(this)}

          storyList={this.state.stories}
        />
      </div>
    )
  }
}

export default StoryContainer
