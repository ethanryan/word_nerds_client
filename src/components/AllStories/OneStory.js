import React from 'react'

import { Link } from 'react-router-dom'

import StoryShow from '../StoryShow/StoryShow'
import EditStoryForm from '../EditStoryForm/EditStoryForm'

import replacePlotTitleWithEmoji from '../../helpers/replacePlotTitleWithEmoji'
import getDateTime from '../../helpers/getDateTime'

import { Card, Button, Modal } from 'semantic-ui-react'

const OneStory = (props) => {

  // console.log(`OneStory props: `, props);
  //debugger
  const storyForModal = props.userStories.find(story => story.id === props.activeModalStoryId)
  // console.log('OneStory---->>>>>> storyForModal is:::::', storyForModal)

  const eachStory = props.userStories.map( (story, index) =>

  <div
    key={story.id ? story.id : "story.id here"}
    className="OneStory-orange"
    >

      <Card fluid>

        <Card.Content>
          <Card.Header>
            Story Title:&nbsp;
            <Link
              to={`/stories/${story.id}`}
              onClick={props.scrollToTop}>
              {story.title}
            </Link>

          </Card.Header>
          <Card.Meta>
            Creator: {story.user ? story.user.name : "story.user.name here, from OneStory"}
          </Card.Meta>
        </Card.Content>

        <Card.Content>
          <Card.Meta>
            <div className="floatRight">
              <p>
                Story ID:
                &nbsp;{story.id ? story.id : 0}
              </p>
              <p>
                Word Count:&nbsp;
                {story.content ? story.content.split(' ').length : 0}
              </p>
            </div>

            <div className="floatLeft">
              <p>
                Created:&nbsp;
                {story.created_at ? getDateTime(story.created_at) : "story.created_at here"}
              </p>
              <p>
                Updated:&nbsp;
                {story.updated_at ? getDateTime(story.updated_at) : "story.updated_at here"}
              </p>
            </div>
          </Card.Meta>

        </Card.Content>

        <Card.Content>
          Genres: {story.story_genre_names ? story.story_genre_names : 0}
        </Card.Content>

        <Card.Content>
          Plots:
          {
            story.story_plot_titles ? story.story_plot_titles.split(", ").map((plotTitle) => {
              return (
                replacePlotTitleWithEmoji(plotTitle)
              )
            }).join('   ') : 0
          }
        </Card.Content>

        <Card.Content extra>

          <div className='ui two buttons'>
            {/* switch below... either show StoryShow, or show EditStoryForm */}
            {/* {props.storyShowModalIsEditable ? <p>this is the modal edit form!!!! </p> : <p>this is the StoryShow-purple-modal</p>} */}

            <Modal
              open={props.indexOfStoryModal === index} //open takes boolean, if no match, modal won't open
              onClose={() => props.closeModal()}
              id={props.activeModalStoryId} //passing id here...
              trigger={
                <Button
                  basic color='green'
                  //sending clicked story as argument here...
                  onClick={(event) => props.openModal(event, index, story.id)}>
                  View
                </Button>
              }>

              {
                props.storyShowModalIsEditable ?
                <p className="center">
                  Edit Mode
                </p>
                :
                <p className="center">
                  Read Only Mode
                </p>
              }

              {
                props.storyShowModalIsEditable ?
                <div className="EditStoryForm-blue-modal">
                  <EditStoryForm
                    story={storyForModal}
                    closeModal={props.closeModal}
                    editStoryFormIsModal={props.storyShowIsModal} //boolean to show or not show Cancel / close modal button
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

            <Button
              basic color='red'
              onClick={() => {props.handleDeleteStory(story.id)}}>
              Delete
            </Button>

          </div>
        </Card.Content>
      </Card>
    </div>
  )

  return(
    <div>
      <ul className="UL-no-padding center">
        { eachStory.reverse() }
      </ul>
    </div>
  )
}

export default OneStory
