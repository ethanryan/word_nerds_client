import React from 'react'

import CreateStoryFormModal from './CreateStoryFormModal'
import CreateMiniStoryFormModal from './CreateMiniStoryFormModal'

import { Card, Segment } from 'semantic-ui-react'


const CreateStoryForm = (props) => {

  return(
    <div className="center modal-trigger-wrapper">

      <div className="modal-trigger">
        <Card fluid>
          <Card.Content>
            <CreateMiniStoryFormModal
              handleSubmit={props.handleSubmit}
              user_id={props.user_id}
              genreSelection={props.genreSelection}
              plots={props.plots}
              handleGenreChange={props.handleGenreChange}
              //below will be passed down to CreateStoryFormCreateCharacters:
              //refactor below!!! don't need all these functions, just one or two...
              characterProps={props.characterProps}
              handleHeroNameChange={props.handleHeroNameChange}
              handleShadowNameChange={props.handleShadowNameChange}
              handleFriendNameChange={props.handleFriendNameChange}
              handleLoverNameChange={props.handleLoverNameChange}
              handleMentorNameChange={props.handleMentorNameChange}
              handleTricksterNameChange={props.handleTricksterNameChange}
              //refactor below!!! don't need all these functions, just one or two...
              handleHeroGenderChange={props.handleHeroGenderChange}
              handleShadowGenderChange={props.handleShadowGenderChange}
              handleFriendGenderChange={props.handleFriendGenderChange}
              handleLoverGenderChange={props.handleLoverGenderChange}
              handleMentorGenderChange={props.handleMentorGenderChange}
              handleTricksterGenderChange={props.handleTricksterGenderChange}
            />
            {/* above will render trigger to button and modal inside trigger... */}

            <Segment>Create a 5 sentence mini story.</Segment>
          </Card.Content>
        </Card>
      </div>

      <div className="modal-trigger">
        <Card fluid>
          <Card.Content>
            <CreateStoryFormModal
              handleSubmit={props.handleSubmit}
              user_id={props.user_id}
              genreSelection={props.genreSelection}
              plots={props.plots}
              handleGenreChange={props.handleGenreChange}
              //below will be passed down to CreateStoryFormCreateCharacters:
              //refactor below!!! don't need all these functions, just one or two...
              characterProps={props.characterProps}
              handleHeroNameChange={props.handleHeroNameChange}
              handleShadowNameChange={props.handleShadowNameChange}
              handleFriendNameChange={props.handleFriendNameChange}
              handleLoverNameChange={props.handleLoverNameChange}
              handleMentorNameChange={props.handleMentorNameChange}
              handleTricksterNameChange={props.handleTricksterNameChange}
              //refactor below!!! don't need all these functions, just one or two...
              handleHeroGenderChange={props.handleHeroGenderChange}
              handleShadowGenderChange={props.handleShadowGenderChange}
              handleFriendGenderChange={props.handleFriendGenderChange}
              handleLoverGenderChange={props.handleLoverGenderChange}
              handleMentorGenderChange={props.handleMentorGenderChange}
              handleTricksterGenderChange={props.handleTricksterGenderChange}
            />
            {/* above will render trigger to button and modal inside trigger... */}

            <Segment>Create a 500-word short story.</Segment>
          </Card.Content>
        </Card>
      </div>
    </div>
  )
}

export default CreateStoryForm
