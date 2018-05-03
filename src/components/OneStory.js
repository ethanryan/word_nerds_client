import React from 'react'

import { Link } from 'react-router-dom'

import StoryShow from './StoryShow/StoryShow'
import EditStoryForm from './EditStoryForm/EditStoryForm'


import { Card, Button, Modal } from 'semantic-ui-react'


const OneStory = (props) => {

  // console.log(`OneStory props: `, props);

  //debugger
  const storyForModal = props.userStories.find(story => story.id === props.activeModalStoryId)
  // console.log('OneStory---->>>>>> storyForModal is:::::', storyForModal)


  const eachStory = props.userStories.map( (story, index) =>

  <div key={story.id ? story.id : "story.id here"} className="OneStory-orange">
    {/* <Modal trigger={<Button>Show Modal</Button>}> */}

    {/* <Modal.Header>This is a modal motherfucker</Modal.Header> */}
    <Card fluid>

      <Card.Content>
        <Card.Header>
          Story Title:
          {/* <Link to={`/stories/${story.id}/edit`}> {story.title}</Link> */}
          <Link to={`/stories/${story.id}`}> {story.title}</Link>

        </Card.Header>
        <Card.Meta>
          Creator: {story.user ? story.user.name : "story.user.name here, from OneStory"}
        </Card.Meta>
      </Card.Content>

      <Card.Content>
        <Card.Meta>
          <div className="floatRight">
            Story ID: {story.id ? story.id : 0}
            <br></br>
            Word Count: {story.content ? story.content.split(' ').length : 0}
          </div>

          <div className="floatLeft">
            Created: {story.created_at ? new Date(story.created_at).toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZoneName: 'short'
            }) : "story.created_at here, from OneStory"}

            <br></br>

            Updated: {story.updated_at ? new Date(story.updated_at).toLocaleString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZoneName: 'short'
            }) : "story.updated_at here, from OneStory"}
          </div>
        </Card.Meta>

      </Card.Content>

      <Card.Content>
        Genres: {story.content ? story.genres.map((genre) => {return (genre.name) }).join(', ') : 0}
      </Card.Content>

      <Card.Content>
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
      </Card.Content>

      <Card.Content extra>

        {/* <Button basic color='green' as={Link}
          to={`/stories/${story.id}`}>View {story.title}
        </Button>

        <br></br>
        <br></br> */}

        <div className='ui two buttons'>
          {/* <Button basic color='green' as={Link} to={`/stories/${story.id}/edit`} */}

          {/* switch below... either show StoryShow, or show EditStoryForm */}
          {/* {props.storyShowModalIsEditable ? <p>this is the modal edit form!!!! </p> : <p>this is the StoryShow-purple-modal</p>} */}

          <Modal
            open={props.indexOfStoryModal === index} //open takes boolean, if no match, modal won't open
            onClose={() => props.closeModal()}
            id={props.activeModalStoryId} //passing id here...

            trigger={
            <Button basic color='green'
              onClick={(event) => props.openModal(event, index, story.id)} //sending clicked story as argument here...
              // as={Link} to={`/stories/${story.id}`}
              >View</Button>
            }>

            {props.storyShowModalIsEditable ? <p className="center">Edit Mode</p> : <p className="center">Read Only Mode</p>}

            {props.storyShowModalIsEditable ?
              <div className="EditStoryForm-blue-modal">
                <EditStoryForm
                  story={storyForModal}
                  handleUpdateStory={props.handleUpdateStory}
                  handleDeleteStory={props.handleDeleteStory}
                />
              </div>
              :
              <div className="StoryShow-purple-modal">
                <StoryShow
                  closeModal={props.closeModal}
                  user={props.user}
                  story={storyForModal} //storyForModal, not story, which is each story in filteredStories
                  handleUpdateStory={props.handleUpdateStory}
                  handleDeleteStory={props.handleDeleteStory}
                  storyShowIsModal={props.storyShowIsModal}
                  storyShowModalIsEditable={props.storyShowModalIsEditable}
                  toggleStoryShowModalToEditable={props.toggleStoryShowModalToEditable}
                />
              </div>
            }
          </Modal>

          <Button basic color='red' onClick={() => {props.handleDeleteStory(story.id)}}
            >Delete</Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  )

  // console.log('hello from OneStory')
  // console.log('filteredStories.length is', filteredStories.length)
  return(
    <div>

      <ul className="UL-no-padding center">{ eachStory.reverse() }</ul>

      {/* <p className="center">each story can be clicked, which renders it in the EditStoryForm</p> */}

    </div>
  )

}

export default OneStory
