import React from 'react'

import { Image, Grid, Button } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


// const ImageExampleImage = () => (
//   <Image src='/assets/images/wireframe/image.png' size='small' />
// )


const StoryShow = (props) => {
  console.log('StoryShow props: ', props);

  return(
    <div>

          <div className="StoryShow-purple">

              <Grid centered columns={2}>
                  <Grid.Column>
                    <Image src='http://i1.kym-cdn.com/photos/images/facebook/000/061/294/1106514-cool_story_bro_super.jpg' size='small' />
                  </Grid.Column>
              </Grid>

            <h2>
              Title: {props.story.title ? props.story.title : 0 }
            </h2>

              Edit this story:
              <Link className='btn btn-primary'
                to={`/stories/${props.story.id}/edit`}
              > {props.story.title}</Link>
              <br></br>
              <br></br>

              Story ID: {props.story.id}
              <br></br>
              <br></br>


              Word count: {props.story.content ? props.story.content.split(' ').length : 0}
              <br></br>
              <br></br>
              Genres: {props.story.content ? props.story.genres.map((genre) => {return (genre.name) }).join(', ') : 0}
              <br></br>
              <br></br>

              <strong>
                Story content:
              </strong>

              <br></br>
              <br></br>

              {props.story.content}


              <br></br>
              <br></br>
              Story ID: {props.story.id}
              <br></br>

              <Link to={`/stories/${props.story.id}/edit`}>
                <Button color='green' compact>Edit Story
                </Button>
              </Link>

              <Button color='red' floated='right' compact
                onClick={() => {props.handleDeleteStory(props.story.id)}}>Delete</Button>
              <br></br>
              <br></br>

          </div>
    </div>
  )
}

StoryShow.defaultProps = {
  content: 'story content here', //need this so props aren't null
  title: 'story title here',
  story: {title: 'title', 'content': 'words words ----- word words words'},
  stories: [{title: 'title', 'content': 'words words ----- word words words'}]
}

export default StoryShow
