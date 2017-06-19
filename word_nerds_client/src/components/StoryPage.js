import React from 'react'

import CreateStoryForm from './CreateStoryForm'
import EditStoryForm from './EditStoryForm'
import AllStories from './AllStories'
import StoryShow from './StoryShow'

import { Grid } from 'semantic-ui-react'

import { Switch, Route, Link } from 'react-router-dom'


const StoryPage = (props) => {

  const SideBar = props.stories.map( (story) =>

  <div key={story.id} className="EachStoryInSideBar-pink">

    <h2>
      Story Title: {story.title}
    </h2>

    <Link className='btn btn-primary' to={`/stories/${story.id}/edit`}>Edit Story</Link>
    <br></br>
    <br></br>

    Story ID: {story.id}
    <br></br>
    <br></br>

    Word count: {story.content ? story.content.split(' ').length : 0}
    <br></br>
    <br></br>

    <div>
      <button
        href="#delete"
        onClick={() => {props.handleDeleteStory(story.id)}}>
        Delete
      </button>
    </div>
  </div>
)

return (
  <div>

    <Grid>
      <Grid.Row>

        <Grid.Column width={10}>

          {/* <all the switches within StoryPage, forms, show, index, etc.../> */}

          <Switch>
            <Route exact path='/'
            render={() => <CreateStoryForm
              handleSubmit={props.handleSubmit}
            />} />

            <Route
              exact path='/stories/:id'
              render={({match}) => {
                const story = props.stories.find( s => s.id === parseInt(match.params.id, 10))
                return <StoryShow
                  story={story}
                  handleDeleteStory={props.handleDeleteStory}
                  // want it to be able to send user to EditStoryForm
                />
              }} />

              <Route
                path='/stories/:id/edit'
                render={({match}) => {
                  const story = props.stories.find( s => s.id === parseInt(match.params.id, 10))
                  return <EditStoryForm
                    story={story}
                    handleUpdateStory={props.handleUpdateStory}
                    handleDeleteStory={props.handleDeleteStory}
                  />
                }} />

                <Route
                  path='/stories'
                  render={() => <AllStories
                  handleDeleteStory={props.handleDeleteStory}
                  stories={props.stories}
                />} />

              </Switch>
            </Grid.Column>


            <Grid.Column width={6}>

              <div className="SideBar-blue">
                <ul>{ SideBar.reverse() }</ul>
                <p>each SideBar item can be clicked, which renders it in the EditStoryForm</p>
              </div>

            </Grid.Column>

          </Grid.Row>
        </Grid>

      </div>
    )

  } //end of StoryPage

  //////

  StoryPage.defaultProps = {
    story: 'story content here', //need this so props aren't null
    title: 'story title here',
    stories: [{title: 'title', 'content': 'words words ----- word words words'}]
  }


  export default StoryPage
