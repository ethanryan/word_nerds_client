import React from 'react'

import StoryShow from '../StoryShow/StoryShow'
import EditStoryForm from '../EditStoryForm/EditStoryForm'

import OneStorySummary from './OneStorySummary'

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

        <OneStorySummary
          story={story}
        />

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
