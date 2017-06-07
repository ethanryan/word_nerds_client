import React, {Component} from 'react'

import CreateStoryForm from '../components/CreateStoryForm'
import EditStoryForm from '../components/EditStoryForm'
import StoryList from '../components/StoryList'

// import ListItem from './ListItem'

class StoryContainer extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      //done: false
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

//from last app::::::
//   componentDidMount() {
//   fetch('http://localhost:3000/stories', {
//     method: 'GET',
//   })
//     .then(res => res.json())
//     .then(data => this.setState({
//       stories: data
//     }))
// }

///from last app::
  componentDidMount() {
  fetch('http://localhost:3000/stories', {
    method: 'GET',
  })
  .then( response => response.json() )

  .then(data => this.setState({
    stories: data //setting stories to data
    //data is an array of objects... need .content from each object
  }))

//////use this to console.log data after commenting out above .then::::::
  // .then(function(data) { //will replace this with above
  //   console.log('data from API: ', data)
  //   console.log('data[0].content: ', data[0].content)
  // })
}

//   componentDidMount() {
//   var that = this;
//   // var url = 'http://localhost:3000/api/data'
//   // var url = 'http://localhost:3000'
//   var url = 'http://localhost:3000/stories'
//
//   fetch(url, {
//       method: 'GET',
//     })
//   .then(function(response) {
//     if (response.status >= 400) {
//       throw new Error("Bad response from server")
//     }
//     return response.json()
//   })
//   .then(function(data) {
//     console.log('data from API: ', data)
//     //that.setState({ stories: data }) ///replace above line with this line...
//   });
// }

  //create story form function:
  handleCreateStory(story) {
    this.setState( prevState => {
      return {
        stories: [...prevState.stories, story]
      }
    })
  }


  //edit story form function:
  handleEditStory(story) { //now same as create story...
    this.setState( prevState => {
      return {
        stories: [...prevState.stories, story]
      }
    })
  }
  // handleAddTask(taskItem) {
  //   this.setState( prevState => {
  //     return {
  //       task: [...prevState.task, taskItem]
  //     }
  //   })
  // }

  //list item functions:
  // handleOnClick() {
  //   this.setState({
  //     done: true
  //   })
  // }

  // handleOnClick(index) {
  //   this.setState({
  //     task: this.state.task.map((oneTask, i) => {
  //       if (i === index) {
  //         oneTask.isClicked = !oneTask.isClicked
  //       }
  //       return oneTask
  //     })
  //   })
  // }

  render() {
    return(
      <div>
        {/* <InputForm
          onSubmit={this.handleAddTask.bind(this)}
        />
        <ListItem
          taskItem={this.state.task}
          onClick={this.handleOnClick.bind(this)}
        /> */}

        {/* put below forms within Switch ?? */}
        <CreateStoryForm
          onSubmit={this.handleCreateStory.bind(this)}
        />
        <br></br>
        <EditStoryForm
          onSubmit={this.handleEditStory.bind(this)}
        />
        <p>Below are all the stories from API, via StoryList component:</p>
        <StoryList
          storyList={this.state.stories}
        />
      </div>
    )
  }
}

export default StoryContainer
