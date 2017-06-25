import React from 'react'

import { Image, Grid, Button } from 'semantic-ui-react'

import { Link } from 'react-router-dom'



const StoryShow = (props) => {
  console.log('StoryShow props: ', props);


  // function ImageFromGoogleAPI() {
  //   let cx = `018050256633849340962:zvrqetqkh78`
  //   let query = props.story.title
  //   let googleAPIkey = 'AIzaSyDPtQPW0z01peIpOp7tpzIRHtbSG3M11m4'
  //
  //   fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&searchType=image&key=${googleAPIkey}`, {
  //     method: 'GET',
  //   })
  //   .then (response => response.json() )
  //   // console.log('response from google api:', this.response )
  //
  //   .then (image => this.setState({
  //     image: image.items[0].link
  //   }) )
  // }


    let CoolStoryBro = 'http://i1.kym-cdn.com/photos/images/facebook/000/061/294/1106514-cool_story_bro_super.jpg'

  // let GoogleImage = (<gcse:search></gcse:search>)
  // let GoogleImageHere = (<gcseSearch>pic here</gcseSearch>)
  // let GoogleImageHere = (<gcseSearch>{this.props.image}</gcseSearch>)

  return(
    <div>

          <div className="StoryShow-purple">

            <div>
{/* {GoogleImageSearchResults} */}
            </div>

            <div>
{/* {GoogleImageHere} */}
            </div>

              <Grid centered columns={2}>
                  <Grid.Column>
                    <Image src={props.image ? props.image : CoolStoryBro} size='medium' />
                    {/* <Image src={ImageFromGoogleAPI} size='medium' /> */}
                    <Image src='http://i1.kym-cdn.com/photos/images/facebook/000/061/294/1106514-cool_story_bro_super.jpg'
                      size='small' />
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


              Plots:  {props.story.content ? props.story.plots.map((plot) => {
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

              {/* {props.story.content} */}
              {props.story.content ? props.story.content.split('-----').join('\n\n') : "story content will go here"}
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
  // image: 'story image here',
  story: {title: 'title', 'content': 'words words ----- word words words',
  // image: 'image here',
  genres: ['genres here'], plots: [{title: "Halloween"}]},
}

export default StoryShow
