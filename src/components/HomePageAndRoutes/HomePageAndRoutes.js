import React from 'react'

import CreateStoryForm from '../CreateStoryForm/CreateStoryForm'
import CreatePage from '../CreatePage/CreatePage'
import EditStoryForm from '../EditStoryForm/EditStoryForm'
import AllStories from '../AllStories/AllStories'
import Metadata from '../Metadata/Metadata'
import StoryShow from '../StoryShow/StoryShow'
import RightSideBar from './RightSideBar'

import { Grid } from 'semantic-ui-react'

import { Switch, Route } from 'react-router-dom'

//want to eventually have scripts as well as stories, so renamed this from StoryPage...
const HomePageAndRoutes = (props) => {
  // console.log('HomePageAndRoutes props: ', props);
  return (
    <div>
      <Grid stackable centered columns={2}>

        <Grid.Column width={12}>
          {/* <all the switches within HomePageAndRoutes, forms, show, index, etc.../> */}
          <Switch>
            <Route
              exact path='/'
              render={() =>
                <CreatePage
                  //NOTE: CreatePage will render button that links to CreateStoryForm, at /stories/create
                  //NOTE: CreatePage will also have button that links to CreateScriptForm, at /scripts/create, as well as other create options eventually...
                  scrollToTop={props.scrollToTop}
                  handleSubmit={props.handleSubmit}
                  handleClearForm={props.handleClearForm}
                  user_id={props.user.id}
                  genreSelection={props.genreSelection} //this goes to CreateStoryForm
                  //below will be passed down to CreateStoryFormSelectGenre:
                  plots={props.plots}
                  handleGenreChange={props.handleGenreChange}
                  //below will be passed down to CreateStoryFormCreateCharacters:
                  characterProps={props.characterProps}
                  handleCharacterNameChange={props.handleCharacterNameChange}
                  handleCharacterGenderChange={props.handleCharacterGenderChange}
                />
              }
            />

            <Route
              exact path='/stories/create'
              render={() =>
                <div>
                  <CreateStoryForm
                    scrollToTop={props.scrollToTop}
                    handleSubmit={props.handleSubmit}
                    handleClearForm={props.handleClearForm}
                    user_id={props.user.id}
                    genreSelection={props.genreSelection} //this goes to CreateStoryForm
                    //below will be passed down to CreateStoryFormSelectGenre:
                    plots={props.plots}
                    handleGenreChange={props.handleGenreChange}
                    //below will be passed down to CreateStoryFormCreateCharacters:
                    characterProps={props.characterProps}
                    handleCharacterNameChange={props.handleCharacterNameChange}
                    handleCharacterGenderChange={props.handleCharacterGenderChange}
                  />
                </div>
              }
            />

            <Route
              exact path='/stories/:id'
              render={({match}) => {
                const story = props.stories.find( s => s.id === parseInt(match.params.id, 10))
                return (
                  <div className="StoryShow-purple">
                    <StoryShow
                      story={story}
                      user={props.user}
                      image={props.image}
                      handleDeleteStory={props.handleDeleteStory}
                    />
                  </div>
                )
              }}
            />

            <Route
              path='/stories/:id/edit'
              render={({match}) => {
                const story = props.stories.find( s => s.id === parseInt(match.params.id, 10))
                return (
                  <div className="EditStoryForm-blue">
                    <EditStoryForm
                      story={story}
                      handleUpdateStory={props.handleUpdateStory}
                      handleDeleteStory={props.handleDeleteStory}
                    />
                  </div>
                )
              }}
            />

            <Route
              path='/stories'
              render={() =>
                <AllStories
                  scrollToTop={props.scrollToTop}
                  handleUpdateStory={props.handleUpdateStory}
                  handleDeleteStory={props.handleDeleteStory}
                  stories={props.stories}
                  user={props.user}
                  // username={props.user ? props.user.name : "props.user.name here"}
                  // user_id={props.user ? props.user.id : "props.user.id here"}
                  storyShowIsModal={props.storyShowIsModal}
                  openModal={props.openModal}
                  closeModal={props.closeModal}
                  storyShowModalIsEditable={props.storyShowModalIsEditable}
                  toggleStoryShowModalToEditable={props.toggleStoryShowModalToEditable}
                  activeModalStoryId={props.activeModalStoryId}
                  indexOfStoryModal={props.indexOfStoryModal}
                />
              }
            />

            <Route
              path='/metadata'
              render={() =>
                <Metadata
                  scrollToTop={props.scrollToTop}
                  stories={props.stories}
                  plots={props.plots}
                  users={props.users}
                />
              }
            />
          </Switch>
        </Grid.Column>

        <Grid.Column width={4}>
          <RightSideBar />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default HomePageAndRoutes
