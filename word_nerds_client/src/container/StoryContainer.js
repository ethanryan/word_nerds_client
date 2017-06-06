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

  componentDidMount() {
  var that = this;
  // var url = 'http://localhost:3000/api/data'
  // var url = 'http://localhost:3000'
  var url = 'http://localhost:3000/stories'

  fetch(url)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function(data) {
    console.log('data from API: ', data);
    that.setState({ stories: data });
  });
}

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
        <EditStoryForm
          onSubmit={this.handleEditStory.bind(this)}
        />
        <StoryList
          storyList={this.state.stories}
        />
      </div>
    )
  }
}

export default StoryContainer
