import React from 'react'

import CreateStoryForm from './CreateStoryForm'
import EditStoryForm from './EditStoryForm'
import AllStories from './AllStories'
import StoryShow from './StoryShow'

import { Grid, Button } from 'semantic-ui-react'

import { Switch, Route, Link } from 'react-router-dom'


const StoryPage = (props) => {
  console.log('StoryPage props: ', props);

  let size = 3

  const SideBar = props.stories.map( (story) =>

  <div key={story.id} className="EachStoryInSideBar-purple">

    <h2>
      Title: {story.title}
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

    Genres: {story.content ? story.genres.map((genre) => {return (genre.name) }).join(', ') : 0}
    <br></br>
    <br></br>


    Plots:  {story.content ? story.plots.map((plot) => {
            let plotTitle = plot.title
            return (plotTitle
              .replace("Halloween", "🔪")
              .replace("Alien", "👽")
              .replace("The Matrix", "⏰")
              .replace("Star Wars", "🚀")
              .replace("E.T.", "📞")
              .replace("Terminator", "🤖")
              .replace("Die Hard", "🔫")
              .replace("Thelma and Louise", "🚘")
              .replace("Home Alone", "😂")
              .replace("Beauty and the Beast", "🦊")
              .replace("La Strada", "💔")
              .replace("The Piano", "💙")
          )
        }).join('   ') : 0}

    <br></br>
    <br></br>

    <Link to={`/stories/${story.id}/edit`}>
      <Button color='green' compact>Edit Story
      </Button>
    </Link>

      <Button color='red' compact floated='right'
        onClick={() => {props.handleDeleteStory(story.id)}}>Delete</Button>
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
                  image={props.image} //for now, then will change this... just want to see if i can show the image of a pizza...
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
                <div className="SideBar-header">
                  <h2>Recent Stories</h2>
                </div>
                <ul>{ SideBar.reverse().slice(0, size) }</ul>
                {/* //limiting sidebar to just three stories (size = 3), and adding link to all stories */}

              <div className="SideBar-button">
                <Link to={'/stories'}>
                <Button color='blue' compact>All Stories</Button>
              </Link>
              </div>

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
    stories: [{title: 'title', 'content': 'words words ----- word words words',
    // image: 'imagggggeeee',
    genres: 'story genres here', plots: 'story plots here'}]
  }


  export default StoryPage
