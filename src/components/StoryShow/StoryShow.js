import React from 'react'

import StoryShowSummary from '../StoryShow/StoryShowSummary'

import { Header, Divider, Button, Loader, Segment } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import replacePlotTitleWithEmoji from '../../helpers/replacePlotTitleWithEmoji'

const StoryShow = (props) => {
  console.log('StoryShow props: ', props);

  let wordCount = (props.story.content ? props.story.content.split(' ').length : 0)

  let genres = (props.story.story_genre_names ? props.story.story_genre_names : 0)

  let conditionIfStoryShowIsModal = (
    // (props.story.user.name !== props.user.name) ?
    // (props.story.user_id !== props.user.id) ? //using user_id instead of of user...
    (props.story.user_name !== props.user.name) ?
    <p style={{color: 'red'}}>
      Story can only be edited by its creator.
    </p>
    :
    <p>
      Click below to edit.
    </p>
  )

  let conditionIfStoryShowIsNotModal = (
    // (props.story.user.name !== props.user.name) ?
    // (props.story.user_id !== props.user.id) ? //using user_id instead of of user...
    (props.story.user_name !== props.user.name) ? 
    <p style={{color: "red"}}>
      Story can only be edited by its creator.
    </p>
    :
    <p>
      Edit this story:&nbsp;
      <Link className='btn btn-primary'
        to={`/stories/${props.story.id}/edit`}>
        {props.story.title}
      </Link>
    </p>
  )

  let plots = (props.story.story_plot_titles ? props.story.story_plot_titles.split(", ").map((plotTitle) => {
    return (
      replacePlotTitleWithEmoji(plotTitle)
    )
  }).join('   ') : 0)

  return(
    <div>
      {
        (props.story.id) ?
        <div>

          <Header as='h1'>
            <span>{props.story.title}</span>
          </Header>

          {/* {props.storyShowIsModal ? "storyShowIsModal is TRUE!!!!" : "storyShowIsModal is False...."} */}

          {
            props.storyShowIsModal ?
            conditionIfStoryShowIsModal
            :
            conditionIfStoryShowIsNotModal
          }

          <StoryShowSummary
            story_id={props.story.id}
            // storyCreator={props.story.user.name}
            storyCreator={props.story.user_name}
            wordCount={wordCount}
            genres={genres}
            plots={plots}
          />

          <Divider section />

          <p>
            <strong>
              Story content:
            </strong>
          </p>

          <p>
            {
              props.story.content ?
              props.story.content.split('-----').join('\n\n') :
              "story content will go here"
            }
          </p>

          {
            // (props.story.user.name !== props.user.name) ?
            (props.story.user_name !== props.user.name) ?
            <Button color='green' compact disabled>
              Story can only be edited by its creator.
            </Button>
            :
            (props.storyShowIsModal) ?
            <Button
              basic color='green'
              onClick={() => { props.toggleStoryShowModalToEditable() }}>
              Edit Story
            </Button>
            :
            <Link
              to={`/stories/${props.story.id}/edit`}>
              <Button color='green' compact>
                Edit Story
              </Button>
            </Link>
          }

          {
            (props.storyShowIsModal) ?
            <Button
              basic
              floated='right'
              onClick={() => props.closeModal()}>
              Close
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

//NOTE: need defaultProps for StoryShow!
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
