import React from 'react'

import nerdy from '../components/nerdy.gif'

import CreateStoryForm from './CreateStoryForm'
import EditStoryForm from './EditStoryForm'
import AllStories from './AllStories'
import Metadata from './Metadata'
import StoryShow from './StoryShow'

// import { Grid, Button, Card } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

// import { Switch, Route, Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'


const StoryPage = (props) => {
  // console.log('StoryPage props: ', props);


  return (
    <div>

      <Grid>
        <Grid.Row>

          <Grid.Column width={12}>

            {/* <all the switches within StoryPage, forms, show, index, etc.../> */}

            <Switch>
              <Route exact path='/'
              render={() => <CreateStoryForm
                handleSubmit={props.handleSubmit}
                user_id={props.user ? props.user.id : "props.user.id here"}
              />} />

              <Route
                exact path='/stories/:id'
                render={({match}) => {
                  const story = props.stories.find( s => s.id === parseInt(match.params.id, 10))
                  return <StoryShow
                    story={story}
                    image={props.image}
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
                      username={props.user ? props.user.name : "props.user.name here"}
                      user_id={props.user ? props.user.id : "props.user.id here"}
                    />} />

                    <Route
                      path='/metadata'
                      render={() => <Metadata
                        stories={props.stories}
                        users={props.users}
                      />} />

                    </Switch>
                  </Grid.Column>


                  <Grid.Column width={4}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="nerdy">
                      <img src={nerdy} className="nerdy" alt="nerdy gif"/>

                      <h1 className="hoverYellow pulse-grow">Word Nerds</h1>
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
          // image: 'story image here',
          genres: 'story genres here',
          plots: 'story plots here',
          user_id: 'user_id here',
          stories: [
            {
              characters: 'story characters StoryPage defaultProps',
              content: 'words words ----- word words words',
              genres: [{one_genre: 'story genres here'}],
              id: 'story ID here',
              paragraphs: 'story paragraphs here',
              plots: [{title: 'Halloween'}],
              title: 'title here',
              user: {name: 'username here'}
            },
          ]
        }


        export default StoryPage
