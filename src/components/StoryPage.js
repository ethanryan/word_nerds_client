import React from 'react'

import nerdy from '../components/assets/nerdy.gif'

import CreateStoryForm from './CreateStoryForm/CreateStoryForm'
import EditStoryForm from './EditStoryForm/EditStoryForm'
import AllStories from './AllStories'
import Metadata from './Metadata/Metadata'
import StoryShow from './StoryShow/StoryShow'
import Sentence from '../components/Sentence/Sentence'

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
                genreSelection={props.genreSelection} //this goes to CreateStoryForm
                //below will be passed down to CreateStoryFormSelectGenre:
                plots={props.plots}
                handleGenreChange={props.handleGenreChange}
                //below will be passed down to CreateStoryFormCreateCharacters:
                //refactor below!!! don't need all these functions, just one or two...
                characterProps={props.characterProps}
                handleHeroNameChange={props.handleHeroNameChange}
                handleShadowNameChange={props.handleShadowNameChange}
                handleFriendNameChange={props.handleFriendNameChange}
                handleLoverNameChange={props.handleLoverNameChange}
                handleMentorNameChange={props.handleMentorNameChange}
                handleTricksterNameChange={props.handleTricksterNameChange}
                //refactor below!!! don't need all these functions, just one or two...
                handleHeroGenderChange={props.handleHeroGenderChange}
                handleShadowGenderChange={props.handleShadowGenderChange}
                handleFriendGenderChange={props.handleFriendGenderChange}
                handleLoverGenderChange={props.handleLoverGenderChange}
                handleMentorGenderChange={props.handleMentorGenderChange}
                handleTricksterGenderChange={props.handleTricksterGenderChange}
              />} />

              <Route
                exact path='/stories/:id'
                render={({match}) => {
                  const story = props.stories.find( s => s.id === parseInt(match.params.id, 10))

                    return <div className="StoryShow-purple">
                      <StoryShow
                        story={story}
                        image={props.image}
                        handleDeleteStory={props.handleDeleteStory}
                      />
                    </div>

                }} />

                <Route
                  path='/stories/:id/edit'
                  render={({match}) => {
                    const story = props.stories.find( s => s.id === parseInt(match.params.id, 10))
                    return <div className="EditStoryForm-blue">
                      <EditStoryForm
                        story={story}
                        handleUpdateStory={props.handleUpdateStory}
                        handleDeleteStory={props.handleDeleteStory}
                      />
                    </div>
                  }} />

                  <Route
                    path='/stories'
                    render={() => <AllStories
                      handleUpdateStory={props.handleUpdateStory}
                      handleDeleteStory={props.handleDeleteStory}
                      stories={props.stories}
                      username={props.user ? props.user.name : "props.user.name here"}
                      user_id={props.user ? props.user.id : "props.user.id here"}
                      storyShowIsModal={props.storyShowIsModal}
                      openModal={props.openModal}
                      closeModal={props.closeModal}
                      storyShowModalIsEditable={props.storyShowModalIsEditable}
                      toggleStoryShowModalToEditable={props.toggleStoryShowModalToEditable}
                      activeModalStoryId={props.activeModalStoryId}
                      indexOfStoryModal={props.indexOfStoryModal}
                    />} />

                    <Route
                      path='/metadata'
                      render={() => <Metadata
                        stories={props.stories}
                        plots={props.plots}
                        users={props.users}
                      />} />

                    </Switch>
                  </Grid.Column>


                  <Grid.Column width={4}>

                    <div className="nerdy-storypage">
                      <img src={nerdy} className="nerdy" alt="nerdy gif"/>

                      <h1 className="hoverYellow pulse-grow">Word Nerds</h1>
                    </div>

                    <div className="login-signup-storypage">
                      <Sentence />
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
