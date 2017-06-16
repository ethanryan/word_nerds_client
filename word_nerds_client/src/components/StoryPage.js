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
        />} />

        <Route
          path='/stories/:id/edit'
          render={({match}) => {
          const story = props.stories.find( s => s.id === parseInt(match.params.id))
          return <EditStoryForm
            story={story}
            handleUpdateStory={props.handleUpdateStory}
           />
        }} />

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
