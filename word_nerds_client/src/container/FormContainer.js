import React, {Component} from 'react'

import { Grid } from 'semantic-ui-react'

import CreateStoryForm from '../components/CreateStoryForm'
import EditStoryForm from '../components/EditStoryForm'
import StoryList from '../components/StoryList'

import { Switch, Route } from 'react-router-dom'


class FormContainer extends Component {
  constructor(props) {
    super(props)
    }

  render() {
    return (
      <div>

      <Switch>
        <Route path='/' render={() => <CreateStoryForm
          handleSubmit={this.props.handleSubmit}
          renderEditForm={this.props.renderEditForm}
          story={this.props.story}
          storyID={this.props.storyID}
          //need all these props??
        />} />

        <Route path='/stories/:id/edit' render={() => <EditStoryForm
          handleDeleteStory={this.props.handleDeleteStory}
          handleUpdateStory={this.props.handleUpdateStory}
          handleUpdateTitle={this.props.handleUpdateTitle}
          story={this.props.story}
          title={this.props.title}
          storyID={this.props.storyID}
        />} />

      </Switch>
    </div>
    )
  }

}

export default FormContainer
