import React from 'react'

// import { Image, Grid, Button } from 'semantic-ui-react'
// import { Grid, Button, Modal } from 'semantic-ui-react'
import { Grid, Button } from 'semantic-ui-react'

import { Link } from 'react-router-dom'



const StoryShowModal = (props) => {
  console.log('StoryShowModal props: ', props);
  console.log('StoryShowModal props.storyForModal.id: ', props.storyForModal.id);
  console.log('StoryShowModal props.storyForModal.user: ', props.storyForModal.user);

  console.log('******** >>>>>>> StoryShowModal props... props.storyForModalIdIsOpen:::: ', props.storyForModalIdIsOpen)

  console.log('--=-=-=-=-=-=-= props.storyForModal::::', props.storyForModal)
  // below console logs break page on refresh
  // console.log('StoryShowModal props.story.user.name: ', props.story.user.name);

  // let CoolStoryBro = 'http://i1.kym-cdn.com/photos/images/facebook/000/061/294/1106514-cool_story_bro_super.jpg'

  // let GoogleImage = (<gcse:search></gcse:search>)
  // let GoogleImageHere = (<gcseSearch>pic here</gcseSearch>)
  // let GoogleImageHere = (<gcseSearch>{this.props.image}</gcseSearch>)

  return(
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
        *** >>>> props.storyIdIsOpen: { props.storyIdIsOpen ? props.storyIdIsOpen : 0 }
      </h2>
      
      <p>
        *** >>>> props.storyIdIsOpen: { props.storyForModal ? props.storyForModal.title : "props.storyForModal[0].title here" }
      </p>

      <h2>
        Title: { props.storyForModal.title ? props.storyForModal.title : 0 }
      </h2>

      Edit this story:
      <Link className='btn btn-primary'
        to={`/stories/${props.storyForModal.id}/edit`}
        > {props.storyForModal.title}</Link>
        <br></br>
        <br></br>

        Story ID: { props.storyForModal.id ? props.storyForModal.id : "story ID here" }
        <br></br>
        <br></br>

        Story Creator: { props.storyForModal.user ? props.storyForModal.user.name : "name here" }
        <br></br>
        <br></br>


        Word count: {props.storyForModal.content ? props.storyForModal.content.split(' ').length : 0}
        <br></br>
        <br></br>


        Genres: {props.storyForModal.content ? props.storyForModal.genres.map((genre) => {return (genre.name) }).join(', ') : 0}
        <br></br>
        <br></br>


        Plots:  {props.storyForModal.content ? props.storyForModal.plots.map((plot) => {
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

        <strong>
          Story content:
        </strong>

        <br></br>
        <br></br>

        {/* {props.storyForModal.content} */}
        {props.storyForModal.content ? props.storyForModal.content.split('-----').join('\n\n') : "story content will go here"}
        <br></br>
        <br></br>

        {/* Story ID: {props.storyForModal.id} */}
        <br></br>

        <Button basic color='green'
          onClick={() => { props.toggleStoryShowModalToEditable() }}
          >Edit Story</Button>

          {/* {props.storyShowIsModal ? <p>this is a modal!!!</p> : <p>this ain't no modal yo</p>} */}

          {/* {props.storyShowIsModal ?
            <Button basic color='green'
            onClick={() => { props.toggleStoryShowModalToEditable() }}
            >Edit Story</Button>
            :
            <Link to={`/stories/${props.storyForModal.id}/edit`}>
            <Button color='green' compact
            >Edit Story
          </Button>
        </Link>
      } */}

    </div>
  )
}

StoryShowModal.defaultProps = {
  content: 'story content here', //need this so props aren't null
  title: 'story title here',
  // image: 'story image here',
  story: {title: 'title', 'content': 'words words ----- word words words',
  genres: ['genres here'], plots: [{title: "Halloween"}]},
}

export default StoryShowModal
