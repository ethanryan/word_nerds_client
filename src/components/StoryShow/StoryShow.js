import React from 'react'

// import { Image, Grid, Button } from 'semantic-ui-react'
// import { Grid, Button, Modal } from 'semantic-ui-react'
import { Grid, Button, Loader, Segment } from 'semantic-ui-react'

import { Link } from 'react-router-dom'



const StoryShow = (props) => {
  console.log('StoryShow props ---->>>>>: ', props);
  // console.log('StoryShow console.table(props.user)--->>>>')
  // console.table(props.user)
  console.log('StoryShow props.story.id: ', props.story.id);
  // console.log('StoryShow props.story.user: ', props.story.user);
  // console.log('--=-=-=-=-=-=-= props.storyForModal::::', props.storyForModal)

  // let CoolStoryBro = 'http://i1.kym-cdn.com/photos/images/facebook/000/061/294/1106514-cool_story_bro_super.jpg'

  // let GoogleImage = (<gcse:search></gcse:search>)
  // let GoogleImageHere = (<gcseSearch>pic here</gcseSearch>)
  // let GoogleImageHere = (<gcseSearch>{this.props.image}</gcseSearch>)

  return(
    <div>
      {
        (props.story.id) ?
        <div>
          <div>
            {/* {GoogleImageSearchResults} */}
          </div>

          <div>
            {/* {GoogleImageHere} */}
          </div>

          <Grid centered columns={2}>
            <Grid.Column>
              {/* <Image src={props.image ? props.image : CoolStoryBro} size='medium' /> */}
              {/* <Image src={ImageFromGoogleAPI} size='medium' /> */}

            </Grid.Column>
          </Grid>

          <h2>
            Title: { props.story.title ? props.story.title : 0 }
          </h2>

          Edit this story:
          <Link className='btn btn-primary'
            to={`/stories/${props.story.id}/edit`}
            > {props.story.title}</Link>
            <br></br>
            <br></br>

            Story ID: { props.story.id ? props.story.id : "story ID here" }
            <br></br>
            <br></br>

            Story Creator: { props.story.user ? props.story.user.name : "name here" }
            <br></br>
            <br></br>


            Word count: {props.story.content ? props.story.content.split(' ').length : 0}
            <br></br>
            <br></br>


            Genres: {props.story.story_genre_names ? props.story.story_genre_names : 0}
            <br></br>
            <br></br>


            Plots: {props.story.story_plot_titles ? props.story.story_plot_titles.split(", ").map((plotTitle) => {
              return (
                props.replacePlotTitleWithEmoji(plotTitle)
              )
            }).join('   ') : 0}
            <br></br>
            <br></br>

            <strong>
              Story content:
            </strong>

            <br></br>
            <br></br>


            {props.story.content ? props.story.content.split('-----').join('\n\n') : "story content will go here"}
            <br></br>
            <br></br>

            {/* Story ID: {props.story.id} */}
            <br></br>

            {
              (props.story.user.name !== props.user.name) ?
              <Button color='green' compact disabled
                >Story can only be edited by its creator.
              </Button>
              :
              (props.storyShowIsModal) ?
              <Button basic color='green'
                onClick={() => { props.toggleStoryShowModalToEditable() }}
                >Edit Story</Button>
                :
                <Link to={`/stories/${props.story.id}/edit`}>
                <Button color='green' compact
                  >Edit Story
                </Button>
              </Link>
            }

            {
              (props.storyShowIsModal) ?
              <Button
                basic
                floated='right'
                onClick={() => props.closeModal()}
                >Close
              </Button>
              :
              null
            }
          </div>
          :
          <Segment>
            <Loader active inline='centered' />
          </Segment>
        }
      </div>
    )
  }

  StoryShow.defaultProps = {
    content: 'story content here', //need this so props aren't null
    title: 'story title here',
    // image: 'story image here',
    story: {
      title: 'title',
      'content': 'words words ----- word words words',
      genres: ['genres here'],
      plots: [{title: "Halloween"}],
      user: {name: 'username'},
    },
  }

  export default StoryShow
