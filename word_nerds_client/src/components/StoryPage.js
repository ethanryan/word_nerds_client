import React, {Component} from 'react'

import CreateStoryForm from './CreateStoryForm'
import EditStoryForm from './EditStoryForm'
import AllStories from './AllStories'

import { Switch, Route } from 'react-router-dom'



const StoryPage = (props) => {



    return (
      <div>

      <Switch>
        <Route exact path='/' render={() => <CreateStoryForm
          handleSubmit={props.handleSubmit}
          renderEditForm={props.renderEditForm}
          story={props.story}
          storyID={props.storyID}
          //need all these props??
        />} />

        {/* <Route path="/students/:id/edit" render={({match}) => {
  const student = props.students.find( s => s.id === parseInt(match.params.id))
  return <StudentEdit student={student} onSubmit={ props.onUpdate } />
}} /> */}

        <Route
          path='/stories/:id/edit'
          render={({match}) => {
          // const story = props.stories.find( s => s.id === parseInt(match.params.id, 10))
          const story = props.stories.find( s => s.id === parseInt(match.params.id))
          // debugger
          return <EditStoryForm
            story={story}
            // story={story.content}
            // handleUpdateStory={props.handleUpdateStory}
            handleUpdateStory={props.handleUpdateStory}
            handleUpdateTitle={props.handleUpdateTitle}
            // onSubmit={ props.handleUpdateStory }
           />
        }} />

          {/* const num = 1 + 1
          return (
            <EditStoryForm
              handleDeleteStory={this.props.handleDeleteStory}
              handleUpdateStory={this.props.handleUpdateStory}
              handleUpdateTitle={this.props.handleUpdateTitle}
              story={this.props.story}
              title={this.props.title}
              storyID={this.props.storyID}
              num={num}
            />
          )
        }} /> */}

        <Route path='/stories' render={() => <AllStories
          handleDeleteStory={props.handleDeleteStory}
          renderEditForm={props.renderEditForm}
          stories={props.stories}
        />} />

      </Switch>
    </div>
    )

}

export default StoryPage
