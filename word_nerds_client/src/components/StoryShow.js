import React from 'react'

import { Image, Grid } from 'semantic-ui-react'

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

            <h1>PICTURE HERE FOR THIS STORY!!</h1>

            <h2>
              Story Title: {props.story.title ? props.story.title : 0 }
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

              <strong>
                Story content:
              </strong> (splitting and adding line breaks)

              <br></br>
              <br></br>

              {/* {paragraph.text} */}
              {/* {story.paragraphs.map((paragraph, key) => {
                return (
                  <span key={key}>
                    {replaceAll(paragraph.text, "HERO", story.characters[0] ? story.characters[0].name : 'Hero')}
                    <br></br>
                    <br></br>
                  </span>
                )
              })} */}

              {/* now doing above, below is the old way: */}
              {/* old way is better way???: */}




              {props.story.content.split('-----').map((paragraph) => {
                return (
                <span key={paragraph.id}>
                  {paragraph}
                  <br/><br/>
                </span>
              )
              })}

              Story ID: {props.story.id}
              <br></br>


              <div>
                <button
                  href="#delete"
                  onClick={() => {props.handleDeleteStory(props.story.id)}}>
                  Delete
                </button>
              </div>

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
